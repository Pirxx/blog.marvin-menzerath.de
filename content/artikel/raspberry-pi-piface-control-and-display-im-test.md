+++
title       = "Raspberry Pi: \"PiFace Control and Display\" im Test"
description = "Das Raspberry Pi Modul \"PiFace Control and Display\" fügt dem Gerät u.a. ein Display hinzu. Hier finden Sie Tipps zur Einrichtung und praktische Beispiele."
date        = "2014-06-10T16:28:00"
tag         = ["PiFace", "Python", "Raspberry Pi", "Review"]
+++

Für den Mini-Computer Raspberry Pi gibt es viele Add-Ons und Zusatzmodule. Das "PiFace Control and Display" fügt dem Gerät ein kleines Display und 6 Knöpfe für Nutzerinteraktionen hinzu. Wie Sie das Modul einrichten und selbst Anwendungen dafür nutzen und programmieren können, lesen Sie hier.

<!--more-->

## Was ist das PiFace?
Das "PiFace Control and Display" besitzt ein kleines, **2x16 Display mit Hintergrundbeleuchtung**, sowie 5 Knöpfe auf der unteren Seite und einen weiteren (nach links, rechts und innen drückbaren) Knopf an der oberen Seite. Weiterhin besitzt das Modul auch eine **Infrarot-Schnittstelle**, die wie ein normales Infrarot-Modul genutzt werden kann. Nicht mehr nutzbar sind leider die GPIO-Pins, da diese komplett vom PiFace verdeckt werden.
Erhältlich ist das Gerät beim Distributor [Farnell element 14](http://de.farnell.com/) im Online-Shop für ca. 30€. Außerdem erhältlich sind dort Gehäuse für den Raspberry Pi mit dem aufgesetzten PiFace zum Schutz der Elektronik.
![PiFace: Seiten-Ansicht](/images/raspberry-pi-piface-control-and-display-im-test/Ansicht.jpg)

## Einrichtung
Die Einrichtung ist recht einfach gehalten. Stellen Sie zunächst sicher, dass Sie da **Raspbian** Betriebssystem nutzen und dieses auf dem aktuellen Stand ist. Dazu starten Sie einfach eine komplette Systemaktualisierung mit `sudo apt-get update && sudo apt-get dist-upgrade` und warten, bis der Vorgang abgeschlossen ist.
Anschließend müssen Sie **SPI** aktivieren: Führen Sie dazu ein `sudo raspi-config` aus und wählen Sie dann den 8. Menüpunkt ("Advanced Options") und dort dann den 5. Menüpunkt ("SPI"). Schließlich aktivieren Sie dort die SPI-Unterstützung.
Schalten Sie den Raspberry Pi nun durch ein `sudo halt -p` aus und trennen Sie die Stromversorgung. Setzen Sie anschließend vorsichtig und ohne Gewalt *nach einer vorherigen Erdung* (beispielsweise an einer Steckdose) das PiFace ein und stecken Sie die Stromversorgung erneut ein.
Nun fehlen noch die **PiFace-Pakete**. Diese installieren Sie einfach durch ein `sudo apt-get install python3-pifacecad`. Anschließend können Sie das Modul testen, indem Sie eines der vorhandenen Beispiel-Skripte starten:
```bash
sudo python3 /usr/share/doc/python3-pifacecad/examples/sysinfo.py
```

Nun sollte auf dem Display eine Ausgabe erscheinen. Falls dem nicht so ist, prüfen Sie die Ausgaben auf der Konsole und die Verbindung zwischen dem Raspberry Pi und dem PiFace.

### Infrarot-Schnittstelle
Um die Infrarot-Schnittstelle einzurichten, führen Sie einfach folgende Befehle nacheinander auf der Konsole aus:
```bash
wget https://raw.github.com/piface/pifacecad/master/bin/setup_pifacecad_lirc.sh
chmod +x setup_pifacecad_lirc.sh
sudo ./setup_pifacecad_lirc.sh
```

Anschließend folgen Sie einfach den Anweisungen auf dem Bildschirm um Ihre Fernbedienung an die Infrarot-Schnittstelle anzulernen.

## Beispiele
Unter `/usr/share/doc/python3-pifacecad/examples/` finden Sie einige Beispiele, wie Sie das PiFace nutzen können. Diese müssen Sie allerdings vor der ersten Benutzung entpacken: `sudo gunzip /usr/share/doc/python3-pifacecad/examples/[Beispiel].py.gz`.
Starten können Sie diese Beispiele genau so, wie das Test-Skript vorhin auch: `sudo python3 /usr/share/doc/python3-pifacecad/examples/[Beispiel].py`, wobei Sie genaue Anleitungen zu den Beispielen [unter diesem Link](http://piface.github.io/pifacecad/included_examples.html) finden.
Andere Anwendungsbeispiele sind auch [hier](http://www.piface.org.uk/guides/) zu finden.

Einige Beispiele habe ich angepasst/erweitert, damit sie für mich nützlicher sind. Diese finden Sie unter [https://github.com/MarvinMenzerath/PiFace](https://github.com/MarvinMenzerath/PiFace) und können auch von dort aus heruntergeladen und ausgeführt werden:
```bash
sudo apt-get update && sudo apt-get install git
git clone https://github.com/MarvinMenzerath/PiFace.git
cd PiFace/
sudo python3 script.py
```

### SysInfo.py
Das System-Info-Skript zeigt nun dauerhaft die System-Load an und kann mit einem Druck auf den ersten Knopf die IP-Adresse kurzzeitig anzeigen. Der fünfte Knopf deaktiviert das Display bis der Knopf erneut gedrückt wird.
![System-Informationen](/images/raspberry-pi-piface-control-and-display-im-test/SysInfo.jpg)

### Radio.py
Das Radio-Skript beinhaltet nun die deutschen Radiosender "1Live", "1Live Diggi" und "WDR 2 (Aachen)" statt der voreingestellten englischen Sender.
![Radio-Player](/images/raspberry-pi-piface-control-and-display-im-test/Radio.jpg)

### Hangman.py
Das Hangman-Spiel hat nun ein paar deutsche Begriffe gelernt, die es zu erraten gilt. Viel Spaß macht das Spiel aber aufgrund der fummeligen Steuerung und wenigen Begriffe aber nicht. ;)
![Hangman](/images/raspberry-pi-piface-control-and-display-im-test/Hangman.jpg)

**Weitere Skripte finden Sie (samt kurzer Einleitung) in dem oben verlinkten GitHub-Repository.**

## Selber Programmieren
Voraussetzung für das Programmieren von Anwendungen für das PiFace-Modul ist die Kenntnis der Programmiersprache Python in der Version 3. Sie sollten sich zu Beginn eng an die vorliegenden Skripte halten und diese modifizieren oder Sie folgen der [Anleitung auf der PiFace-Website](http://piface.github.io/pifacecad/example.html).

Sie müssen allerdings (um Darstellungs-Fehlern vorzubeugen) darauf achten, dass Sie nicht gleichzeitig (z.B. in zwei Threads) auf das Display schreiben. Ansonsten erhalten Sie schnell "Buchstabensalat" und müssen die Ausführung mittels Strg-C beenden.

## Fazit
Das "PiFace Control and Display" ist ein nützliches Add-On für den Raspberry Pi und bietet eine einfache Möglichkeit zur Überwachung und Steuerung von Prozessen auf/durch dem/den Raspberry Pi. Für den günstigen Preis von ca. 30€ erhält man nicht nur ein Display, sondern auch eine praktische Infrarot-Schnittstelle (zB für eine Fernbedienung bei einem Internetradio) und mehere Steuerungs-Buttons.
Welches Projekt würden Sie gerne mit einem PiFace realisieren oder welche Projekte haben Sie bereits mit einem solchen Modul realisiert?