+++
title       = "USB-Stick Booten mit UNetBootin"
description = "Mit UNetBootin installieren Sie einfach beliebige Betriebsysteme auf einem USB-Stick zum Live-Betrieb oder späteren Installation."
date        = "2012-07-08T21:00:00"
tag         = ["Linux", "Software"]
+++

Wie oft haben Sie eine bestimmte Rettungs, bzw. Boot-CD gebraucht, hatten aber keine leere CD zur Hand? Oft? Dann sollte das Tool UNetBootin Ihre Probleme lösen und Linux-Systeme bequem auf einem USB-Stick installieren.

<!--more-->

## UNetBootin
Zunächst sollten Sie sich auf [http://unetbootin.sourceforge.net/](http://unetbootin.sourceforge.net/) das Tool UNetbootin für Ihr Betriebssystem herunterladen, es ist für fast alle verfügbar.

Nach dem kleinen Download von ca. 5 MB verlangt das Tool Admin-/Root-Berechtigungen und zeigt einen aufgeräumten Bildschirm an, von dem aus alles weitere geschieht.

Es gibt eine **Auswahl zwischen den bekanntesten Linux-Systemen** wie Ubuntu, Damn Small Linux, Super Grub Disk und auch Ophcrack. Windows lässt sich über dieses Auswahlmenü nicht installieren, dafür ist der nächste Punkt "Abbild" geeignet. Hier kann der Pfad zu **jeder beliebigen `*.iso`-Datei** angegeben werden, auch zu Windows-DVD iso-Dateien.

![UNetBootin: Interface](/images/usb-stick-booten-unetbootin/Unetbootin.png)

Eine weitere Besonderheit des Tools wird für Sie interessant, wenn Sie ein Ubuntu installieren möchten: Dabei ist es möglich, etwas **Platz auf dem USB-Stick freizuhalten**, in dem später aus dem Live-System heraus Daten gespeichert werden können.

## Die Installation
Im unteren Bereich des Fensters sollten Sie sich nun noch einmal über die Auswahl des richtigen Laufwerks versichern, sodass nicht etwa ein USB-Stick mit wichtigen Daten "plattgemacht" wird.

Durch einen Klick auf "OK" wird der Vorgang gestartet und das Programm extrahiert alle Dateien des iso-Images (nach dem Download) auf den USB-Stick und richtet dort auch einen **Bootmanager (GRUB)** ein, wie es bei normalen PCs der Fall ist. Je nach Größe des Images kann dieser Vorgang also lange dauern (Ubuntu-Linux: 5-10 Minuten, Windows 7: 15-30 Minuten).

Wurde der Vorgang erfolgreich abgeschlossen, sollte man den Rechner von diesem USB-Stick starten. Der "originale" Bootmanager des iso-Images wurde von UNetbootin überschrieben, daher wurden die Bootoptionen in diesen gepackt.

Neben einem einzigen System auf Ihrem USB-Stick ist auch die **Installation mehrerer Systeme** möglich. Dazu müssen Sie die Bootmanager-Einträge selbst bearbeiten, was ich jedoch nur Linux/GRUB-Profis empfehlen würde, da kleine Fehler eine komplette Neuinstallation des Sticks mitsichziehen würden.