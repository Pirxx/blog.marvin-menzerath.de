+++
title       = "Minecraft Bukkit Server - Einrichtung mit Essentials und WorldEdit"
description = "Hier geht es um die Installation, Einrichtung und Freigabe eines Minecraft CraftBukkit Servers mit \"Essentials\" und \"WorldEdit\" unter Windows und Linux."
date        = "2013-02-24T19:00:00"
tag         = ["Installation", "Linux", "Minecraft", "Server", "Software", "Windows"]
+++

Heute ist es Zeit für das Wunschtutorial zweier Leser: Die Installation und Einrichtung eines einfachen Minecraft Bukkit Servers mit den beiden Plugins "Essentials" und "WorldEdit" unter Windows und Linux. Außerdem erfahren Sie hier, wie Sie Ihren lokalen Server anderen Spielern via Hamachi oder einer Portfreigabe (bei einer FritzBox) anbieten können.

<!--more-->

## Was ist ein (Craft)Bukkit Server?
> Minecraft ist ein 3D Sandbox-Spiel in dem jeder Spieler Blöcke wegnehmen und platzieren kann. Mittlerweile gibt es über 200 verschiedene Blockarten (Stein, Holz, Treppen) und Biome (Wüste, Jungle) oder sogar Welten wie die Hölle. In Höhlen und nachts kommen jedoch Monster zum Vorschein, die Ihr Leben schnell beenden können. Minecraft ist bereits seit zwei Jahren sehr populär und bei vielen Let’s Playern auf YouTube der Einstieg in die LPer-Szene.

Jeder Minecraft-Spieler hat sicherlich bereits einmal mit Freunden oder auch Fremden zusammen auf einem Server gespielt. Der "normale" Server von den Minecraft-Entwicklern Mojang bietet jedoch nur die **Grundfunktionen** (Spieler kicken/bannen, Rundnachrichten) und kann nicht erweitert werden.
Der Bukkit-Server setzt an dieser Schwachstelle an und bietet einen **Plugin-fähigen Minecraft-Server mit vielen Erweiterungsmöglichkeiten und Einstellungen**.
 
