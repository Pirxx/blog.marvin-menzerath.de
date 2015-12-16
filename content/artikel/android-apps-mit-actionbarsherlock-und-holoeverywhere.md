+++
title       = "ActionBarSherlock und HoloEverywhere - ein Tutorial zu Android-Apps"
date        = "2013-01-06T19:00:00"
description = "Hier erfahren Sie, wie Sie ActionBarSherlock und HoloEverywhere problemlos in Ihre Android-Apps integrieren können."
tag         = ["Android", "Java", "Programmierung"]
+++

Mit den beiden Projekten **ActionBar Sherlock** und **HoloEverywhere** lassen sich die Design Richtlinien für Android-Apps von Google einfach umsetzten. Dies ist zwar ab Android Version 4.0 (Ice Cream Sandwich) auch ohne diese möglich, doch bleibt die Kompatibilität zu vorhergehenden Android-Versionen nicht erhalten. Hier erfahren Sie daher, wie Sie die beiden Projekte problemlos in Ihre Apps integrieren können.

<!--more-->

Zur Version 3.0 (respektive 4.0) hat sich Google einige Gedanken zum **Design und der Benutzeroberfläche von Android** gemacht. Viele dieser Gedanken wurden in eine **Richtlinie für Entwickler** gefasst, die Sie [hier](http://developer.android.com/design/index.html) finden können.
Die beiden Projekte ActionBarSherlock und HoloEverywhere sind auf GitHub zu finden und setzen an anderen Stellen an, wobei sie jedoch ineinander greifen. Dieses System möchte ich Ihnen heute vorstellen und erläutern, wie Sie ActionBarSherlock (kurz: ABS) und HoloEverywhere (kurz: HE) in Ihren Apps nutzen können.

## Was bringen ABS und HE?
Während ABS die so genannte ActionBar für Android > 3.0 bereitstellt, ist HE ein komplettes Style für die App. In diesem Screenshot von der HoloEverywhere-Website sehen Sie dies am Beispiel von Android-Version 2.3.
![ActionBarSherlock & HoloEverywhere](/images/android-apps-mit-actionbarsherlock-und-holoeverywhere/HoloEverywhere.png)

Am oberen Rand sehen Sie die ActionBar, ein Ersatz für das Menü/Menütaste. Hier sollen viele Benutzerinteraktionen stattfinden, die vorher in Menüs gefasst wurden.
Der ganze Rest der App ist im Holo-Design gehalten, dass von Google erst ab Version 3.0/4.0 implementiert (-> "eingebaut") ist.
Mithilfe dieser Beiden Tools können Sie also Ihre Apps abwärtskompatibel zu Android 2.x machen und sich gleichzeitig an die Richtlinien halten. Und das Beste ist: **Beide Tools sind kostenfrei!**

## Wie nutze ich ActionBarSherlock?
Wenn Sie nur ActionBarSherlock nutzen wollen (bspw. weil Sie ein eigenes Design entwickelt haben), müssen Sie nur folgende Schritte befolgen, um die ActionBar zu implementieren. Dabei greifen Sie auf die nativen Methoden der "originalen" ActionBar zu, wobei diese Methoden unter Android 2.x von ABS implementiert werden.

### Installation
* Laden Sie sich auf [dieser Website](http://actionbarsherlock.com/) ein aktuelles Archiv herunter und entpacken Sie es an einen beliebigen Ort.
* Kopieren Sie nun den Ordner `library` in Ihren workspace und wählen Sie in Ihrer IDE (ich nutze Eclipse) im Paket Explorer nach einem Rechtsklick `Import…` aus. Wählen Sie dann `Android` und `Existing Android Code Into Workspace`.
* Geben Sie den Pfad zum `library`-Ordner (in Ihrem Workspace) an, wählen Sie dann das Projekt aus (nur die Library!) und klicken Sie dann auf `Finish`, wobei kein Haken bei `Copy projects in workspace` sein darf.
* Nun müssen Sie nach einem Rechtsklick auf den Ordner im Paket Explorer `Properties` auswählen
* Im Reiter `Android` machen Sie ganz unten einen Haken bei `Is library` und wählen unter dem Reiter `Java Compiler` Version 1.6 oder 1.7 aus (es dürfen keine Fehler im Projekt Explorer angezeigt werden)

Damit ist die Installation beendet und Sie können nun Ihre erste ABS-App schreiben.

### Die erste App mit ABS
Nun müssen Sie nur noch wenige Dinge im Sourcecode Ihrer App ändern und Sie können endlich mit Ihrer App loslegen:

* Wählen Sie durch einen Rechtsklick `Properties` bei Ihrer App aus, und geben Sie im Reiter `Android` ganz unten als Referenz das ActionBarSherlock-Projekt an.
* Geben Sie folgende Zeile in Ihrem Manifest unter `Application` -> `Theme` an: `@style/Theme.Sherlock.Light`
* Im Sourcecode Ihrer ersten Activity müssen Sie nun `public class MeineApp extends Activity` durch `public class MeineApp extends SherlockActivity` ersetzen.
* Dieses Muster ist bei allen Activities/Fragments gleich und muss so fortgeführt werden

Wenn Sie nun Ihre App starten, haben Sie eine schwarze Leiste am oberen Bildschirmrand. Dort können Sie folgendermaßen Elemente hinzufügen:

*  Um die ActionBar nutzen zu können, rufen Sie diese mit folgendem Befehl auf:
```java
ActionBar bar = getSupportActionBar();
```

* Die Elemente (-> Buttons/Menüs) in der ActionBar können Sie wie das native Menü ansprechen:

```java
@Override
public boolean onCreateOptionsMenu(Menu menu) {
    menu.add(0, 1, 0, "Über")
    .setIcon(R.drawable.ic_myIcon)
    .setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM | MenuItem.SHOW_AS_ACTION_WITH_TEXT);
    return true;
}

@Override
public boolean onOptionsItemSelected(MenuItem item) {
    if (item.getItemId() == 1) {
        // Tu' was!
    }
    return true;
}
```

* Somit haben Sie jetzt einen Menüpunkt in der ActionBar, der (wenn genug Platz ist) mit "Über" bezeichnet wird und das Icon "myIcon" nutzt.
* Weitere Möglichkeiten dort Menüpunkte zu Platzieren, finden Sie leicht über Google oder eine andere Suchmaschine.

## Wie nutze ich HoloEverywhere?
Wenn Sie bereits ActionBarSherlock erfolgreich eingerichtet haben, ist HoloEverywhere sehr einfach zu implementieren.

### Installation
Die Installation läuft sehr ähnlich ab, kann jedoch auf zwei verschiedene Arten durchgeführt werden. Hier beschreibe ich nur die einfache Möglichkeit, daher sollten Entwickler mit mehr Vorwissen auf die offizielle Anleitung auf der GitHub-Seite zurückgreifen.

* Laden Sie sich von [dieser GitHub-Seite](http://github.com/Prototik/HoloEverywhere) das ZIP-Archiv und entpacken Sie alle Dateien in einen Ordner.
* Kopieren Sie den `library`-Ordner in Ihren `workspace` und importieren Sie ihn.
* Geben Sie bei HoloEverywhere als eine Referenz ActionBarSherlock an und entfernen Sie dieses aus Ihren Projekt-Properties.
* Nutzen Sie jetzt nur noch HoloEverywhere als Referenz in Ihrem Projekt!

### Die erste App
Da nun die Installation vorüber ist, können Sie das Holo-Design direkt auf Ihre App anwenden. Dies geht durch folgende Schritte:

- Stellen Sie sicher, dass in Ihrem Sourcecode wieder etwas wie `public class MeineApp extends Activity` steht.
- Importieren Sie nun folgendes `import org.holoeverywhere.app.Activity;` und und löschen Sie die von Ihrer IDE rot angezeigt Zeile, die `Activity` von `android.xxx` importiert.
- Nun müssen Sie nur noch Buttons/TextViews/etc. ebenso importieren und die Android-eigenen Importe löschen. Folgendermaßen geht das bei einer ProgressBar: `import org.holoeverywhere.widget.ProgressBar;`

## Fazit
Dank den beiden OpenSource-Projekten ist es für jeden Entwickler sehr einfach die Richtlinien für Entwickler umzusetzen und dabei die App auch gut aussehen zu lassen. Weiterhin bietet ActionbarSherlock auch die Möglichkeit Fragments zu nutzen (nutzt die Support-Library), was eigentlich erst ab Version 4.0 möglich ist, aber große Vorteile für den Entwickler und den User bietet. Somit sind beide Projekte eine große Empfehlung von mir für alle Entwickler.
