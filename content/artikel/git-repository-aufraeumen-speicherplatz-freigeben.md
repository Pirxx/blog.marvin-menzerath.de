+++
title       = "Git: Repository aufräumen und Speicherplatz freigeben"
description = "Mittels eines simplen Befehls kann Git das lokale Repository schnell aufräumen und Speicherplatz freigeben."
date        = "2016-03-27T00:25:00"
tag         = ["Git", "Programmierung"]
+++

Wer oft und regelmäßig Änderungen an seinen mittles Git versionierten Projekten committed, hat meist nach kurzer Zeit ein großes `.git`-Verzeichnis in seinem Projektordner. Aber mittels eines simplen Befehls können die vorhandenen Daten schnell aufgeräumt und Speicherplatz freigegeben werden.

<!--more-->

## git gc
Durch den Aufruf von `git gc` im Projektverzeichnis werden überflüssige Dateien im `.git`-Verzeichnis entfernt und das lokale Repository optimiert.
Im Detail werden Dateirevisionen komprimiert und nicht mehr vorhandene Objekte entfernt. Einerseits senkt dies den Speicherverbrauch und optimiert andererseits auch die Geschwindigkeit aller Git-Operationen.

Gerade wer regelmäßig Änderungen committed, kann durch die ebenso regelmäßige Ausführung des Befehls kleine Vorteile gewinnen.

### Optionen
Die beiden interessantesten Optionen sind:

* `--aggressive`: Befehlsausführung dauert länger, dafür wird das Repository noch gründlicher optimiert.
* `--auto`: Git entscheidet selbst, ob das Repository aufgeräumt werden muss und bricht somit unter Umständen die Ausführung sofort ab.

## Mehr Informationen
Mehr Details zum `git gc`-Befehl finden Sie in der aktuellen Git-Dokumentation unter https://git-scm.com/docs/git-gc/.
