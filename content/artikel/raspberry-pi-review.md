+++
title       = "Raspberry Pi - Erfahrungen & Review"
description = "In diesem Review lesen Sie meine Erfahrungen zur Performance und zum Umgang mit dem sehr günstigen, Linux-fähigen Mini-Computer Raspberry Pi."
date        = "2012-10-27T22:00:00"
tag         = ["Linux", "Raspberry Pi", "Review"]
+++

In diesem Review lesen Sie meine Erfahrungen zur Performance und zum Umgang mit dem sehr günstigen Mini-Computer Raspberry Pi.

<!--more-->

## Was ist der Raspberry Pi?
Der Raspberry Pi ist ein **kleiner, EC-Karten großer Computer** auf einem Board mit allen nötigen Anschlüssen wie Netzwerk, USB und HDMI, jedoch nur 256 / 512 MB RAM und einer ARM-CPU (700 MHz – 1 GHz). In diesem Artikel möchte ich Ihnen meine Erfahrungen mit dem Mini-Computer mitteilen.

![Raspberry Pi](/images/raspberry-pi-review/RaspberryPi.jpg)

Gekostet hat der Mini-PC **fast 41 Euro**, die Lieferzeit betrug (Interesse am 16.6 registriert, am 29.6 bestellt, am 23.7 geliefert) insgesamt etwas mehr als einen Monat.

## Erste Schritte mit dem Gerät
Das Betriebssystem der Wahl ist **Raspbian**, ein für den RasPi angepasstes **Debian Wheezy Linux**. Dieses muss vor dem ersten Start auf eine SD-Karte installiert werden (min. 2 GB).
Beim ersten Start werden grundlegende Aufgaben von einem Assistenten übernommen. Nach der Erstellung eines neuen Nutzers habe ich die **RAM-Aufteilung** für das System und die GPU auf ein Verhältnis von 224 MB : 32 MB geändert (andere Verhältnisse jederzeit möglich) um meinem zukünftigen Mini-Server mehr Power zu geben.
Danach habe ich den bereits vorhandenen **SSH-Server** aktiviert und den RasPi nur noch über das Netzwerk genutzt.

## Einrichtung als Server
Bereits bei den ersten Updates fällt die **geringe Rechenleistung** des Geräts auf: Die Bildung der Paketliste dauerte länger als unter einem "normalen" PC und auch die Installation der Pakete wie einem apache2-Webserver (mit PHP und Zusatzmodulen) zog sich in die Länge.
Alle weiteren Installationsschritte habe ich nun nach meinem [Tutorial zu einem Ubuntu-Server](/artikel/ubuntu-server-installieren-und-einrichten/) vollzogen und kann nun nach mehreren kurzen Tests einige Informationen über die Performance des Geräts geben.

## Die Performance
Das Kopieren von Dateien auf den RasPi hatte über das Netzwerk (via Samba-Freigaben) eine Geschwindigkeit von **3MB/s bis 6MB/s**, innerhalb des Dateisystems bis zu **10MB/s**.

Der apache2 läuft flüssig und schnell (bei max. 10 gleichzeitigen Anfragen einer kleinen Test-Seite), bei PHP-Anwendungen wird es langsamer (max. 5 gleichzeitige Anfragen einer DokuWiki-Seite). MySQL ist jedoch so gut wie nicht zu benutzen: Im „Ruhezustand" werden knapp 20% der CPU und 40% RAM verbraucht, daher benutze ich SQlite, was wesentlich schneller ist.

Der Seitenaufbau von **OwnCloud dauerte knapp 5 Sekunden**, was bei der kleinen Hardware für mich noch zu verschmerzen ist. Die Geschwindigkeit aller PHP-Anwendungen lässt sich jedoch durch die Nutzung eines Cache-Plugins (`sudo apt-get install php-acp`) drastisch erhöhen. Wichtig ist, dass all diese Werte je nach CPU-Last variieren können!

Bildquelle: [Jwrodgers](http://commons.wikimedia.org/w/index.php?title=User:Jwrodgers) - [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)