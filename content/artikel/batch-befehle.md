+++
title       = "Einfache Batch-Befehle und Skripte"
description = "In diesem Artikel lernen Sie vielfältige Batch-Befehle und -Skripte für Windows kennen und erfahren außerdem, wie Sie Ihnen viel Arbeit abnehmen können."
date        = "2012-06-27T23:00:00"
tag         = ["Windows"]
+++

In diesem Artikel lernen Sie einfache Batch-Befehle und -Skripte kennen und erfahren außerdem, wie Sie Ihnen viel Arbeit abnehmen können.

<!--more-->

## Einstieg
Auf den Wunsch einer bestimmten Person (ich hoffe, sie fühlt sich angesprochen) hier eine kleine Übersicht möglicher Befehle für eine Batch-Datei. Sollten diese Person oder Sie noch Fragen haben, einfach hier in den Kommentaren posten!

Einfaches Skript, das den Rechner nach Drücken einer Taste herunterfährt:
```
@echo off
echo Rate mal, was gleich passiert...
pause
shutdown -s -t 00 -f
```

Öffnen eines Bildes, einer Musik-Datei und einem Word-Dokument (im gleichen Ordner wie dem Skript) nach Drücken von Tasten:
```
@echo off
pause
bild.jpg
pause
musik.mp3
pause
text.docx
```

Wechseln des Verzeichnisses auf Laufwerk `X:`, in das Verzeichnis `Geheim\TopSecret\Meins`, und öffnen einer Musik-Datei:
```
@echo off
X:
cd Geheim\TopSecret\Meins
musik.mp3
```

## Erklärung der einzelnen Befehle
- `@echo off`: Unterdrückt die Ausgabe der einzelnen Befehle (sieht dann schöner aus)
- `pause`: Wartet auf einen Tastendruck, danach wird fortgefahren
- `datei.dateiendung`: Öffnet die betreffende Datei (egal, ob Programm, Bild oder Anderes)
- `X:`: Wechselt auf das Laufwerk X
- `cd [Ordner]`: Wechselt in den Ordner "Ordner"
- `echo [Text]`: Gibt den Text "Text" aus.
- `shutdown`: Programm zum Herunterfahren/Neustarten/Abmelden: - `-s`: Herunterfahren
  - `-r`: Neustarten
  - `-l`: Abmelden
  - `-a`: Aktion abbrechen
  - `-f`: Zwingen, alle Programme zu beenden
  - `-t 05`: Führt die Aktion in 5 Sekunden aus

## Dateioperationen

### Kopieren
Auch das Kopieren von Dateien ist mit Batch-Befehlen einfach möglich:
```
copy X:\MeineSachen\Irgendwas\coolesLied.mp3 C:\Sammlung\Lied1.mp3
```

Hier wird die Datei `coolesLied.mp3` von Laufwerk `X:` aus den Unterordnern nach Laufwerk `C:` in einen Unterordnet kopiert und in `Lied1.mp3` umbenannt. Man könnte aber auch folgendes machen:

```
copy geheim.png C:\ProgramData\Microsoft\Windows\StartMenu\Programs\Startup\NichtsBoeses.exe
```

Diese Zeile würde beispielsweise ein Bild namens `geheim.png` (welches u.U. auch nur eine umbenannte `*.exe` ist) in den Autostart-Ordner aller Benutzer kopieren, und dabei in eine `*.exe` Datei – welche böse sein könnte – umbenennen.

### Löschen
Mit
```
del geheim.png
```
lässt sich eine Datei auch löschen.