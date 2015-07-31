+++
title       = "Lokaler Webserver mit XAMPP"
description = "Dies ist eine Einführung in die lokale Webserverumgebung von XAMPP mit einem Apache-Webserver, PHP 5.4, MySQL und FTP-Server für Windows, Linux und Mac OSX."
date        = "2012-06-18T21:00:00"
tag         = ["PHP", "Software", "Webmaster", "Webserver"]
+++

Dieses Tutorial ist eine Einführung in die **lokale Webserverumgebung von XAMPP** mit einem Apache-Webserver, PHP 5.4, MySQL und einem FTP-Server für Windows, Linux und auch Mac OS.

<!--more-->

## Was ist XAMPP?
XAMPP ist ein Paket aus Komponenten für eine lokale Webserver-Umgebung mit aktuellem **apache2-Webserver**, **PHP 5.4**, **MySQL**, **FTP-Server** und einigen weiteren Tools. Das Paket kann nicht nur auf einem Rechner installiert werden, sondern kann auch auf einem USB-Stick mitgenommen werden.

## Wie installiere ich XAMPP?
Auf [dieser Website](http://www.apachefriends.org/de/xampp.html) steht XAMPP in verschiedenen Downloads zur Verfügung: Eine Wahlmöglichkeit besteht im Betriebssystem, die Andere im Paket: 

* Ein selbstextrahierendes Paket (unter Windows eine *.exe Datei)
* Ein ZIP-Archiv (groß)
* Ein 7zip-Archiv (klein)

Nach dem Download des ZIP-Archives muss dieses an eine beliebige Stelle extrahiert werden, beispielsweise nach `C:\xampp`.
 
## Erster Start und Einrichtung
In diesem entpackten Ordner sind nun einige Unterordner und Dateien. Beim ersten Start sollte die Datei `setup_xampp.bat` mit einem Doppelklick gestartet werden. Diese Batch-Datei führt eine **einmalige Einrichtung** durch, danach muss sie nur noch beim Wechsel des XAMPP-Verzeichnisses gestartet werden.

Danach kann es auch schon losgehen! Mit dem Programm `xampp-control.exe` lassen sich **alle Funktionen bequem steuern**, dabei sind Administratorrechte nötig. Über das Control-Panel lassen sich die einzelnen **Komponenten starten, beenden oder auch als Service eintragen**. Wichtig dabei ist, dass auf den jeweiligen Ports der Komponenten KEINE anderen Programme laufen wie beispielsweise Skype oder ein IIS Webserver.

![XAMPP: Control-Panel](/images/lokaler-webserver-xampp/ControlPanel.png)

Sobald nun alle Komponenten laufen, kann im Webbrowser nach `http://localhost` navigiert werden, um eine Test-Seite angezeigt zu bekommen. Sollten hier keine Fehler auftreten, kann der Ordner `htdocs` von Allem, außer dem `xampp`-Ordner befreit werden.

Bei FileZilla, dem FTP-Server sind einige Einstellungsmöglichkeiten vorhanden. Über den "Admin"-Button im Control-Panel kann man den Einstellungsdialog öffnen. Unter "Edit" ==> "Users" lassen sich Benutzer anlegen und diesen ihre Verzeichnissen inklusive dortigen Berechtigungen zuweisen.

## Die erste lokale Website
In den Ordner `htdocs` lassen sich nun einfach HTML und PHP Dateien kopieren – auch über den FTP-Server – und unter `http://localhost/NameDerDatei.html` anschauen. Damit ist dies die perfekte Möglichkeit um neue Websites (oder auch bestehende) offline und gefahrlos testen zu können.

## Wichtige Informationen
- Unter `http://localhost/xampp` sollte der **"Security"-Bereich** besucht werden, um Sicherheitseinstellungen vorzunehemen
- *Alle* Netzwerk-Benutzer können auf den Webserver zugreifen, falls kein Passwort definiert ist
- Vor einer Deinstallation des Paketes auf jeden Fall alle Services deinstallieren und die Komponenten abschalten!

## Fazit
Mit dem XAMPP-Paket kann man eigentlich nichts falsch machen. Auch wenn die Bedienung manchmal etwas kompliziert ist und die Einstellungen der einzelnen Komponenten in deren Verzeichnis und Konfigurationsdateien geschieht, überzeugt das Paket mit den vielen guten Funktionen.