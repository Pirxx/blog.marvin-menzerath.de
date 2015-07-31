+++
title       = "Android-Apps mit Monkey testen"
description = "Mit dem Android-SDK und dem Tool \"Monkey\" ist es problemlos möglich, Android-Apps mit simulierten Benutzereingaben zu testen."
date        = "2012-04-27T21:00:00"
tag         = ["Android", "Programmierung", "Software"]
+++

Mit dem **Android-SDK** ist es problemlos möglich Apps mit simulierten Benutzereingaben zu testen. Das mitgelieferte Tool "Monkey" übernimmt dabei die ganze Arbeit. Hier erfahren Sie, wie einfach es mit dem Android-SDK möglich ist, Apps auf dem eigenen Gerät problemlos mit simulieren Benutzereingaben zu Testen.

<!--more-->

## Das Problem
Wer schon einmal eine Android-App entwickelt hat weiß, wie hart es ist, diese App möglichst gut zu Testen. Gerade dafür gibt es Websites wie [apkudo.com](http://apkudo.com), die das Testen auf verschiedenen Geräten übernehmen und es sogar ausführlich dokumentieren. Wenn man allerdings keine Lust hat, seine App Anderen anzuvertrauen (aus verschiedensten Gründen), kann man auch selbst mit "Monkey" aus dem Android-SDK testen.

## Was ist Monkey?
Monkey wird im Android-SDK ausgeliefert und ist in der `adb.exe` enthalten. Wenn Sie das SDK nicht besitzen, können Sie es sich ganz einfach bei Google kostenlos [herunterladen](https://developer.android.com/sdk/index.html). Mit einem einzigen Befehl in der Eingabeaufforderung/Konsole lassen sich beliebig viele Benutzereingaben in der App simulieren. Bei Fehlern oder Problemen wird der Test-Vorgang abgebrochen und Sie sehen den dazugehörigen LogCat.

## Der Testvorgang
Monkey ist sehr einfach zu bedienen und Sie benötigen nur folgende Schritte um den Testvorgang zu starten:

### Vorbereitung
* In den Ordner mit der `adb.exe` navigieren, dort eine Eingabeaufforderung/Konsole öffnen
* In dieser `adb start-server` eingeben
* Das Smartphone anschließen (Debugging-Modus!) oder den Emulator starten
* `adb devices` eingeben, um zu prüfen, ob das Smartphone verwendbar ist
* Mit `adb shell` auf die Shell des Geräts zugreifen

### Testvorgang starten
Mit `monkey -p` kann der Testlauf gestartet werden. Dabei sollte die Anzahl der Tests bei 500-1.000 liegen. Ein Beispiel-Aufruf wäre also:
```
monkey -p com.android.browser 500
```

Daraufhin lässt Monkey 500 zufällige Eingaben (Tastendrücke, Berührungen) auf die App los und zeigt – sobald ein Fehler auftritt – den entsprechenden LogCat an.