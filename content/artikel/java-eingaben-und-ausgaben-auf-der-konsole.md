+++
title       = "Eingaben und Ausgaben auf der Konsole"
description = "Zu den Java-Grundlagen gehört, wie man Ein- und Ausgaben auf der Konsole macht. Bereits durch wenige Zeilen Code kann man einfache Programme schreiben."
date        = "2013-05-25T22:38:00"
tag         = ["Java"]
+++

Im Java-Bereich geht es um Java-Grundlagen, die die Türe zu erweiterten Anwendungen und der Grundstein für die meisten Projekte sind. Zu den ersten Dingen, die man wissen sollte zählt, wie man Ein- und Ausgaben auf der Konsole machen kann. Bereits durch wenige Zeilen Code kann damit sogar ein kleines Text-Adventure programmiert werden.

<!--more-->

## Etwas auf der Konsole ausgeben
Wenn Sie in Ihrem Programm Werte berechnet oder verarbeitet haben, wollen Sie die Ergebnisse nun auch dem Nutzer zeigen. Dazu muss also eine Ausgabe auf der Konsole gemacht werden, insofern keine GUI vorhanden ist (dieses Thema wird später behandelt). Zur Ausgabe reicht bereits diese eine Zeile Code:
```java
// Ausgabe eines fest eingegebenen Strings
System.out.println("Ich bin ein Text");
 
// Ausgabe einer Variablen/eines Attributs
System.out.println(var);
```

Damit erscheint nun Ihr Ergebnis oder ein fest programmierter Text in der Konsole. Beachten Sie hierbei, dass ein Text in Anführungszeichen gesetzt werden muss, ein Zahlenwert (Bsp: Integer [`int`] oder Double [`double`]) jedoch nicht.

Weiterhin wird durch die Verwendung dieser Zeile Code automatisch ein Zeilenumbruch hinzugefügt. Falls Sie das nicht wünschen, können Sie einfach folgendes machen:
```java
System.out.print("Ich bin ein Text");
System.out.print(var);
```

Wie Sie sehen, wurde hierbei das ln hinter dem print entfernt. Nun müssen Sie jedoch selber daran denken, einen Zeilenumbruch mittels zu erzeugen.

## Etwas auf der Konsole eingeben
Um nun Eingaben auf der Konsole möglich zu machen, müssen Sie ein Objekt der Klasse `Scanner` erzeugen und diesem den `InputStream` ("eingehender Datenstrom") von `System.in` (Konsolen-Eingaben) übergeben. Danach können Sie eine Eingabe (die mit einem Tastendruck auf "Enter" abgeschlossen wird) in eine Variable einlesen.
```java
// Erzeugung eines neuen Objektes
Scanner sc = new Scanner(System.in);
// Einlesen der Eingabe in den String "eingabe"
String eingabe = sc.nextLine();
// Schließen des Scanners (nicht nötig, aber empfohlen)
sc.close();
 
// Ausgabe der Eingabe
System.out.println(eingabe);
```

Entwicklungsumgebungen wie Eclipse oder IntelliJ importieren die nötige Klasse (`java.util.Scanner`) automatisch. Falls Sie eine andere Entwicklungsumgebung nutzen, müssen Sie den Import manuell vornehmen, indem Sie noch vor den Beginn der Klasse (aber nach einem eventuellen Package-Namen) diese Zeile einfügen:
```java
import java.util.Scanner;
 
public class MeineKlasse() {
    // ...
}
```

## Fazit
Auf Grundlage dieser beiden Techniken sind die meisten Programme aufgebaut. Bereits dadurch lassen sich erste (kleine) Text-Adventures schreiben, die Sie durch if-Bedingungen und Schleifen immer weiter ausbauen können. In späteren Tutorials werde ich auf diese und weitere Dinge eingehen, jedoch nicht auf Grundlagen wie die Deklaration und Initialisierung von Variablen oder ähnliches.