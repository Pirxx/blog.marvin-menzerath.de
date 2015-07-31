+++
title       = "FritzBox Zugangspasswort herausfinden"
description = "Falls Sie das Passwort Ihrer FritzBox vergessen haben, können Sie dieses leicht mit dieser Anleitung wieder herausfinden ohne den Router resetten zu müssen."
date        = "2012-11-03T22:00:00"
tag         = ["Software", "Sicherheit"]
+++

Fast jeder FritzBox-Router wird mit einem Passwort vor Zugriffen auf die Einstellungen geschützt. Was aber, wenn Sie das Passwort vergessen haben und kein Backup der Einstellungen haben? Mit dieser einfachen Anleitung können Sie das Passwort Ihrer FritzBox leicht herausfinden.

<!--more-->

Seit der FRITZ!OS Version 6.0 kann die vorliegende Anleitung nicht mehr verwendet werden, da nun auch ein Benutzername zur Anmeldung eingegeben werden muss.

## Vorbereitung
Bevor Sie anfangen können, müssen Sie ein Paar kleine Vorbereitungen treffen:

* Schließen Sie ein **analoges Telefon** direkt an die FritzBox an und wählen Sie folgende Nummer: `# 96*7*`. Somit haben Sie den **Telnet-Zugang** (ähnlich der Konsole bei Windows oder dem Terminal bei Linux) zu Ihrer FritzBox aktiviert, über den Sie das Passwort herausfinden können. Gleichzeitig wird in Ihrer FritzBox Web-Oberfläche folgendes angezeigt, sobald Sie sich dort anmelden (können).
![FritzBox Passwort: Web-Interface](/images/fritzbox-passwort-rausfinden/Web.png)
* Nun brauchen Sie noch einen im Netzwerk angeschlossenen Computer, mit dem Sie die Passwortabfrage Ihrer FritzBox finden können.
* Zum Abschluss brauchen Sie nur noch ein Programm namens **Brutus**. Den Download finden Sie sehr leicht mit Hilfe der Suchmaschine Ihrer Wahl.
Sollte Ihr Anti-Viren Programm dabei einen Trojaner oder Ähnliches melden, müssen Sie diese Warnung ignorieren, da die Software dazu gedacht ist, Passwörter zu knacken.

## Das Passwort knacken
Jetzt kommt der spannendste, aber auch längste Teil des Vorgangs. Brutus wird nun eingerichtet und wird nach dem Brute-Force Prinzip alle möglichen Kombinationen als Passwort ausprobieren.

### Brutus einrichten
Da Brutus schon etwas älter ist, wirkt die Oberfläche leicht angestaubt und es können vereinzelt Schaltflächen verdeckt sein. Dies behindert aber nicht den Vorgang. Wenn Sie Brutus das erste Mal starten, sehen Sie folgende, leicht verwirrende, Oberfläche:
![FritzBox Passwort: Brutus Übersicht](/images/fritzbox-passwort-rausfinden/BrutusUebersicht.png)

Nun ändern Sie einfach folgende Einstellungen ab:

* Target: Hier kommt die IP-Adresse der FritzBox hinein (Bsp: `192.168.20.1`)
* Type: `Telnet`
* Klick auf `Modify sequence`
  * Häkchen bei `No UserID setzen`
  * Password promt: `Fritz!Box web password:`
  * Force read of at least `3` characters of target response
  * Auth. response string: `Login failed.`
  * Force read of at least `3` characters of target response
  * On match action: `Disconnect`
  * OK klicken und somit Speichern
* Pass Mode: `Brute Force`
* Klick auf `Range`
  * `Custom Range` auswählen
  * Im Textfeld die Buchstaben/Zahlen eingeben, an die Sie sich noch erinnern können.
  * Bei `Min Length` und `Max Length` die Anzahl der Zeichen Ihres Passwortes eingeben
  * Auf OK klicken und somit Speichern

Folgende Einstellungen sind nun gesetzt:
![FritzBox Passwort: Brutus Übersicht 2](/images/fritzbox-passwort-rausfinden/BrutusUebersicht2.png)
![FritzBox Passwort: Telnet](/images/fritzbox-passwort-rausfinden/BrutusTelnet.png)
![FritzBox Passwort: Brute-Force Konfiguration](/images/fritzbox-passwort-rausfinden/BrutusBruteForce.png)

### Den Vorgang Starten
Mit einem Klick auf `Start` wird der Brute Force Vorgang gestartet und kann je nach Komplexität des Passwortes **lange Zeit in Anspruch nehmen**.

Sobald ein Passwort erkannt wurde, wird es folgendermaßen angezeigt:
![FritzBox Passwort: Passwort gefunden](/images/fritzbox-passwort-rausfinden/BrutusErfolg.png)

An den geschwärzten Stellen wird das Passwort nun angezeigt. In diesem Beispiel habe ich die bekannten Zeichen und die Länge des Passwortes eingetragen, sodass nur 243 Passwörter generiert wurden. 

## Fazit
Durch eine solch einfache Methode lässt sich das Passwort einer FritzBox problemlos auslesen, es wird nur etwas Zeit benötigt.
Dieses Tutorial wurde in dem Sinn erstellt, dass

* Sie Ihre eigenes FritzBox Passwort aus mehreren verschiedenen Zeichen erstellen
* Sie den Telnet-Zugang immer inaktiv halten (mit folgender Telefon-Nummer: `# 96*8*`)
* Sie sich dieser möglichen Sicherheitslücke in Ihrem Netzwerk bewusst sind und Sie Ihre Netzwerk-Sicherheit erhöhen können

**Disclaimer**: Sollten Sie mit dieser Methode das Passwort einer FritzBox, **die nicht Ihnen gehört**, auslesen, ist dies *strafbar*!  
**Sie handeln dabei auf eigene Verantwortung. Beachten Sie, dass dieser Artikel keine Anleitung zum "Hacken" von fremden Netzwerken ist und ich nicht für Ihre Taten haftbar gemacht werden kann.**