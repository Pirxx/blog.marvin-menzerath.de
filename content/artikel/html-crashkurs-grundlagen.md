+++
title       = "HTML-Crashkurs - Einführung in die Grundlagen der Website-Erstellung"
description = "In diesem Tutorial zeige ich Ihnen die HTML-Grundlagen mit welchen Sie bereits eine eigene kleine Website gestalten können."
date        = "2013-03-03T19:00:00"
tag         = ["Grundlagen", "HTML", "Webmaster"]
+++

HTML ist die Grundlage zum Einstieg in die Website-Erstellung. Mit der einfachen Syntax der Darstellungsprache (keine Programmiersprache!) lassen sich schnell erste Websites erstellen. In diesem Tutorial zeige ich Ihnen die HTML-Grundlagen mit welchen Sie bereits eine eigene kleine Website gestalten können. Im nächsten Artikel geht es dann um die Web-Programmiersprache PHP.

<!--more-->

## Was ist HTML (5)?
HTML ist **keine Programmiersprache** wie C++ oder Java, sondern eine Style, bzw. **Definitionssprache**. Jeder Browser könnte somit seine eigene Sprache fordern oder nur Inhalte der eigenen Sprache (korrekt) darstellen.
Der weltweit bekannteste und neueste Standard ist **HTML5**. Vorallem durch die neuen Audio- und Video-Tags (dazu komme ich später) können Websites interaktiver gestaltet werden.

In dieser kurzen Serie möchte ich Ihnen nun die Erstellung einer ersten eigenen Website zeigen – und Sie können dabei mitmachen! Wenn etwas nicht so funktionieren sollte wie Sie es sich vorstellen, downloaden Sie sich einfach das Paket mit allen Dateien (Link am Ende des Artikels).

