+++
title       = "Einsteiger-NAS Synology DS215j im Test"
description = "Die Synology DiskStation 215j ist für 160€ ein günstiges und funktionsstarkes NAS. Es kann als Dateispeicher, Mediencenter und vielem mehr verwendet werden."
date        = "2015-07-11T13:45:00"
tag         = ["NAS", "Review"]
+++

Auf der Suche nach einem preiswerten, aber dennoch voller Funktionen steckenden NAS (Network Attached Storage - Netzwerkspeicher) bin ich bei der Synology DiskStation 215j hängen geblieben.
Dieses ist für ca. 160€ erhältlich und bietet Platz für bis zu zwei Festplatten - ist also für den Betrieb im RAID 1 geeignet.

<!--more-->

## Installation und Inbetriebnahme
Zusammen mit dem NAS-System habe ich auch 2x WD Red Festplatten mit jeweils 2TB Speicher bestellt. Diese Festplatten sind für den 24/7 Betrieb in Servern und ähnlichen Umgebungen ausgelegt und werden mit einer mehrjährigen Garantie geliefert.
Ein Gesamtpaket aus NAS und Festplatten gibt es unter anderem bei [Cyberport.de](http://www.cyberport.de/synology-diskstation-ds215j-nas-system-4tb-inkl-2x-wd-red-wd20efrx-festplatten-3FW1-04U_225.html).

Zur Inbetriebnahme schiebt man einfach die Abdeckung vom NAS herunter, schiebt die beiden Festplatten in die Schächte, schraubt diese fest, setzt die Abdeckung erneut auf, klemmt Netzwerk und Strom an und schon ist das System bereit zum ersten Einschalten.

Nun können Sie http://find.synology.com aufrufen. Diese Seite findet das NAS in Ihrem Netzwerk und führt Sie zur Installation des Betriebssytems - dem DiskStation Manager (DSM). Dieses wird nun in den nächsten zehn Minuten heruntergeladen und installiert.
Anschließend können Sie dem NAS einen Namen geben und das Administrationskonto einrichten.

## Konfiguration
Die Konfiguration geschieht über ein einfaches, aber sehr mächtiges Webinterface.
Dort können Sie nicht nur die freigegebenen Ordern verwalten, Berechtigungen für Gruppen und Benutzer einrichten, Web-Dienste (Apache, PHP, MySQL), eine Download-Station und vieles mehr installieren, sondern auch alle systembezogenen Einstellungen vornehmen.

Eine Übersicht über alle Funktionen und eine Demo der Oberfläche ist unter https://www.synology.com/de-de/dsm verfügbar.

### Pakete
Wie bei beinahe jedem aktuellen NAS von Synology, lassen sich auch beim DS215j sehr viele Pakete mit weiteren Funktionen nachinstallieren.
Neben den offiziellen Paketquellen, die u.a. auch Python, Node.js und viele weitere Pakete beinhalten, existieren auch einige [Community-Paketquellen](https://synocommunity.com). Diese enthalten z.B. aktuellere Versionen von Synology-gepflegten Paketen oder gänzlich neue Pakete. So kann man mit nur einem Klick z.B. den Musik-Player Subsonic installieren.

## Das System im Alltag
Tagtäglich verwende ich einige Samba-Freigaben zum Sichern von Dokumenten und großen Dateien, die ich ansonsten im Falle eines Datenverlustes nur schwer oder durch mehrtägige Downloads wiederherstellen könnte. Dazu nutze ich die Software PureSync, die um einiges mächtiger, jedoch nicht so leicht einzurichten ist wie die Synology CloudStation.

Die Übertragungsraten belaufen sich im Gigabit-Ethernet auf rund 110 MB/s (lesend) und 85 MB/s (schreibend), womit sie für so ziemlich alle Anwendungsfälle im privaten Netzwerk vollkommen ausreichend sind.

Weiterhin nutze ich auch gerne die UPnP-Funktion, um Musik, Videos / Filme und Bilder auf entsprechende Endgeräten streamen zu können.
Dazu gehören z.B. entsprechend ausgezeichnete Smart-TVs, aber auch der Google Chromecast oder der Fire TV (Stick).

Der LAMP-Stack (Apache, MySQL, PHP) eignet sich außerdem hervorragend als kleine Entwicklungsumgebung, da alle Pakete leicht durch das Paketzentrum aktuell zu halten sind und sich die Dateien nicht nur via Samba, sondern auch via (S)FTP auf das NAS schieben lassen.
Die Arbeitsgeschwindigkeit ist auch bei PHP - das sonst nicht unbedingt mit seiner Geschwindigkeit glänzt - angenehm hoch.
Einziger Wermutstropfen: Die Konfiguration der einzelnen Anwendungen lässt sich nicht ohne weiteres bearbeiten - hierzu muss via SSH auf einer tieferen Ebene eingegriffen werden.

Das Mediencenter Plex läuft ebenfalls auf dem NAS, wobei die Encodierung in kleinere Bildschirmauflösungen oder niedrigere Qualität (z.B. für Streaming über Mobilfunk) aufgrund des 800 MHz Dual-Core Prozessors nicht möglich ist.

Sehr gerne nutze ich außerdem die Funktion des Systems, die Festplatten bei Nichtbenutzung abzuschalten. Somit verringert sich der Energiebedarf des Systems und der Geräuschpegel des Geräts.
Letzerer ist allerdings auch bei laufenden Festplatten angenehm niedrig, sodass man bei der Arbeit am PC das NAS gar nicht wahrnimmt.
Zur Not lässt sich sogar die Lüftergeschwindigkeit so weit herunterdrehen, dass man noch viel weniger vom NAS hört.

## Fazit
Das vergleichsweise preiswerte, aber funktionsstarke NAS möchte ich nicht mehr missen. Es dient nicht nur als Netzwerkspeicher, sondern erfüllt zugleich noch die Funktion eines Mediencenters, einer Web-Entwicklungsumgebung und kann bei Bedarf um noch mehr Funktionen ausgebaut werden.
Das Einstiegsmodell DS215j ist vor allem für die Anwender geeignet, die trotz eines engen Geldbeutels ein starkes und ausfallsicheres NAS brauchen.
