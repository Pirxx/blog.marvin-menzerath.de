+++
title       = "Webserver Installieren und Einrichten - mit Apache2, PHP 5 und MySQL (phpMyAdmin)"
description = "Hier erfahren Sie, wie Sie selbst auf jedem Linux-Rechner einen Apache-Webserver mit PHP und MySQL (phpMyAdmin) installieren und einrichten können."
date        = "2013-02-03T19:00:00"
tag         = ["Debian", "Einrichtung", "Installation", "Linux", "MySQL", "PHP", "Webserver", "Webmaster"]
+++

Eine komplette Webserver-Umgebung besteht aus mehreren Komponenten: Einem Webserver (meist Apache2), einem PHP-Interpreter sowie einem MySQL-Datenbank Server. Diese Komponenten zu installieren und einzurichten kann manchmal schwierig sein und einige Zeit dauern.

<!--more-->

In diesem Tutorial erfahren Sie, wie Sie selbst auf jedem Linux-Rechner einen "vollwertigen" Webserver installieren und einrichten können.

## Voraussetzungen
In diesem Tutorial arbeite ich mit einem **Linux Debian (6.0) Rechner** über eine SSH-Verbindung, wie es bei den meisten Root-Servern der Fall ist. Unter Linux Debian, Ubuntu und anderen Derivaten sollten daher keinerlei Probleme bei der Installation auftreten, da die Pakete die gleichen sind.

Weiterhin gehe ich davon aus, dass Sie bereits ein Linux auf dem Rechner/dem Server installiert haben und auf der Konsole arbeiten können. Eine grafische Benutzeroberfläche ist nicht notwendig.

## Erste Schritte
Verbinden Sie sich – falls Sie nicht direkt am Rechner sitzen – per SSH auf den Rechner. Dies ist unter Linux via
```bash
ssh user@IP-Adresse
```
möglich, falls Sie einen SSH-Server installiert haben.
Sollten Sie Windows benutzen, laden Sie sich das [Tool Putty](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/download.html) herunter, mit dem sie ebenfalls eine SSH-Verbindung aufbauen können. Nun sollten Sie auf den Server verbunden sein und folgenden Bildschirm sehen:
![Linux Webserver: SSH](/images/webserver-apache-php-mysql-phpmyadmin/SSH.png)
Die Installation ist hier in drei Teile eingeteilt, um die Komponenten unabhängig voneinander installieren und einrichten zu können.

## Webserver

### Installation
Als Webserver kommt der Apache2 zum Einsatz. Diesen Installieren Sie (mit Root-Rechten!) durch folgenden Befehl in der Konsole:
```bash
apt-get install apache2
```
Sollten Sie vorher Root-Rechte benötigen, geben Sie einfach
```bash
su
```
ein und geben Sie das Root-Passwort (das Sie während der Installation festgelegt haben) ein.

Jetzt müssen Sie nur noch die zu installierenden Pakete mit einem Tastendruck auf `y` oder `j` bestätigen und abwarten, bis die Installation beendet ist. Die Konsolenausgaben sollte dann so aussehen:
![Linux Webserver: Installation](/images/webserver-apache-php-mysql-phpmyadmin/Installation.png)

### Einrichtung
Zuerst sollten Sie nun prüfen, ob Sie unter der IP-Adresse des Servers folgende Website finden. Dazu geben Sie einfach die IP-Adresse in Ihrem Webbrowser ein.
![Linux Webserver: It works!](/images/webserver-apache-php-mysql-phpmyadmin/Webserver.png)

Die anzuzeigenden Dateien liegen im Ordner `/var/www` und können nur mit Root-Rechten verändert werden, da Sie normalerweise dem Webserver "gehören". Um also nun diese Test-Seite zu verändern, greifen Sie einfach per Konsolen-Text-Editor auf die Datei zu. Dies geht (mit Root-Rechten!) über folgendes Kommando:
```bash
nano /var/www/index.html
```

Die Konfigurationsdateien des Webservers finden Sie unter `/etc/apache2` wobei dort normalerweise keine Änderungen nötig sind. Sollten Sie dennoch spezielle Fragen dazu haben, schreiben Sie diese einfach in die Kommentare.

