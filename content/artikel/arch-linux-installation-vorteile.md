+++
title       = "Arch Linux: Installation mit Desktopumgebung und Vorteile"
description = "Arch Linux bietet dank Rolling Release und weiteren Faktoren wesentliche Vorteile gegenüber anderen Distributionen, ist jedoch nicht einfach zu installieren."
date        = "2013-06-20T19:55:00"
tag         = ["Arch", "Installation", "Linux"]
+++

Unter den Linux-Kennern hat sich Arch Linux bereits seit langem einen Namen gemacht. Es bietet gegenüber den anderen, bekannten Distributionen einige Vorteile, wobei der User auch eine längere Installation in Kauf nehmen muss.

<!--more-->

## Was ist Arch Linux überhaupt und wo liegen die Stärken?
Arch Linux hat sich in den letzten Jahren zu einer der beliebtesten Distributionen entwickelt. Und das meiner Meinung nach ganz zurecht, da es als **Rolling-Release Distribution** einen ganz entscheidenden Vorteil gegenüber den meisten anderen Distributionen bietet: **sehr aktuelle Software**.
Angefangen beim Linux Kernel, über die Gnome Shell bis hin zu alltäglichen Paketen wie LibreOffice - alles immer aktuell. Nur sehr selten kommt es dabei zu Problemen, die meist sehr einfach mit einem Blick auf die [Internetseite der Distribution](http://www.archlinux.de/) zu lösen sind.

Die sehr ausführlichen [Wiki-Texte](http://wiki.archlinux.de/title/Hauptseite) sind auf Englisch sowie Deutsch verfügbar und bieten auch Einsteigern schnelle Hilfe und gute Anleitungen. Diese sind vor allem bei der Installation nötig, da diese ohne einen grafischen Installer geschieht und somit für absolute Anfänger eher ungeeignet ist. Die [Anleitung im Wiki](http://wiki.archlinux.de/title/Anleitung_f%C3%BCr_Einsteiger) richtet sich eher an fortgeschrittene Anwender, die sich nicht vor dem Umgang mit der Konsole scheuen.

## Die Installation
Die Installation geht nur "zu Fuß", wobei die entsprechende [Wiki-Seite](http://wiki.archlinux.de/title/Anleitung_f%C3%BCr_Einsteiger) dabei hilft. Das heißt, dass Sie sich nicht durch einen Assistenten durchklicken können, sondern jeden Befehl selbst eingeben müssen. Dadurch installieren Sie schließlich das Grundsystem auf Ihrer Festplatte und können nach der Einrichtung und einem Reboot direkt mit Ihrem System arbeiten. Natürlich sollten Sie einen eigenen User anlegen und nicht unter dem Root-Account arbeiten. Falls Sie eine grafische Benutzeroberfläche wünschen, finden Sie [hier](http://wiki.archlinux.de/title/Kategorie:Desktopumgebung) eine entsprechende Übersicht, die auf die weiteren Wiki-Seiten weiterleitet. Meist geschieht die Installation somit mit nur wenigen Befehlen.

Falls Sie sich eine solche Installation nicht zutrauen, empfehle ich Ihnen [Antergos](http://antergos.com/). Dies ist eine Live-CD, die eine Installation von Arch Linux mit einer grafischen Benutzerobefläche (Gnome Shell, Cinnamon, Xfce, KDE) unter Verwendung eines Installers ermöglicht. Diese Installationsart dauert ein wenig länger als gewöhnlich, bietet dafür aber einen hohen Komfort für den Anwender.

## Besonderheiten und Vorteile
Ich bin von Ubuntu auf Arch umgestiegen, da es einfach schneller und aktueller ist. Ich lege persönlich sehr viel Wert auf aktuelle Software und war unter Ubuntu 13.04 lange davon genervt, dass mir ohne PPAs kein LibreOffice 4.0 oder GIMP 2.8 zur Verfügung stand. Weiterhin bietet Arch Linux einige Besonderheiten, die Sie vor einem eventuellen Umstieg kennen sollten:

* Der Package-Manager `pacman`: Anstatt `apt-get` verwenden Sie einfach den Befehl `pacman`, um Pakete zu installieren oder upzudaten. Die Installation von FileZilla geschieht somit durch den Befehl `pacman -S filezilla`, ein System-Update durch `pacman -Syu`.
* Keine Releases: Durch die Verwendung einer Rolling-Release Distribution gibt es keine Releases mehr (wie unter anderem bei Ubuntu). Die Software wird stattdessen immer durch Updates aktuell gehalten. Ein kleiner Nachteil dabei ist jedoch, dass manche Pakete nicht genug getestet wurden und so instabil sein können.
* AUR: Das ArchLinux User-Community Repository bietet dem User den Vorteil (wie bei PPAs), Software zu installieren, die nicht in den offiziellen Paketquellen enthalten ist. Diese Quellen werden von Usern erstellt und gepflegt, sodass hier Vorsicht geboten ist.

## Fazit
Arch Linux ist definitiv die Distribution der Zukunft. Immer mehr User wenden sich von "großen" Distributionen wie Ubuntu ab und suchen nach neuen Alternativen. Bereits jetzt steht Arch auf Platz 8 des [DistroWatch.com-Rankings](http://distrowatch.com/) und wird auch bei unerfahrenen Anwendern durch Forks (Abspaltungen) und Projekte wie Antergos immer bekannter.
Falls Sie eine aktuelle, stabile und schnelle Distribution suchen, die Sie frei anpassen wollen, kann ich Ihnen Arch Linux nur empfehlen. Probieren Sie es aus, das iso-Image ist nur rund 500MB groß!