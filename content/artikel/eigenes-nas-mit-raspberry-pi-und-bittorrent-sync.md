+++
title       = "Eigenes NAS mit Raspberry Pi und Bittorrent Sync"
description = "Ein eigenes kostenfreies NAS können Sie schon mit einem Raspberry Pi und der kostenlosen Software Bittorrent Sync in Ihrer Wohnung betreiben."
date        = "2013-12-11T12:42:00"
tag         = ["NAS", "Raspberry Pi"]
+++

Ein eigener Netzwerkspeicher (NAS) muss nicht unbedingt teuer sein, denn schon mit dem Einplatinen-Rechner Raspberry Pi und der kostenlosen Software Bittorrent Sync können Sie ein eigenes, kostengünstiges NAS in Ihrer Wohnung betreiben.

<!--more-->

## Wie funktioniert das genau?
Bittorrent ist eigentlich ein **Protokoll zur verschlüsselten Übertragung von Dateien in einem Peer To Peer (P2P) Netzwerk**. Dieses System macht sich Bittorrent Sync zu nutze, in dem es Daten verschlüsselt im lokalen Netzwerk und auch über das Internet direkt zwischen Ihren Rechnern überträgt - ohne den Einsatz von Zwischenservern.

Daher ist das hier vorgestellte System auch kein eigentliches NAS, sondern eher eine immer aktive Synchonisationsstelle. So müssen Sie nicht immer mehrere Rechner gleichzeitig einschalten um Ihre Daten zu synchoniseren - denn **auf dem Raspberry Pi liegen immer die aktuellen Versionen**.

Aktuell befindet sich Bittorrent Sync zwar noch in der Entwicklungsphase, bietet aber regelmäßige Updates, ein aktives Forum und vorallem: **Datensicherheit**.

## Was benötige ich dafür?
Mehr als den sehr günstigen Rechner [Raspberry Pi](/artikel/raspberry-pi-review/) mit einer großen Speicherkarte oder einer externen Festplatte sowie einen Internetanschluss benötigen Sie nicht.

Laden Sie sich von [https://www.getsync.com/intl/de/platforms/desktop](https://www.getsync.com/intl/de/platforms/desktop) einmal den Client für **ARM-Linux** herunter (der dann später auf dem Raspberry Pi läuft) und den Client für Ihren PC.
Entpacken Sie nun das Archiv mit dem Raspberry Pi - Download und kopieren Sie die Datei `btsync` (via SFTP) auf Ihren Raspberry Pi.

## Einrichtung

### Raspberry Pi ("Server")
Melden Sie sich nun via SSH auf Ihrem Raspberry Pi an, mounten Sie die externe Festplatte falls diese als Datenspeicher gewählt wurde (möglichst in der `fstab`-Datei) und erstellen Sie ein oder mehrere Verzeichnis(se) für Ihre Daten:
```bash
mkdir files # Ein Ordner für Daten
cd files # Wechsel in diesen Ordner
mkdir documents # Ein Ordner für Dokumente
mkdir music # Ein Ordner für Musik
```

Nun müssen Sie die Bittorrent Sync Datei ausführbar machen...
```bash
chmod +x btsync
```
... und können eigentlich schon loslegen. Aber vorher sollten Sie noch den **automatischen Start des Services auf Ihrem Raspberry Pi einrichten**, damit Sie Bittorrent Sync nicht manuell starten müssen. Legen Sie dazu die Datei `/etc/init.d/btsync` an und kopieren Sie diesen Inhalt dort hinein:
```bash
#!/bin/sh
# /etc/init.d/btsync

case "$1" in
start)
	/home/marvin/btsync/btsync
	;;
stop)
	killall btsync
	;;
*)
	echo "Usage: /etc/init.d/btsync {start|stop}"
	exit 1
	;;
esac

exit 0
```
Beachten Sie, dass der **Pfad zur ausführbaren Datei eventuell verändert werden muss**!

Nun benötigt diese Datei noch die Rechte zur Ausführung und schließlich muss Sie "in den Autostart verschoben werden":
```bash
sudo chmod +x /etc/init.d/btsync
sudo update-rc.d btsync defaults
```

Nun können Sie den Dients mittels folgenden Befehls starten und auf das **Webinterface unter Port 8888 Ihres Raspberry Pis** (http://IP:8888) zur Einrichtung zugreifen:
```bash
sudo /etc/init.d/btsync start
```

Letzteres sieht folgendermaßen aus:
![Bittorrent Sync: Webinterface](/images/eigenes-nas-mit-raspberry-pi-und-bittorrent-sync/Webinterface.png)
In den Einstellungen können Sie dieses Interface **mit einem Passwort vor unerwünschten Zugriffen schützen**, die Down- & Upload Rate begrenzen sowie die Sprache umstellen.

### PC(s)
Installieren Sie einfach den Client aus dem Download und überspringen Sie die Einrichtung, bis Sie diesen (oder einen ähnlichen) Zustand sehen:
![Bittorrent Sync: Windows-Client](/images/eigenes-nas-mit-raspberry-pi-und-bittorrent-sync/Windows.png)

## Erste Synchonisation
Fügen Sie im Webinterface des Raspberry Pis nun einfach einen neuen Ordner (auf der Speicherkarte oder auf der externen Festplatte) hinzu und kopieren Sie den angezeigten Schlüssel (Secret-Key).
**Wichtig: Geben Sie diesen Key *niemals* weiter! Damit ist ein uneingeschränkter Zugriff auf Ihre Daten möglich!**

Den Schlüssel müssen Sie nun unter "Synchonisationsordner hinzufügen" neben dem zu verwendenen Ordner in Ihrem Client eingeben. Nach einem Klick auf "Bestätigen" beginnt auch schon die Synchonisation, die Sie unter dem Tab "Geräte" oder auch "Übertragungen" einsehen können.

Wenn Sie weitere Geräte (wie ein **Android-Smartphone**) zur Synchonisation hinzufügen möchten, ist dies ganz einfach mit dem im Webinterface angezeigten QR-Code möglich. Diesen müssen Sie nämlich nur mit der Kamera Ihres Mobiltelefons einscannen - und schon kann es auch hier losgehen:
![Bittorrent Sync: Android-Client](/images/eigenes-nas-mit-raspberry-pi-und-bittorrent-sync/Android.png)

## Fazit
Bittorrent Sync ist eine klasse Idee und bietet neben einem **kostenlosen und verschlüsseltem Synchonisations-Tool für das Netzwerk und das Internet** auch noch Clients für Smartphones und Unterstützung für den Raspberry Pi, der damit zu einem kleinen NAS wird.
Leider ist aktuell noch **kein Quellcode der Clients verfügbar**, sodass nicht nach möglichen "NSA-Schlupflöchern" geforscht werden kann. ;)
