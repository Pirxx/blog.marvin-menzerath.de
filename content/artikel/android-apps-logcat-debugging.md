+++
title       = "Android-Apps debuggen: LogCat"
description = "Hier erfahren Sie, wie einfach Sie den Android LogCat am PC und Smartphone selbst auslesen und selbst Nachrichten dort loggen können."
date        = "2013-02-17T12:00:00"
tag         = ["Android", "Programmierung"]
+++

Der Android-LogCat ist einer der wichtigsten Bestandteile des Android-Betriebssystems für Entwickler. In diesem werden wichtige Meldungen des Systems und der meisten Apps mitgeschrieben, die sich jederzeit von Entwicklern und durch entsprechende Apps auslesen lassen.
Hier erfahren Sie, wie Sie selbst im LogCat loggen und wie Sie diese Meldungen auslesen können.

<!--more-->

## Was ist der LogCat?
Der LogCat ist die zentrale Anlaufstelle für **alle Meldungen des Systems und der Apps**. In diesem können **Fehlermeldungen und andere Informationen** gespeichert und auch wieder durch eine IDE oder direkt am Gerät durch entsprechende Apps ausgelesen werden.
Der LogCat entspricht weiterhin dem "**First In, First Out**" (FIFO)-Prinzip: Die erste Log-Meldung wird bei zunehmender Größe des Logs auch wieder als erstes gelöscht. Normalerweise beträgt der Speicherplatz 64kb, was ungefähr 4.000 Logzeilen entspricht.
Je nach Hersteller kann die Größe des Logs aber auch variieren.

## Wo finde ich den LogCat?
Um den Log abzurufen gibt es zwei verschiedene Methoden:

a) über die "DDMS"-Ansicht in Eclipse:

* Starten Sie Eclipse und wählen Sie einen Workspace aus
* Klicken Sie auf "Window", "Open Perspective" und wählen Sie "DDMS" Sie sehen nun im unteren Teil des Bildschirms (bei angeschlossenem Gerät/Emulator) bunte Meldungen durchlaufen.
![LogCat: DDMS-Ansicht](/images/android-apps-logcat-debugging/DDMS.png)

b) mit einer App auf dem Smartphone:

* Laden Sie sich die App "aLogcat" aus dem PlayStore herunter ([Link](http://play.google.com/store/apps/details?id=org.jtb.alogcat))
* Nach dem Start sehen Sie die vergangenen und neuen Meldungen auf dem Bildschrim

Zu dieser Methode kann ich leider keinen Screenshot zeigen, da ab Android Version 4.2 (Jelly Bean) alle Apps nur noch auf ihren eigenen Log zugreifen können.

## Eine typische Fehlermeldung
Mit dem folgenden Quelltext habe ich nun einen **StackOverflow** erzeugt und die App zum Absturz gebracht.
```java
package com.example.meineapp;

import android.os.Bundle;
import android.app.Activity;

public class MainActivity extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		killMyApp();
	}
 
	private void killMyApp() {
		while (true) {
			killMyApp();
		}
	}
}
```

Hier wird beim Start der App die Methode `killMyApp()` rekursiv aufgerufen und erzeugt daher den StackOverflow. Im LogCat sieht diese Fehlermeldung dann folgendemaßen aus:
![LogCat: StackOverflow](/images/android-apps-logcat-debugging/StackOverflow.png)

Durch einen Doppelklick auf die erste Zeile der Fehlermeldung gelangen Sie nun zum Auslöser der Problems. Jedoch ist diese Methode nicht immer genau und es werden auch gelegentlich falsche Zeilen markiert.

## Selber Mitteilungen loggen
Bei der Entwicklung der eigenen App bietet es sich nun an, **selbst Meldungen oder abgefangene Fehler im LogCat zu loggen**. Dies ist auf fünf verschiedene Arten möglich, wobei diese alle auf der gleichen Syntax basieren.

Die Syntax sieht dabei folgendermaßen aus:
```java
Log.X(tag, message);
```

Das `X` müssen Sie nun durch den passenden Nachrichten-Typus ersetzen:

* `v` -> "Geschwätz" (vom englischen "verbose"; unwichtig und kann meist ignoriert werden)
* `i` -> Information (Eher unwichtig und wird meist ignoriert)
* `d` -> Debug (Informationen nur für die Entwicklung)
* `w` -> Warnung (Wichtige Information; der Fehler beeinträchtigt aber nicht den Rest der App)
* `e` -> Fehler (Wichtige Information; sollte niemals auftreten)

Weiterhin benötigt LogCat die Angabe eines Tags. Dieser kann frei gewählt werden, sollte jedoch überall in Ihrer App gleich sein.
Die Angabe eines Strings als Nachricht ist selbstverständlich.

## Fazit
Mir hat der LogCat bei der Entwicklung meiner Apps immer sehr geholfen und hat stets zu einer Lösung des Problems geführt. Vorallem wenn Sie gerade mit der Programmierung Ihrer ersten App beginnen unterlaufen Ihnen sicherlich noch kleine Fehler, die sich mit dem LogCat **schnell und sicher finden** lassen.

Weiterhin verstehen Sie nun auch, warum App-Entwickler nicht die Beschreibung des Fehlers (á la "Die App ist abgestürzt als ich auf den Button geklickt habe") interessiert, sondern der zugehörige LogCat.
