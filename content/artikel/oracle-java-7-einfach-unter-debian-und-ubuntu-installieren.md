+++
title       = "Oracle Java 7 einfach unter Debian und Ubuntu installieren"
description = "Wer statt dem OpenJDK-Java lieber Oracle Java nutzen will oder muss, kann unter Debian und Ubuntu diesen komfortablen Weg über einen Installer nehmen."
date        = "2013-12-18T17:12:00"
tag         = ["Debian", "Installation", "Java", "Linux", "Software", "Ubuntu"]
+++

Wer statt dem vorinstallierten OpenJDK-Java lieber Oracle Java nutzen will oder sogar muss, kann unter Debian und Ubuntu diesen einfachen und komfortablen Weg über einen Installer nehmen. Was Sie dazu tun müssen, lesen Sie hier.

<!--more-->

## Ubuntu
Der "Oracle Java 7 Installer" des [WebUpd8-Teams](http://www.webupd8.org/) muss nur durch ein PPA zu den Paketquellen des Betriebssystems hinzugefügt und anschließend installiert werden. Im einzelnen sehen diese Schritte so aus:

1. **Hinzufügen des PPA**: Fügen Sie das PPA zu Ihren Paketquellen hinzu, indem Sie folgenden Befehl ausführen:
`sudo add-apt-repository ppa:webupd8team/java`
2. **Installation des Installers**: Mittels dieses Befehls wird der Installer automatisch heruntergeladen und anschließend ausgeführt:
`sudo apt-get update && sudo apt-get install oracle-java7-installer`

## Debian
Unter Debian müssen Sie einen etwas komplizierteren Weg gehen, wobei Sie auch hier das Repository des WebUpd8-Teams nutzen können.

1. **Paketquelle hinzufügen**: Fügen Sie das Repository zu Ihren Paketquellen hinzu und importieren Sie den nötigen Schlüssel:
`sudo echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee -a /etc/apt/sources.list`  
`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886`
2. **Installation des Installers**: Mittels dieses Befehls wird der Installer automatisch heruntergeladen und anschließend ausgeführt:
`sudo apt-get update && sudo apt-get install oracle-java7-installer`

## Test der Installation
Nach der Eingabe von `java -version` sollten Sie folgende, oder eine ähnliche Ausgabe erhalten:
```
java version "1.7.0_10"
Java(TM) SE Runtime Environment (build 1.7.0_10-b18)
Java HotSpot(TM) 64-Bit Server VM (build 23.6-b04, mixed mode)
```

Falls Sie diese Ausgabe nicht sehen sollten, müssen Sie noch die Umgebungsvariablen festlegen:

### Einrichtung der Umgebungsvariablen
Ein weiterer, letzer Befehl, der auf der Konsole ausgeführt werden muss, falls die neue Java-Installation nicht schon als Standard-Java festgelegt wurde:
```
sudo apt-get install oracle-java7-set-default
```

## Und was ist mit Oracle Java 8?
Auch die Version 8 von Java können Sie mittels dieses Repositorys installieren. Ersetzen Sie dazu einfach bei der Installation `oracle-java7-installer` durch ein `oracle-java8-installer`. Fertig.

## Fazit
Dank dem Installer des WebUpd8-Teams ist die Installation des Oracle Javas sehr einfach gestaltet und auch für Laien zu empfehlen. Grundsätzlich macht der Installer aber auch nicht viel auf Ihrem System: Das Paket wird heruntergeladen, entpackt und eingerichtet.
Durch die Nutzung der Paketquellen wird diese Java-Installation auch bei neuen Versionen aktuell gehalten.