## PHP

### Installation
Die Installation der PHP-Pakete ist genauso einfach wie die Installation des Webservers und braucht ebenfalls nur einen Schritt: Geben Sie einfach (mit Root-Rechten!) folgenden Befehl ein und bestätigen Sie die Pakete wieder mit einem `y` oder `j`:
```bash
apt-get install php5
```

### Konfiguration
Um die korrekte Installation zu testen, legen Sie einfach eine Datei wie `/var/www/test.php` an und geben Sie folgenden Text ein: 
```php
<?php
    phpinfo();
?>
```

Rufen Sie nun Ihre Server-IP gefolgt von einem `/test.php` auf, sollten Sie folgendes sehen:
![Linux Webserver: PHP](/images/webserver-apache-php-mysql-phpmyadmin/PHP.png)

Auch hier gibt es wieder keine direkte Notwendigkeit Einstellungen zu verändern, außer Sie wissen jetzt schon, dass Sie beispielsweise ein Upload-Limit von 1024 MB brauchen. Sollte dies der Fall sein, öffnen Sie einfach die Konfigurationsdatei unter `/etc/php5/apache2/php.ini`.

## MySQL und phpMyAdmin
Fast alle aktuellen CMS setzen eine MySQL Datenbank vorraus, um dort Daten abspeichern zu können. Die Installation ist ein wenig anders als die der vorherigen Pakete.

Zu MySQL selbst und phpMyAdmin finden Sie [hier](/artikel/mysql-datenbanken-statements-php/) einen weiteren Artikel von mir.

### Installation
Installieren Sie den MySQL-Server sowie die Web-Oberfläche phpMyAdmin mit diesem Befehl und bestätigen Sie erneut die Paketliste mit `y` oder `j`:
```webserver-apache-php-mysql-phpmyadmin
apt-get install mysql-server phpmyadmin
```

Während der Installation werden Sie von einem Assistenten durch die wichtigsten Einstellungen geführt (Root-Passwort für den Datenbank-Server, den zu nutzenden Webserver sowie ein phpMyAdmin-Passwort).

### Konfiguration
Wenn Sie nun unter `http://Server-IP/phpmyadmin` zu einem Login-Screen kommen, geben Sie als Benutzername `root` ein und Ihr eben festgelegtes Passwort.
In der Weboberfläche können Sie nun Datenbanken anlegen und löschen, Tabellen anlegen, Daten eintragen und alle weiteren MySQL-Optionen ausführen.

## Ein CMS installieren
Wenn Sie nun ein CMS installieren wollen, beachten Sie folgende Dinge:

* Laden Sie das Archiv via `wget [file]` herunter und entpacken Sie dieses dann in das leere `/var/www`-Verzeichnis (oder ein Unterverzeichnis).
* Eine andere Option zum Hochladen der Dateien wäre der SFTP-Server, der automatisch bei der Installation des SSH-Servers installiert wird: Nehmen Sie einfach Ihren FTP-Client und verbinden Sie sich mit dem Root-Zugang auf den Server.
* Die wichtigsten PHP-Funktionen/-Pakete sind bereits installiert. Sollte Ihr CMS weitere benötigen, wird der Paketname meist angegeben.
* Die Zugangsdaten zu Ihrem Datenbank-Server sind wie folgt:
  * Adresse: localhost
  * Nutzername: root
  * Passwort: von Ihnen festgelegt
  * Datenbank: muss vorher angelegt werden
* Auf Produktiv-Systemen sollten Sie keinesfalls den `root`-Zugang nutzen! Sollten Angreifer die Konfigurationsdatei lesen, haben diese sofort vollen Zugang zu Ihrem gesamten MySQL-Server!

## Fazit
Die Installation der Pakete gestaltete sich einfach und es war fast nirgendwo nötig Einstellungen zu verändern. Durch einen so eingerichteten Rechner können Sie Ihre Projekte lokal testen und auch darauf entwickeln.
Sollten Sie eine grafische Benutzeroberfläche installiert haben, können Sie sogar direkt auf dem Rechner programmieren und Ihre Ergebnisse live betrachten.