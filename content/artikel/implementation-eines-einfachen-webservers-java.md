+++
title       = "Implementation eines einfachen Webservers in Java (Facharbeit)"
description = "In diesem Artikel lesen Sie den zweiten Teil meiner Facharbeit zur Implementation, bzw. Entwicklung eines einfachen Webservers in Java."
date        = "2014-05-12T19:15:00"
tag         = ["Facharbeit", "HTTP-Protokoll", "Java", "Webserver", "Programmierung"]
+++

In diesem zweiten Teil meiner Facharbeit geht es nun um die Implementation, bzw. Entwicklung eines einfachen Webservers in Java. Dieser lässt sich bereits mit dem Wissen über das HTTP-Protokoll und Grundlagen der Netzwerkprogrammierung in Java entwickeln.  Bevor Sie diesen Artikel weiterlesen, sollten Sie den [ersten Teil meiner Facharbeit über die Funktionsweise des HTTP-Protokolls](/artikel/wie-funktioniert-das-http-protokoll/) gelesen haben.

<!--more-->

## 3. Implementation eines einfachen Webservers in Java
Mit diesem Wissen über das HTTP-Protokoll und über die Programmierung von Netzwerkanwendung in der Programmiersprache Java[^1] lässt sich nun ein einfacher Webserver in Java implementieren, der auf GET- und POST-Requests eines Browsers mit den Daten aus einem festgelegten Verzeichnis antworten kann und auf Fehler passend reagiert. Der gesamte Quellcode der Anwendung ist ~~im Anhang und~~ unter [https://gist.github.com/MarvinMenzerath/16dbf192de45e11eab48](https://gist.github.com/MarvinMenzerath/16dbf192de45e11eab48) vorzufinden. Der Aufruf dieser URL wird für eine verbesserte Lesbarkeit mit Zeilennummern und Syntax Highlighting[^2] empfohlen.

### 3.1 Klassenstruktur
Das gesamte Projekt besteht aus 2 Packages mit jeweils 3 Klassen. Der Aufbau dieser Struktur sieht dabei folgendermaßen aus:

1             | 2           | 3
--------------|-------------|--------------
de.menzerath. | httpserver. | HTTPServer
			  |             | HTTPThread
			  |             | WebResources
			  | util.       | FileManager
			  |             | Logger
			  |             | ServerHelper

Der Einstiegspunkt der Anwendung liegt in der Klasse HTTPServer und dort (wie üblich) in der `main()`-Methode:
```java
public static void main(String[] args) {
	new HTTPServer(8080, new File("./www"), true, new File("log.txt"));
}
```
Dort wird nun ein neues Objekt der Klasse `HTTPServer` erstellt, welches wiederum einen ServerSocket für den angegebenen Port erstellt und auf diesem auf eingehende Verbindungen wartet, die dann jeweils an ein neues Objekt der Klasse `HTTPThread` übergeben werden. Letztere behandelt dann die eingehende Verbindung und den HTTP-Request entsprechend in einem eigenen Thread[^3] und sendet die HTTP-Response zurück an den anfragenden Client.[^4]
Die Klasse `WebResources` beinhaltet das HTML-Grundgerüst sowie das CSS für Dateiauflistungen und die Fehlerseiten.
In der Klasse `FileManager` finden sich passende Content-Types zu verschiedenen ausgewählten Dateiendungen, die im HTTP-Header gesendet werden müssen. Neben zwei weiteren, kleinen Hilfsmethoden, kann die Methode `getReadableFileSize(long size)` auch die Dateigröße (die durch `File.length()` ausgegeben wird) in eine lesbare Dateigröße (wie "2.21 MB") umwandeln.
Durch die statischen Methoden der Klasse `Logger` werden Meldungen des Webservers mit einem Zeitstempel versehen, auf der Konsole ausgegeben und in einer festgelegten Datei angezeigt.
Zu guter Letzt existieren noch zwei Hilfsmethoden in der Klasse `ServerHelper`, die die IP-Adresse des Servers im Netzwerk, sowie den absoluten Pfad zum Datenverzeichnis zurückgeben.

### 3.2 Verarbeitung des Requests
Die Verarbeitung des HTTP-Requests geschieht hauptsächlich im zur jeweiligen TCP-Verbindung gehörenden Thread[^5]. Bevor der Request aber überhaupt geparst[^6] und somit verarbeitet werden kann, muss der Server erst einmal den Request vom Client empfangen. Dazu wird ein BufferedReader verwendet, der wiederum die Daten von einem InputStreamReader erhält, der den InputStream - also die eingehenden Daten vom Client - verwendet. Außerdem wird ein Socket-Timeout von 30 Sekunden festgelegt, sodass der Client die Verbindung nicht zu lange offen halten kann.
Nun wird jede Zeile des Requests (insofern diese nicht „leer“ ist) in eine ArrayList eingetragen, damit die Anfrage schließlich im weiteren Verlauf Zeile für Zeile bearbeitet werden kann.

#### 3.2.1 Parsen des Requests
Das eigentliche Parsen des Requests geschieht in wenigen Schritten: Insofern die erste Zeile des Requests mit `HTTP/1.0` oder `HTTP/1.1` endet – also das HTTP-Protokoll verwendet wird – und diese Zeile auch mit `GET` oder `POST` beginnt (andere Methoden werden hier mit einem 501er [Fehler] beantwortet), wird der Vorgang fortgesetzt. Andernfalls wird entweder ein 400er (Bad Request) oder ein 501er (Not Implemented) an den Client versendet.
Nun muss die angeforderte Datei gefunden werden: Dazu werden einfach alle Informationen aus der ersten Zeile der Anfrage (bis auf die Pfad-/Dateiangabe) entfernt. Sollte ein GET-Request mit einer URL mit Parametern ankommen, werden letztere ebenfalls entfernt.
Nachdem nun also der relative Pfad zur angeforderten Datei bekannt ist, benötigt der Server den absoluten Pfad zu dieser. Dazu (und zur weiteren Verarbeitung des Requests) eignet sich die Klasse `File`, die Java bereits mitbringt. Dem Konstruktor wird der festgelegte WebRoot[^7], sowie der Pfad aus der Anfrage übergeben und anschließend wird die Methode `getCanonicalFile()` an diesem Objekt aufgerufen, sodass das Objekt schließlich (mit einem absoluten Pfad) auf eine bestimmte Datei oder ein Verzeichnis zeigt[^8].
Der letzte Schritt (vor der eigentlichen Vorbereitung der Response) prüft, ob (insofern das gerade erzeugte `File`-Objekt ein Verzeichnis ist), eine Index-Datei im Verzeichnis vorhanden ist. Diese muss `index.html` heißen und wird (falls vorhanden) statt einer Dateiauflistung an den Client gesendet.

#### 3.2.2 Vorbereitung der Response
Der Inhalt der Response ist nun von weiteren Faktoren abhängig:
Ist die angeforderte Datei innerhalb des WebRoots? Existiert sie überhaupt?
Je nach Antwort auf diese Überprüfungen muss die entsprechende Fehlermeldung gesendet werden.
Nun gibt es nur noch zwei Fälle, in denen die Applikation eine Response wirklich vorbereiten muss: Wenn **ein Verzeichnis** oder **eine Datei** angefordert wird. Bei ersterem wird eine alphabetisch sortierte Auflistung aller Dateien und Unter-Verzeichnisse im angeforderten Verzeichnis erstellt – insofern das Verzeichnis nicht leer ist und der Zugriff erlaubt ist. Auch das gestaltet sich recht einfach, da mit einer `for each`-Schleife durch alle `Files` iteriert wird und sich so auch Dateigröße und das Datum der letzten Bearbeitung einfach auslesen lassen:
```java
File[] files = file.listFiles();
for (File myFile : files) {
	String fileName = myFile.getName();
	String fileSize = FileManager.getReadableFileSize(myFile.length());
	String fileLastMod = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(myFile.lastModified())
}
```
Sollte "nur" eine Datei angefordert werden (wie es meistens der Fall ist), muss nicht mal eine wirkliche Ausgabe vorbereitet werden: Es wird nur ein InputStream, der die Datei zur Ausgabe an den Client einliest, benötigt und der Content-Typ der Datei muss anhand der Dateiendung festgestellt werden. Schon können die Daten an den Client versendet werden.

#### 3.2.3 Senden der Daten
Das Senden der Daten besteht aus zwei Schritten: dem Senden des Headers und der eigentlichen Daten, wobei beides natürlich über die gleiche Verbindung und nacheinander erfolgen muss.
Das Senden des Headers übernimmt die Methode `sendHeader(...)`, die mehrere Parameter erwartet: Den zu verwendenden OutputStream, den HTTP-Status-Code (inkl. zugehöriger Nachricht), sowie Typ, Größe und den Zeitpunkt der letzten Bearbeitung der Datei/der Daten.
Nachdem der Header dann versendet wurde, müssen die Daten übertragen werden: Zuerst muss die angeforderte Datei eingelesen und der Content-Type bestimmt werden. Dazu werden ein InputStream und die statische Methode `getContentType(...)` der `FileManager`-Klasse verwendet. Danach wird die Datei Byte für Byte eingelesen und an den Client übertragen, bis die Übertragung abgeschlossen ist und der OutputStream, also die Verbindung zum Client, beendet werden kann.
Beim Senden einer Fehler-Seite ist zu beachten, dass keine Datei eingelesen werden muss und praktisch "nur" ein String mit der Fehlermeldung gesendet wird. Daher muss an diesem String die Methode `getBytes()` aufgerufen werden.

## Literaturverzeichnis
* Ullenboom, Christian: Java ist auch eine Insel. 9. Auflage 2011  
[http://openbook.galileocomputing.de/javainsel9/](http://openbook.galileocomputing.de/javainsel9/), 22.12.2013
* siehe [Teil 1 der Facharbeit](/artikel/wie-funktioniert-das-http-protokoll/)

[^1]: Vgl. Ullenboom, Christian: Java ist auch eine Insel, Abschnitt „21. Netzwerkprogrammierung“
[^2]: Farblich markierte Codefragmente
[^3]: deutsch: Faden; erlaubt parallel ablaufende Aktivitäten. Hier: Verarbeitung mehrerer Anfragen ohne die gesamte Anwendung zu blockieren.
[^4]: siehe 3.2
[^5]: gemeint: Thread, der von einem Objekt der Klasse HTTPThread erzeugt, bzw. gestartet wurde
[^6]: Request wird eingelesen und auf Korrektheit überprüft. Außerdem werden die wichtigen Informationen extrahiert und für die weitere Verwendung gespeichert; siehe Abschnitt 3.2.1
[^7]: Verzeichnis, in welchem die Daten liegen, die vom Server ausgeliefert werden dürfen. Außerhalb (--> “über”) diesem Verzeichnis ist kein Zugriff erlaubt.
[^8]: Anzumerken ist, dass diese Datei / dieses Verzeichnis nicht existieren muss
