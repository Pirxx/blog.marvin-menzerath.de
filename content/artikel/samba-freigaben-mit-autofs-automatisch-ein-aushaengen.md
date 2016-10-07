+++
title       = "Samba-Freigaben mit Autofs automatisch ein- und aushängen"
description = "Um Samba-Freigaben unter Linux nur bei Bedarf einzuhängen existiert die Software Autofs, die in diesem Artikel installiert und eingerichtet wird."
date        = "2016-10-07T18:22:00"
lastmod     = "2016-10-07T18:22:00"
tag         = ["Linux", "Software"]
+++

Um Samba-Freigaben (oder Partitionen im Allgemeinen) unter Linux bei Bedarf einzuhängen und bei längerer Nichtbenutzung wieder auszuhängen, existiert die Software Autofs, die in diesem Artikel installiert und beispielhaft eingerichtet wird.

<!--more-->

Ein Einsatzzweck der Software ist z.B. das Mounten einer Netzwerk-Freigabe eines NAS-Systems, welches sich bei Inaktivität selbstständig in den Standby versetzen kann. Mountet man diese Freigabe auf einem herkömmlichen Weg kann es sein, dass das NAS niemals "schlafen geht". Anderenfalls geht es vielleicht in den Standby und trennt dabei die Verbindung, sodass die Freigabe erneut von Hand gemountet werden muss.

Durch den Einsatz von Autofs wird die Freigabe selbstständig bei Inaktivität geunmountet und (sobald wieder Daten aus dieser benötigt werden) gemountet.

## Installation
Die Installation geschieht unter Debian-Systemen und -Derivaten mittels folgenden Befehls:
```bash
root@debian:~# apt update && apt install autofs
```

## Konfiguration
Die Konfiguration geschieht in zwei Dateien: der **Master-Map-Datei** unter `/etc/auto.master` und der entsprechenden **Map-Datei** unter `/etc/auto.xxx` (hier muss `xxx` durch einen passenden Namen ersetzt werden).

Im Folgenden sollen zur Veranschaulichung drei Freigaben eines NAS (namentlich `music`, `photo` und `video`) in gleichnamigen Verzeichnissen unter `/mnt/nas/` gemounted werden. Die beiden Konfigurationsdateien liegen dabei unter `/etc/auto.master` und `/etc/auto.nas`.

### Master-Map
In dieser Datei werden die zu beobachtenden Maps angegeben.
Fügen Sie hier einfach die folgende Zeile ans Ende der Datei an:
```
/mnt/nas /etc/auto.nas -timeout=60 --ghost
```

Die Syntax lautet hier: `<Verzeichnis> <Map-File> [Parameter]`
Dabei sollen die Freigaben nach einer Inaktivität von 60 Sekunden geunmounted werden (`-timeout=60`) und es sollen für die einzelnen Freigaben leere Verzeichnisse vor dem Mounten erstellt werden (`--ghost`).

### Map
In dieser Datei werden die einzelnen Freigaben und Mountoptionen angegeben.
Fügen Sie hier einfach die folgenden Zeilen ans Ende der Datei an:
```
music -fstype=cifs,guest,ro ://192.168.1.10/music
photo -fstype=cifs,guest,ro ://192.168.1.10/photo
video -fstype=cifs,guest,ro ://192.168.1.10/video
```

Die Syntax lautet hier: `<Freigabe> <Parameter> <Pfad zur Freigabe>`
In diesem Falle wird das CIFS-Netzwerkprotokoll (`-fstype=cifs`) verwendet, um die Samba-Freigaben als Gast (`guest`) und read-only (`ro`) zu mounten. Dabei sind diese Freigaben stets unter der gleichen IP-Adresse (`192.168.1.10`) und unter ihrem jeweiligen Namen aufzufinden.

Müssen Nutzername und Passwort zur Authentifizierung angegeben werden, so lautet das Format einer solchen Zeile folgendermaßen:
```
music -fstype=cifs,username=[nutzername],password=[passwort],ro ://192.168.1.10/music
```
Dabei müssen `[nutzername]` und `[passwort]` natürlich durch die jeweiligen Zugangsdaten ersetzt werden.

## Abschließende Arbeiten
Nun muss der Autofs-Service nur noch durch den folgenden Befehl neugestartet werden:
```bash
root@debian:~# systemctl restart autofs.service
```

Anschließend werden die benötigten Freigaben sofort eingehangen, sobald eines der jeweiligen Verzeichnisse benötigt wird. Dazu reicht der Zugriff via Dateimanager oder Terminal.
