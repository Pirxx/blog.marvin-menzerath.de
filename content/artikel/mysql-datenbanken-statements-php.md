+++
title       = "MySQL: Datenbanken, SQL-Statements und PHP"
description = "In diesem Artikel erfahren Sie, was Datenbanken sind, wie Sie mit einer Datenbank arbeiten können und was Sie für die Arbeit mit PHP wissen sollten."
date        = "2013-02-10T19:00:00"
tag         = ["Grundlagen", "Linux", "MySQL", "PHP", "Webmaster"]
+++

Mit MySQL Datenbanken lassen sich Daten strukturiert abspeichern und auch wieder abrufen. Daher basieren die meisten CMS auf Datenbanken und nutzen deren Vorteile.
In diesem Artikel erfahren Sie, was Datenbanken sind, wie sich selber mit einer Datenbank arbeiten können und was Sie im Zusammenhang mit PHP über die Sicherheit wissen sollten.

<!--more-->

## Was sind Datenbanken und wie sind sie aufgebaut?
Jeder MySQL-Server beherbergt **beliebig viele Datenbanken**, welche wiederum **beliebig viele Tabellen** mit **beliebig vielen Spalten** und **beliebig vielen Einträgen** beherbergen können. In dieser riesigen Struktur müssen einige Dinge beachtet werden:

Sie sollten für jedes Ihrer Projekte jeweils eine eigene Datenbank nutzen, um die Übersichtlichkeit zu bewahren. Sonst könnten Sie eine Datenbank mit 500 Tabellen haben, die Sie jedoch gesamt sichern müssten. Die Sicherungsdatei könnte so schnell einige MB oder sogar GB groß werden.

In einer Tabelle sollten Sie den Inhalt immer **auf das nötigste reduzieren**: Wenn Sie ein Gästebuch auf Ihrer Website in eine Tabelle schreiben lassen, reicht es Name, E-Mail Adresse und die Nachricht zu speichern. Es ist nicht nötig, den Browser, Referrer und weitere Daten speichern zu lassen, die Sie niemals nutzen werden (oder dürfen).

## Wieso sollte ich Datenbanken nutzen?
Kurz: Weil sie **schnell** und **einfach** sind.

Ich greife nocheinmal das Beispiel mit dem Gästebuch auf: In Ihrem alten Gästebuch haben sich jahrelang Spam-Bots vergnügt und Sie haben nun über 10.000 Einträge. Mit einem einfachen SQL-Statement (dazu komme ich später noch) können Sie nun einfach alle Einträge löschen lassen, die beispielsweise das Wort "buy" beinhalten. Sobald Sie dies mit wenigen Begriffen gemacht haben, ist der meiste Spam weg.
Würden Sie jedoch Ihre Daten in einer Text-Datei speichern, hätten Sie hier ein großes Problem.

Weiterhin sind die eben angesprochenen SQL (*Structured Query Language*) - Statements (Befehle) sehr einfach und lehnen sich sogar an die gesprochene Sprache an. Mit diesen können Sie sehr einfach Aktionen in Ihren Tabellen ausführen.

## Installation eines Datenbankservers
Sollten Sie die in diesem Artikel angesprochenen Aktionen ebenfalls ausführen wollen, empfehle ich Ihnen das Toolkit XAMPP. Dieses beinhaltet einen Apache2-Webserver, PHP sowie einen MySQL-Server und phpMyAdmin. XAMPP läuft unter allen Betriebssystemen und wurde [hier](/artikel/lokaler-webserver-xampp/) bereits von mir vorgestellt.
Wenn Sie MySQL auf Ihrem eigenen Server nutzen wollen, empfehle ich Ihnen [diesen Artikel](/artikel/webserver-apache-php-mysql-phpmyadmin/), in dem ich Ihnen die Installation eines vollwertigen Webservers zeige.

## SQL-Statements
Die wichtigsten SQL-Statements sind...

