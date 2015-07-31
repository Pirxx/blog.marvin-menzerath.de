+++
title       = "Ubuntu 14.04 LTS \"Trusty Tahr\" veröffentlicht"
description = "Heute wurde die LTS Version 14.04 von Ubuntu \"Trusty Tahr\" veröffentlicht, die einige Änderungen mitbringt und auf Langzeitunterstützung ausgelegt ist."
date        = "2014-04-17T22:04:00"
tag         = ["Changelog", "Linux", "News", "Ubuntu"]
+++

Heute wurde die LTS Version 14.04 von Ubuntu "Trusty Tahr" von Canonical veröffentlicht, die einige Änderungen mit sich bringt und auf Langzeitunterstützung ausgelegt ist.

<!--more-->

Wie jede LTS ("Long Term Support") Version von Ubuntu, soll auch 14.04 wieder 5 Jahre lang unterstützt und mit Updates versorgt werden. Damit eignet sich diese Version besonders für Server oder große Firmen, die nicht zwei mal pro Jahr alle Rechner aktualisieren wollen.

## Was ändert sich mit Ubuntu 14.04?
Ubuntu 14.04 bringt einige Änderungen mit sich, wagt aber keine großen Versionssprünge oder Paketwechsel:

* Linux Kernel 3.13 (aktuell wäre 3.14)
* Python 3.4 (2.7 weiterhin in den Paketquellen verfügbar)
* Upstart 1.12.1

Für (Web-)Server Admins:

* Apache 2.4 (12.04 nutzte noch 2.2)
* MySQL 5.5 und 5.6 (wobei MariaDB empfohlen wird)

Für Desktop-Nutzer:

* Firefox 28
* Thunderbird 24
* LibreOffice 4.2.3
* Oxide (neu; ein WebView, basierend auf Chromium)
* kleine Verbesserungen an der Oberfläche (Beispiel: Rahmen um Fenster wurden entfernt)
* Ubuntu One wird eingestellt

Unter [https://wiki.ubuntu.com/TrustyTahr/ReleaseNotes](https://wiki.ubuntu.com/TrustyTahr/ReleaseNotes) haben die Entwickler (auf Englisch!) alle weiteren Änderungen und auch momentane Fehler aufgelistet.

## Wie upgrade ich meine Systeme?
Ein Update lässt sich auf zwei Arten durchführen:

1. Desktop: Entweder haben Sie die Aktualisierung bereits angeboten bekommen, oder Sie starten diese manuell mittels `sudo update-manager` und wählen dann im erschienenen Fenster "Aktualisieren..." aus.
2. Server: Installieren Sie zunächst das notwendige Paket mittels `sudo apt-get install update-manager-core` und starten Sie das Upgrade dann mit `sudo do-release-upgrade`.

Nach einem Neustart nutzen Sie dann die aktuelle Ubuntu-Version 14.04.

### Upgrade von Ubuntu 12.04
Ein Upgrade von Ubuntu 12.04 (der letzten LTS-Version) wird - gerade für Server-Installationen - erst ab dem Release von Ubuntu 14.04.1 empfohlen, welches entdeckte Probleme beseitigt und das System somit noch stabiler machen soll.
Dennoch ist ein Upgrade jederzeit möglich.

## Download
Alle ISO-Images zum Download finden Sie unter [http://releases.ubuntu.com/14.04/](http://releases.ubuntu.com/14.04/) oder auf einem entsprechendem Mirror. Sollte das Image noch nicht verfügbar sein, müssen Sie sich noch eine kurze Zeit gedulden, bis alle Download-Quellen aktualisiert wurden.