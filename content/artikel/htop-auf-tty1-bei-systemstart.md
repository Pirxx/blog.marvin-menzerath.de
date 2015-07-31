+++
title       = "htop beim Systemstart auf tty1 öffnen"
description = "Um am Server eine Anzeige über die aktuelle Last und laufende Prozesse zu haben bietet sich das Tool htop an, welches beim Systemstart gestartet wird."
date        = "2013-03-04T19:00:00"
tag         = ["Linux", "Software"]
+++

Um beim Betrieb von Servern an schwer zugänglichen Plätzen immer noch Zugriff auf diese zu haben, nutzt der Administrator einen SSH-Zugang. Doch meist will man am Server selbst noch eine Anzeige über die aktuelle Last und laufende Prozesse haben. Dazu bietet sich das Tool `htop` an, welches einfach auf `tty1` gestartet wird.

<!--more-->

## Voraussetzungen
Bevor `htop` beim Systemstart auf `tty1` anstatt eines Login-Screens gestartet werden kann, müssen Sie zwei Pakete installieren: `htop` selbst und `rungetty`. Dies geht mit diesem Befehl:
```bash
sudo apt-get update && sudo apt-get install htop rungetty
```

## Einrichtung
Öffnen Sie nun in Ihrem Editor die Datei `/etc/inittab` und suchen Sie nach folgenden Zeilen:
```
1:2345:respawn:/sbin/getty 38400 tty1
2:23:respawn:/sbin/getty 38400 tty2
3:23:respawn:/sbin/getty 38400 tty3
4:23:respawn:/sbin/getty 38400 tty4
5:23:respawn:/sbin/getty 38400 tty5
6:23:respawn:/sbin/getty 38400 tty6
```

Ändern Sie nun einfach die erste Zeile folgendermaßen ab und speichern Sie die Datei wieder ab:
```
1:2345:respawn:/sbin/rungetty -u username tty1 /usr/bin/htop
```

Nun können Sie Ihren Server rebooten und `htop` sollte auf `tty1` starten. Falls Sie sich nun einloggen wollen können Sie mit `Strg + Alt + F2/F3/F4/F5/F6` auf eine andere tty wechseln.

## Hintergrund
Durch Ihre Änderungen haben Sie bewirkt, dass anstatt eines Login-Screens nun beim nächsten Reboot `htop` gestartet wird und die laufenden Prozesse angezeigt werden. Am Beispiel der ersten Zeile möchte ich Ihnen außerdem die Ziffern und Zeichen erklären:
![HTOP](/images/htop-auf-tty1-bei-systemstart/htop.png)

* Der Doppelpunkt stellt das Trennzeichen der einzelnen Elemente dar
* Die erste Ziffer (`1`) steht für die ID und muss dem tty entsprechen
* Die nächsten Ziffern geben an, unter welchem Runlevel (–> Status des Systems) welche tty aktiv sein soll:
  * `0` –> System gestoppt (`halted`)
  * `1` –> Ein einziger User angemeldet
  * `2-5` –> Mehrere User angemeldet
  * `6` –> System startet neu
* `respawn` lässt den Prozess bei Abbruch neustarten; `once` ist das Gegenstück dazu
* Nun folgt der eigentliche Befehl:
  * `/sbin/rungetty` –> Programm startet unter den angegebenen Parametern andere Programme
  * `-u username` –> Verwendet den angegebenen User zum Start
  * `tty1` –> Auf welchem tty das Programm gestartet werden soll
  * `/usr/bin/htop` –> Dieses Programm wird schlussendlich gestartet