+++
title       = "Von Wordpress zu Ghost - Was sich geändert hat"
description = "Mit dem Umstieg von Wordpress auf Ghost haben sich einige Dinge an diesem Blog verändert. Die wichtigsten Neuerungen habe ich hier zusammengefasst."
date        = "2014-10-26T16:38:00"
tag         = ["CMS", "Ghost", "Umstieg", "Wordpress"]
+++

Vor wenigen Tagen habe ich diesen Blog vom bekannten Blog-CMS Wordpress auf Ghost umgestellt. Dieses CMS nutzt mit NodeJS eine relativ neue Technik und bietet trotz eines frühen Entwicklungsstands einige Vorteile gegenüber dem Allzweckwunder Wordpress.

<!--more-->

Gleichzeitig hat dieser Umstieg aber auch ein paar Veränderungen mit sich gebracht.

## Warum der Umstieg?
Wordpress ist - schlicht und einfach - zu langsam geworden. Das Admin-Dashboard hat gerne mehrere Sekunden zum Laden gebraucht und auch das Frontend war nicht gerade schnell.

Das vor rund einem Jahr veröffentlichte Ghost ist ein einfaches Blog-CMS und nutzt statt PHP [NodeJS](http://nodejs.org/), welches die Programmierung von Software in JavaScript ermöglicht. Im Gegensatz zu Wordpress fehlen zwar noch ein paar Funktionen (wie zum Beispiel eine Plugin-Schnittstelle), dennoch lassen sich viele Alternativen im jeweiligen Theme als JavaScript unterbringen.

## Änderungen
Mit dem Umstieg haben sich einige Dinge verändert, welche ich hier kurz aufzeigen möchte.

### Kategorien
Da Ghost keine Kategorien, sondern nur Tags unterstützt, hat sich der Seitenaufbau leicht verändert. Zwar hatte ich die Kategorie bereits vor längerer Zeit aus der URL entfernt, dennoch ist es etwas ungewohnt jeden Artikel mit einem oder mehreren Tags zu versehen statt eine Kategorie anzugeben.

### Theme
Ganz offensichtlich hat sich das genutzte Theme verändert. Statt (dem mittlerweile gefühlt überall genutzten) "Hueman" von Alx nutze ich nun ein zwei-spaltiges, den Bildschirm komplett ausfüllendes und Smartphone-freundliches Theme.
Dank eines einfachen Systems lassen sich in Ghost Themes sehr einfach erstellen und anpassen.

### Kommentare
Statt Disqus verwende ich nun [isso](http://posativ.org/isso/), welches (a) schneller lädt, (b) auf dem eigenen Server liegt und (c) vollständige Anonymität bietet/bieten kann.

### Posts bei Facebook & Twitter
Um neue Artikel bei Facebook und Twitter teilen zu können nutze ich nun [IFTTT](https://ifttt.com/), welches den RSS-Feed des Blogs überwacht und neue Artikel (hoffentlich) problemlos bei den beiden Social Networks veröffentlicht.

### HTTPS
Und zu guter Letzt: alle Seiten sind nun verschlüsselt via HTTPS abrufbar - bei Wordpress hatte dieser Protokoll-Wechsel nur für Probleme gesorgt, da einige Plugins auf unverschlüsseltes HTTP bestanden und den Dienst verweigerten.

## Fazit
Der Umstieg von Wordpress auf Ghost ist mir recht leicht gefallen, hat zu besseren Ladezeiten geführt und wird wohl hoffentlich der letzte Umstieg in der nächsten Zeit gewesen sein.
Jetzt bleibt nur zu hoffen, dass Ghost weiterhin so aktiv entwickelt und noch mehr Funktionen einführen wird.