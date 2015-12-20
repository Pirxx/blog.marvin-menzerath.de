+++
title       = "Statische Websites mit Jekyll erstellen"
description = "Mit Jekyll generieren Sie einfach statische HTML-Seiten und Blogs. Hier erfahren Sie, wie Sie Jekyll einrichten und Ihre erste Seite mit dem Tool erstellen."
date        = "2013-08-15T12:30:00"
tag         = ["Software", "Webmaster"]
+++

Jekyll generiert Ihnen komfortabel und ohne großen Aufwand statische HTML-Seiten - und zwar mit Unterstützung für Blogs, Portfolios und mehr. Somit wird weder PHP noch eine Datenbank benötigt und Sie können Ihre Seite zum Beispiel direkt bei GitHub hosten.

<!--more-->

Viele aktuelle Websites benutzen sogenannte CMS (Content Management Systeme), die durch PHP und MySQL Websites dynamisch generieren können. So wird die Navigation einfach aus allen erstellen Seiten zusammen gesetzt und der Footer nur einmal abgespeichert, wobei alle Daten in einer schnellen Datenbank liegen.
Doch der Seitenaufbau könne noch schneller sein - mit statischen Seiten wie zu Beginn des Internets. So wird weder PHP noch eine MySQL-Datenbank benötigt und die Inhalte müssen nur vom Webserver ausgeliefert werden.

