+++
title       = "PHP-Crashkurs - Grundlagen und ein erstes Skript"
description = "Mit PHP können Sie interaktive Websites gestalten und direkt auf Eingaben reagieren. Hier lernen Sie die PHP-Grundlagen und schreiben Ihr erstes Skript."
date        = "2013-03-10T19:00:00"
tag         = ["Grundlagen", "PHP", "Webmaster"]
+++

Mit PHP können Sie interaktive Websites gestalten und direkt auf User-Eingaben reagieren. Als gutes Beispiel dazu kann man ein Kontaktformular nennen.
Hier lernen Sie heute die Grundlagen von PHP und schreiben Ihr erstes einfaches Skript.

<!--more-->

## Was ist PHP?
PHP ist in erster Linie eine **Skriptsprache**, die aber auch **objektorientiert** genutzt werden kann. Diese Fähigkeit kennen Sie vielleicht schon von anderen objektorientierten Programmiersprachen wie Java. PHP unterstützt weiterhin **Datenbanken** und ist somit die Grundlage für die meisten CMS.
Außerdem können Sie Ihre Websites **interaktiver gestalten** (durch Kommentarfunktionen oder zum User passend generierte Bilder).

PHP wird immer **zur Laufzeit interpretiert**. Das heißt, dass der PHP-Prozessor das Skript bearbeitet und dann die Ausgabe an den Webserver weitergibt. Die Ausgabe ist (wenn Sie für den Nutzer sichtbar sein soll) immer so zu generieren, dass sie sich in die Website einfügt. Das wiederum heißt, dass ein Skript, das Zufallzahlen berechnet zwar schön und gut ist, aber es diese Zahlen auch wieder ausgeben muss – und zwar an der richtigen Stelle.

## 1 – Die Grundlagen
Bevor Sie mit der Programmierung beginnen, benötigen Sie einen Texteditor. Auch hier empfehle ich Ihnen den kostenfreien [Notepad++ Editor](http://notepad-plus-plus.org/download). Mit diesem können Sie Ihre Dateien komfortabel bearbeiten.
Außerdem benötigen Sie noch eine Umgebung, in der Sie Ihre Skripte laufen lassen können. Ein [Webserver](/artikel/webserver-apache-php-mysql-phpmyadmin/) oder eine [lokale XAMPP-Installation](/artikel/lokaler-webserver-xampp/) wären dafür Ideal. Sobald Sie diese Grundlagen geschaffen haben, kann es losgehen!

### 1.1 – Die Grundstruktur
Jedes PHP-Skript muss als solches gekennzeichnet sein. Dazu müssen Sie einerseits Ihre PHP-Dateien mit der Endung `*.php` anlegen und andererseits den gesamten Inhalt (des Skriptes; HTML-Code muss außerhalb stehen) in folgenden "Rahmen" einbetten:
```php
<?php
// Der Inhalt
?>
```
Die Zeile, die mit `//` beginnt ist ein **Kommentar**. Diese wird nicht vom PHP-Prozessor beachtet.

### 1.2 – Eine Ausgabe erzeugen
Um nun im Webbrowser etwas ausgeben zu können, benötigen Sie den `echo`-Befehl. Die Syntax ist sehr einfach; Sie müssen nur die Anführungszeichen und das abschließende Semikolon beachten. Dieses muss (fast) immer an das Ende einer Befehlszeile.
```php
<?php
	echo "Hallo";
?>
```
Wenn Sie nun die Datei in Ihrem Webbrowser aufrufen, sehen Sie nur den Text "Hallo".

Dieser lässt sich nun einfach mit der HTML-Syntax formatieren:
```php
<?php
	echo "<h1>Hallo</h1>";
	echo "<h2>und Willkommen</h2>";
?>
```

Gleichzeitig können Sie auch in einer PHP-Datei normalen HTML-Code verwenden:
```php
<html>
<head>
	<title>Hallo</title>
</head>
<body>
	<?php
		echo "<h1>Hallo</h1>";
		echo "<h2>und Willkommen</h2>";
	?>
</body>
</html>
```

### 1.3 Variablen
Was wäre eine Programmiersprache nur ohne die guten, alten Variablen? PHP macht es Ihnen besonders leicht diese zu verwenden, da Sie **keinen Datentyp angeben** müssen – PHP "erkennt" anhand der Eingabe, welcher Datentyp genutzt wird. Sollte dies einmal nicht klappen, können Sie den Datentyp auch selbst bestimmen.

Legen Sie nun eine Variable an und geben Sie diese einfach wieder aus:
```php
<?php
	$variable = "Hallo!";
	echo $variable;
?>
```
Die Ausgabe wird nun "Hallo" sein.

Wenn Sie einen Integer verwenden wollen, geht dies genauso einfach:
```php
<?php
	$variable = 5;
	echo $variable;
?>
```
Hier ist die Ausgabe nun einfach 5.

Bei Integern bietet es sich nun an, mit diesen zu rechnen; Strings kann man jedoch aneinanderhängen:
```php
<?php
	$varZahl1 = 5;
	$varZahl2 = 3;
	$varString1 = "Hallo, Herr ";
	$varString2 = "oder Frau Meier.":
	echo $varZahl1 + $varZahl2;
	echo $varString1.$varString2;
?>
```
Als Ausgabe erhalten Sie nun einmal die Zahl 8 und zum Zweiten den Text "Hallo, Herr oder Frau Meier.".
Beachten Sie auch die unterschiedliche Art, wie die Variablen genutzt werden. Die Integer werden mit einem `+` addiert, während die Strings durch einen `.` miteinander verbunden werden.

### 1.4 – If-Bedingungen und Schleifen

#### 1.4.1 – If-Bedingungen
In vielen Fällen muss das Skript nach gegebenen Fällen **verschieden handeln**. Dafür bieten sich die **If-Abfragen** an. Diese sind ebenfalls sehr einfach gehalten und lassen sich folgendermaßen programmieren:
```php
<?php
$var = "Hallo";
$var2 = true;

if ($var == "Hallo") {
	if ($var2) {
		if ($var3 > 5) {
			echo "Alles OK!";
		}
	}
} else {
	echo "1. Bedingung nicht erfüllt";
}
?>
```

Die verschiedenen Datentypen werden hier auf verschiedene Arten verglichen. Beim String wird durch ein `==` die Gleichheit überprüft, beim Boolean ohne einen Operator (kann mit einem `!` vor der Variablen negiert werden) und beim Integer mit einem Größer/Kleiner-Zeichen.

#### 1.4.2 – Schleifen
Schleifen gehören zu jeder Programmiersprache dazu. Dabei gibt es zwei wichtige, aber unterschiedliche Varianten:

a) Die **while-Schleife**:
```php
<?php
while (Bedingung erfüllt) {
	//Tu etwas
}
?>
```
Als Bedingung können Sie hier wie bei den If-Abfragen alle möglichen Bedingungen zusammenstellen.

