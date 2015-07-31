+++
title       = "Android 4.4 KitKat: Alle Änderungen für Anwender und Entwickler"
description = "Google hat Android 4.4 \"KitKat\" vorgestellt. Dieses Update bringt sowohl für Andwender und Entwickler einige Neuerungen mit, die ich Ihnen hier vorstelle."
date        = "2013-11-01T13:35:00"
tag         = ["Android", "Changelog"]
+++

Am 31. Oktober hat Google zusammen mit dem **Nexus 5** die **Android Version 4.4 "KitKat"** vorgestellt. Diese bringt sowohl für Andwender wie auch für Entwickler einige Neuerungen mit, die ich Ihnen hier vorstellen werde.

<!--more-->

## Änderungen für Anwender
KitKat bringt Verbesserungen bei der **Schnelligkeit und Stabilität** des Systems und soll Android **auf Geräten mit weniger RAM** (512 MB) laufen lassen können. So schreibt Google auf der Übersichtsseite dazu:

> Android 4.4 is designed to run fast, smooth, and responsively on a much broader range of devices than ever before — including on millions of entry-level devices around the world that have as little as **512MB RAM**.

Außerdem können Apps nun die Statusleiste sowie den Navigationsbereich komplett verstecken, sodass die entsprechende App den **gesamten Bildschrim** einnimmt. Im Zuge dieser Änderung wurden die Icons der Statusleiste nun weiß gefärbt (statt blau) und die Leiste selbst (falls durch eine App veranlasst) transparent gestaltet:
![KitKat: Transparente Statusleiste](/images/android-4-4-kitkat-aenderungen-fuer-anwender-und-entwickler/KitKat.jpg)

### Drucken
Auch ist mit Android 4.4 die Möglichkeit des nativen **Druckens über CloudPrint und Netzwerkdrucker** hinzugefügt worden. Hersteller können Plugins für die entsprechende Schnittstelle schreiben, sodass Sie mit Ihrem eigenen Drucker PDFs, Bilder und vieles mehr ausdrucken können.

### Host Card Emulation
Mit der Host Card Emulation können Sie NFC-Zugangskarten von einer App emulieren lassen, sodass Sie **statt mehrerer Karten nur noch Ihr Smartphone** mitnehemen müssen.

### Dateien öffnen
Dank einem neuen Framework können Sie nun noch einfacher in verschiedensten Anwendungen Dateien öffnen und abspeichern. Jede App kann sich in das Framework "einklinken", sodass Sie einfach **Dateien aus Ihrer Dropbox, vom lokalen Speicher oder in einer E-Mail finden und öffnen** können.

### Energiesparende Sensoren
Nun ist es auch möglich, energiesparende Sensoren wie Pedometer sinnvoll zu nutzen. Damit verbraucht eine Schrittzähler-App nun **nicht mehr so viel Akkulaufzeit** wie zuvor.

### Audio Tunneling
Durch diese eingeführte Technik **sparen Sie eine Menge Akkulaufzeit**, falls Sie Ihr Gerät nur zum Abspielen von Musik nutzen. Der Audio-Stream wird hierbei zu einem DSP (Digital Signal Processor) im Gerät und nicht zur CPU geleitet, sodass diese weniger Arbeit zu verrichten hat. Diese Technik ist aber nicht in allen Geräten verfügbar.

### Infrarot & Bluetooth
Mit KitKat kam außerdem die Unterstützung für zwei neue, **energiesparende Bluetooth-Profile** und eine **Infrarot-Schnittstelle**, die nicht vom Hersteller abhängig ist. Somit können Sie mit Ihrem Smartphone (falls unterstützt) einen Fernseher oder eine HiFi-Anlage fernsteuern.

### Weiteres
Es sind viele Detail-Verbesserungen und neue Funktionen zu Android 4.4 KitKat hinzugekommen, die ich aber nicht alle hier auflisten kann. Am Ende des Artikels finden Sie aber ein Video von Google mit allen Neuerungen sowie die KitKat-Seite.

## Änderungen für Entwickler
Neben den bereits angesprochenen Änderungen gibt es einige weitere, wichtige Dinge für Entwickler unter Android 4.4.

### RAM-Verbrauch
Geräte mit weniger "Power" können nun **dank einer neuen API einfach erkannt werden**. Somit können Sie Funktionen deaktivieren oder den RAM-Verbrauch optimieren. Nutzen Sie dazu einfach folgenden Code:
```java
if (ActivityManager.isLowRamDevice()) {
    // ...
}
```

Außerdem können Sie nun mit dem `procstats` oder `meminfo` Tool den **Speicherverbrauch Ihrer App auf dem Gerät oder in Ihrer IDE feststellen**.

### SMS-Provider
Mit dem neuen SMS-Provider gibt es endlich eine **einheitliche Schnittstelle, mit der SMS verwaltet werden**. Die vom User als Standard-App eingerichtete App hat dabei den alleinigen Zugriff auf die Daten des Content-Providers, wobei aber jede gesendete SMS (auch innerhalb von anderen Apps) dort eingetragen wird.

### WebView
Das WebView-Widget wurde nun mit der **Chromium-Engine** ausgestattet und unterstützt somit alle wichtigen HTML5, CSS3 und JS Technologien.

### Bildschirmaufnahmen
Von der ADB-Shell aus lassen sich nun **Bildschrimaufnahmen** starten. Damit können Sie einfach Videos Ihrer Apps erstellen, um diese dann im PlayStore zu veröffentlichen.

### Weiteres
Es gab viele weitere Verbesserungen bei **RTL-Geräten** (nein, nicht der Fernsehsender), der **Sicherheit** (SELinux & VPNs) und der Nutzbarkeit bei körperlich eingeschränkten Anwendern (Untertitel).

## Fazit
Android 4.4 aka KitKat bietet **viele sinnvolle Neuerungen**, die das System vorallem **schneller, sicherer und nutzbarer** machen sollen. So wurde der Zugriff auf Daten und SMS vereinheitlicht und der Stromverbrauch in manchen Teilbereichen verringert. In diesem Video (englisch!) werden nochmal alle wichtigen Änderungen aufgeführt und erklärt:
<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/sONcojECWXs?rel=0" frameborder="0" allowfullscreen></iframe>

Außerdem finden Sie unter [http://developer.android.com/about/versions/kitkat.html](http://developer.android.com/about/versions/kitkat.html) die **offizielle KitKat-Seite mit allen Änderungen** in diesem Versionssprung.

## Verfügbarkeit
Natürlich stellen sich nun alle die Frage, wann KitKat denn "endlich" für das eigene Gerät zur Verfügung steht. Dabei gilt meistens: Die Geräte der **"Nexus"-Reihe von Google zuerst**, danach die anderen Hersteller, wobei HTC meist einer der ersten mit dem Update ist.
Der Support für das **Galaxy Nexus wurde mit KitKat aber leider fallen gelassen** - laut Gerüchten, weil der Hersteller der CPU nicht mehr existiert und somit keine aktualisierten Pakete mit den KitKat-Anpassungen liefern kann.