* `CREATE DATABASE 'meineDB';`  
Hier erstellen Sie eine neue Datenbank mit dem Namen "meineDB". Dieser Befehl kann nur von einem User mit den entsprechenden Rechten für den Datenbank-Server ausgeführt werden und ist bei den meisten Hostern unnötig.
* `CREATE TABLE 'meineTabelle' ([Spalten]);`  
Hier erstellen Sie in der aktuellen Datenbank eine neue Tabelle mit dem Namen "meineTabelle". In der Klammer werden die Spalten benannt, Ihr Datentyp festgelegt und weitere Einstellungen (wie der Standard-Wert) festgelegt. Beachten Sie dazu das Beispiel unten.
* `INSERT INTO 'meineTabelle' VALUES ([Daten]);`  
Hier werden in die Tabelle "meineTabelle" die ersten Werte eingefügt. Die jeweiligen Daten werden in Hochkommata und mit Kommata getrennt angegeben. Beachten Sie dazu ebenfalls das Beispiel unten.
* `SELECT * FROM 'meineTabelle';`  
Hier werden alle Daten der Tabelle "meine Tabelle" ausgegeben. Diese können dann via PHP oder anderen Tools ausgegeben werden.
* `UPDATE 'meineTabelle' SET [Spalte] = [Daten] WHERE [Spalte] = [Daten];`  
Hier werden bereits bestehende Einträge in der Tabelle geändert. Beachten Sie dazu unbedingt das untenstehende Beispiel.
* `SELECT * FROM 'meineTabelle' WHERE [Spalte] = [Daten];`  
Hier werden erneut alle Daten aus der Tabelle ausgegeben. Dieses mal aber nur die Zeilen, wo die Bedingung erfüllt ist.
* `DROP TABLE 'meineTabelle';`  
Hier wird die Tabelle "meineTabelle" gelöscht.
* `DROP DATABASE 'meineDatenbank';`  
Und hier wird schließlich die Datenbank "meineDatenbank" gelöscht.

```sql
CREATE DATABASE 'meineDB';
CREATE TABLE 'meineTabelle' ('spalte1' VARCHAR(50), 'spalte2' VARCHAR(100), 'spalte3' VARCHAR(50));
INSERT INTO 'meineTabelle' VALUES ('v1', 'v2', 'v3');
SELECT * FROM 'meineTabelle';
UPDATE 'meineTabelle' SET spalte1 = 'vv1' WHERE spalte1 = 'v1';
SELECT 'spalte1' FROM 'meineTabelle' WHERE spalte2 = 'v2';
DROP TABLE 'meineTabelle';
DROP DATABASE 'meineDatenbank';
```

Bei der Erstellung der Tabelle geben Sie hinter dem Spalten-Namen noch an, welchen Datentyp die Spalte beherbergen soll, und wie viele Zeichen maximal erlaubt sind.
Mit den `WHERE`-Bedingungen können Sie außerdem genau festlegen, unter welchen Bedingungen Aktionen ausgeführt werden sollen.

### Ergebnisse
Bei der ersten Abfrage via SELECT erhalten Sie folgende Daten:

spalte1 | spalte2 | spalte3
--------|---------|--------
v1      | v2      | v3

Bei der zweiten Abfrage (nach dem UPDATE-Statement) folgende:

spalte1 | spalte2 | spalte3
--------|---------|--------
vv1     | v2      | v3

Und bei der zweiten SELECT-Abfrage schließlich folgende:

spalte1 |   | 
--------|---|---
vv1     |   | 

Allein durch diese einfachen und wenigen Befehle können Sie problemlos Daten speichern und wieder abrufen. Doch wie genau können Sie jetzt diese Befehle an die Datenbank, bzw. den MySQL-Server schicken?

## Datenbanken nutzen
Hier haben Sie nun drei gängige Methoden zur Auswahl: Die Arbeit über die **Konsole**, mit **phpMyAdmin** und schließlich auch direkt mit **PHP**.

### Arbeit mit der Konsole
Um über die Konsole mit dem Server arbeiten zu können, müssen Sie sich zuerst an dem Rechner mit dem Server anmelden. Meist geschieht dies via SSH.

Dort stellen Sie nun über den `mysql-client` eine Verbindung zum Server her.
Geben Sie dafür einfach folgenden Befehl ein:
```bash
mysql -u root -p
```

