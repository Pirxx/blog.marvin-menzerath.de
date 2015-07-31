+++
title       = "Ubuntu Server Installieren und Einrichten: SSH, Apache, PHP, MySQL, phpMyAdmin, Samba und SFTP"
description = "Hier erfahren Sie, wie einfach Sie selbst einen Linux-Server mit Webserver, PHP, MySQL, phpMyAdmin, Samba und SFTP installieren und einrichten können."
date        = "2012-04-28T23:00:00"
tag         = ["Einrichtung", "Installation", "Linux", "Server", "Ubuntu", "Webserver"]
+++

Bestimmt ist jedem Technikfreund schon einmal die Idee gekommen, einen **eigenen, professionellen Server** zu betreiben. Natürlich auch – ganz Profimäßig – mit Linux. Und unter den Desktop-Systemen bietet sich Ubuntu (welches auf Debian basiert) bekannterweise an. Also, wieso nicht direkt den Ubuntu-Server verwenden. Wie das geht, was möglich ist und wozu man einen eigenen Linux-Server brauchen kann, lesen Sie hier.

<!--more-->

**Dieses Tutorial funktioniert unter Ubuntu 12.04 LTS, 12.10, 13.04, 13.10, 14.04 LTS sowie Debian 6 und 7.**

## Wozu ein Server?
Als erste Maßnahme sollten Sie sich bewusst machen, wozu Sie einen eigenen Server brauchen.

* Als Webserver? Würde nicht auch ein (kostenloses) Webspace-Angebot reichen?
* Als Dateiserver? Wie wäre es mit einem NAS oder einem (kostenlosen) Datenspeicher in der Cloud?
* Oder, oder, oder...

Wie Sie sehen, gibt es auch Alternativen, die man u.U. einem eigenen Server vorziehen sollte, aber darum geht es hier schließlich nicht.

Die folgende Vorgehensweise zur Inbetriebnahme des eigenen Servers bietet natürlich **keine Gewähr für Aktualität und Sicherheit**, falls Sie planen, Ihren Server im Internet öffentlich zugänglich zu machen.

