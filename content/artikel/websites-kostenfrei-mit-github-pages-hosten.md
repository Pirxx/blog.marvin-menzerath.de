+++
title       = "Websites kostenfrei mit GitHub Pages hosten"
description = "Mit GitHub Pages können Sie einfach und kostenfrei Websites, Jekyll-Blogs und hochverfügbare Ressourcen in einem Git-Repository hosten."
date        = "2014-08-09T19:35:00"
tag         = ["Git", "GitHub", "Hosting", "Kostenfrei", "Webmaster"]
+++

GitHub ist nicht nur ein guter Anbieter für kostenfreie Git-Repositories, sondern auch ein Webhoster. Mittels zwei einfacher Methoden können Sie Ihre Webseiten und Blogs kostenfrei und hochverfügbar durch GitHub Pages hosten.

<!--more-->

## Was bietet GitHub Pages?
GitHub Pages ist ein kostenloses Angebot von GitHub, das Ihnen das **kostenfreie Hosting von statischen Webseiten, Software-Dokumentationen, Blogs und vielem mehr** ermöglicht. Dazu haben Sie jedoch keinen FTP-Zugang zur Verfügung, sondern Git - denn alle Inhalte lagern in einem Git-Repository.

Dies bietet einige Vorteile wie eben die (erzwungene) Versionsverwaltung der Inhalte, aber auch die einfache Bearbeitung der Dateien durch die GitHub Webseite. Weiterhin kann so auch jeder (technisch versierte) Leser Ihrer Seiten Änderungen in Form eines Pull Requests vorschlagen oder Fehler in Form eines Issues melden.

## Eine statische Seite hosten
Bevor Sie Ihre Inhalte hochladen können, müssen Sie zunächst ein Repository anlegen. Dabei haben Sie die Wahl zwischen einer **Nutzer-/Organisationsseite** oder einer **Projektseite**:

* **Nutzer-/Organisationsseite**: Die Inhalte liegen im `master`-Branch eines Repositories, welches nach dem Schema `username.github.io` benannt sein muss.
* **Projektseite**: Die Inhalte liegen hier im `gh-pages`-Branch eines Repositories, dessen Namen Sie frei wählen können.

Zum ersten Einstieg bietet sich eine Projektseite an, die Sie folgendermaßen anlegen können:

1. Erstellen Sie ein neues, leeres Repository (egal ob öffentlich oder privat) unter [https://github.com/new](https://github.com/new), wobei Sie eine README-Datei anlegen lassen sollten.
2. Legen Sie nun im Webinterface eine neue Branch mit dem Namen `gh-pages` an (siehe Screenshot) und richtigen Sie diese in den Einstellungen des Repositories als Standard-Branch ein.
![GitHub Pages: Branch anlegen](/images/websites-kostenfrei-mit-github-pages-hosten/Branch-erstellen.png)
3. Klonen Sie nun das Repository mit dem [GitHub for Windows](https://windows.github.com/)/[Mac](https://mac.github.com/) Client oder durch einen Terminal-Befehl: `git clone git@github.com:Username/Repository-Name.git`

Nun können Sie nach belieben HTML/CSS/JS/Bild-Dateien in das Verzeichnis kopieren und die Änderungen anschließend hochladen (==> Commit & Push). `http://username.github.io/repository-name` verfügbar. Sollten Sie statt einer Projektseite eine Nutzerseite gewählt haben, können Sie `/repository-name` weg lassen.

Falls Sie nicht einen der leicht zu bedienenden Clients verwenden, finden Sie einige wichtige Git-Befehle auch [in diesem Artikel](/artikel/einfuehrung-versionsverwaltung-git-github/ "Eine Einführung in die Versionsverwaltung mit Git und GitHub") erklärt.
 
## Einen Blog hosten
Ein komplettes CMS wie Wordpress können Sie zwar (aufgrund der fehlenden PHP-Unterstützung) nicht bei GitHub hosten, dafür aber einen Jekyll-Blog. Dazu laden Sie einfach das gesamte Projektverzeichnis (außer dem `_site`-Verzeichnis) hoch. GitHub parst daraufhin die Daten und erstellt die HTML-Seiten automatisch und ohne weiteres zutun. Wie Sie genau einen Jekyll-Blog anlegen, können Sie [in diesem Artikel](/artikel/statische-websites-mit-jekyll-erstellen/ "Statische Websites mit Jekyll erstellen") nachlesen.

Der große Vorteil dieser Methode ist, dass Sie beispielsweise Änderungen an der Seiten-Navigation in einer einzigen Datei vornehmen können, statt in allen Dateien. Leider unterstützt GitHub Pages beinahe keine Jekyll-Plugins, außer (unter anderem) `jemoji`, `jekyll-sitemap` oder `jekyll-redirect-to`.
Dafür kann auf einige GitHub-spezifische Metadaten zugegriffen werden, wenn GitHub Pages die Seiten parst. Weitere Informationen dazu finden Sie [hier](https://help.github.com/articles/repository-metadata-on-github-pages).

## Tipps & Tricks

### Eigene Domain verwenden
Wer (verständlicherweise) keine lange `username.github.io/repo` URL nutzen möchte, kann natürlich auch eine eigene Domain verwenden. Dazu legen Sie einfach eine Datei namens `CNAME` im Repository an, die nur den Namen der Domain enthält (Bsp: `meine-seite.de`). Danach öffnen Sie die DNS-Einstellungen Ihres Domain-Anbieters und legen

* einen CNAME-Eintrag an, falls Sie eine Subdomain (wie `ich.meine-seite.de`) verwenden wollen. Dieser Eintrag sollte auf `username.github.io` zeigen.
* einen A-Record an, falls Sie keine Subdomain verwenden wollen. Dieser Eintrag sollte auf `192.30.252.153` und `192.30.252.154` verweisen.

[Überprüfen Sie die Korrektheit dieser Daten](https://help.github.com/articles/adding-a-cname-file-to-your-repository# next-steps-configuring-dns-settings) unbedingt, bevor Sie diese Einstellungen speichern.

### Web-Editor
Um auch an einem fremden Rechner oder am Smartphone Ihre Inhalte bearbeiten zu können, bietet sich ein Web-Editor wie [Prose](http://prose.io) an. Dieser bietet Ihnen den Zugriff auf alle Daten in Ihrem GitHub-Account und ist wunderbar zum bearbeiten von Markdown-Textdateien in einem Jekyll-Blog geeignet.
 
## Fazit
GitHub Pages ist ein einzigartiges Angebot auf dem Markt, welches viele Funktionen bietet und einige Dinge (bewusst) anders macht. Aber es lässt sich nicht nur für klassische Webseiten und Blogs nutzen, sondern auch für CDNs oder Bilderspeicher. Diese Nutzungsmöglichkeiten werden zwar nicht angepriesen, sind aber recht beliebt geworden. Ich kann das Angebot jedem empfehlen, der einen kostenfreien Hoster für kleine Websites oder JS-Applikationen (wie [2048](http://gabrielecirulli.github.io/2048/)) sucht und nicht vor der Nutzung von Git zurückschreckt.