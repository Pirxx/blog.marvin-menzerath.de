+++
title       = "Raspberry Pi: SD-Karte sichern und wiederherstellen"
description = "Die SD-Karte des Raspberry Pis lässt sich mit einfachen Linux-Bordmitteln oder einem Windows-Tool komplett sichern und im Bedarfsfall wiederherstellen."
date        = "2015-11-06T16:42:00"
tag         = ["Raspberry Pi"]
+++

Eine SD-Karte kann schnell und vor allem unerwartet den Geist aufgeben: Daten lassen sich nicht mehr schreiben oder schlimmstenfalls auch nicht mehr lesen.
Daher ist es immer ratsam, ein möglichst aktuelles Backup der SD-Karte zu haben - schließlich liegen auf dieser nicht nur (z.B.) Projektdaten, sondern das ganze Betriebssystem.

<!--more-->

Mit einem Linux-Boardmittel oder einem simplen Windows-Tool können Sie die SD-Karte ganz einfach sichern und bei Bedarf wiederherstellen.

## Linux
Bei den allermeisten Linux-Distributionen ist das Tool `dd` (umgangssprachlich auch `Disk Destroyer` genannt) bereits enthalten oder kann einfach nachinstalliert werden.
Entnehmen Sie die SD-Karte aus Ihrem Raspberry Pi, nachdem Sie diesen heruntergefahren haben und legen Sie die Karte in Ihren Kartenleser ein. Bestenfalls sollte Ihre Distribution keine der Partitionen der Speicherkarte mounten. Falls doch, müssen Sie diese wieder aushängen.

### SD-Karte finden
Öffnen Sie nun ein Terminal-Fenster, melden Sie sich dort als Root an und nutzen Sie folgenden Befehl, um eine Liste aller vorhandenen Speichergeräte zu finden:
```bash
fdisk -l
```
Anhand der Größe Ihrer Speicherkarte sollten Sie schnell den Namen der Karte herausfinden können. In den meisten Fällen lautet dieser z.B. `/dev/sdb` oder `/dev/sdc`.

### Backup starten
Starten Sie nun die Sicherung der gesamten Speicherkarte durch folgenden Befehl:
```bash
dd bs=4M if=/dev/sdb | gzip > /home/username/raspi_backup.img.gz
```
Ersetzen Sie hierbei `/dev/sdb` durch den Namen Ihrer SD-Karte, den Sie dem vorherigen Schritt entnommen haben. Außerdem muss `username` durch Ihren Benutzernamen ersetzt werden.
Das komprimierte Backup wird dann in Ihrem Heimatverzeichnis abgelegt.

Je nach Größe der SD-Karte und der darauf befindlichen Daten kann dieser Vorgang einige Minuten dauern. Währenddessen erhalten Sie keine Ausgabe im Terminal-Fenster.

### Backup wiederherstellen
Um nun das Backup wiederherzustellen, genügt ebenfalls ein einfacher Befehl:
```bash
gunzip -c /home/username/raspi_backup.img.gz | sudo dd bs=4M of=/dev/sdb
```
Auch hier müssen Sie wieder Ihren Nutzernamen und den Bezeichner Ihrer SD-Karte passend ersetzen. Außerdem muss der Name der komprimierten Datei angepasst werden.

Erneut erhalten Sie keine Ausgabe beim Schreiben des Backups auf die SD-Karte. Erst im Anschluss erhalten Sie einen Status-Report über den Kopiervorgang.

## Windows
Unter Windows benötigen Sie ein Tool namens "Win32 Disk Imager", welches Sie von der [SourceForge-Seite](http://sourceforge.net/projects/win32diskimager/) oder [heise.de](http://www.heise.de/download/win32-disk-imager-1192033.html) herunterladen können.

Entnehmen Sie die SD-Karte aus Ihrem Raspberry Pi, nachdem Sie diesen heruntergefahren haben und legen Sie die Karte in Ihren Kartenleser ein.

### SD-Karte finden
Öffnen Sie ein Explorer-Fenster und merken Sie sich den Buchstaben, den Windows (der einzigen für Sie sichtbaren Partition) zugewiesen hat.

### Backup starten
Wählen Sie zunächst über das Ordner-Icon ein Verzeichnis, in dem das Tool die Backup-Datei ablegen soll und wählen Sie anschließend im Laufwerks-DropDown-Menü (rechts daneben) den zuvor gemerkten Buchstaben aus.
Klicken Sie nun auf `Read`, bestätigen Sie die auftauchende Warnung und warten Sie, bis die Datei fertig geschrieben wurde.

### Backup wiederherstellen
Wählen Sie die Backup-Datei und den gemerkten Laufwerksbuchstaben aus und klicken Sie auf `Write`. Bestätigen Sie die auftauchende Warnung und warten Sie, bis die Datei fertig geschrieben wurde.

## Fazit
Sowohl unter Linux, als auch unter Windows lassen sich schnell und einfach Backups von SD-Karten anlegen, die die komplette Karte (und nicht nur einzelne Partitionen oder Verzeichnisse) sichern.
Beachten Sie, dass Sie keine Backups direkt von Ihrem Raspberry Pi aus starten oder wiederherstellen sollten. Es geht zwar, macht das Backup aber unter Umständen unbrauchbar.
