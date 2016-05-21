+++
title       = "Linux-Tool Screen: Mehrere Konsolen in einem Fenster"
description = "Mit dem Linux-Tool Screen können Sie mehrere Konsolen-Fenster via SSH öffnen und auch Sitzungen schließen, wiederaufnehmen und einiges mehr."
date        = "2013-05-04T12:14:00"
tag         = ["Linux", "Software"]
+++

Mit dem kleinen Linux-Tool "screen" können Sie einfach mehrere Konsolen-Fenster in einem Fenster öffnen - auch über SSH. Dabei bietet "screen" noch mehr Vorteile (wie Wiederaufnahme von Sitzungen), die ich Ihnen nun näher vorstellen möchte.

<!--more-->

## Was kann das Tool?
Das Tool macht Ihnen (als Admin) die Arbeit an der Konsole sehr viel einfacher als sie normalerweise ist. Durch eine simple Tastenkombination können Sie zwischen den einzelnen Konsolen-Fenstern wechseln, Neue öffnen oder Alte schließen. Gleichzeitig sind sie mit dem Tool auch vor einem Datenverlust oder Prozess-Abbruch bei Verlust der SSH-Verbindung geschützt: Sie können die Session einfach wieder aufnehmen.

## Installation
Die Installation ist so einfach wie immer und mit diesen zwei Befehlen durchzuführen:
```bash
sudo apt-get update
sudo apt-get install screen
```
Bestätigen Sie nun noch die Installation mit `y` oder `j` und warten Sie, bis die Installation abgeschlossen ist.

## Nutzung des Tools
Um "screen" zu starten, geben Sie einfach `screen` auf der Konsole ein, und Sie landen (eher unbemerkt) auf einer weiteren Shell. Dort können Sie nun ganz normal mit der Konsole arbeiten und folgende Tastenkombinationen zur Steuerung des Tools verwenden.
Dabei ist `Strg + A` immer der Aufruf des Tools und der nachfolgende Buchstabe der eigentliche Befehl:

* `Strg + A + C` --> Neue Konsole (neues Fenster) öffnen
* `Strg + A + N` --> Zum nächsten Fenster wechseln
* `Strg + A + P` --> Zum vorherigen Fenster wechseln
* `Strg + A + D` --> Von der Sitzung abmelden (diese wird nicht geschlossen!)

Dies sind nur die grundlegenden und wichtigsten Kombinationen für den alltäglichen Gebrauch.

### Eine Sitzung wiederaufnehmen
Wenn Sie nun während einer Sitzung die SSH-Verbindung verlieren oder sich mittels Tastenkombination von der Sitzung abmelden, können Sie sich mit folgenden zwei Befehlen wieder anmelden. Geben Sie zunächst folgendes ein, um eine Auflistung aller "screen"-Sitzungen zu erhalten: `screen -ls`
Die Ausgabe sieht dann folgendermaßen aus:
![Linux-Tool Screen](/images/linux-tool-screen-mehrere-konsolen/Screen.png)

Um sich dann wieder mit der Sitzung zu verbinden, geben Sie einfach folgendes ein:
```bash
screen -r [Sitzungsname]
```

### Eigener Sitzungsname
Falls Sie aufgrund besserer Übersichtlichkeit einer neuen Sitzung einen benutzerdefinierten Namen zuweisen möchten, benutzen Sie die Option `-S` beim Programmaufruf:
```bash
screen -S [Sitzungsname]
```

## Fazit
Das kleine kostenfreie Tool kann Ihnen den Alltag am Linux-Rechner stark vereinfachen und Ihre Arbeit auch beschleunigen. Auch die Wiederaufnahme von Sitzungen ist bei SSH-Verbindungen sehr nützlich.
