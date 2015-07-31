+++
title       = "Raspberry Pi: Raspbian auf Debian 8 \"Jessie\" aktualisieren"
description = "Schon vor Veröffentlichung von Debian 8 \"Jessie\" können Sie das Raspbian Ihres Raspberry Pi ganz einfach mit wenigen Befehlen aktualisieren."
date        = "2014-01-26T19:29:00"
tag         = ["Debian", "Raspberry Pi", "Raspbian"]
+++

Das beliebteste Betriebssystem des Raspberry Pis ist Raspbian, welches auf Debian 7 "Wheezy" basiert. Seit einiger Zeit bieten die Repositorys aber auch Pakete aus Debian 8 "Jessie" an, dem Nachfolger von "Wheezy". Diese sind um einiges aktueller als die "Wheezy"-Pakete, müssen aber nicht unbedingt stabil sein.

<!--more-->

## Aktualisierung ausführen
Um das Update auf die Pakete des `testing`-Zweigs durchzuführen, öffnen Sie die Datei `/etc/apt/sources.list` mit dem Text-Editor Ihrer Wahl und ändern Sie alle Vorkommen von `wheezy` auf `jessie`. Die Datei müsste nun so (oder ähnlich aussehen):
```
deb http://mirrordirector.raspbian.org/raspbian/ jessie main contrib non-free rpi
```

Nun noch die Datei abspeichern und das Update anstoßen. Dies kann (je nach Internet-Verbindung) bis zu eine Stunde lang dauern:
```
sudo apt-get update && sudo apt-get dist-upgrade
```

Anschließend muss der Raspberry Pi noch neu gestartet werden und das Update ist beendet.