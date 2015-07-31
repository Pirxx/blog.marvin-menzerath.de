+++
title       = "Raspberry Pi: Raspcontrol - Installation & Funktionen"
description = "Für den Raspberry Pi gibt es das kostenfreie Tool Raspcontrol, welches alle wichtigen Informationen über CPU, RAM, Speicher, Netzwerk und SSH auflistet."
date        = "2013-07-23T19:50:00"
tag         = ["Raspberry Pi", "Webserver"]
+++

Auf einigen Servern laufen Überwachungssysteme wie Nagios, die dem Administrator Auskunft über das System und eventuelle Probleme geben. Für den Raspberry Pi gibt es Raspcontrol - ein OpenSource-Projekt, welches dem Administrator alle wichtigen Informationen über CPU, RAM, Speicher, Netzwerk und SSH auflistet.

<!--more-->

Über den Raspberry Pi habe ich bereits vor einiger Zeit ein Review geschrieben und jetzt ist es an der Zeit für einen weiteren Artikel über eine interessante Software für diesen.

## Installation
Für die Installation benötigen Sie nur einen **Webserver mit PHP** sowie **Git**. Falls Sie bereits einen Webserver installiert haben können Sie direkt mit Schritt zwei fortfahren, ansonsten beginnen Sie am besten bei Schritt 1.

### Installation des Webservers
Installieren Sie zunächst den Webserver (hier: Apache) und PHP mittels diesem Befehl auf der Konsole (eventuell via SSH):
```bash
sudo apt-get update && sudo apt-get install apache2 php5
```

Nach der Installation sollten Sie nun im Netzwerk durch die Eingabe der IP-Adresse Ihres Raspberry Pis in Ihrem Browser eine Test-Seite mit der Überschrift "It works!" sehen. Die IP-Adresse können Sie durch folgenden Befehl herausfinden:
```bash
ip addr
```
In dieser Beispiel-Ausgabe findet sich die IP-Adresse in der letzten Zeile:
```
marvin@RasPi ~ $ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP qlen 1000
    link/ether b8:27:eb:ca:a3:89 brd ff:ff:ff:ff:ff:ff
    inet 192.168.20.74/24 brd 192.168.20.255 scope global eth0
```

### Installation von Git
Damit Sie die Dateien direkt von der GitHub-Seite herunterladen können benötigen Sie Git, das Sie einfach durch folgenden Befehl installieren:
```bash
sudo apt-get update && sudo apt-get install git
```

### Installation von Raspcontrol
Nun können Sie Raspcontrol herunterladen. Wechseln Sie dazu zuerst in das Verzeichnis des Webservers (`/var/www`) und laden Sie dann die Dateien von GitHub herunter:
```bash
cd /var/www
sudo git clone https://github.com/harmon25/raspcontrol.git
```
Nun befinden sich die Dateien im Unterverzeichnis `raspcontrol` Ihres Webserver-Verzeichnisses. 

#### Einrichtung
Damit nur Sie sich im Webinterface anmelden können benötigen Sie noch eine Datei mit dem Benutzernamen und dem Passwort. Dazu müssen Sie das Verzeichnis `raspcontrol` im Verzeichnis `/etc` anlegen und dort die Zugangsdatei anlegen und bearbeiten.
Dies geschieht mit folgenden Befehlen:
```bash
cd /etc
sudo mkdir raspcontrol
cd raspcontrol
sudo nano database.aptmnt
```

Nun müssen Sie die Datei folgendermaßen aufbauen und Ihre gewünschten Daten eintragen:
```
{
    "user":       "IhrNutzername",
    "password":   "IhrPasswort"
}
```

Nun sorgen Sie noch dafür, dass nur der Webserver (Nutzer `www-data`) auf die Passwort-Datei zugreifen kann:
```bash
sudo chown www-data:www-data database.aptmnt
sudo chmod 740 database.aptmnt
```

#### URL-Rewriting (optional)
Falls Sie "schöne URLs" haben wollen müssen Sie das URL-Rewriting aktivieren. Dazu sollten Sie bereits ein wenig über Webserver oder PHP wissen, ansonsten könnte dieser Teil ein wenig unverständlich für Sie sein.

Öffnen Sie zuerst die `config.php` im Raspcontrol-Verzeichnis des Webservers und ändern Sie die Variable `$rewriting` von `false` auf `true`.
Anschließend ändern Sie noch in der Konfigurationsdatei des Webservers (unter `/etc/apache2/sites-available/default`) `AllowOverride None` auf `AllowOverride All`.
Nun bearbeiten Sie noch die `.htaccess` Datei im Raspcontrol-Verzeichnis und löschen die Raute vor den 3 Zeilen, die mit `Rewrite` beginnen, sodass dies nun so aussehen müsste:
```
RewriteEngine On
RewriteRule ^details$ index.php?page=details
RewriteRule ^services$ index.php?page=services
RewriteRule ^logout$ login.php?logout
```

Schließlich müssen Sie noch folgende Befehle ausführen um die Änderungen wirksam zu machen:
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```

Damit ist die Installation abgeschlossen und Sie sollten nun unter `http://RasPi-IP/raspcontrol` das Webinterface mit dem Login-Screen auffinden können.

## Funktionen
Das Webinterface bietet Ihnen (nach dem Login) **vier Seiten mit verschiedenen Informationen**.

* Auf dem Home-Screen finden Sie **alle Informationen übersichtlich zusammengefasst** und mit Icons versehen - sind überall Häkchen ist alles in Ordnung. Außerdem finden Sie dort Ihre aktuelle IP-Adresse (intern wie extern), die Up-Time, den verwendeten Webserver sowie die Anzahl der via SSH eingeloggten Nutzer.
* Unter "Details" finden Sie zu all diesen Punkten weitergehende Informationen und nützliche Balken, die die **CPU/RAM-Nutzung** sowie den Speicher anzeigen. Außerdem finden Sie hier detailliertere Statistiken zur **Netzwerk-Auslastung** und sehen, welche Nutzer von welchem PC angemeldet sind.
* Wenn Sie mit der Maus über einen Balken fahren bekommen Sie außerdem weitere Informationen (wie die Leistungsverbraucher) in einem kleinen Pop-up angezeigt.
* Unter "Services" finden Sie schließlich noch eine **Auflistung von laufenden und gestoppten Diensten** wie apache2, cron, ssh und weiteren.

Heute (23. Juli 2013) wurde außerdem eine einfache **JSON-API** implementiert, die durch den Aufruf der `api.php` die Daten zur weiteren Nutzung in anderen Projekten bereitstellt.

### Screenshots
![Raspcontrol: Übersicht](/images/raspberry-pi-raspcontrol-installation-funktionen/Uebersicht.png)
![Raspcontrol: Details](/images/raspberry-pi-raspcontrol-installation-funktionen/Details.png)
![Raspcontrol: Services](/images/raspberry-pi-raspcontrol-installation-funktionen/Services.png)

## Fazit
Obwohl Raspcontrol "nur" ein Webinterface ist werden alle Daten korrekt und schnell angezeigt. Auch eher unerfahrene User können Raspcontrol schnell einrichten und nutzen. Weitere Funktionen sind in der Entwicklung, sodass auch bald die Steuerung des Raspberry Pis (Updates, Neustart, komplette Konsole?) möglich sein soll.
Ich nutze das Tool seit einigen Tagen auf meinen Raspberry Pis und bin von diesem schlichten OpenSource-Projekt begeistert.