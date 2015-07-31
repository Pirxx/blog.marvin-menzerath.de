+++
title       = "Eigene Linux Distribution erstellen: Remastersys"
description = "Mit Remastersys lassen sich Backups des gesamten Linux-Systems als iso-Image anlegen, um dieses auf anderen Rechnern live zu starten oder zu installieren."
date        = "2012-07-14T21:00:00"
tag         = ["Debian", "Linux", "Software", "Ubuntu"]
+++

Wer sein persönlich eingerichtetes Linux-Betriebssystem gerne mit dabei hat, sollte sich diesen Artikel genauer ansehen: Denn mit dem gratis Tool Remastersys ist es möglich, ein bootbares Abbild Ihrer Installation zu erstellen.

<!--more-->

## Das Tool Remastersys
Mit dem **kostenfreien Tool Remastersys** lassen sich einfach **Backups** der ganzen Installation eines Debian oder Ubuntu anlegen, auf Wunsch mit oder ohne dem **Benutzerverzeichnis**. So lassen sich z.B. fertig eingerichtete (aber lokale) Webserver einmal sichern und auf anderen Rechnern live starten und auch installieren. Eine andere Verwendungsmöglichkeit wäre aber auch als Systemadministrator, die eigene komplette Rettungsumgebung für PCs (so etwas hätte ich bereits öfter gebraucht) immer mit dabei zu haben. Also müssen Sie nie wieder auf den gewohnten Komfort Ihrer Paketzusammenstellung verzichten.

Natürlich sind auch ganz normale Backups möglich (im Grunde ist dies auch nur ein Backup).

## Die Nutzung und Einrichtung
In folgendem Video sehen Sie die Installation des Tools, das Backup sowie den späteren Startvorgang von dieser iso-Datei aus.

Leider hat der Uploader das entsprechende Video gelöscht. - Daher hier nun ein Video-Tutorial von SemperVideo:
<iframe width="960" height="720" src="//www.youtube-nocookie.com/embed/BWa4a1ofY7w?rel=0" frameborder="0" allowfullscreen></iframe>

Die in dem Video gezeigten Schritte sind grob folgende:

* **Remastersys herunterladen und installieren**: Dazu die Paketquelle des Tools in der Paketverwaltung eintragen und im Software-Center Remastersys suchen und mit GUI-Plugin installieren.
* **Remastersys starten und ausführen**: Im Anwendungsmenü nach Remastersys suchen, dieses Starten und auf "Clear Working Folder" Klicken, danach auf "Backup".
* **Warten**: Nun dauert der Vorgang einige Zeit, danach finden Sie unter /home/remastersys/remastersys/custom.iso Ihr LiveCD-Image.

Sie sollten jedoch, falls Sie Ihr System zum Download anbieten wollen, bedenken, dass properitäre Software wie der Adobe Flash Player oder Nvidia/AMD Grafikkartentreiber NICHT mitverteilt werden dürfen!

Wenn nur die Erstellung einer personalisierten Ubuntu-LiveCD/DVD gewünscht ist, kann man auch das [Ubuntu Customization Kit](http://wiki.ubuntuusers.de/Ubuntu_Customization_Kit) verwenden.