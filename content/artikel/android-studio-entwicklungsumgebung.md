+++
title       = "Android-App Entwicklungsumgebung \"Android Studio\""
description = "Android Studio ist eine IDE für die Entwicklung von Android-Apps und soll bessere Unterstützung, erweiterte Funktionen sowie schnellere Ladezeiten bringen."
date        = "2013-05-17T00:23:00"
tag         = ["Android"]
+++

Im Rahmen der Google I/O 2013 hat Google eine eigene IDE auf Basis von IntelliJ vorgestellt, die vollkommen auf die Entwicklung von Android-Apps ausgelegt ist und eine bessere Unterstützung, erweiterte Funktionen sowie schnellere Ladezeiten bringen soll.
Die erste Entwickler-Version können Sie sich nun herunterladen.

<!--more-->

## Welche Vorteile bringt "Android Studio" gegenüber Eclipse?
Neben den "normalen" Funktionen der Entwicklungsumgebung IntelliJ wie **schnelle Ladezeiten** bietet das Android Studio eine **fertig eingerichtete Entwicklungsumgebung** für den Programmierer. Dabei müssen keine Plugins (wie bei Eclipse) heruntergeladen werden, weiterhin liegt eine aktuelle Version des SDKs bei.
![Android Studio: Screenshot](/images/android-studio-entwicklungsumgebung/AndroidStudio.jpg)

Auf der [offiziellen Informationsseite](http://developer.android.com/sdk/installing/studio.html) werden die weiteren Features wie ein **Gradle-basierender Build-Vorgang**, **Android-spezifischere Schnellhilfe** und **Refactoring**, **Lint-Tools** zur Erkennung von möglichen Problemen, **ProGuard** und **Signierungsmöglichkeiten**, **Assistenten** zur Erstellung von typischen Design-Mustern sowie einem **Drag-and-Drop UI-Editor** mit Vorschaumöglichkeit für viele Gerätekonfigurationen angeführt.

Für viele Entwickler nützlich ist auch die **direkte Anzeige von Farbcodes, Strings aus den Ressourcen** als Text im Code und die Darstellung von Drawable-Ressourcen am Rand.

## Lohnt sich ein Umstieg auf Android Studio?
Aktuell befindet sich das Projekt noch in einer frühen Entwicklerversion und einige Funktionen könnten noch nicht so funktionieren, wie sie eigentlich sollten. Die neuen Funktionen und Features sind jedoch einen Blick wert. In meinen Tests habe ich eine deutlich kürzere Ladezeit als bei Eclipse gespürt und auch eine genauere Fehlerangabe feststellen können.
Ich würde aktuell jedoch Entwicklern noch keinen Umstieg empfehlen, sondern eher einen (kurzen) Test. Einsteigern jedoch lege ich Android Studio ans Herzen, da ihnen der Einstieg dort leichter gemacht wird, als es bei Eclipse der Fall ist.

## Installation & Umstieg
Laden Sie sich einfach den Installer oder das Paket von der [offiziellen Website](http://developer.android.com/sdk/installing/studio.html) herunter und installieren Sie es, bzw. entpacken Sie dieses an einen Ort ihrer Wahl. Nach dem Start können Sie sofort ein neues Projekt erstellen oder ein bestehendes öffnen. Beim Umstieg von Eclipse müssen Sie jedoch einige, kleine Dinge beachten:

Wie auf [dieser Seite](http://developer.android.com/sdk/installing/migrate.html) beschrieben, müssen Sie zuerst in Eclipse das ADT-Plugin auf Version 22 aktualisieren und danach das Projekt per Rechtsklick --> `Export | Android` --> `Generate Gradle build files` für den Import in Android-Studio vorbereiten.

Im Android-Studio importieren Sie die Projekte nun einfach via Rechtsklick --> `Import | Create project from existing sources` --> `Next`. Nun können Sie Ihre Projekte in Android-Studio nutzen.

## Tipps für den Umgang mit Android-Studio
Auf [dieser Seite](http://developer.android.com/sdk/installing/studio-tips.html) listet Google noch einige Tipps für den Umgang mit Android Studio auf, die vor allem den Umsteigern nützlich sein werden:

* Aufgrund des neuen Build-Systems wurden die meisten Ordner und Dateien in den `src` Ordner verschoben
* Der SDK-Manager und der AVD-Manager sind nun direkt über das Interface verfügbar
* Das DDMS-Fenster findet sich nun unter dem "Android"-Button am unteren Fensterrand
* Mit Shift + F10 lässt sich ein Build mit anschließendem Start der App durchführen

## Fazit
Android Studio soll **langfristig ein Ersatz für Eclipse mit dem ADT-Plugin** werden und ist auf einem guten Weg dorthin. Kleinere Fehler treten aktuell immer noch auf und sind in einer so frühen Version verzeihlich.
Auf kurz oder lang wird sich Android Studio durchsetzen und auch mit den ganzen Veränderungen das Vertrauen der Entwickler gewinnen. Wenn Sie die Umgebung selbst einmal testen wollen, finden Sie hier die [Download- und Übersichtsseite](http://developer.android.com/sdk/installing/studio.html).

Dieses erste Einführungsvideo zeigt Ihnen weiterhin die ersten Neuerungen in einer Übersicht (leider nur auf Englisch verfügbar):
<iframe width="1280" height="720" src="//www.youtube-nocookie.com/embed/e0fXuyL0xVU?rel=0" frameborder="0" allowfullscreen></iframe>

Screenshot © by Android Developers Blog