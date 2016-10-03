+++
title       = "Anti-DDoS Script mit PHP und MySQL"
description = "DDoS-Attacken sind eine Plage, doch mit diesem einfachen Anti-DDoS Script für Ihre Website haben Sie einen kleinen Schutz gegen solche Attacken."
date        = "2012-06-05T22:00:00"
lastmod     = "2016-10-03T14:06:00"
tag         = ["PHP", "Sicherheit", "Webmaster"]
+++

Sie sind die Plagen aller Websitebetreiber und nerven auch die "normalen" User: DDoS-Attacken, die die entsprechende(n) Webseiten lahmlegen und für eine Zeit lang nicht mehr erreichbar machen. Deshalb nachfolgend nun ein einfaches Anti-DDoS Script für Ihre Website.

<!--more-->

**Hinweis**: Dieser Artikel ist bereits recht alt - ebenso das hier vorgestellte PHP-Skript. Es nutzt z. B. das veraltete `mysql_*` und erzeugt eine recht große Last auf dem Server durch die Nutzung von PHP & MySQL (im Gegensatz zu einer OS-nahen Lösung wie fail2ban).  
Daher kann ich die Verwendung dieses Skripts nicht mehr empfehlen.

## Funktionsweise
Zuerst einmal: *Ganz* befreit werden Sie natürlich nicht durch dieses Script von DDoS-Attacken, aber eindämmen können Sie diese allemal.

Die Funktionsweise des Scripts ist eigentlich sehr einfach:
Zu Beginn wird die **Blacklist-Tabelle** abgefragt, ob die Besucher-IP dort vorkommt. Ist dies der Fall, wird der Besucher, bzw. der Angreifer auf Google umgeleitet.

Wenn die IP-Adresse nicht vorkommt, wird geprüft, ob sie denn in der **temporären Tabelle vorkommt**: Falls nicht, wird dort ein Eintrag der IP inkl. Uhrzeit und einem Faktor von 1 gespeichert. Wenn doch, wird der Abstand zwischen diesem und letztem Besuch überprüft: Ist dieser zu gering, wird der Faktor um 1 erhöht und die aktuelle Zeit gespeichert.

Sobald der Faktor bei 20 angekommen ist (was bei "normalen" Besuchern fast nie vorkommt), wird die IP auf die Blacklist gesetzt und somit beim nächsten Aufruf der Website umgeleitet.

## Einrichten
Die Installation des Scripts ist sehr einfach, und sie benötigt nur drei kleine Schritte:

### Datenbank anlegen
Das PHP-Script benötigt eine MySQL-Datenbank mit zwei Tabellen. Diese werden durch folgende SQL-Befehle erzeugt:
```sql
CREATE TABLE `ddos_blacklist` (`ip` VARCHAR (15) NOT NULL);
CREATE TABLE `ddos_temp` (`ip` VARCHAR (15) NOT NULL, `zeit` INT NOT NULL, `faktor` INT NOT NULL);
```

Alternativ können Sie aber auch Folgendes in ein PHP-Skript kopieren, Ihre Daten eintragen, die Datei im Webbrowser aufrufen und danch die Datei wieder **vom Server löschen**(!):
```php
<?php
//DB-Verbindung
$mysqlhost = "DB-Adresse";
$mysqluser = "DB-User";
$mysqlpwd = "DB-Passwort";
$mysqldb = "DB-Name";

$connection=mysql_connect($mysqlhost, $mysqluser, $mysqlpwd) or die ("Verbindung fehlgeschlagen!");
mysql_select_db($mysqldb, $connection);

//Einmalig DB anlegen
mysql_query("CREATE TABLE `ddos_blacklist` (`ip` varchar (15) NOT NULL)");
mysql_query("CREATE TABLE `ddos_temp` (`ip` varchar (15) NOT NULL, `zeit` int NOT NULL, `faktor` int NOT NULL)");
?>
```

