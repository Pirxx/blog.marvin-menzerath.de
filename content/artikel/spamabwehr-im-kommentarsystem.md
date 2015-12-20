+++
title       = "Effektive Spam-Abwehr im Kommentar-System"
description = "Mit einem unsichtbaren Feld lässt sich Spam in Kommentarfeldern und Kontaktformularen effektiv filtern. Den passenden Code dazu finden Sie hier."
date        = "2013-04-25T17:55:00"
tag         = ["PHP", "Spam", "Webmaster"]
+++

Auf vielen Websites finden sich Kommentarfelder oder Kontaktformulare mit sogenannten Captchas. Dies sind meist unscharfe und verdeckte Zeichenketten, die von dem Besucher eingegeben werden müssen. Doch in letzter Zeit finden sich mehr und mehr ausländische Firmen, die nur solche Captchas lösen und der Spam-Industrie helfen. Doch es gibt eine weitaus effektivere Methode zur Spam-Abwehr, die gleichzeitig viel weniger Aufwand bedeutet als ein Captcha.

<!--more-->

## Wie kann ich Spam einfacher abwehren?
Meist besuchen einige Spam-Bots täglich Ihre Websites und hinterlassen Kommentare oder senden Nachrichten mit Werbung oder anderen unerwünschten Inhalten, obwohl ein Captcha zum Schutz genutzt wird.
Es gibt jedoch eine sehr einfache Methode zur Spam-Abwehr, die sich für jede Website eignet: **Ein unsichtbares Feld**.

## Wie funktioniert das genau?
Sie fügen einfach in Ihr Formular eine weitere Textarea oder ein Input-Feld ein, welches Sie **mit CSS oder JavaScript vor dem Besucher verstecken**. Dieser wird das Feld folglich nicht ausfüllen.
Ein Spam-Bot füllt jedoch jedes Element mit Daten aus - somit auch das Anti-Spam Feld. Zusammenfassend müssen Sie also nichts weiter tun, als

* das Formular mit einem weiteren, unsichtbaren Feld ausstatten
* den Inhalt via PHP zu überprüfen
* und den Kommentar gegebenenfalls nicht zuzulassen

### Beispiel
Folgendermaßen könnte das nun auf Ihrer Website aussehen:

#### Formular
```markup
<form action="artikel.php" method="post">
	<p><label for="author">Name (notwendig)</label>
	<input type="text" name="author" /></p>
	<p ><label for="email">E-Mail (notwendig)</label>
	<input type="text" name="email" /></p>
	<p ><label for="comment">Kommentar (notwendig)</label>
	<textarea name="comment"></textarea>
	<textarea name="comment-verify" style="display:none" ></textarea></p>
	<p><input name="submit" type="submit" value="Abschicken" /></p>
</form>
```

#### PHP-Code
```php
if ($_POST['comment-verify'] == "") {
	// Es ist kein Spam: In Datenbank eintragen
} else {
	// Eventuell speichern; bessser: verwerfen
}
```

Hierbei müssen Sie natürlich Ihren eigenen Quelltext zur Eintragung in die Datenbank und Überprüfung der eingegebenen Daten ergänzen.

## Fazit
Mit dieser **simplen, aber genialen Methode** können Sie sich für die nächste Zeit ein Captcha sparen und den Nutzern die Eingabe der unleserlichen Zeichen ersparen. Sollten nach einiger Zeit trotz dieses Schutzes Kommentare als Nicht-Spam durchgehen, ändern Sie einfach den Namen des Textfeldes oder setzten Sie einen bestimmten Text innerhalb des Feldes voraus (der dann nicht geändert werden darf).
