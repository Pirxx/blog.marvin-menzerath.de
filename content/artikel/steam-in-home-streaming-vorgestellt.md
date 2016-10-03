+++
title       = "Steam In-Home Streaming vorgestellt"
description = "Mit Steams In-Home Streaming können Sie einfach aktuelle Spiele-Hits wie GTA V auf Ihrem Fernseher oder Tablet-PC spielen."
date        = "2016-01-30T00:10:00"
lastmod     = "2016-02-19T12:09:00"
tag         = ["Software", "Spiele"]
+++

Schon seit geraumer Zeit bietet Valves Spiele-Plattform Steam mit dem "In-Home Streaming" eine komfortable Möglichkeit, um grafisch aufwendige Spiele auf schwacher Hardware - wie einem Tablet-PC oder sogar einem Fernseher - spielen zu können.

<!--more-->

## Was benötige ich?
Die Liste der benötigten Hardware ist recht kurz:

* einen guten PC, der die gewünschten Spiele ruckelfrei anzeigen kann
* ein "Ziel-Rechner", auf dem die gewünschten Spiele gespielt werden sollen
* eine schnelle Netzwerkverbindung
	* hier eignet sich ein Gigabit-Ethernet am besten
	* eine Verbindung über WLAN ist auch möglich, kann aber zu Rucklern führen

Software-technisch ist nur die Spiele-Plattform Steam auf beiden Rechnern vonnöten. Ob diese nun auf Windows, Linux oder Mac OS laufen, ist egal.

Ebenso möglich ist die Verwendung des [Steam Links](http://store.steampowered.com/app/353380?l=german), der direkt an einen Fernseher angeschlossen werden kann. Nähere Informationen dazu finden Sie auf der verlinkten Produktseite.

## Was ist möglich?
Prinzipiell können Sie nun jedes beliebige Spiel aus Ihrer Steam-Bibliothek (insofern es installiert ist) von Ihrem leistungsstarken Gaming-Rechner auf das schwächere Endgerät streamen.
Dazu muss der Steam-Client auf beiden Rechnern laufen und beide müssen sich gegenseitig im Netzwerk erkennen. Anschließend haben Sie auf Ihrem Endgerät die Möglichkeit (anstatt das Spiel lokal zu starten oder zu installieren), es von Ihrem anderen PC auf dieses Gerät zu streamen.

Sobald Sie nun diese Option ausgewählt haben, startet das Spiel auf dem stärkeren Rechner und Steam überträgt automatisch alle Bild- und Toninhalte auf den schwächeren Rechner. Gleichzeitig werden alle Eingaben auf Letzterem an Ersteren weitergegeben - dabei ist es egal, ob Sie Tastatur, Maus oder einen Controller verwenden.

## Wie funktioniert das ganze?
Technisch gesehen kodiert Steam das laufende Spiel "nebenbei" in einen Video-Stream und überträgt diesen an den anderen Rechner. Dieser Vorgang benötigt im Normalfall wenig Ressourcen, da die Videodaten so gut wie nicht komprimiert werden. Dafür muss jedoch die Netzwerkverbindung auch sehr gut sein - sonst könnten Bild- und Tondaten verloren gehen.
Während Steam selbst die Videoqualität der Verbindungsqualität anpasst, können Sie dies auch manuell in den Einstellungen des Steam-Clients tun.

### Verwendete Ports & Firewall-Regeln
Sollte der Steam-Client den anderen Rechner nicht im Netzwerk finden können, so müssen Sie unter Umständen gewisse Ports in den Einstellungen der Firewall freigeben:

* 27031 (UDP)
* 27036 (TCP / UDP)
* 27037 (TCP)

Während ich solche Probleme nicht bei der Windows-Firewall feststellen konnte, blockiert zum Beispiel die Eset Smart Security Firewall alle eingehenden Verbindungen des In-Home Streamings.

## Fazit
Dank des In-Home Streamings ist es für jedermann sehr leicht, auf praktisch jedem beliebigen Endgerät die neuesten AAA-Titel spielen zu können. Lediglich eine gute Netzwerkverbindung und eine sehr geringe Latenz zwischen Eingabe und Reaktion können den Spielspaß vermiesen.
