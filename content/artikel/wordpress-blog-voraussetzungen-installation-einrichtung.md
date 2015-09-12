+++
title       = "Eigener Wordpress-Blog: Voraussetzungen, Installation & Einrichtung"
description = "Hier erfahren Sie, wie einfach es ist mit Wordpress einen eigenen Blog mit eigenen Themes und Plugins zu starten und zu konfigurieren."
date        = "2013-09-23T18:33:00"
tag         = ["CMS", "Hosting", "Webmaster", "Werbung", "Wordpress"]
+++

Mit dem kostenfreien Open-Source CMS Wordpress ist es sehr einfach, einen eigenen Blog zu starten. Doch bei der Installation und anschließenden Einrichtung gibt es einige Dinge zu beachten. Hier erfahren Sie, wie einfach Sie selbst einen Wordpress-Blog starten können.

<!--more-->

## Was ist Wordpress?
Das **kostenfreie** und quelloffene **Content Management System (CMS) Wordpress** ist bereits seit einigen Jahren in aktiver Entwicklung und eines der beliebtesten CMS auf dem Markt - und das vollkommen zu Recht. Mit diesem ist es sehr einfach einen eigenen Blog zu starten und dort Artikel, Seiten und mehr zu veröffentlichen.
Dabei werden Ihnen einige Dinge wie

* ein einfacher **WYSIWYG-Editor**
* eine riesige **Theme- und Pluginauswahl**
* viele **Einstellungsmöglichkeiten**
* ein **1-Klick Updater** für Wordpress, Themes und Plugins
* viele weitere Funktionen

geboten - und das kostenfrei.

## Voraussetzungen
Um die Installation von Wordpress starten zu können, müssen Sie einige Voraussetzungen erfüllen:

### Ein Webhoster/Server
Damit Sie Wordpress überhaupt installieren und nutzen können benötigen Sie einen **Webhoster**. Dieser sorgt dafür, dass Ihre Inhalte jederzeit weltweit online verfügbar sind und abgerufen werden können.
Dieser muss zum Betrieb von Wordpress aber auch Voraussetzungen erfüllen:

* PHP: Version 5.2.4 oder höher
* PHP-Memory-Limit: 32 MB oder (besser) mehr
* MySQL-Datenbank: Version 5.0 oder höher
* Apache-Modul: `mod_rewrite` für "schöne URLs" (optional)

