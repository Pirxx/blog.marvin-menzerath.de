+++
title       = "Uberspace - Shared Hosting für Profis"
description = "Was Uberspace, einen außergewöhnlichen deutschen Hoster, neben dem SSH-Zugriff auf den Host und der freien Preiswahl so besonders macht, lesen Sie hier."
date        = "2014-11-08T18:38:00"
tag         = ["Hosting", "Tipp", "Uberspace", "Webmaster"]
+++

Seit nun mittlerweile knapp einem Monat hoste ich (unter anderem) diesen Blog bei Uberspace, einem Hoster aus Deutschland, der ein außergewöhnliches Angebot hat. Denn jeder Nutzer erhält ein eigenes, vollwertiges Konto auf einem Linux (Cent OS) Host, 10 GB Speicher und kann den Preis, den er monatlich zahlt, auch noch selbst festlegen.

<!--more-->

## Was macht Uberspace so besonders?
Wie bereits eingangs erwähnt gibt es zwei sehr große Unterschiede zu den üblichen Web-Hostern: der Zugriff via SSH und SFTP auf ein eigenes Benutzerkonto auf dem Host und die freie Preiswahl.

Durch den Zugriff via SSH ist die ganze Konfiguration der Dienste zu einem großen Teil nur über die Konsole möglich. Uberspace-eigene Befehle wie `uberspace-add-domain -d meine-seite.de -w -m` fügen dem Account eine neue Domain hinzu und richten sie für Web- und Mail-Server ein.
Gleichzeitig lassen sich aber auch z.B. die Mailkonten und -Weiterleitungen sowohl über die Konsole, wie auch über das Web-Interface einrichten.

Und wer die 10 GB Speicher füllen möchte, kann auch neben einem Wordpress-Blog auch mit NodeJS rumbasteln, einen TeamSpeak-Server laufen lassen und einen eigenen IRC-Server starten - der sehr rechenstarke Host hält das aus.
Möglich ist alles, was ohne Root-Rechte, aus dem eigenen Nutzerverzeichnis und auf nicht-Standard Ports läuft.
Außerdem lässt sich beinahe jeder Dienst als Uberspace-Service einrichten, sodass dieser Dienst bei einem eventuellen Neustart des Hosts oder bei einem Absturz automatisch neugestartet wird.

Wer also nicht vor der Nutzung der Konsole zurückschreckt und schon Linux-Erfahrung gesammelt hat, kommt schnell mit den Konfigurationsmöglichkeiten klar. Dabei hilft auch nicht zuletzt das umfangreiche [Uberspace-Wiki](https://wiki.uberspace.de/).
Dort findet sich zu *jedem* Feature des Uberspaces, zu *jeder* installierbaren Software und zu *jedem* möglichen Problem eine genaue Anleitung. (Ja, die Übertreibung ist angebracht.)
Und falls das Wiki mal nicht weiterhelfen sollte, dann hilft der Support innerhalb von wenigen Stunden - teilweise auch am Wochenende und mitten in der Nacht.

### Preis-Politik
Im Gegensatz zu vielen anderen Hostern lässt Uberspace die Nutzer den zu zahlenden Preis frei wählen. Ob nun 5€ oder 20€ pro Monat ist dem Nutzer überlassen - je nach Zufriendenheit und der eigenen Nutzung der Dienste.
Die einzige Einschränkung ist das Minimum von 1€ pro Monat - wobei das aber nicht die Kosten der Betreiber decken kann.

Wie viel sich die Betreiber wünschen und woraus sich der Preis zusammensetzt, listen diese auf einer [umfangreichen Seite](https://uberspace.de/prices) auf.

## Fazit
Ich habe meinen Umstieg von einem vServer zu keiner Zeit bereut. Sowohl zwei PHP-basierte CMS, dieser Ghost-Blog und ein TeamSpeak-Server laufen ohne Probleme auf einem Uberspace - und wenn das Geld mal knapp wird, kann ich auch einfach weniger zahlen (oder auch mehr, falls mir der Support schnell und einfach weitergeholfen hat oder ich mehr Ressourcen verwende).
Falls Sie keine Ängste vor Linux und der Konsole haben, kann Uberspace auch für Sie der wohl beste Hoster auf dem deutschen Markt werden.
![Uberspace Badge](/images/uberspace-shared-hosting-fuer-profis/Badge.png)