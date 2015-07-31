+++
title       = "Windows 7, 8 und 8.1 kostenfrei Downloaden und Nutzen"
description = "Microsoft bietet Windows 7, 8 und 8.1 in der Enterprise-Version zum 90-tägigen Test an - und dieser lässt sich einige male um weitere 90 Tage verlängern."
date        = "2013-11-30T12:33:00"
tag         = ["Kostenfrei", "Windows"]
+++

Wer Windows "nur" als virtuelle Maschine nutzen will, braucht keinen extra Lizenzschlüssel dafür kaufen, denn Microsoft bietet Windows 7, 8 und 8.1 in der Enterprise-Version zum 90-tägigen Test an - und dieser lässt sich bis zu ~~5~~ 3 mal um weitere 90 Tage verlängern.

<!--more-->

## Wie funktioniert das genau?
Laden Sie sich einfach das passende iso-Image aus der unten stehenden Auflistung herunter und starten Sie dann die VM oder Ihren PC von diesem Image (vorher auf DVD brennen oder einen USB-Stick erstellen). Durchlaufen Sie nun den Installations-Assistenten und warten Sie, bis das System fertig installiert und eingerichtet ist. Nun haben Sie ein für 90 Tage aktiviertes Windows-System, welches Sie ganz normal nutzen können.

## Was geschieht nach den 90 Tagen?
Nach Ihrer 90-tägigen Testphase wird der Bildschrimhintergrund schwarz und der Rechner startet sich jede Stunde neu. Um diesem Verhalten entgegen zu wirken, müssen Sie einfach folgenden Befehl als Administrator in der Konsole ausführen und den Rechner neustarten:
```
slmgr -rearm
```

Danach haben Sie eine erneute, 90-tägige Testphase. Dieser Vorgang kann bis zu 5 mal wiederholt werden, bis eine komplette Neuinstallation nötig wird.

## Downloads
Alle Downloads liegen im iso-Format vor und können mit einem entsprechenden Programm auf eine DVD gebrannt werden. Die Sprache ist immer Deutsch.

* Windows 7 - nicht mehr (offiziell) verfügbar[*]
* Windows 8 - nicht mehr (offiziell) verfügbar[*]
* Windows 8.1
	- x86 (32Bit): [Download](http://care.dlservice.microsoft.com/dl/download/1/B/E/1BEDF444-0504-4694-A738-4005AAD16887/9600.16384.WINBLUE_RTM.130821-1623_X86FRE_ENTERPRISE_EVAL_DE-DE-IRM_CENA_X86FREE_DE-DE_DV5.ISO)
	- x64 (64Bit): [Download](http://care.dlservice.microsoft.com/dl/download/1/B/E/1BEDF444-0504-4694-A738-4005AAD16887/9600.16384.WINBLUE_RTM.130821-1623_X64FRE_ENTERPRISE_EVAL_DE-DE-IRM_CENA_X64FREE_DE-DE_DV5.ISO)

[*] Diese Datei können Sie mit Hilfe einer Google-Suche finden. Die Aktivierung kann jedoch nicht (immer) problemlos ausgeführt werden.

## Fazit
Dank dieser simplen, aber genialen Methode können Sie Ihre VMs über ein Jahr lang ohne Neuinstallation nutzen oder neue Windows-Versionen ausführlich testen.