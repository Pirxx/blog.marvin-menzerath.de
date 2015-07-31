+++
title       = "OwnCloud: WebDav-Zugriff mit HTTPS auf einem Uberspace"
description = "Wenn WebDav-Clients wie FolderSync nicht mit der OwnCloud-Installation auf einem Uberspace verbunden werden können, kann dieser simple Trick weiterhelfen."
date        = "2015-03-24T17:27:00"
tag         = ["OwnCloud", "Uberspace"]
+++

Nachdem ich gestern erfolgreich eine OwnCloud-Installation mit entsprechendem SSL-Zertifikat auf meinem Uberspace eingerichtet hatte, wollte ich neben dem Desktop-Client auch mein Android-Smartphone via WebDav zur Synchronisation mit der OwnCloud bewegen.

<!--more-->

## Das Setup
OwnCloud ist unter einer Subdomain erreichbar und liegt dazu im Verzeichnis `/var/www/virtual/<user>/cloud.domain.com/`.
Weiterhin ist für diese Domain ein valides SSL-Zertifikat von StartSSL aufgeschaltet und die Verbindung mittels HTTPS wird durch die entsprechende Einstellung im OwnCloud-Webinterface erzwungen.

Für den Desktop-Client ist es kein Problem, sich mit der Installation zu verbinden und Dateien zu synchronisieren. Auch `davfs2` auf meinem Banana Pi oder der offizielle Android-Client (leider ohne Synchonisationsfunktion) machen keine Probleme.
Einzig der Android-Client [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.full&hl=de), der OwnCloud-Installationen (via WebDav) ansprechen können soll, meldete immer ein simples "Not Found" beim Zugriff auf die WebDav-Schnittstelle.

## Mögliche Ursachen
Als mögliche Ursache ist mir [SNI](http://de.wikipedia.org/wiki/Server_Name_Indication) in den Sinn gekommen - wahrscheinlich unterstützt FolderSync dieses schlicht nicht oder nicht korrekt. Denn bei einer unverschlüsselten Verbindung via HTTP konnte OwnCloud, bzw. die WebDav-Schnittstelle, erreicht werden.
Dafür spricht auch das Error-Log, welches fehlgeschlagene Zugriffe auf die Datei `remote.php` im `DOCUMENT_ROOT`-Verzeichnis des Uberspaces (`~/html/remote.php`) meldete. Diese Zugriffe sollten eigentlich die OwnCloud-Installation unter `/var/www/virtual/<user>/cloud.domain.com/remote.php` erreichen.
Vielleicht spielt aber auch die Art und Weise, [wie bei Uberspace Subdomains behandelt werden](https://wiki.uberspace.de/domain:subdomain# technische_hintergruende), bei dieser Problematik eine Rolle.

## Die Lösung
Auch wenn ich mir nicht sicher bin, ob die gewählte Lösung optimal ist - es ist die einzige, die wirklich funktioniert hat.

Nach einem einfachen [Symlink](http://de.wikipedia.org/wiki/Symbolische_Verkn%C3%BCpfung) von `~/html/remote.php` auf `/var/www/virtual/<user>/cloud.domain.com/remote.php` ließ sich FolderSync endlich zu einem Zugriff auf die WebDav-Schnittstelle und zur Synchronisation der Dateien überreden:

```bash
ln -s /var/www/virtual/<user>/cloud.domain.com/remote.php ~/html/remote.php
```