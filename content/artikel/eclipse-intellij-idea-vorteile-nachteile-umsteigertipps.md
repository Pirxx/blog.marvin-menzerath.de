+++
title       = "Von Eclipse zu IntelliJ IDEA: Vor- und Nachteile und Umsteiger-Tipps"
description = "In diesem Artikel geht es um die Vorteile und Nachteile der beiden Entwicklungsumgebungen Eclipse und IntelliJ IDEA und wie ein Umstieg gelingen kann."
date        = "2013-08-10T12:11:00"
tag         = ["Java", "Software", "Umstieg"]
+++

Google hat Eclipse zugunsten von IntelliJ IDEA als Haupt-Entwicklungsumgebung für Android-Apps verstoßen, woraufhin ich mir das Android-Studio und speziell die IntelliJ IDEA einmal näher angeschaut habe.

<!--more-->

Es gibt zwei verschiedene Versionen der IntelliJ IDEA: Die kostenfreie OpenSource-Variante "Community Edition" sowie die kostenpflichtige "Ultimate"-Version.

## Wo liegen die Unterschiede zwischen Eclipse und IntelliJ IDEA?
Beides sind **Entwicklungsumgebungen (IDEs)** für Software und (auch) Android-Apps und sollen dem Nutzer - dem Programmierer - in erster Linie "lästige" Arbeit (durch Code-Vervollständigung und Fehlersuche) abnehmen.
Viele Entwickler schwören auf Eclipse - gerade wegen **vieler Plugins und der OpenSource-Entwicklung**. Dabei unterstützt Eclipse (mithilfe von Plugins) viele Programmier- und Syntaxsprachen.
IntelliJ bietet in der kostenfreien "Community Edition" jedoch "nur" Java, Groovy sowie "Standardsyntaxsprachen" wie XML an. In der "Ultimate" Version werden aber auch HTML/CSS, JavaScript, PHP, Ruby, Python und viele weitere Sprachen unterstützt. Diese Edition können Schüler und Studenten günstiger mit einem entsprechenden Nachweis erlangen.

## Welche Vor-/Nachteile bietet Eclipse?
Eclipse hat definitiv die **größere Gemeinde**. Viele Entwickler "hängen" schon sehr lange an dieser IDE und schätzen die große Anzahl der verfügbaren Plugins sowie den Umfang der unterstützen Sprachen.
Mit zunehmender Anzahl der Projekte im Workspace und aktivierter Plugins (Stichwort: Android-Apps) wird Eclipse jedoch **langsamer und reagiert träger**. Auch die Code-Vervollständigung ist nicht immer schnell und die Fehlersuche lässt die mehrfache (redundante) Initialisierung von Variablen zu.

## Welche Vor-/Nachteile bietet IntelliJ IDEA?
IntelliJ IDEA ist in erster Linie **schnell und komfortabel**. Die **Code-Vervollständigung** ist sehr schnell und scannt auch andere (eigene) Klassen durch. Mögliche Fehlerquellen werden sehr penibel gesucht und auch gefunden. Meist sind die angebotenen Lösungsvorschläge korrekt und mit einem Tastendruck umsetzbar. Auch lassen sich hier viele Aktionen statt mit der Maus durch kleine Tastenkombinationen schnell erledigen.
Leider unterstützt IntelliJ nur wenige Sprachen in der kostenfreien Version und hat weniger Plugins im Verzeichnis. Außerdem können längere Methoden nicht immer komplett auf Fehler untersucht werden, sodass manchmal nur eine lapidare Fehlereldung erscheint.

## Umsteigertipps
Ich bin nun seit einigen Tagen von Eclipse auf IntelliJ umgestiegen und bereue diesen Schritt nicht. Alle meine Projekte (Java (Swing) Applications, Android-Apps sowie Bukkit-Plugins) ließen sich problemlos importieren und auch kompilieren.
Auch wenn anfangs sicherlich einige Dinge neu und anders sind, lassen sich die Eclipse-äquivalenten Funktionen sehr schnell wiederfinden. Umsteiger sollten auch folgende Dinge beachten:

* **Projects sind keine Projects**: Während in Eclipse alle Projekte im Workspace lagen, können Ihre Projekte nun in jedem Verzeichnis liegen und mehrere Module enthalten. Beim Start von IntelliJ IDEA öffnen oder erstellen Sie ein neues Projekt, welches mehrere Unter-Projekte ("Module") enthalten kann. Somit gilt:
  * Eclipse Workspace --> IntelliJ IDEA Projekt
  * Eclipse Projekt --> IntelliJ IDEA Modul
* **Export**: Wenn Sie nun in einem Projekt mehrere Anwenungsteile haben (wie Server und Client) und nur einen Teil als Jar-Datei exportieren wollen, müssen Sie dafür in den Projekt-Einstellungen ein Artifact erstellen, den Module-Output als Quelle angeben, eventuell noch benötigte Dateien hinzufügen, ein Manifest erstellen lassen und den Speicherort der Datei festlegen.
Danach lässt sich der Build immer unter Build --> Build Artifact starten.
* **Warnungen**: Sollten Sie in einem exportieren Projekt viele gelbe Warnmeldungen finden ist das ganz normal. IntelliJ meldet viele Vorkommnisse mehr als Eclipse es getan hat. Die vorgeschlagene Lösungsmethode ist dabei meist die Richtige.

## Fazit
Wie bereits oben erwähnt bin ich (erfolgreich) von Eclipse auf IntellliJ IDEA umgestiegen und bereue diesen Schritt nicht. Ich bin von der Schnelligkeit der IDE positiv überrascht und möchte auch die Vervollständigung nicht mehr missen. Falls Sie auch umsteigen wollen kann ich Ihnen schon fast garantieren: Danach wollen Sie sicherlich nicht mehr zu Eclipse zurück. Den Download finden Sie [hier](http://www.jetbrains.com/idea/download/index.html).