Ein Beispiel für einen guten Wordpress-Hoster ist [Host Europe](http://www.hosteurope.de/Managed-Hosting/). Dieser erfüllt alle Voraussetzungen für den Wordpress-Betrieb und bietet im Webserver-Paket eine Domain inklusive.

### Ihr PC
An Ihrem eigenen PC benötigen Sie neben einem **FTP-Client** wie [FileZilla](https://filezilla-project.org/download.php?type=client) zum Upload der Wordpress-Dateien nur einen **Archiv-Entpacker** wie [7Zip](http://www.7-zip.de/), der aber bereits bei Windows vorinstalliert ist. 

## Upload & Installation
Laden Sie sich nun einfach das deutsche Wordpress-Paket von [dieser Seite](http://de.wordpress.org/) herunter und entpacken Sie den `wordpress`-Ordner auf Ihre Festplatte.
Öffnen Sie nun FileZilla und verbinden Sie sich mit Ihren FTP-Zugangsdaten auf den Server, um dort die **Dateien hochzuladen**. Dies geschieht normalerweise in einen Ordner namens `www`, `htdocs` oder `public_www`.
Sobald alle Dateien (ca. 1200 Dateien; 15 MB) hochgeladen sind, erstellen Sie eine neue **MySQL-Datenbank** bei Ihrem Hoster und notieren Sie sich die Zugangsdaten.
Schließlich müssen Sie nur noch Ihren Webbrowser starten und die **Wordpress-Installationsseite** mit der "berühmten 5-Minuten-Installation" öffnen.

### Die 5-Minuten Installation
Die Installation gestaltet sich ebenfalls sehr einfach: **Folgen Sie dem Assistenten** und füllen Sie einfach die jeweiligen Felder mit Ihren Zugangsdaten für die Datenbank sowie den Einstellungen für Ihren Blog aus:
![Wordpress Blog: Installation](/images/wordpress-blog-voraussetzungen-installation-einrichtung/Installation.png)

Und schon landen Sie (nach Ihrer ersten Anmeldung) im **Administratoren-Dashboard**, von wo aus alle weiteren Aktionen sowie die nun anschließende Einrichtung erfolgen:
![Wordpress Blog: Dashboard](/images/wordpress-blog-voraussetzungen-installation-einrichtung/Dashboard.png)

## Einrichtung
Unter http://mein-blog.de/wp-admin/ finden Sie das Dashboard, falls Sie es geschlossen haben sollten. Weiterhin können Sie auch durch die Leiste ganz oben auf der Seite wieder ins Dashboard gelangen.

Haben Sie sich Ihre Seite denn schon einmal angesehen? Momentan finden Sie dort nur einen Beispiel-Artikel mit einem Kommentar im Standard-Theme und ohne aktivierte Plugins. Im folgenden zeige ich Ihnen, wie Sie **selbst Plugins und Themes installieren**, die Einstellungen managen und schließlich auch eigene Artikel und Seiten veröffentlichen.
![Wordpress Blog: 2013 Theme](/images/wordpress-blog-voraussetzungen-installation-einrichtung/Theme.png)

### Einstellungen
In den Einstellungen legen Sie vielerlei Dinge fest: Vom Seitennamen bis hin zur Gestaltung der URLs. Hier finden Sie nun die **wichtigsten Einstellungen kurz und bündig** aufgelistet.

#### Allgemein
Hier finden die Einstellungen rund um Ihren **Seitennamen und Slogan** sowie das **Datum und die Uhrzeit** ihren Platz.

#### Lesen
Welche Seite soll als **Startseite** dienen und wie viele Posts sollen auf einer Seite maximal angezeigt werden? Hier legen Sie dies fest.

#### Diskussion
Falls Sie die **Kommentarfunktion** verwenden wollen, sollten Sie hier einige Einstellungen für Ihre Kommentatoren vornehmen: Welche Kommentare moderiert werden müssen, welche Avatare angezeigt werden sollen und ob bestimmte Ausdrücke auf einer Blacklist stehen.

#### Permalinks
Hier legen Sie die **Struktur der URLs** fest, insofern das `mod_rewrite`-Modul im Webserver aktiviert ist: Somit können Ihre URLs auch anstatt `http://mein-blog.de/?p=123` `http://mein-blog.de/kategorie/artikelname` lauten.

### Plugins & Themes
Mit Plugins und Themes können Sie Ihren Blog noch **persönlicher machen** und Funktionen wie automatische Backups oder sicherere Logins nachrüsten.

#### Themes
Unter dem Menüpunkt "Design" finden Sie eine Auswahl zwischen allen aktuell installierten Designs. Davon können Sie einfach eines auswählen und danach auch modifizieren.
Letzteres geschieht entweder auf einer Einstellungsseite des Designs oder unter den Unter-Punkten "Widgets", "Kopfzeile" und "Menüs".
Ein weiterer Vorteil ist: Wenn Sie ein Design austauschen, bleiben die festgelegten Einstellungen der Widgets und Menüs erhalten - ebenso die Modifizierungen am Design selbst.

Neue Designs können Sie sogar direkt aus dem Dashboard heraus finden. Klicken Sie dazu einfach auf "Themes installieren" und durchsuchen Sie die **riesige Datenbank**. Mit nur einem Klick lassen Sie hier die gewählten Designs installieren und aktivieren.

#### Plugins
Im riesigen Plugin-Verzeichnis von Wordpress finden Sie **viele gute Plugins**, die Ihre Installation um einige Funktionen erweitert. Weiterhin können Sie in der Übersicht Plugins deaktivieren und auch löschen, falls Sie diese nicht (mehr) benötigen. Meine Top 10 Plugins für Wordpress finden Sie [hier](/artikel/top-10-wordpress-plugins-maerz-2013/) - vielleicht sind Ihnen manche davon nützlich.

Nach der Installation eines Plugins von der Auswahlseite finden Sie einen Link zu den Einstellungen auf der Übersichtsseite der Plugins.

## Artikel & Seiten veröffentlichen
Das wichtigste bei einer Internet-Seite sind jedoch immer die Inhalte - bei einem Blog also die Artikel (bei Wordpress "Beiträge" genannt). Diese können Sie unter den entsprechenden Menüpunkten finden und erstellen.

### Artikel schreiben
Neben den "Standard-Feldern" wie Titel und Inhalt bietet Wordpress noch einige **weitere Auswahlmöglichkeiten** für den Autor:

* **Formatvorlage**: Aktuelle Themes präsentieren Inhalte anders, falls eine andere Formatvorlage gewählt wurde. Nutzen Sie dies geschickt, um manchen Inhalten **mehr Aufmerksamkeit** zukommen zu lassen.
* **Kategorien**: Sortieren Sie Ihre Inhalte in Kategorien ein, um dem Leser die **Navigation einfacher zu machen**. Trennen Sie also Artikel über Katzenbabys von Erziehungstipps für Hunde.
* **Schlagworte**: Geben Sie Ihrem Beitrag einige wichtige Schlagworte mit. Diese sind für die **Suchmaschinen-Optimierung** wichtig und sorgen für eine Verbindung zwischen ähnlichen Artikeln.
* **Beitragsbild**: Falls vom Theme unterstützt, zeigt dieses neben dem Artikel ein kleines Bild an. Falls Sie keines angeben, wird Eines zufällig aus dem Artikel gewählt.
* **Veröffentlichen**: Hier können Sie angeben...
  * ob der Artikel veröffentlicht ist
  * wann er veröffentlicht wird/wurde
  * ob ein Passwort zur Ansicht nötig ist
  * und ob der Artikel überhaupt fertig ist

### Seiten erstellen
Beim Erstellen von Seiten haben Sie weniger Auswahlmöglichkeiten und können so neben Titel und Inhalt nur ein Beitragsbild sowie die Reihenfolge im Menü festlegen. Dieses wird entweder durch das Theme erstellt, oder Sie müssen es "von Hand" im entsprechenden Menüpunkt unter "Design" anlegen und dem Theme zuordnen.

### Der Editor
Was ich bis jetzt ganz außen vor gelassen habe war der Editor. Dies hat den einfachen Grund, dass er **sehr einfach zu verstehen und bedienen** ist. Sie können ganz einfach Text schreiben, ihn formatieren, Links und Aufzählungen einfügen und auch den erweiterten Modus (Werkzeugleiste) aktivieren.
In diesem finden Sie weitere Möglichkeiten wie den **Import aus Word und Excel**, Einrückungen, Blocktext und auch eine einfache Auswahl des Textformats (Überschrift, Code, ...).

## Fazit
Nun kennen Sie das meiste Handwerkszeug zur Erstellung eines eigenen Blogs mit Wordpress.
Für Sie heißt das also nun: **Hochwertige Inhalte produzieren und Werbung betreiben** - denn nur so steigen Sie in Suchmaschinen auf und erhalten Klicks auf Ihren Artikeln und Seiten. Suchen Sie nach Partnerschaften bei anderen (ähnlichen) Seiten, kommentieren Sie mit Verweisen auf Ihre Seite (kein Spam!) auf bekannten Seiten und **geben Sie nicht auf**! Auch wenn am Anfang nur wenige Besucher zu Ihrem Blog finden, wird sich das schnell ändern.

Dieser Artikel ist in Kooperation mit Host Europe entstanden.