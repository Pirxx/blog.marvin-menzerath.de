+++
title       = "VirtualBox: VM skriptgesteuert starten und stoppen"
description = "Hier erfahren Sie, wie Sie virtuelle Maschinen in VirtualBox durch Skripte bequem im Hintergrund starten und stoppen können."
date        = "2016-02-08T03:25:00"
tag         = ["Programmierung", "Software", "VirtualBox"]
+++

Um virtuelle Maschinen in VirtualBox starten oder stoppen zu können, muss man nicht immer manuell die Verwaltung öffnen.
Mit zwei kurzen Skripten können Sie Ihre VMs bequem im Hintergrund starten und stoppen.

<!--more-->

Ich gehe im Folgenden davon aus, dass Sie bereits eine virtuelle Maschine eingerichtet und eventuell auch installiert haben.

## Skripte
Die beiden nun folgenden Skripte können Sie unter Windows einfach in eine Text-Datei hineinkopieren und mit der Dateiendung `.cmd` versehen.
Anschließend müssen Sie noch den Namen der zu startenden / stoppenden VM angeben.

Als Linux-Nutzer ist höchstens die jeweils letzte Zeile der Skripte von Bedeutung, da die Befehlssyntax zwischen allen Plattformen die gleiche ist.

### VM starten
Dieses Skript startet die VM im Hintergrund und lässt diese solange laufen, wie das Konsolenfenster geöffnet bleibt:
```batch
@echo off
cd /D "C:\Program Files\Oracle\VirtualBox\"
VBoxHeadless.exe -startvm "[Name der VM]"
```

### VM stoppen
Dieses Skript speichert den Zustand der VM und schließt alle noch zur VM gehörenden Konsolenfenster:
```batch
@echo off
cd /D "C:\Program Files\Oracle\VirtualBox\"
VBoxManage.exe controlvm "[Name der VM]" savestate
```