### Script einrichten
Nun müssen Sie noch das gesamte Script nach Ihren Wünschen anpassen und an einem beliebigen Platz auf Ihrem Webserver speichern:
```php
<?php
/****
	 * Anti-DDoS Script
	 * Version 1.1.1
	 * (c) 2012-2013: Marvin Menzerath
	 *
****/

//Einstellungen//
//DB-Verbindung
$mysqlhost = "DB-Adresse";
$mysqluser = "DB-User";
$mysqlpwd = "DB-Passwort";
$mysqldb = "DB-Name";

//Einmalig DB anlegen
//mysql_query("CREATE TABLE `ddos_blacklist` (`ip` varchar (15) NOT NULL)");
//mysql_query("CREATE TABLE `ddos_temp` (`ip` varchar (15) NOT NULL, `zeit` int NOT NULL, `faktor` int NOT NULL)");

$MaxDiff = 2; //Zeit zwischen zwei Anfragen, bis Faktor um 1 erhöht wird
$MaxFaktor = 20; //Max. Faktor-Wert
///Ende der Einstellungen///

$UserIP = $_SERVER['REMOTE_ADDR']; //UserIP in Variable speichern
$PHPtime = time(); //Zeit in Variable speichern

//Verbindung zur Datenbank:
$connection=mysql_connect($mysqlhost, $mysqluser, $mysqlpwd);
mysql_select_db($mysqldb, $connection);

//IP in BlackList-DB suchen
$blRequest = "SELECT COUNT(ip) FROM `ddos_blacklist` WHERE `ip` = '$UserIP'";
$blRequestResult = mysql_query($blRequest);
$blResult = mysql_fetch_row($blRequestResult);
$blacklisted = $blResult[0];

//Wenn dort vorhanden: Umleitung
if ($blacklisted != 0) {
	header('Location: http://google.com/');
	exit;
}

//IP in Temp-DB suchen
$tdbRequest = "SELECT COUNT(ip) FROM `ddos_temp` WHERE `ip` = '$UserIP'";
$tdbRequestResult = mysql_query($tdbRequest);
$tdbResult = mysql_fetch_row($tdbRequestResult);
$templisted = $tdbResult[0];

//IP schon in TempDB vorhanden?
if ($templisted == 0) {
	mysql_query("INSERT INTO `ddos_temp` (`ip`, `zeit`, `faktor`) VALUES ('$UserIP', '$PHPtime', 1)"); //Noch nicht vorhanden, also Eintrag anlegen
}

//IP schon in TempDB vorhanden?
if ($AbfrageTDB == 0) {
	mysql_query("INSERT INTO `ddos_temp` (`ip`, `zeit`, `faktor`) VALUES ('$UserIP', '$PHPtime', 1)"); //Noch nicht vorhanden, also Eintrag anlegen
} else {
	//Zeit aus DB holen
	$dbTimeRequest = "SELECT `zeit` FROM `ddos_temp` WHERE `ip` = '$UserIP'";
	$dbTimeRequestResult = mysql_query($dbTimeRequest);
	$dbTimeResult = mysql_fetch_row($dbTimeRequestResult);
	$DBTime = $dbTimeResult[0];

	$PHPtime = time(); //Aktuelle PHP-Zeit speichern

	$Differenz = $PHPtime-$DBZeit; //Differenz zwischen DBTime und PHPtime bestimmen

	//Wenn Differenz größer als $MaxDiff (s.o.)
	if($Differenz < $MaxDiff) {
		//Faktor aus DB auslesen
		$dbFaktorRequest = "SELECT `faktor` FROM `ddos_temp` WHERE `ip` = '$UserIP'";
		$dbFaktorRequestResult = mysql_query($dbFaktorRequest);
		$dbFaktorResult = mysql_fetch_row($dbFaktorRequestResult);
		$dbFaktor = $dbFaktorResult[0];

		//Faktor lokal um 1 erhöhen
		$NewFaktor = $dbFaktor + 1;

		//Lokalen Faktor in DB schreiben
		mysql_query("UPDATE `ddos_temp` SET `faktor` = '$NewFaktor' WHERE `ip` = '$UserIP'");
	}

	$PHPtime = time(); //Aktuelle PHP-Zeit speichern
	mysql_query("UPDATE `ddos_temp` SET `zeit` = '$PHPtime' WHERE `ip` = '$UserIP'"); //Aktuelle Zeit in DB speichern

	//Faktor überprüfen, ob $MaxFaktor
	if ($NeuerFaktor == $MaxFaktor) {
		mysql_query("INSERT INTO `ddos_blacklist` (`ip`) VALUES ('$UserIP')"); //IP auf BlackList setzten
		mysql_query("DELETE FROM `ddos_temp` WHERE `ip`= '$UserIP'"); //Diesen Eintrag aus TempDB löschen
	}
}
?>
```

## Script einbinden
In Ihrer Website müssen Sie nun das Script einbinden, indem Sie folgenden Code an den Anfang jeder Datei oder einer globalen Header-Datei kopieren:
```php
include('/pfad/zum/script/anti_ddos.php');
```
