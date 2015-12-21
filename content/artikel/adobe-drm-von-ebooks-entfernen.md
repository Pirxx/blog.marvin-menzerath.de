+++
title       = "Adobe DRM von eBooks entfernen"
description = "Mit einem Calibre Plugin können Sie einfach und ohne Aufwand das Adobe DRM von Ihren eBooks entfernen."
date        = "2015-12-21T20:40:00"
tag         = ["DRM", "eBook", "Software"]
+++

Wer eBooks in Online-Shops kauft kennt das Problem, dass diese meist mit dem Adobe DRM (Digital Rights Management) ausgestattet sind und somit nicht auf jedem Gerät geöffnet werden können.
Aber dank einem einfachen Calibre-Plugin lässt sich das DRM ohne Aufwand entfernen.

<!--more-->

**Hinweis**: Nach [§ 95a UrhG](http://www.gesetze-im-internet.de/urhg/__95a.html) ist das Umgehen eines wirksamen Kopierschutzes nicht erlaubt. Inwiefern der eingesetzte Kopierschutz tatsächlich "wirksam" ist und dieser Paragraph auch bei eBooks greift, ist rechtlich noch nicht einwandfrei geklärt.
Seien Sie sich bewusst, dass Sie hier auf eigenes Risiko fortfahren.

## Download des eBooks
In den meisten Shops erhalten Sie statt des eigentlichen eBooks eine `.ascm`-Datei, die Sie mit der [Adobe Digital Editions](http://www.adobe.com/de/solutions/ebook/digital-editions/download.html) Software öffnen müssen.
Dort melden Sie sich mit Ihrer Adobe ID an (falls Sie eine haben; andernfalls müssen Sie sich dort kostenfrei registrieren) und laden anschließend das eigentliche eBook herunter.

Dieses liegt nun mit einem DRM-Schutz versehen auf Ihrer Festplatte (im Dokumenten-Ordner im Verzeichnis `My Digital Editions`) und kann nicht von typischen eBook-Verwaltungen wie [Calibre](http://calibre-ebook.com/) geöffnet werden.

## DRM entfernen
Findige Entwickler haben unter dem Namen [DeDRM_tools](https://github.com/apprenticeharper/DeDRM_tools) Tools bereit gestellt, mit denen sich nun das DRM vom eBook entfernen lässt.
Im Folgenden nutze ich das Calibre-Plugin, da damit der wenigste Arbeitsaufwand verbunden ist und viele Anwender bereits diese Software einsetzen.

* Laden Sie sich zunächst ein aktuelles Release von der [GitHub-Projekt Seite](https://github.com/apprenticeharper/DeDRM_tools/releases) herunter und entpacken Sie die Dateien an einen beliebigen Ort.
* Öffnen Sie nun Calibre und wählen Sie dort unter "Einstellungen" den Punkt "Verhalten von Calibre ändern" aus oder drücken Sie die Tastenkombination `Strg + P`.
* Hier wählen Sie nun unter "Erweitert" den Eintrag "Erweiterungen" aus und im neuen Fenster schließlich "Erweiterung aus Datei laden".
* Als nächstes suchen Sie nun im "Erweiterung hinzufügen"-Dialog in den entpackten Dateien im Verzeichnis `DeDRM_calibre_plugin` nach der Datei `DeDRM_plugin.zip` und wählen diese aus.
* Bestätigen Sie nun das Hinzufügen des Plugins und starten Sie Calibre neu.

Anschließend wird das DRM automatisch vom eBook entfernt, sobald Sie ein neues (DRM-belastetes) eBook zu Ihrer Bibliothek hinzufügen. Sollten Sie ein bereits in der Bibliothek vorhandenes eBook vom DRM befreien wollen, so müssen Sie das eBook zunächst entfernen und dann erneut hinzufügen.