Damit werden Sie als User "root" mit einer anschließenden Passwort-Abfrage angemeldet. Nun können Sie via
```
use meineDB;
```
eine Datenbank auswählen und mit dieser arbeiten. Dies geschieht durch die direkte Eingabe von SQL-Statements und ist daher eher für erfahrene (Linux-)Nutzer zu empfehlen.

### Arbeit mit phpMyAdmin
phpMyAdmin ist ein kleines Tool, das eine **Web-Oberfläche zur Verwaltung des Datenbank-Servers** bietet. Sie können hier direkt mit SQL-Statements arbeiten, oder Sie nutzen einfach die grafische Oberfläche und fügen so Ihre Daten ein, bzw. lesen diese aus.

### Arbeit mit PHP
Dies ist wohl die meistgewählte Variante zur Arbeit mit MySQL Datenbanken. Mit PHP können Sie einfach Daten in Tabellen einfügen und auch wieder auslesen.
Im folgenden Beispiel zeige ich Ihnen das mit einem Gästebuch und der entsprechenden Anzeigeseite. Dabei ist in der Datenbank `dbname` auf dem Server bereits eine Tabelle namens `guestbook` mit zwei Spalten (`name` und `nachricht`) angelegt.

**Hinweis**: Dieses Beispiel verwendet das veraltete `mysql_` und sollte daher angepasst werden.

```php
<?php
    // Aufbau der Verbindung zum Datenbank-Server
    mysql_connect("localhost", "dbserver", "123meinpasswort123");
    // Auswahl der Datenbank
    mysql_select_db("dbname");
    // Auswahl des Charsets
    mysql_set_charset("utf8");
    // Vorbereitung der Daten
    $name = mysql_real_escape_string($_POST['name']);
    $nachricht = mysql_real_escape_string($_POST['nachricht']);
    // Eintragung der Daten
    mysql_query("INSERT INTO guestbook VALUES ('".$name."', '".$nachricht."');");
    // Beenden der Verbindung
    mysql_close();
?>
```

Wie Sie sehen, benutze ich die PHP-Funktion `mysql_real_escape_strings($string);`.
Diese sorgt dafür, dass der Nutzer **keine SQL-Statements in seine Nachricht einschleusen** kann. Wenn dies möglich wäre könnte er somit beispielsweise alle Einträge aus Ihrer Tabelle löschen oder bei einem Login-System sogar Admin-Zugriff erlangen (Stichwort: SQL-Injection).

Zur Auswertung der Daten benutze ich eine einfache Tabelle. In dieser sollen die Daten wieder ausgegeben werden.
```php
<?php
    // Aufbau der Verbindung zum Datenbank-Server
    mysql_connect("localhost", "dbserver", "123meinpasswort123");
    // Auswahl der Datenbank
    mysql_select_db("dbname");
    // Abfrage der Daten
    $result = mysql_query("SELECT * from log");
    // Schleife zur Darstellung der Daten in Tabellenform
    echo "<table border='1'>
       <tr>
           <th>Name</th>
           <th>Nachricht</th>
       </tr>";
 
    while($row = mysql_fetch_array($result)){
        echo "<tr>
           <td>".htmlspecialchars($row['name'])."</td>
           <td>".htmlspecialchars($row['nachricht'])."</td>
       </tr>";
    }
    echo "</table>";
    // Beenden der Verbindung
    mysql_close();
?>
```

Hier benutze ich die Funktion `htmlspecialchars($string);`.
Diese sorgt dafür, dass HTML-Code nicht ausgeführt wird, sondern für den Nutzer lesbar dargestellt wird. Somit wird verhindert, dass ein Angreifer **JavaScript-Code in seine Nachricht einschleusen** kann (und somit bspw. alle Nutzer weiterleiten kann).

## Fazit
In diesem Artikel haben Sie viel Neues gelernt und haben an der Oberfläche der MySQL-Datenbanken gekratzt. Durch die vielfältigen Einsatzmöglichkeiten und die einfache Syntax sind Datenbanken vorallem bei großen Datensätzen empfehlenswert.