## Erste Schritte
Bevor Sie anfangen können Ihre erste Website zu schreiben, sollten Sie den [Notepad++ Editor downloaden](http://notepad-plus-plus.org/download) und installieren. Dieser hilft Ihnen bei den Code-Arbeiten durch Syntax-Hervorhebungen und einfache Einrückungen. Falls Sie den Editor nicht benutzen wollen reicht auch der normale Windows-Editor. Keinesfalls sollten Sie Word oder ein anderes Textverarbeitungsprogramm benutzen. Diese "verunstalten" den Code meist unnötig und machen spätere Bearbeitungen sehr schwer.

## 1 – Die Grundstruktur
Erstellen Sie zuerst eine neue Textdatei in einem Ordner Ihrer Wahl und benennen Sie diese `index.html`. Achten Sie darauf, dass die Dateiendung wirklich `*.html` ist – anderenfalls wird es später Probleme geben.
Öffnen Sie nun also mit Ihrem Editor diese Datei und es kann losgehen.

Die **Grundstruktur** jeder Website muss so aussehen:
```markup
<html>
<head>
</head>
<body>
</body>
</html>
```
Wie Sie sehen, gibt es hier die drei Wörter `html`, `head` und `body` die jeweils in Größer-/Kleiner-Zeichen liegen und beim zweiten Erscheinen mit einem `/` beginnen.
Dies alles hat einen bestimmten Sinn: Jedes Wort, dass in einem `<...>` liegt, wird "Tag" genannt und später vom Browser entsprechend interpretiert. Sobald der Tag aber so aussieht `</...>` wird er geschlossen.
Das heißt also, dass zwischen den beiden Tags (dem öffnenden und dem schließenden Tag) Inhalt geschrieben werden kann. Dieser Inhalt variiert je nach Sinn des Tags (Text, Link, Bild, …) und kann/muss verschiedene Formate haben. Oft wird auch direkt im Tag selbst ein Inhalt (bestimmte Definitionen) angegeben:
```markup
<tag>Inhalt</tag>
```

### 1.1 – Die erweiterte Grundstruktur
Durch einige in HTML 5 neu eingeführte Tags und Elemente sowie einge Standard-Elemente wird die **Grundstruktur nun folgendermaßen erweitert**:
```markup
<!DOCTYPE html>
<html>
<head>
	<title>Meine Seite</title>
	<meta name="description" content="Meine keine Website mit vielen tollen Inhalten!" />
</head>
<body>
	<header>
		<!-- Logo, Seitentitel, ... -->
		<nav>
			<!-- Die Navigation -->
		</nav>
	</header>
	<article>
		<section>
			<!-- Der eigentliche Inhalt -->
		</section>
		<section>
			<!-- Weiterer Inhalt (Sidebar) -->
		</section>
	</article>
	<footer>
		<!-- Copyright, weitere Links -->
	</footer>
</body>
</html>
```

Bereits in der ersten Zeile fällt Ihnen etwas Neues auf: Der **Doctype**. Dieser gibt die verwendete HTML-Version an (in diesem Beispiel HTML 5).
Weiterhin finden Sie nun im `head`-Bereich einen **Meta-Tag**. Diese geben Details zur Website an, die nicht direkt von einem Besucher gesehen werden (können). Die meistgenutzten sind:

* `description` –> Eine Beschreibung des Inhalts für Suchmaschinen. Sollte immer ausgefüllt werden.
* `keywords` –> Schlüsselwörter des Inhalts. Wurden früher von Suchmaschinen ausgewertet, heute nicht mehr.
* `robots` –> Gibt den Suchmaschinen-Crawlern an, ob diese die Seite indexieren dürfen. Dies ist eine freiwillige Sache, an die sich nicht gehalten werden muss.

Hier sehen Sie außerdem selbstschließende Tags. Diese haben keinen sichtbaren Inhalt und schließen sich daher direkt nach der Angabe des unsichtbaren Inhalts mit einem schließenden `/>`.

Der `title`-Tag gibt den vom Browser angezeigten **Titel** an. Dieser wird dann als Tab-Name angezeigt (anstatt der URL/des Pfades).

Im `body`-Bereich gibt es ebenfalls Neues zu entdecken: Der **Header-Bereich** bietet Platz für den Seitekopf und die **Navigation** innerhalb der `nav`-Tags, der `article`-Bereich für den eigentlichen **Inhalt** und die `section` dortdrin fungieren wie DIV-Boxen, bieten also wieder abgeschlossene Elemente. Der Footer-Bereich bietet wie der Header Platz für die **Fußzeile** mit weiteren Links und dem Copyright.
All diese neuen Bereiche waren vor HTML 5 nur mit DIV-Boxen realisierbar, deren Funktion man im Quelltext nicht auf einen Blick erkennen konnte.

Die `<!-- [...] ->` stellen **Kommentare** dar, die nur innerhalb des Quelltextes gelesen werden können. Normale Websitebesucher können diese nicht sehen.

## 2 – Inhalte
Nun können Sie die Grundstruktur Ihrer Website **mit Inhalten füllen**.
Zuerst sollten Sie die Kommentare durch Inhalt ersetzen. Dazu zeige ich Ihnen hier die Syntax der einzelnen Elemente und füge diese dann in den Quelltext ein.

### 2.1 – Überschriften
HTML bietet eine einfache Möglichkeit **Überschriften** einzufügen. Dazu stehen **6 verschiedene Größen** zur Verfügung, die nach der Wichtigkeit abnehmen (1-6). Die 1. Überschrift gibt meist den Seitentitel an (daher diese Überschrift auch nur einmal benutzen!) und die unteren Überschriften teilen den Inhalt der Website ein. Daher sieht eine Auflistung der Überschriften so aus:
```markup
<h1>1. Überschrift</h1>
<h2>2. Überschrift</h2>
<h3>3. Überschrift</h3>
<h4>4. Überschrift</h4>
<h5>5. Überschrift</h5>
<h6>6. Überschrift</h6>
```
![HTML-Tutorial: Überschriften](/images/html-crashkurs-grundlagen/Ueberschriften.png)

Überschriften sollten Sie außerdem nur sparsam verwenden, der Reihe nach setzen und *keinesfalls* komplette Texte so schreiben.

### 2.2 – Texte
Texte werden meist in Absätzen angegeben. Der `p`-Tag stellt daher meist einen Absatz oder auch ganze Textblöcke dar. In letzterem Fall fehlen Ihnen also Absätze und neue Zeilen. Da kommt nun der `br`-Tag ins Spiel: Dieser startet eine neue Zeile und kann unter mehrfacher Verwendung neue Absätze darstellen.
```markup
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br /><br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
```
![HTML-Tutorial: Texte](/images/html-crashkurs-grundlagen/Texte.png)

Ist Ihnen aufgefallen, dass der `br`-Tag sich selbst schließt? Da dieser keinerlei Inhalt beherbergt ist dies eine sinnvolle Möglichkeit Platz zu sparen.

### 2.3 – Textdekoration
Nun wissen Sie wie normale Texte darstellbar sind – doch wie kann man dort einzelne Stellen **fett markieren oder unterstreichen**?
Das geht ebenfalls sehr einfach durch die `b`, `i` und `u` Tags. Diese können Sie nun folgendermaßen einsetzen:
```markup
<p>Ich bin ein <b>fetter</b>, <i>kursiver</i> und <u>unterstrichener</u> Text!</p>
<p>Ich kann auch <b><i><u>alles gleichzeitig</b></i></u> sein!</p>
```
![HTML-Tutorial: Textdekoration](/images/html-crashkurs-grundlagen/Formatierungen.png)

### 2.4 – Aufzählungen
Mit Aufzählungen lassen sich viele Inhalte schnell und unkompliziert darstellen. Außerdem sind **kurze Stichpunkte** sogar manchmal besser zu verstehen als Fließtext.
Es gibt zwei verschiedene Arten von Aufzählungen: Die **unsortierten** und die **sortierten**. Der Unterschied dabei ist das Aufzählungsymbol (entweder ein Punkt oder eine Zahl).
```markup
<ul>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
</ul>
<ol>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
	<li>Stichpunkt</li>
</ol>
```
![HTML-Tutorial: Aufzählungen](/images/html-crashkurs-grundlagen/Aufzaehlungen.png)

Sehen Sie den einzigen, kleinen Unterschied? Durch das `ul` wird eine ungeordnete Liste gestartet und durch das `ol` eine geordnete Liste. Mit den `li`-Tags werden den Listen Einträge hinzugefügt.

### 2.5 – Links
Mit Links können Sie **Verknüpfungen zu anderen Seiten herstellen**. Durch einen Klick auf den Link springt der Browser dorthin.
Weiterhin kann fast alles ein Link sein: Sowohl Text als auch Bild.
```markup
<a href="http://meine-adresse.de" title="Text des Links beim Drüberfahren mit der Maus" target="_blank">Klick mich!</a>
```
![HTML-Tutorial: Links](/images/html-crashkurs-grundlagen/Links.png)

Bei diesem Beispiel-Link wird beim Klick auf den Text "Klick mich!" zur URL "meine-adresse.de" gesprungen. Das `target`-Attribut gibt an, ob der Link im gleichen Tab/Fenster geöffnet werden soll wie die aktuelle Seite oder nicht. In diesem Beispiel wird ein neuer Tab geöffnet.

### 2.6 – Bilder
Mit Bildern wird vieles anschaulicher und einfacher zu verstehen. Und der Bilder-Tag `img` ist ebenfalls in seiner Grundform sehr einfach.
```markup
<img src="pfad/oder/url/zum/bild.png" alt="Tolles Bild"/>
<a href="http://menzerath.eu"><img src="logo.png" /></a>
```
![HTML-Tutorial: Bilder](/images/html-crashkurs-grundlagen/Bilder.png)

Im ersten Beispiel sehen Sie die Funktionsweise eines einfachen Bildes: `src` gibt den Pfad zum Bild an und `alt` den Alternativ-Text falls das Bild nicht gefunden werden kann.
Im zweiten Beispiel bekommt das Bild einen Link (bzw. der Link ein Bild).

## 3 – Die erste Website
Nun haben Sie schon eine Menge gelernt und können damit **aus dem Grundgerüst eine einfache, kleine Website erstellen**. Meine sieht nun so aus:
```markup
<!DOCTYPE html>
<html>
<head>
	<title>Meine Seite</title>
	<meta name="description" content="Meine kleine Website mit vielen tollen Inhalten!" />
</head>
<body>
	<header>
		<h1>Meine Seite</h1>
		<p>Slogan/Untertitel</p>
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="seite2.html">Über mich</a></li>
				<li><a href="seite2.html">Informationen</a></li>
				<li><a href="seite2.html">Impressum</a></li>
			</ul>
		</nav>
	</header>
	<article>
		<section>
			<h2>Der Inhalt</h2>
			<p>Hier finden Sie <b>sehr viele</b> Inhalte!</p>
			<img src="html5.png" />
			<p>Icon by <a href="http://www.w3.org" target="_blank">W3C</a>.</p>
		</section>
		<section>
			<h2>Sidebar</h2>
			<p>Hier finden Sie <u>zusätzliche</u> Inhalte!</p>
		</section>
	</article>
	<footer>
		<p>(c) 2013: <a href="http://menzerath.eu">Marvin Menzerath</a></p>
	</footer>
</body>
</html>
```
![HTML-Tutorial: erste Website](/images/html-crashkurs-grundlagen/Webseite.png)

### Download
Den Download dieser fast fertigen Website finden Sie [hier](/downloads/HTML-Tutorial.zip) zur freien Verwendung.

Außerdem interessant: [HTML 5 Tutorial für Anfänger](https://blackphantom.de/tutorials/html5-tutorial-fuer-anfaenger-1.php)
