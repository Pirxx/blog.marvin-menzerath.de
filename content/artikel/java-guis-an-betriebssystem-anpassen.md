+++
title       = "Java GUIs an das Betriebssystem anpassen"
description = "Hier erfahren Sie, wie leicht sich Java GUIs mit 3 Zeilen Code an das Betriebsystem anpassen lassen, damit kein Anwender das Standard-Design ertragen muss."
date        = "2015-05-01T16:11:00"
tag         = ["Java", "Programmierung"]
+++

Manche in Java geschriebenen Programme und Applets beinhalten eine GUI - ein grafisches Benutzerinterface - mit dem das jeweilige Programm bedient werden kann.

<!--more-->

Meistens lassen sich diese Applikationen am immer gleichen und altbackenen Layout erkennen, das zwar auf allen Plattformen gleich aussieht, aber auch eben gleich hässlich:
![Is My Website Down - Design - Vorher](/images/java-guis-an-betriebssystem-anpassen/Vorher.png)

# Lösung
Die Lösung dieses kleinen Problems liegt in 3 Zeilen Code, die in die jeweilige GUI-Klasse einzufügen sind:
```java
try {
	UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
} catch (Exception ignored) {
}
```

Somit wird nun immer das Design in der Java-Applikation verwendet, welches das System selbst präferiert. Daher sieht das vorherige Beispiel nun folgendermaßen aus:
![Is My Website Down - Design - Nachher - Windows](/images/java-guis-an-betriebssystem-anpassen/Nachher_Windows.png)
![Is My Website Down - Design - Nachher - Ubuntu](/images/java-guis-an-betriebssystem-anpassen/Nachher_Ubuntu.png)

## Fazit
Diese Lösung ist simpel, schnell umgesetzt und verbessert gerade unter Windows die Integration der eigenen Anwendung in das Umfeld des Betriebssystems.
Unter Linux scheint es jedoch noch manchmal Probleme mit der Auswahl der korrekten Schriftart zu geben - da sollte dann ebenfalls der Entwickler mit einer sekundären Standardschriftart ran.