+++
title       = "AdBlocker erkennen und mit Comic Sans um Abschaltung bitten"
description = "Hier erfahren Sie, wie man mit wenig Code AdBlocker erkennt und die Schriftart der Seite durch Comic Sans ersetzt."
date        = "2015-11-29T18:55:00"
tag         = ["Webmaster"]
+++

Als Blog-, bzw. Seitenbetreiber ist man manchmal auf die Werbeeinnahmen zum Betrieb der Seite angewiesen. Durch manche Dienste kann man dezent auf die Wichtigkeit der Werbung hinweisen, insofern der Nutzer einen AdBlocker aktiviert hat und ihn freundlich zur Abschaltung bitten.
Die folgende "Brecheisenmethode" sorgt aber für etwas mehr Unterhaltung, da sie bei den AdBlock-Nutzern die Schriftart auf ~~das geliebte~~ Comic Sans umstellt.

<!--more-->

## Voraussetzungen
Im folgenden gehe ich davon aus, dass Sie das Google AdSense Angebot nutzen, auf allen (Unter-)Seiten Anzeigen schalten und alle Anzeigen der `adsbygoogle`-CSS-Klasse angehören.
Außerdem muss der Nutzer Microsoft Windows verwenden, bzw. die Comic Sans Schriftart installiert haben.

### JavaScript
Die folgende Lösung setzt auf ein aktiviertes JavaScript beim Nutzer und lässt die Standard-Schriftart aktiv, insofern JavaScipt nicht erlaubt sein sollte. Außerdem müssen Sie bereits [jQuery](https://jquery.com) in Ihre Seite eingebunden haben.

Fügen Sie zunächst den folgenden Code in eine beliebige JavaScipt-Datei ein, die auch später im HTML-Markup eingebunden wird:

```javascript
function detectAdblock() {
	if (!$(".adsbygoogle").height()) {
		$("body").css("font-family", "Comic Sans MS");
		$("#notice").show();
	}
}

$(window).load(function() {
	detectAdblock();
});
```

### HTML
Damit der AdBlock-Nutzer weiß, warum er statt der Standard-Schriftart plötzlich Comic Sans sieht, sollten Sie einen Hinweis (möglichst prominent) auf der Seite einbinden. Folgendes HTML-Markup war z.B. hier im Footer der Sidebar zu finden:

```markup
<section id="notice">Du magst kein Comic Sans? Dann solltest Du wohl besser Deinen AdBlocker abstellen...</section>
```

### CSS
Den obigen Hinweis kann man auch noch mit CSS ein wenig verschönern - oder noch prominenter darstellen. Primär wird er aber hier erst einmal ausgeblendet, damit er AdBlock-freien Nutzern nicht angezeigt wird:

```css
#notice {
	color: #FFFF00;
	display: none;
}
```

## Fazit
Die obige Methode habe ich eine Zeit lang auf diesem Blog getestet - mit gemischten Reaktionen (siehe unten).
Dass diese Methode aber auch effektiv ist und die Werbeeinnahmen drastisch steigen lässt, kann ich leider nicht sagen.

<blockquote class="twitter-tweet" lang="de"><p lang="de" dir="ltr">Habe da mal einen kleinen und wenig dezenten AdBlock-Hinweis eingebaut. :3 <a href="http://t.co/xPOEAgext1">pic.twitter.com/xPOEAgext1</a></p>&mdash; Marvin Menzerath (@MarvinMenzerath) <a href="https://twitter.com/MarvinMenzerath/status/642789780984606720">12. September 2015</a></blockquote>
<blockquote class="twitter-tweet" lang="de"><p lang="de" dir="ltr">Leute, die einen zwingen JS auf deren Webseiten zu blockieren. <a href="https://twitter.com/MarvinMenzerath">@MarvinMenzerath</a> *hust* *comic sans*</p>&mdash; Phis (@_phis) <a href="https://twitter.com/_phis/status/643788905792339968">15. September 2015</a></blockquote>
<blockquote class="twitter-tweet" lang="de"><p lang="de" dir="ltr">.<a href="https://twitter.com/MarvinMenzerath">@MarvinMenzerath</a> Ich wollte dich einfach mal loben. Die Idee gg Adblock mit Comic Sans vorzugehen ist traumhaft!</p>&mdash; Lars (@ExSionPC) <a href="https://twitter.com/ExSionPC/status/656015553472143360">19. Oktober 2015</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
