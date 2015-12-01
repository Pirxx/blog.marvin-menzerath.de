+++
title       = "Ubuntu 12.04 LTS Installieren und Einrichten"
description = "Ubuntu 12.04 LTS ist ein solides und einfaches Linux-Betriebssytem mit 5 Jahren Support. In diesem Tutorial wird diese Version installiert und eingerichtet."
date        = "2012-05-17T23:00:00"
tag         = ["Einrichtung", "Installation", "Linux", "Ubuntu"]
+++

Ubuntu 12.04 LTS bietet ein solides und einfaches Linux-Betriebssytem mit aktuell 5 Jahren Support. In diesem Tutorial wird diese Version installiert und für viele User passend eingerichtet.

<!--more-->

Auf [Distrowatch.com](http://distrowatch.com) finden Sie viele weitere kostenfreie Distributionen. Die Debian-basierenden können ähnlich wie hier installiert und eingerichtet werden.

## Die Installation
Die Installation der aktuellsten Ubuntu-Version ist denkbar einfach:

* Das aktuelle ISO-Image von der [offiziellen Website](http://www.ubuntu.com/download/desktop) downloaden und auf eine CD brennen.
* Den gewählten Computer von dieser CD starten.
* Im Boot-Menü den Punkt "Ubuntu installieren" auswählen
* Dem Assistenten folgen (da kann eigentlich nichts bei schief gehen)

Nun haben wir also unser Betriebssystem erfolgreich installiert, weiter geht es mit dem ersten Start des Betriebsystems, den ersten Updates des Systems und einiger Treiber sowie einem "ordentlichen" Desktop.

## Erste Einrichtung
Nach der kurzen Installation geht es jetzt direkt mit dem ersten Start des frisch Installierten Ubuntu weiter: Direkt nach dem Login präsentiert sich der Desktop in einem Windows-Style ("Unity"), welcher mir persönlich nicht sehr zusagt.
![Ubuntu Installieren und Einrichten: Erster Start](/images/ubuntu-desktop-installieren-und-einrichten/Unity.png)

### Updates
Doch bevor es weiter gehen kann, stehen bereits die ersten Updates oder auch eine erweiterte Sprachunterstützung bereit. Ein kleines Fenster meldet sich und bietet diese Aktualisierungen an. Nach einem Klick auf "Jetzt Installieren" wird das Passwort verlangt, danach läuft der Prozess eine Zeit lang und muss eventuell den Rechner später Neustarten.
![Ubuntu Installieren und Einrichten: Updates verfügbar](/images/ubuntu-desktop-installieren-und-einrichten/Updates.png)

### Treiber
Eventuell meldet später ein Programm, dass Treiber verfügbar sind. Diese sollten Sie sofort für eine bessere Kompatibilität aller Geräte (meist WLAN und Grafikkarte) installieren und auch dann den Rechner neustarten!

### Desktop-System
Da das System jetzt ganz aktuell und auch vollkommen geschützt ist, machen wir uns an eine professionellere Arbeitsumgebung. Dabei muss die Entscheidung zwischen GNOME und LXDE fallen:

GNOME ist der "Unterbau" von Ubuntus Unity, LXDE ist eher an Windows angelegt. Deshalb – weil es ein "nicht-Windows" Betriebssystem sein soll, wähle ich hier GNOME. Um dieses zu Installieren öffnen Sie das **Software Center** und geben in der Suche `gnome-shell` ein. Das erste Paket der Liste wird installiert und daraufhin der aktuelle Benutzer abgemeldet. Im Anmelde-Bildschirm können Sie nun über das kleine Symbol oben rechts über Ihrem Namen einen neuen Desktop auswählen.
![Ubuntu Installieren und Einrichten: Software-Center](/images/ubuntu-desktop-installieren-und-einrichten/Softwarecenter.png)

Aus Kompatibilitätsgründen sollte man hier den klassischen Desktop verwenden, der wenig Effekte bietet und dementsprechend wenig Ressourcen benötigt. Oben und Unten am Bildschirm sind Leisten zu sehen, unten die aktuell geöffneten Programme und oben ein Programmmanager und mehr.
![Ubuntu Installieren und Einrichten: Gnome Desktop](/images/ubuntu-desktop-installieren-und-einrichten/Gnome.png)

## Software-Ausstattung
Jetzt soll es mit der Software-Ausstattung weitergehen, wobei uns das Linux-Terminal sehr hilft. Vom Alternativ-Browser bis zur Spielesammlung ist (fast) alles möglich!

Da wir uns nun vermehrt mit dem Terminal, einer Art der Eingabeaufforderung, beschäftigen, die schnelles und unabgelenktes Arbeiten ermöglicht, sollten Sie folgendes wissen:

* Im Terminal werden nur bestimmte Befehle ausgeführt. Ein "Spiele mir das Lied da im Ordner!" bringt nur eine Fehlermeldung
* Mit `sudo […]` bekommt ein Befehl volle Rechte und kann so u.a. den Rechner schädigen
* Befehle im Terminal sind meist schneller ausgeführt, als wenn man zuerst Programme mit grafischer Oberfläche Starten würde

### LibreOffice
Ubuntu wird bereits mit einigen Programmen ausgeliefert, darunter auch LibreOffice, (ein Office-Paket) welches jedoch nicht vollständig installiert ist. Deshalb sollte dieses zuerst vollständig Installiert werden. Tippe Sie dazu im Terminal folgendes ein und bestätigen Sie dieses mit einem Druck auf die Enter-Taste:
```bash
sudo apt-get update && sudo apt-get install libreoffice
```
Sobald diese Vorgänge abgeschlossen sind, kann es weiter gehen!

### VLC, Chrome und GIMP
Der bekannte Medien-Player VLC, sowie die OpenSource-Variante von Google Chome namens Chromium sollten dabei sein, genau so auch das Bildbearbeitungsprogramm GIMP. Geben Sie dazu einfach folgendes ins Terminal ein und bestätigen Sie es mit der Enter-Taste:
```bash
sudo apt-get install vlc chromium-browser gimp
```

### Entwickler-Tools
Nach diesen Vorgängen fehlen für Entwickler noch Programme wie eclipse, Mono oder Gambas. Diese Installieren Sie mit
```bash
sudo apt-get install eclipse monodevelop gambas2
```

Systemadministratoren könnten auch das Partitionierungstool GParted oder das Paketverwaltungstool Synaptic brauchen:
```bash
sudo apt-get install gparted synaptic
```

Es gibt viele weitere nützliche Programme, die ich hier jedoch nicht alle auflisten kann. Die allermeisten Pakete finden Sie im Ubuntu Software Center sortiert in den verschiedenen Rubriken.

## Zusammenfassung
Wie Sie hoffentlich bemerkt haben, ist die Installation und Einrichtung sehr einfach und erfordert kein Fachwissen. - Darauf ist Ubuntu auch ausgelegt.