b) die **for-Schleife**:
```php
<?php
for ($i = 0; $i >=20; $i++) {
	//Tu etwas
}
?>
```
Diese Schleife ist nun etwas komplexer als die while-Schleife. Und zwar wird hier der Variablen `i` ein Wert von 0 zugeordnet. Weiterhin bricht die Schleife dann ab, wenn `i` größer oder gleich 20 ist. Bei jedem Schritt wird via `$i++` der Wert der Variablen `i` um eins erhöht.
Dies sieht zwar sehr komplex aus, ist aber sehr leicht zu verstehen und umzusetzen.

### 1.5 – Arrays
Arrays könnte man salopp als erweiterte Variable, bzw. mehrfach belegbare Variable bezeichnen. In ihnen lassen sich **beliebig viele Einträge des gleichen Datentyps** speichern und auch wieder ausgeben. Das ganze geht folgendermaßen:
```php
<?php
	$myArray = array('Hallo', 'Willkommen', 'Guten Tag');
	echo myArray[1];
?>
```
Die Ausgabe ist nicht (wie Sie vielleicht vermuten) "Hallo", sondern "Willkommen". Dies liegt daran, dass in einem Array der **erste Eintrag als 0 gezählt** wird.

Wenn Sie nun also den ersten Eintrag verändern wollen, müssen Sie folgendes schreiben:
```php
<?php
	myArray[0] = "Auf Wiedersehen!";
?>
```

### 1.6 – Das Server-Array
Oft benötigt man **Informationen über den Aufrufer der Website** – ob IP-Adresse oder den verwendeten Browser. Das alles geht über das so genannte Server-Array. Dieses enthält alle wichtigen Informationen, die Sie sich folgendermaßen ausgeben lassen können:
```php
<?php
	echo $_SERVER['Indizie'];
?>
```

