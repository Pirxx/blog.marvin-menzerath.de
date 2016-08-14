+++
title       = "Xbox One Controller blockiert Maus- und Tastatureingaben"
description = "Seit Kurzem blockiert die Verwendung des Xbox One Controllers die Funktion von Maus und Tastatur. Abhilfe schafft die Installation einer älteren Treiber-Version."
date        = "2016-03-20T00:01:00"
tag         = ["Spiele", "Windows"]
+++

Seit kurzer Zeit ist die Verwendung des Xbox One Controllers - egal ob mit dem Wireless Adapter oder per Micro-USB-Verbindung - an Windows-PCs mit einem Problem behaftet: nach, oder sogar noch während der Verwendung des Controllers werden Maus-Bewegungen nur in Schüben und mit Verzögerung dargestellt und Klicks werden mit einem doppelten Piepsen quittiert.

<!--more-->

Auch kann es dazu kommen, dass Tastatureingaben gar nicht mehr erkannt werden. Gerade ein Aus- und wieder Einschalten des Controllers kann diese Fehler provozieren.

Dieses Verhalten lässt sich seit einem per Windows Update untergeschobenen Treiber-Update des Controller-Adapters beobachten und lässt sich nur mittels eines Hard-Resets temporär beheben.
Die einzig dauerhafte Alternative ist die Installation der älteren Treiber-Version, bis das Problem per Windows Update behoben wird.

**Hinweis:** Das Problem wurde mittlerweile durch Microsoft behoben. Dazu ist bloß die Installation aller Windows Updates und des aktuellen Treibers (z.B. im Geräte-Manager) nötig.

## Installation der älteren Treiber
1. Verbinden Sie zunächst den Controller mit Ihrem Windows-PC. Ob Sie dafür die drahtlose Verbindung oder ein Micro-USB-Kabel verwenden, ist egal.
2. Öffnen Sie den Geräte-Manager (z.B. durch `WIN-Pause`) und suchen Sie dort den Eintrag `XINPUT compatible HID device` in der Kategorie `Eingabegeräte (Human Interface Devices)`.
3. Laden Sie die alte Treiber-Version `Xbox_Wireless_Adapter_for_Windows_7268.1_x64_6_3_9600_16384.cab` herunter und entpacken Sie das Archiv an einen beliebigen Ort.
4. Klicken Sie nun mit der rechten Maustaste auf den zuvor ausgewählten Eintrag im Geräte-Manager und wählen Sie dort `Treibersoftware aktualisieren...` aus.
5. Nun folgen Klicks auf `Auf dem Computer nach Treibersoftware suchen`, `Aus einer Liste von Gerätetreibern auf dem Computer auswählen`, `Datenträger...` und anschließend `Durchsuchen...`.
6. Wechseln Sie nun in das zuvor angelegte Verzeichnis mit den entpackten Dateien und wählen Sie im Dialogfenster die Datei `xinputhid.inf` aus. Anschließend bestätigen Sie die Wahl mit `Öffnen` und `OK`.
7. Wählen Sie nun den angezeigten Treiber aus und bestätigen Sie die Wahl mit einem Klick auf `Weiter`.

Nach der Installation kann es zum bereits bekannten Problem kommen und es empfiehlt sich ein Neustart des Rechners.
Anschließend können Sie den Controller wieder wie gewohnt verwenden.
