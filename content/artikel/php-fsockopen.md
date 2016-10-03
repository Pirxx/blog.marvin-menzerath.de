+++
title       = "PHP: Fsockopen-Beispiele"
description = "Dieser Artikel beleuchtet die Vorteile der PHP-Funktion fsockopen und zeigt einfache Beispiele zur Verwendung dieser Funktion."
date        = "2012-12-23T19:00:00"
lastmod     = "2016-10-03T14:06:00"
tag         = ["PHP", "Webmaster"]
+++

Fsockopen ist die bekannteste und bisweilen beste Methode via PHP auf andere Server zuzugreifen. Dabei wird eine Socket-Verbindung zum Host (unter jedem Port möglich) aufgebaut und Daten können gesendet und empfangen werden. Zwei einfache Beispiele und weitere Informationen zu der PHP-Funktion finden Sie hier.

<!--more-->

## Was bringt mir fsockopen?
Im Gegensatz zu den PHP-Funktionen `file_get_contents("/path/to/file");` und `fopen("/path/to/file", "r");` kann fsockopen weitaus mehr leisten:
Während bei den meisten Hostern der Zugriff auf Ressourcen auf anderen Servern mit den beiden genannten Funktionen verhindert wird, kann mit fsockopen fast immer eine Verbindung zum Abruf von Daten (wie Update-Meldungen verschiedenster CMS) hergestellt werden.

## Beispiele
In den folgenden Beispielen sehen Sie zwei Funktionen mit denen Sie einfach Daten von anderen Servern abrufen können:

### Kurz-URL mit is.gd
Hier wird der Funktion `getShortURL($url);` eine URL mitgegeben, die dann durch die API des Short-URL Dienstes is.gd eine kurze URL generiert und diese dann zurück gibt.
```php
<?php
	// Aufruf mit >>echo getShortUrl("http://meine-adresse.de");<<
	function getShortURL($url) {
		$fp = @fsockopen("is.gd", "80", $errno, $errstr, 10);

		if (!$fp) {
			echo "Leider ist ein Fehler beim Abruf der URL aufgetreten.";
		} else {
			fputs($fp, "GET /api.php?longurl=".$url." HTTP/1.0".
						"Host: is.gd".
						"Connection: Close");
			while ($line = fread($fp, 4096)) {
				$response .= $line;
			}
			fclose($fp);
			$responseSplit = explode ("", $response, 2);
		}
		return $responseSplit[1];
	}
?>
```

### Dateien RAW von GitHub abrufen
Mit dem folgenden Script können Sie sich durch die Übergabe des Pfades zur Datei eine GitHub-Datei RAW (also "roh", ohne Formatierungen, etc.) abrufen und zurückgeben lassen. Weiterhin wird in diesem Beispiel eine SSL-Verbindung zum Abruf der Daten genutzt.
```php
<?php
	// Aufruf mit >>echo getRawGithub("/user/repo/branch/path/to/file.txt");<<
	function getRawGithub($pathToFile) {
		$fp = @fsockopen("ssl://raw.github.com", 443, $errno, $errstr, 10);

		if (!$fp) {
			echo "Leider ist ein Fehler beim Abruf der Daten aufgetreten.";
		} else {
			fputs($fp, "GET ".$pathToFile." HTTP/1.1".
						"Host: raw.github.com".
						"Connection: Close");
			while ($line = fread($fp, 4096)) {
				$response .= $line;
			}
			fclose($fp);
			$responseSplit = explode ("", $response, 2);
		}
		return $responseSplit[1];
	}
?>
```

## Fazit
Wie Sie sehen, lassen sich solche Funktionen ohne Probleme erstellen und auch (bspw. nach diesen Beispielen) nach den eigenen Anforderungen anpassen. Jedoch müssen bei machen Dienstleistern auch API-Keys übergeben werden oder ein Zugriff ist nur über `curl`-Funktionen möglich.
