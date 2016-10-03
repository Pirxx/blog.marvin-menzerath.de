+++
title       = "Jahresrückblick: Das war 2015"
description = "Dieser Beitrag ist ein kleiner Rückblick auf das Jahr 2015 im Bezug auf diesen Blog und weitere meiner Projekte."
date        = "2015-12-31T15:00:00"
tag         = ["Offtopic"]
+++

Im nun fast vergangenen Jahr 2015 ist viel in der Welt passiert. Aber anstatt auf die Geschehnisse in der Welt [zurückzublicken](http://lmgtfy.com/?q=R%C3%BCckblick+2015), möchte ich die Gelegenheit für einen kleinen Rückblick und eine Vorausschau im Bezug auf diesen Blog und andere meiner Projekte nutzen.

<!--more-->

## Dieser Blog
2015 hat dieser Blog die "magische Marke" von **100 veröffentlichten Artikeln** erreicht - und zwar mit diesem hier kurz vor Jahresende.
Seit der Veröffentlichung des ersten (mehr oder weniger) richtigen Artikels 2012 ist die Anzahl der Veröffentlichungen im Jahr 2015 um **18 Stück** angewachsen, sodass ich nun auf 100 Artikel zurückschauen kann.

### Veränderungen
Immer wieder im Laufe des Jahres haben sich kleine Dinge am Blog verändert, die ich hier kurz auflisten will:

#### CMS
Statt Ghost, WordPress oder einem ähnlichen CMS verwendet dieser Blog nun [Hugo](https://github.com/spf13/hugo), einen statischen Seiten-Generator für Blogs.
Dadurch kann der Webserver die fertigen Seiten direkt ausliefern und muss auf kein dahinterliegendes CMS oder eine Datenbank warten.

Seit dem Umstieg ist der Blog in "Rohform" auch in einem [eigenen GitHub-Repository](https://github.com/MarvinMenzerath/blog.marvin-menzerath.de) zu finden. Daher finden Sie auch unter jedem Artikel die Möglichkeit, dort Fehler zu melden oder selbst zu beheben - einen GitHub-Account vorausgesetzt.

Technisch funktioniert das ganze folgendermaßen: Der ganze Blog wird via Git verwaltet - nach einer Änderung wird diese committed und ins GitHub-Repository gepusht. Daraufhin benachrichtigt GitHub meinen Uberspace, der das Repository lokal klont und mit Hugo anschließend den Blog baut und in das entsprechende Verzeichnis des Webservers kopiert.

#### Hosting
Seit kurzer Zeit liegt der Blog auch wieder auf den Servern von [Uberspace](https://uberspace.de) und verwendet kein CloudFlare mehr.
Im Dezember habe ich außerdem das HTTPS-Zertifikat im Zuge dieser Umstellung durch ein Zertifikat von [Let's Encrypt](https://letsencrypt.org) ausgetauscht.

#### Kommentare
Ebenfalls weggefallen ist der Kommentarbereich unter den Artikeln. Dies hat mehrere Gründe: einerseits fehlt mir momentan die Zeit, um auf Kommentare einzugehen, die nach Hilfe fragen und andererseits gibt es neben Disqus und isso praktisch keine guten und simplen Kommentarsysteme, die sich (im Falle von Disqus) etabliert haben und (im Falle von isso) datenschutzfreundlich und zum selbst-hosten sind.
Um den Wegfall der Kommentare ein wenig auszugleichen, habe ich hilfreiche Kommentare und öfter aufgetauchte Fragen in die Artikel übernommen.

#### Benachrichtigungskanäle
Neben Facebook, Twitter und dem RSS-Feed biete ich seit kurzem auch einen [Telegram-Channel](https://telegram.me/marvinmenzerath_blog) an, in welchem automatisch neue Artikel veröffentlicht werden.

### Statistiken
Da die meisten Menschen Statistiken und Diagramme mögen, möchte ich auch an dieser Stelle ein paar Kernmetriken aus Piwik vorstellen.

#### Besucherzahlen
Insgesamt kommt dieser Blog auf rund 117.600 Besuche im letzten Jahr, was durchschnittlich ca. 9.800 Besuche im Monat bedeutet.
Im Bezug auf die Seitenansichten liegt der Wert bei rund 157.500 Ansichten im Jahr, bzw. durchschnittlich ca. 13.100 Ansichten im Monat.

![Besucherzahlen](/images/jahresrueckblick-das-war-2015/besucherzahlen.png)

#### Beliebte Artikel
Die 5 beliebtesten Artikel im vergangenen Jahr waren:

| Artikel                                                                                                                           | Besuche |
|-----------------------------------------------------------------------------------------------------------------------------------|---------|
| [FritzBox Zugangspasswort herausfinden](/artikel/fritzbox-passwort-rausfinden)                                                    | 23,5 %  |
| [Raspberry Pi als WLAN Access Point nutzen](/artikel/raspberry-pi-als-wlan-access-point-nutzen)                                   | 21,1 %  |
| [Ubuntu Server Installieren und Einrichten](/artikel/ubuntu-server-installieren-und-einrichten)                                   | 14,4 %  |
| [Oracle Java 7 einfach unter Debian und Ubuntu installieren](/artikel/oracle-java-7-einfach-unter-debian-und-ubuntu-installieren) | 4,9 %   |
| [Android-Apps mit Navigation Drawer programmieren](/artikel/android-apps-mit-navigation-drawer-programmieren)                     | 3,7 %   |

#### Suchbegriffe
Die Top 5 Suchbegriffe lauteten:

| Suchbegriff                    | Besuche |
|--------------------------------|---------|
| fritzbox passwort knacken      | 0,1 %   |
| fritzbox passwort hacken       | 0,1 %   |
| fritzbox passwort herausfinden | 0,1 %   |
| fritzbox passwort vergessen    | 0,1 %   |
| raspberry pi access point      | 0,1 %   |

Die ersten 4 Suchbegriffe finden sich in der kompletten Liste übrigens noch weitaus öfter in verschiedensten Variationen.
Außerdem kamen 94,1 % der Besucher ohne einen (mitgeteilten) Suchbegriff auf den Blog.

#### Suchmaschinen
Die spannende Frage nach der wohl beliebtesten Suchmaschine lässt sich ebenfalls sehr eindeutig beantworten:

| Suchmaschine  | Besuche |
|---------------|---------|
| Google        | 96,7 %  |
| Bing          | 1,1 %   |
| DuckDuckGo    | 0,7 %   |
| Yahoo!        | 0,4 %   |
| Google Images | 0,3 %   |

#### Herkunftsländer
Betrachtet man die Herkunftsländer der Besucher, so ergibt sich folgende Verteilung:

| Land                           | Besuche |
|--------------------------------|---------|
| Deutschland                    | 85,7 %  |
| USA                            | 6,9 %   |
| Österreich                     | 1,8 %   |
| Sonderverwaltungszone Hongkong | 1,5 %   |
| Schweiz                        | 1,5 %   |

Interessant zu sehen ist hier, dass mehr Leser aus anderssprachigen Ländern wie den USA oder Hongkong den Blog besucht haben, als Leser aus Österreich oder der Schweiz. Ob diese Verteilung nun an der Größe letzterer Länder liegt oder an einem verbesserten Google Übersetzer kann ich leider nicht sagen.

![Herkunftsländer](/images/jahresrueckblick-das-war-2015/herkunftslaender.png)

#### Software
Abschließend noch die verwendeten Betriebssysteme und Browser der Besucher:

| Betriebssystem | Besuche |
|----------------|---------|
| Windows 7      | 34,4 %  |
| Windows 8.1    | 15,7 %  |
| Windows 10     | 8,0 %   |
| Ubuntu         | 6,6 %   |
| Mac 10.10      | 5,7 %   |

| Browser           | Besuche |
|-------------------|---------|
| Firefox           | 39,7 %  |
| Chrome            | 27,3 %  |
| Mobile Safari     | 6,7 %   |
| Internet Explorer | 6,5 %   |
| Chrome Mobile     | 6,0 %   |

Auch wenn mich die Verteilung bei den Betriebssystemen nicht weiter verwundert, finde ich den hohen Anteil vom mobilen Safari interessant. Vor allem, da er über dem Anteil der Nutzer vom Internet Explorer liegt.

### Zukunft
In naher Zukunft werden (soweit ich das momentan planen kann) auch gelegentlich kurze Artikel auftauchen, die zum Teil auch in die Kategorie "Offtopic" gehören.
Dieser Umstand ist vor allem der knapper werdenden Zeit durch Studium und Ausbildung geschuldet und der Tatsache, dass ich mich auch gerne um andere Projekte kümmere.

## Weitere Projekte
Neben diesem Blog arbeite ich auch häufig an anderen Projekten. Zu dreien möchte ich hier ein paar Worte verlieren.

### UpAndRunning2
Mit "UpAndRunning2" habe ich ein zuvor auf Node.js basierendes Projekt in Go umgesetzt, welches regelmäßig eingetragene Webseiten auf Erreichbarkeit überprüft, eine JSON-API (und ein darauf aufbauendes Web-Interface) und eine Benachrichtigungsfunktion besitzt.
Aktuell arbeite ich an einem Update auf Version 2.1, welches z.B. neue APIs, mehr Benachrichtigungsmethoden/-einstellungen und ein Docker-Image mit sich bringen wird.

Das GitHub-Repository mit mehr Details und einer Installationsanleitung finden Sie [hier](https://github.com/MarvinMenzerath/UpAndRunning2).

### What Color Is It?
"What Color Is It?" ist eine einfache Uhr im Browser, die die jeweilige Uhrzeit als Hintergrundfarbe anzeigt. Dieses [kleine Projekt](https://marvinmenzerath.github.io/WhatColorIsIt/) pflege ich schon etwas länger, aber seit kurzem ist es auch als App für den Fire TV (Stick) im [Amazon App Store](http://www.amazon.de/gp/product/B018BITPJO) erhältlich.
Somit können Sie auf Ihrem Fernsehgerät eine einfache, aber ungewöhnliche Uhr anzeigen.

### Is My Website Down?
"Is My Website Down?" ist eines meiner ältesten Projekte und bietet ebenfalls Webseiten-Erreichbarkeits-Überprüfungen als Java-Applikation. Seit Mitte 2015 ist das Projekt allerdings von meiner Seite aus eingestellt und wird vorerst nicht mehr weiterentwickelt.
Als Alternative kann ich das zuvor genannte UpAndRunning2 empfehlen, welches Binaries für Windows und Linux bereithält.

## Abschließende Worte
2015 war ein interessantes Jahr und hat (nicht nur für mich und diesen Blog) einige Veränderungen mitgebracht - sowohl positiv, wie auch negativ.
Zum Schluss dieses Beitrags möchte ich noch auf die [Blogroll](/blogroll) hinweisen, die auch erst seit diesem Jahr besteht und die Blogs und Webseiten beinhaltet, die ich regelmäßig besuche und zu deren Autoren ich in Kontakt stehe.

Abschließend bleibt mir nur noch "**Danke!**" zu sagen und allen Leserinnen und Lesern[^1] einen guten Rutsch ins neue Jahr 2016 zu wünschen!

[^1]: Ja, diesen Gender-Quatsch wollte ich jetzt auch mal bringen.