Doch statt nun bei einer Website mit vielen verschiedenen (Unter-)Seiten immer jede Seite einzeln zu bearbeiten, können Sie [Jekyll](http://jekyllrb.com/) diese Arbeit abnehmen lassen. Dieses Tool generiert statische Websites und Blogs aus einfachen Textdateien.

## Was ist Jekyll und was macht das Tool?
Jekyll ist ein in Ruby geschriebenes Tool, welches statische Websites aus wenigen Dateien generieren kann. Folgende Liste gibt einen guten Aufschluss über alle (wichtigen) Funktionen:

* **Markdown-Parser**: Anstatt HTML-Code zu schreiben, schreiben Sie einfach Text-Dateien im Markdown-Style. Diese Syntax ist sehr leicht zu erlernen und kann auch ohne Parser problemlos von Menschen gelesen werden. Der zugehörige [Wikipedia-Artikel](http://de.wikipedia.org/wiki/Markdown) enthält eine gute Übersicht mit den meist verwendeten Auszeichnungen.
* **Blog-Fähig**: Benennen Sie Ihre Blog-Artikel einfach nach einem festgelegten Schemata und Jekyll erledigt den ganzen Rest: Vom Datum bis hin zur Permalinkstruktur.
* **Permalinks**: Blog-Posts werden automatisch eingeordnet, Seiten müssen Sie selbst einordnen: Erstellen Sie dazu einfach einen neuen Ordner wie "Impressum" und legen Sie die Textdatei dort als `index.md` ab. Die URL wird dann `http://meine-domain.de/impressum/` lauten.
* **Dynamische Generierung der Inhalte**: Durch kleine Code-Blöcke in Jekyll-Syntax (siehe unten) können Sie unter anderem die Navigationen dynamisch generieren oder die aktuellsten Blog-Posts auflisten lassen.  
Dieser Code listet beispielsweise alle Posts der Kategorie "news" als h2-formatierten Link auf:
```
{% for post in site.categories.news %}
  <h2><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h2>
{% endfor %}
```
* **Syntaxhighlighter**: Code kann durch einen einfachen Syntax-Highlighter präsentiert werden. Dafür ist nicht mehr als ein beigelegtes CSS-Stylesheet notwendig.  
Benutzen Sie dazu beispielsweise einfach diesen Code:
```
{% highlight java %}
public class MeineKlassse {
	private int zahl;

	public MeineKlasse() {
		zahl = 1337;
		System.out.println(zahl);
	}
}
{% endhighlight %}
```
* **Behandlung der Dateien**: Nur wenn Dateien (egal mit welcher Datei-Endung Sie gespeichert wurden) einen YAML-formatierten Header aufweisen, werden Sie von Jekyll geparst. Andernfalls werden Sie einfach so (wie sie sind) ausgegeben. Dieser Header sieht beispielsweise so aus:
```
---
layout: default
title: Meine neue Homepage
---
```

## Eine einfache Seite erstellen
Wollen Sie eine einfache Home-Seite haben, legen Sie einfach nur eine `index.md`-Datei an, kopieren den Header dort hinein und schreiben den eigentlichen Inhalt der Seite als Markdown-formatierten Text dort drunter. Auch HTML-Code ist möglich - dieser wird dann einfach nicht geparst.

Für das Design der Seite ist vorallem die `default.html`-Datei im `_layouts`-Ordner wichtig: Falls Sie im Header einer Datei `layout: default` angeben, wird damit diese Layout-Datei als "Rahmen" für diese Seite genommen.
Durch weitere Dateien im `_layouts`-Ordner können Sie also spezielle Designs für Seiten, Posts und andere Inhalte erstellen.

Für einen Post erstellen Sie einfach eine Datei mit dem Namensformat `YYYY-MM-DD-Titel.md` und speichern diese dann im `_posts`-Ordner. Auch hier müssen Sie wieder den Header nach dem obigen Beispiel setzen. Beim Parsen durch Jekyll wird die Datei dann automatisch nach der gewünschten Permalinkstruktur angelegt.

### Mit Variablen arbeiten
Sollte Sie für die Suchmaschienenoptimierung eine Meta-Description, Meta-Keywords und/oder eine Canonical-URL angeben wollen, ist das auch alles kein Problem. Ändern Sie beispielsweise Ihre Layout-Datei folgendermaßen ab:
```
<title>{{ page.title }} | Marvin Menzerath - Tutorials &amp; Reviews zur Technikwelt</title>
{% if page.description %}<meta name="description" content="{{page.description}}" />{% else %}<meta name="description" content="{{site.description}}" />{% endif %}
{% if page.keywords %}<meta name="keywords" content="{{page.keywords}}" />{% else %}<meta name="keywords" content="{{site.keywords}}" />{% endif %}
{% if page.robots %}<meta name="robots" content="{{page.robots}}" />{% else %}<meta name="robots" content="{{site.robots}}" />{% endif %}
<link rel="canonical" href="{{ site.baseurl }}{{ page.url | remove:'index.html'}}" />
```

Und damit Sie nun nicht immer die Standard-Werte ertragen müssen, schreiben Sie einfach bei den entsprechenden Seiten noch folgendes in den Header rein:
```
description: Ich bin eine Description.
keywords: Ich, bin, ein, Keyword-Tag
```

Der Title-Tag wird aus dem Seitentitel und dem Website-Namen zusammengesetzt, die Meta-Description und die Meta-Keywords nutzen nun einfach die in der Textdatei angegebenen Werte, weiterhin wird nun für den robots-Tag (falls nichts anderes explizit angegeben wird) der Standard-Wert genutzt (index, follow) und der Canonical-Tag dynamisch generiert.
Denken Sie daran, den Standard-Wert auch in der `_config.yml` Datei anzugeben, ansonsten können die entsprechenden Dateien nicht korrekt geparst werden!

## Installation von Jekyll
Sollten Sie das Tool nun auch selbst verwenden wollen, benötigen Sie nichts weiter als einen Rechner mit Linux oder Mac OSX (Windows wird nicht offiziell unterstützt, kann aber genutzt werden).
Stellen Sie zunächst sicher, dass Sie Ruby und RubyGems (meist dabei) installiert haben. Falls nicht, holen Sie dies am besten über die Paketverwaltung mit
```bash
sudo apt-get install ruby
```
oder
```bash
sudo pacman -S ruby
```
nach.

Installieren Sie nun Jekyll selbst via `gem install jekyll` und testen Sie die Installation mit der Eingabe von `jekyll --help`.

Sollten Sie hier nur eine Fehlermeldung finden, fügen Sie RubyGems zu Ihrem `$PATH` dazu, indem Sie die Datei `~/.bash_profile` bearbeiten und folgende Zeile an den Anfang stellen:
```bash
export PATH=$PATH: /home/marvin/.gem/ruby/2.0.0/bin
```

Danach einfach ab- und wieder anmelden und Sie können Jekyll verwenden.

## Einrichtung von Jekyll
Erstellen Sie zunächst ein neues Projekt mittels `jekyll new meineSeite`.
Wechseln Sie danach in das Verzeichnis und rufen Sie `jekyll serve` auf, um die erstellte Beispiel-Seite unter `http://localhost:4000` zu betrachten.
Diese Beispiel-Seite kann ganz einfach zur Erstellung der eigenen Seite verwendet werden.

## Weitere Tipps & Tricks

### Überwachung der Änderungen
Wenn Sie Ihre Seite lokal entwickeln, möchten Sie sicherlich nicht immer nach einer Änderung an einer Datei den integrierten Webserver mittels Strg-C abschalten und danach erneut starten, sondern lieber direkt Ihre Änderungen sehen. Starten Sie Jekyll dafür einfach mit dem folgenden Befehl: `jekyll serve -w`

Sobald nun eine Datei geändert wird, wird diese erneut geparst und dann ausgegeben.

### Relative URLs
Falls Sie Ihre Seite nicht mit relativen URLs betreiben wollen oder können, nutzen Sie einfach eine entsprechende Variable. Nutzen Sie beispielsweise statt `<a href="/impressum/">Impressum</a>` folgendes `<a href="{{ site.baseurl }}/impressum/">Impressum</a>`.

In der `_config.yml` müssen Sie Ihre BaseURL nun noch durch folgenden Eintrag festlegen
```
baseurl: "http://meine-domain.tld"
```
und den integrierten Webserver zum lokalen Testen dann mittels `jekyll serve -w -baseurl=` starten.
Mit dem leeren `baseurl`-Parameter wird Jekyll angegeben, dass die in der Konfigurationsdatei gesetzte Einstellung auf "" gesetzt werden soll.

### Bereit zum Upload?
Ihre Seite ist nun bereit zum Upload? Dann lassen Sie sich doch einfach mittels `jekyll build` die fertig geparste Seite in den `_site-Ordner` generieren. Den Inhalt dieses Verzeichnisses können Sie nun einfach mit FileZilla hochladen.

### Kommentare
Da mit statischen Seiten keine Kommentarfunktion unter den Posts möglich ist, müssen externe Anbieter wie [Disqus](http://disqus.com/) genutzt werden. Diese bieten ein Kommentar-Frame an, welches einfach in der Layout-Datei für die entsprechenden Posts eingebettet wird.

### Weiteres
Weitere Hinweise, Tipps und Tricks finden Sie in der offiziellen Dokumentation des Tools unter [http://jekyllrb.com/docs/home/](http://jekyllrb.com/docs/home/). Dieser "Rundgang" dauert nicht lange und wird jedem Jekyll-Nutzer von mir empfohlen.

## Veröffentlichung & Fazit
Ihre fertige Website können Sie nun ganz einfach bei jedem Hoster hochladen und somit veröffentlichen. Achten Sie aber darauf, nur den Inhalt des `_site`-Verzeichnisses hochzuladen und nicht die anderen Dateien.
Sollten Sie ein wenig Erfahrung mit Git und [GitHub](http://github.com) haben, können Sie auch das GitHub Pages Angebot nutzen und Ihre Seite in einem GitHub-Repository veröffentlichen. Auch dabei können Sie eine eigene Domain nutzen und sogar direkt die Jekyll "Quelldateien" hochladen - GitHub parst diese dann für Sie.