Die meistgenutzten Indizes sind:
* `REQUEST_METHOD` –> Gibt an, auf welche Art Daten an das Skript gesendet wurden (dazu später mehr)
* `HTTP_REFERER` –> Gibt die Herkunft des Besuchers an. Wert kann leicht vom User manipuliert werden
* `HTTP_USER_AGENT` –> Gibt den Browser und das Betriebssystem des Users an
* `REMOTE_ADDR` –> Gibt die Besucher-IP an

## 2 – Fortgeschrittene Anwendungen
Nun haben Sie die Grundlagen PHPs kennengelernt. Weiter geht es jetzt mit zwei schwierigeren Themen und danach an das erste, richtige Skript!

### 2.1 – GET
Früher oder später wollen Sie nun **User-Eingaben nutzen und verarbeiten** können. Dazu gibt es zweierlei Methoden: `GET` und `POST`.
`GET` ist eher die einfachere, weil die sich die Daten in der URL befinden und nur daraus gelesen werden müssen. Typischerweise sieht diese URL dann so aus: `http://adresse.de/script.php?text1=Hallo, alle miteinander!&text2=Hallo, Dr. Nick!`

Und der zugehörige Code so:
```php
<?php
	$t1 = htmlspecialchars($_GET['text1']);
	$t2 = htmlspecialchars($_GET['text']);
	echo $t1;
	echo t2;
?>
```
Wie Sie sehen, werden die Daten mit `$_GET['xxx']` aus der URL ausgelesen und danach von `htmlspecialchars()` geparst. Letzterer Schritt ist notwendig, damit HTML-Code nicht vom Browser dargestellt, sondern ausgegeben wird. So wird ein `h1` nicht als Überschrift dargestellt, sondern einfach als Text ausgegeben.

### 2.2 -POST
Für die Datenübermittlung via `POST` benötigen Sie meist ein Formular. Dieses erstellen Sie einfach via HTML und geben als `action="script.php"` den Pfad zum PHP-Skript an. Danach verläuft die Verarbeitung der Daten fast genau gleich wie bei der GET-Methode:
```php
<?php
	$t1 = htmlspecialchars($_POST['feld1']);
	$t2 = htmlspecialchars($_POST['feld2']);
	echo $t1;
	echo t2;
?>
```
Sie müssen nur darauf achten, dass Ihre Textfelder die richtigen Namen (`name="feld1"`) im HTML-Code haben.

### 2.3 – Funktionen
In PHP gibt es wie in vielen anderen Programmiersprachen **Funktionen**. Die Meisten sind bei PHP-Skripten dazu gedacht Werte zu errechnen, bzw. aus einer Datenbank auszulesen und dann an das eigentliche Skript zurückzugeben. Daher sieht dies in einem Skript meist so aus:
```php
<?php
	echo "Es geht los...";
	echo sagHallo();
	echo "Ende.";

	function sagHallo() {
		return "Guten Tag."
	}
?>
```

### 2.4 – Datenbank
Bei vielen Anwendungen (wie auch CMS) werden Datenbanken benötigt um dort Daten auszulesen und abzuspeichern. Da ich dieses Thema bereits behandelt habe, schauen Sie sich den entsprechenden Abschnitt einfach [hier](/artikel/mysql-datenbanken-statements-php/) an.

## 3 – Ein Zufallszahlengenerator
Abschließend können Sie nun mit Ihrem erworbenen Wissen und einer Funktion, die Zufallszahlen erzeugt Ihr **erstes, kleines Skript schreiben**. Dieses soll Ihre Daten über eine URL im Format `http://adresse.de/script.php?v=0&b=10` erhalten und Zufallszahlen von 0 bis 10 via `echo` ausgeben.
Die Funktion `int mt_rand (int $min, int $max)` erzeugt bereits die Zufallszahlen, daher müssen Sie nicht mehr viel programmieren.

Hier also nun das fertige Skript:
```php
<?php
	$von = intval($_GET['von']);
	$bis = intval($_GET['bis']);

	$zahl = mt_rand($von, $bis);

	echo "Ihre Zufallszahl lautet: ".$zahl;
?>
```

## Fazit
PHP ist eine **mächtige, aber auch simple und leicht zu erlernende Sprache**, mit der sich sowohl mächtige CMS, aber auch [kleine Spielereien](/minecraft-achievement-generator/) programmieren lassen.
