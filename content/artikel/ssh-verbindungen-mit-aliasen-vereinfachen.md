+++
title       = "SSH-Verbindungen mit Aliasen vereinfachen"
description = "Mittels Aliasen lassen sich komplexe SSH Verbindungskonfigurationen abspeichern und schnell mit einem simplen Befehl starten."
date        = "2015-12-12T20:20:00"
lastmod     = "2016-07-16T23:52:00"
tag         = ["Linux", "Server", "Software", "Tipp"]
+++

Wer sich häufig mit verschiedenen Hosts via SSH verbindet, muss nicht immer wieder Benutzernamen, Host und eventuell auch Port angeben, sondern kann seine Verbindungskonfiguration in den SSH-Einstellungen als Alias festlegen und muss fortan nur noch den gewählen Namen verwenden.

<!--more-->

Anstatt bei jeder Verbindung etwas wie `ssh myuser@host01.mycompany.com -p 1234` einzutippen, lassen sich die meist genutzten Konfigurationen in der `~/.ssh/config`-Datei festlegen.

## Vorgehensweise
Öffnen Sie zunächst oben genannte Datei mit einem Text-Editor Ihrer Wahl. Unter Umständen müssen Sie diese Datei vorher noch anlegen.

Legen Sie nun eine Konfiguration nach folgendem Muster fest:
```
Host hostname
	HostName host01.mycompany.com
	User myuser
	Port 1234
```

Sollten Sie eine Keyfile zur Authentifizierung nutzen wollen, so können Sie noch eine solche Zeile hinzufügen:
```
IdentityFile ~/.ssh/id_rsa
```

Nun nur noch die Datei abspeichern und Sie können die Verbindung zum Host mittels `ssh hostname` öffnen.

## Beispiel
In folgendem Beispiel finden Sie zwei Konfigurationen, mit denen man sich mittels Keyfile-Authentifizerung auf die beiden Uberspace-Hosts `capella` und `diphda` verbinden kann, indem man nur `ssh capella`, bzw. `ssh diphda` eintippt:
```
Host capella
	HostName capella.uberspace.de
	User capellauser1
	IdentityFile ~/.ssh/id_rsa

Host diphda
	HostName diphda.uberspace.de
	User diphdauser1
	IdentityFile ~/.ssh/id_rsa
```
