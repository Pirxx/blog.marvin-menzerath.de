+++
title       = "VirtualBox: VM eigene IP-Adresse zuweisen"
description = "Hier erfahren Sie, wie Sie einer virtuellen Maschine in VirtualBox eine eigene IP-Adresse zuweisen können."
date        = "2016-02-08T03:05:00"
tag         = ["Software", "VirtualBox"]
+++

In diesem kurzen Artikel erfahren Sie, wie Sie einer virtuellen Maschine in VirtualBox eine eigene IP-Adresse zuweisen können, sodass Sie die VM aus dem Netzwerk heraus wie einen eigenständigen Rechner ansprechen können.

<!--more-->

Ich gehe im folgenden davon aus, dass Sie bereits eine virtuelle Maschine eingerichtet und eventuell auch installiert haben.

## Vorgehen
* Öffnen Sie nun zuerst die Einstellungen der virtuellen Maschine, solange diese abgeschaltet ist.
* Wählen Sie den Netzwerk-Tab aus.
* Stellen Sie nun den Netzwerk-Typ von `NAT` auf `Netzwerkbrücke` um:
![Screenshot: Netzwerkeinstellungen](/images/virtualbox-vm-eigene-ip-adresse-zuweisen/Netzwerkeinstellungen.jpg)

Sobald Sie nun die virtuelle Maschine erneut starten, wird dieser vom DHCP-Server im Netzwerk (falls vorhanden) eine eigene IP-Adresse zugewiesen, unter der Sie die VM erreichen können.
Außerdem können Sie mit dieser internen IP-Adresse Portfreigaben an Ihrem Router einrichten, sodass die VM auch aus dem Internet erreichbar ist.
