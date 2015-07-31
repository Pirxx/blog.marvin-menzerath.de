+++
title       = "DokuWiki - Das Wiki ohne Datenbank"
description = "In diesem Artikel erfahren Sie, wie einfahc Sie das dateibasierte DokuWiki installieren können und wo es sich lohnt DokuWiki einzusetzen."
date        = "2013-01-27T12:00:00"
tag         = ["CMS", "Einrichtung", "Installation", "PHP", "Webmaster"]
+++

DokuWiki ist eine der wenigen Wiki-Softwares, die ohne eine Datenbankverbindung funktionieren. Und genau dieser Unterschied macht die Sofftware für viele Anwendungsbereiche interessant. In diesem Artikel erfahren Sie, wie Sie DokuWiki installieren und wo es sich lohnt DokuWiki einzusetzen.

<!--more-->

## Was genau ist DokuWiki?
Zu Beginn der Entwicklung von [DokuWiki](http://www.dokuwiki.org/) durch Andreas Gohr war die PHP-basierte Software als **Dokumentationsplattform** gedacht, ist heute jedoch ein **vollwertiges Wiki**.
Doch die Inhalte werden nicht in einer SQL-Datenbank gespeichert, sondern in **einfachen Textdateien**, die beim erstmaligen Aufruf der Seite geparst und danach aus einem Cache geladen werden.
![DokuWiki: Website](/images/dokuwiki-wiki-ohne-datenbank/Webseite.png)

## Weitere Funktionen
Weitere (wichtige) Funktionen von DokuWiki sind...

* die **Versionsverwaltung** (speichert alle Versionen der Wikiseite, die sich problemlos wiederherstellen lassen)
* die **Zugriffskontrolle** (es lassen sich Benutzer und Gruppen anlegen und pro Seite eigene Einstellungen festlegen)
* viele **Plugins und Templates**
* **Volltextsuche**
* **WYSIWYG-Editor**

## Installation auf einem Webserver
Die Installation von DokuWiki ist sehr einfach und geht in wenigen Schritten vonstatten:

1. Laden Sie sich das aktuelle Archiv von der Website des Entwicklers herunter: [http://www.splitbrain.org/projects/dokuwiki](http://www.splitbrain.org/projects/dokuwiki)
2. Alternativ können Sie auch das Development-Archiv herunterladen, welches neue Funkionen (und Bugs) bietet.
3. Entpacken Sie alle Dateien in einen beliebigen Ordner und laden Sie diesen auf Ihrem Webspace hoch.
4. Rufen Sie den Installer unter `http://IhreDomain.tld/install.php` und geben Sie den Wiki-Namen und Ihre gewünschten Zugangsdaten ein.
5. Ihr Wiki ist nun betriebsbereit. In den Einstellungen können Sie nun viele Dinge verändern und somit aus Ihrem Wiki bspw. eine vollwertige Website erstellen.

## Wofür sollte ich DokuWiki nutzen?
DokuWiki bietet dank dem Verzicht auf eine MySQL-Datenbank viele Einsatzmöglichkeiten:

* im Firmen-Netzwerk: Zur **Dokumentation** der genutzten Software, als **Download-Plattform** für interne Inhalte
* im privaten Netzwerk: Als Download-Platform, für **schnelle Notizen und Informationen** für Andere
* auf dem Smartphone: Mit entsprechenden Apps lässt sich sogar auf dem **Smartphone** ein Webserver installieren
* als Wiki: Ein "einfaches" **Wiki** mit Inhalten zu bestimmten Themen oder zur Strukturierung von Übersetzungen
* unterwegs: Mit einem einfachen Apache-Server auf dem USB-Stick können Sie DokuWiki überall nutzen

## Fazit
DokuWiki besticht durch den Verzicht auf eine MySQL-Datenbank und eine **einfache Syntax** beim Schreiben von Artikeln. Das Standard-Design ist **zeitgemäß und responsive** (-> passt sich dem Anzeigegerät an). Gerade durch den Verzicht auf die Datenbank ist eine normale Installation schnell einige MB groß und kann gerade durch die Versionkontrolle schnell wachsen.

Insgesamt ist das Wiki-System also auf jeden Fall einen Blick wert und steht in meiner persönlichen Rangliste über dem bekanntesten Wiki-System MediaWiki (Basis von Wikipedia).