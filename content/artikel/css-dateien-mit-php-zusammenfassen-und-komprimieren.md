+++
title       = "CSS-Dateien mit PHP zusammenfassen und komprimieren"
description = "Hier erfahren Sie, wie Sie sehr einfach mit PHP mehrere CSS-Dateien in eine einzige Datei zusammenfassen und komprimieren können."
date        = "2014-09-07T17:52:00"
lastmod     = "2016-05-21T19:11:00"
tag         = ["CSS", "PHP", "Webmaster"]
+++

Für eine bessere Performance und somit eine flüssigere Seitendarstellung empfiehlt es sich, mehrere CSS-Dateien in eine einzige Datei zusammenzufassen und zu komprimieren. Dies lässt sich durch ein PHP-Skript und eine kleine Änderung im Quelltext der Seite erreichen.

<!--more-->

Legen Sie zunächst eine neue PHP-Datei im Verzeichnis **über** dem Verzeichnis mit den CSS-Dateien an, welche am besten den Namen `css.php` trägt.
Die Verzeichnisstruktur sollte dabei folgendermaßen aussehen:
```markup
style
	|__css
		|__bootstrap.css
		|__lightbox.css
		|__main.css
		|__other.css
	|__js
		|__bootstrap.js
		|__ ...
	|__css.php
```

In diese gerade angelegte `css.php` kopieren Sie nun folgenden Code hinein:
```php
<?php
/**
  * Packt jede CSS-Datei in eine komprimierte Ausgabe
  * (c) 2013-2014: Marvin Menzerath
*/

// Jeder Datei-Inhalt wird in $buffer kopiert
$buffer = '';
foreach (glob('css/*.css') as $cssFile) {
	$buffer .= file_get_contents($cssFile);
}

// Komprimierung
$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
$buffer = str_replace(': ', ':', $buffer);
$buffer = str_replace(array('\r\n', '\r', '\n', '\t', '  ', '    ', '    '), '', $buffer);

// Header (zum Caching)
ob_start('ob_gzhandler');
header('Cache-Control: public');
header('Expires: '.gmdate('D, d M Y H:i:s', time() + 86400 * 7).' GMT');
header('Content-Type: text/css');

// Ausgabe
echo($buffer);
?>
```

Anschließend müssen Sie im Header der Ausgabe der Seite die einzelnen Stylesheets entfernen und durch die `css.php` ersetzen:
```markup
<link rel="stylesheet" href="//meine-seite.de/style/css.php" />
```

## Fazit
Nun muss der Browser des Anwenders nicht mehr mehrere CSS-Dateien laden, sondern nur noch eine einzige.
Dabei packt PHP alle einzelnen Dateien in eine Ausgabe und entfernt unnötige Leerzeichen oder Absätze um die Ausgabe möglichst klein zu halten. Gleichzeitig wird der Browser auch angewiesen, diese Ausgabe für 7 Tage im Cache zu behalten, damit sie nicht unnötig oft angefragt wird.
