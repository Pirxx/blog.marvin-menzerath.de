+++
title       = "PHP in Visual Basic nutzen"
description = "Hier erfahren Sie, wie Sie Visual Basic Programme mit PHP-Skripten kommunizieren lassen können, und welche Möglichkeiten Ihnen dies bietet."
date        = "2012-10-11T21:00:00"
tag         = ["PHP", "Programmierung", "Visual Basic", "Windows"]
+++

Hier erfahren Sie, wie Sie Visual Basic Programme mit PHP-Skripten kommunizieren lassen können, und welche Möglichkeiten Ihnen dies bietet.

<!--more-->

## Welche Vorteile bringt mir das?
Diese Frage kann man unterschiedlich beantworten, aber meist ist es dazu nützlich, um Scripts auf einem Webserver zu starten und eine Rückgabe im Programm angezeigt zu bekommen. Außerdem können Sie so bestimmte Vorgänge automatisieren und brauchen nur ein einziges VB-Programm dazu.

## Wie kann ich PHP in VB nutzen?
Die Vorgehensweise ist wirklich einfach und braucht nicht viel Vorwissen in PHP und Visual Basic:

* PHP-Script anlegen (z.B.: eine Textdatei mit der Endung `*.php` versehen) und folgenden Text dort hineinkopieren:
```php
<?php
	echo 'Hallo, VB!';
?>
```
* Das Script auf einem php-fähigen Webserver (egal ob lokal oder im Netz) hochladen
* Ein neues Visual Basic Projekt anlegen und das Start-Form mit einer TextBox, einem Label und einem Button ausstatten.
* Durch einen Doppelklick auf den Button öffnet sich der Code-Editor.  
Dort geben Sie folgendes an:
```vb
Public Class Form1
	Private Sub Button1_Click(sender As System.Object, e As System.EventArgs) Handles Button1.Click
		Dim myWebClient As System.Net.WebClient
		myWebClient = New System.Net.WebClient()
		Dim phpResult As String phpResult = myWebClient.DownloadString(TextBox1.Text)
		Label4.Text = phpResult
	End Sub
End Class
```
* Nun können Sie das Programm starten, die URL zum PHP-Skript in der TextBox eingeben und Sie bekommen die Rückgabe (durch die php-Funktion `echo`) im Label angezeigt.

## Weitere Möglichkeiten
Sie können Variablen übergeben, die im Script genutzt werden. Dazu ändern Sie das PHP-Script einfach folgendermaßen ab:
```php
<?php
	$vbText = $_GET['text'];
	echo $vbText;
?>
```

Jetzt können Sie im Visual Basic Programm einfach (wie in jedem Webbrowser auch) einen Text als Variable übergeben und wieder angezeigt bekommen.
Dies geschieht hier durch einfaches Anhängen von `?text=Hallo, ich bin PHP!` an die Adresse des php-Scripts. Dabei sollten Sie jedoch beachten, dass Leerzeichen nicht immer funktionieren müssen, und vor allem auch, dass alle Daten im Klartext übertragen werden. Daher sollten Sie keine sensiblen Daten wie Passwörter über diese Methode an das Script senden!