## Installation
Laden Sie einfach unter [http://dl.bukkit.org/](http://dl.bukkit.org) den aktuellen "Recommended Build" oder die aktuelle Beta (im Falle eines wichtigen Versionsunterschiedes) herunter und kopieren Sie die `.jar`-Datei in einen Ordner Ihrer Wahl.
**Wichtig:** Nutzen Sie niemals direkt den Desktop oder die Eigenen Dokumente, da beim Start der Datei weitere Dateien und Ordner erstellt werden!

Der Start des Servers erfolgt stets in einem Terminal-Fenster (bzw. CMD), und ist daher unter Windows anders als unter Linux oder Mac OS. Daher muss hier die Start-Datei mit unterschiedlichem Inhalt gefüllt werden.

### Windows
Legen Sie mit einem Texteditor wie Notepad (oder besser: Notepad++) eine Datei namens `run.bat` an. Achten Sie darauf, dass die Dateiendung wirklich `.bat` ist und nicht `.txt`!
Kopieren Sie nun folgenden Text in das Dokument hinein und achten Sie darauf, den richtigen Dateinamen zu verwenden (basierend auf der aktuellen Bukkit-Version oder Sie benennen die Datei um).
```
java -Xms1024M -Xmx1024M -jar craftbukkit.jar
PAUSE
```
Mit einem simplen Doppelklick auf die `run.bat`-Datei wird der Server nun in einem Konsolen-Fenster gestartet.

### Linux
Legen Sie mit einem Texteditor wie nano (oder gedit) eine Datei namens `bukkit.sh` an.
Kopieren Sie nun folgenden Text in das Dokument hinein und achten Sie darauf, den richtigen Dateinamen zu verwenden (basierend auf der aktuellen Bukkit-Version oder Sie benennen die Datei um).
```bash
#!/bin/bash
BINDIR=$(dirname "$(readlink -fn "$0")")
cd "$BINDIR"
java -Xms1024M -Xmx1024M -jar craftbukkit.jar
```

Nun müssen Sie der Datei noch Execute-Rechte geben:
```bash
chmod +x bukkit.sh
```

Nach einem simplen Doppelklick auf die `bukkit.sh`-Datei oder durch die Ausführung von `./bukkit.sh` wird der Server nun in einem Konsolen-Fenster gestartet.

## Die Konfiguration
Sobald der Server gestartet wurde, sehen Sie im Konsolen-Fenster Meldungen durchlaufen. Vorallem beim erstmaligen Start des Servers sind einige Fehlermeldungen über fehlende Dateien dabei.
Nach dem Start können Sie im Konsolen-Fenster den Befehl `stop` eingeben, um den Server zu stoppen.

Zuallererst sollten Sie sich mit den Konfigurationsdateien auseinandersetzen:

* `server.properties` –> Die wichtigste aller Konfigurationsdateien. Diese enthält alle wichtigen Einstellungen eines Minecraft-Servers und wird später auch noch erweitert.  
Sie enthält unter anderem den Weltnamen, Seed, den MOTD und auch den StandardGamemode.
* `bukkit.yml` –> Die Bukkit-spezifischen Einstellungen finden Sie hier. Dies sind Einstellungen wie die Ticks pro Minute oder der Spawn von Tieren.

## Die Plugins
Nach Ihren ersten Einstellungen sollten Sie sich nun problemlos auf den Server verbinden können (auf dem gleichen PC via `localhost` und im Netzwerk über die IP-Adresse).

Der nächste Schritt ist nun die Installation der beiden Plugins "Essentials" und "WorldEdit". Dazu benötigen Sie nun den `plugins`-Ordner in Ihrem Bukkit-Ordner.
Weiterhin finden Sie unter [http://dev.bukkit.org/server-mods/](http://dev.bukkit.org/server-mods/) ein **Verzeichnis mit vielen Plugins für den Bukkit-Server**.

![Bukkit Server: Ordner-Struktur](/images/minecraft-bukkit-server-mit-essentials-und-worldedit/Ordner.png)

### Essentials
Das Essentials-Plugin fügt viele **In-Game-Befehle** zum Spiel hinzu, **färbt den Chat ein** und bietet unter anderem auch die Möglichkeit die Zerstörung der Welt durch Creeper zu verhindern.

Laden Sie sich also das zip-Archiv von [dieser Seite](http://dev.bukkit.org/server-mods/essentials/) herunter und kopieren Sie die gewünschten Komponenten aus dem Archiv in den Plugin-Ordner hinein.

Beim Start des Servers werden Sie nun einige neue Meldungen sehen, die durch das Plugin-Paket hervorgerufen werden. Außerdem finden Sie jetzt im Plugin-Ordner einen Ordner "Essentials" mit weiteren Konfigurationsdateien und dem Warp-Verzeichnis.

### WorldEdit
Mit WorldEdit ist es sehr einfach neue **Strukturen zu erstellen oder alte abreißen**. Durch dieses und weitere Tools lassen sich somit in wenigen Minuten riesige Gebäude erbauen.

Laden Sie sich von [dieser Seite](http://dev.bukkit.org/server-mods/worldedit/) das zip-Archiv herunter und entpacken Sie die `WorldEdit.jar` in den Plugin-Ordner und laden Sie den Server mit dem `reload` Befehl neu oder (besser noch) stoppen und starten Sie ihn einfach.

Auch hier finden Sie nun im Plugin-Ordner einen Unterordner "WorldEdit" mit weiteren Konfigurationsdateien und erweiterten Einstellungen.

## Freigabe des Servers
Die Freigabe eines Servers sollte **nur im Online-Mode** erfolgen (dh. in der `server.properties` muss `online-mode = true` sein), sodass der Server vor dem akzeptierten Login die Accountdaten bei Mojang verifiziert. So können sich nur die berechtigten Account-Inhaber am Server anmelden.

Für die öffentliche Freigabe gibt es nun zwei Möglichkeiten; jeweils mit Vor- und Nachteilen.

### Hamachi
Mit dem **kostenlosen Tool LogMeIn Hamachi** können Sie **VPNs** zwischen 2 bis 4 Rechnern aufbauen und durch die normale IP-Adresse ohne weitere Einstellungen auf einem Server (der natürlich auf einem der Rechner laufen muss) spielen.

Einer der Nutzer muss nur ein Netzwerk erstellen in welches alle anderen Mitspieler hinein müssen. Sollte die maximale Nutzerzahl eines Netzwerkes erreicht sein, muss der Server-Host die weiteren Mitspieler in ein neues Netzwerk leiten.

Den Download des Tools finden Sie [hier](http://www.chip.de/downloads/Hamachi_14293249.html).

### Portfreigabe
Der einfachste Weg ist jedoch die **Portfreigabe**. Durch diese benötigen die Mitspieler nur noch Ihre öffentliche IP-Adresse und können dem Server beitreten.

Im Menü Ihrer FritzBox finden Sie unter `Internet` -> `Freigaben` die Möglichkeit Portfreigaben zu erstellen. Dort müssen Sie dann den Port des Servers angeben (falls Sie diesen nicht geändert haben ist es der Port `25565`) und die Einstellungen übernehmen.

## Fazit
Mit einem einfach und schnell eingerichteten Bukkit-Server können Sie vielerlei an Ihrem Minecraft-Spiel modifizieren und den Spielspaß erhöhen.
Auch eine Freigabe für andere Spieler weltweit gestaltet sich einfach und funktioniert problemlos.