## Installation des Servers
Laden Sie sich ein aktuelles Server iso-Image von der [offiziellen Ubuntu-Website](http://www.ubuntu.com/download/server) herunter (ca. 680 MB), und brennen Sie es auf eine leere CD.
Starten Sie nun einen beliebigen (am besten stromsparenden) Computer von dieser CD. Folgen Sie dem Installations-Assistenten und *lesen Sie genau*, welche Schritte durchgeführt werden sollen!
Wichtig: Der festgelegte Rechnername ist der Name, unter dem der Server im Netzwerk – neben der IP-Adresse – erreichbar sein wird!

## Erste Schritte
Nach einem Neustart können Sie sich mit dem festgelegten Benutzernamen und zugehörigem Passwort am Server anmelden. Daraufhin sollte diese Mitteilung erscheinen:
![Ubuntu Server: Nach dem Login](/images/ubuntu-server-installieren-und-einrichten/LoginErfolgreich.png)

### Updates
Nun sollten Sie (am besten auch **täglich** oder wöchentlich) Ihren Server mit folgendem Befehl updaten:
```bash
sudo apt-get update && sudo apt-get dist-upgrade && sudo apt-get autoremove
```
Diese Befehle führen ein Update durch, und löschen auch unbenötigte Pakete/Programme wieder. Ein Neustart mittels
```bash
sudo reboot
```
ist danach immer eine gute Idee um den Vorgang abzuschließen.

### SSH-Verbindung aufbauen
Jetzt sollten Sie einen Zugang zu Ihrem Server aus der Ferne (im Netzwerk) einrichten: Den **SSH-Server**. Geben Sie dazu
```bash
sudo apt-get install openssh-server
```
ein, und bestätigen Sie mit Ihre Eingabe mit Enter. Nach einer erneuten Passwort-Abfrage läuft der Installationsprozess durch. Dieser Vorgang ist erst dann abgeschlossen, wenn wieder Eingaben möglich sind.

### Auf den Server zugreifen
Nun können Sie den Server irgendwo hinstellen, Maus (wenn vorhanden), Tastatur und Bildschirm abklemmen – nur noch ein Netzwerk- und ein Stromkabel sind nötig. Mit dem Gratis-Tool [Putty](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/download.html) können Sie nun einfach auf Ihren Server zugreifen: Tragen Sie nun einfach Ihre Daten ein und klicken Sie auf "Open". Falls nun eine Warnung meldet, dass der Server unbekannt sei, bestätigen Sie dies mit "Yes". Nun erfolgt erneut ein Login und Sie sind wieder auf Ihrem Server angemeldet.

![Ubuntu Server: Login mit Putty](/images/ubuntu-server-installieren-und-einrichten/Putty.png)
Hiermit ist die Grundeinrichtung abgeschlossen, nun folgt ein **funktionstüchtiger Webserver!**

## Webserver installieren
Geben Sie folgendes ein und bestätigen Sie Ihre Eingabe mit der Enter-Taste: sudo apt-get install apache2 php5 libapache2-mod-php5 php5-mysql php5-cgi php5-gd php5-mcrypt mysql-server phpmyadmin

Während der Installation werden Sie nach einem Root-Passwort für die **Datenbank** gefragt. **Merken Sie sich dieses gut!** Alle weiteren Abfragen sollten Sie mit "Yes" bestätigen.
Nun noch kurz folgendes eingeben:
```bash
sudo ln -s /usr/share/phpmyadmin /var/www/phpmyadmin
```
und die Installation des Webservers ist abgeschlossen!

Rufen Sie nun die IP-Adresse Ihres Servers auf, sollten Sie eine Testseite mit der Überschrift "It Works!" zu Gesicht bekommen. Alle nötigen Komponenten wie PHP und phpMyAdmin (zu finden unter http://[server-ip]/phpmyadmin) sind nun ebenfalls eingerichtet, und Sie können beginnen, Ihre Website zu gestalten.

Aber wie sollen die nötigen HTML- und PHP-Dateien auf den Server gebracht werden? Hier hilft der **Datei-Server Samba**, auch wenn eine Verbindung mittels SFTP in diesem speziellen Falle vorzuziehen ist.

## Datei-Server Samba installieren
Geben Sie
```bash
sudo apt-get install samba
```
ein, um den Server-Dienst zu installieren. Mit
```bash
sudo smbpasswd -a IhrBenutzername
```
machen Sie dem Dienst Ihr Konto auf dem Server bekannt (Natürlich muss "IhrBenutzername" durch Ihren gewählten Namen ersetzt werden).

Alle wichtigen Einstellungen liegen in einer einzigen Datei, die nun mit diesem Befehl bearbeitet werden sollte:
```bash
sudo rm /etc/samba/smb.conf && sudo nano /etc/samba/smb.conf
```

Durch diesen Befehl wird die alte Datei gelöscht, eine neue Angelegt und sofort geöffnet. Kopieren Sie nun folgenden Text in diese Datei hinein, um den Webserver für Ihr Benutzerkonto zugänglich zu machen:
```
[global]
workgroup = HOMEGROUP
server string = Meine Dateien
wins support = yes
os level = 33
local master = yes
;wins server = w.x.y.z
unix password sync = yes
passwd program = /usr/bin/passwd %u
 
[webserver]
comment = Der Webserver
path = /var/www
writeable = yes
valid users = IhrBenutzername
force directory mode = 660
force create mode = 660
 
[Daten]
comment = Meine Daten
path = /home/IhrBenutzername
writeable = yes
valid users = IhrBenutzername
force directory mode = 660
force create mode = 660
```

Auch hier ist wieder sehr wichtig, dass Sie "IhrBenutzername" durch Ihren Benutzernamen ersetzen!

### Auf Dateien zugreifen
Jetzt sollten Sie
```bash
sudo reboot
```
eingeben, um den Server neuzustarten, und – sobald der Vorgang abgeschlossen ist (die Verbindung mit dem Server wird dabei abbrechen) – im Windows-Explorer auf Ihren Server folgendermaßen zugreifen zu können:
![Ubuntu Server: Zugriff auf Dateien](/images/ubuntu-server-installieren-und-einrichten/Samba.png)

Im Ordner mit Ihren Daten haben Sie volle Zugriffsrechte und können alle Daten löschen, verändern und auch erstellen. Im Ordner des Webservers können Sie Ihre persönlichen Daten editieren und hineinkopieren, aber vorhandene (oder durch den Server geänderte) Dateien müssen erst wieder Zugriffsrechte bekommen.

**Hier endet dieses Tutorial zur Einrichtung eines Ubuntu-Servers. Sollten Sie weitere Fragen haben, hinterlassen Sie diese einfach in den Kommentaren!**