+++
title       = "GitLab in einem DigitalOcean Droplet installieren"
description = "GitLab lässt sich mit einer kleinen Anpassung problemlos im günstigsten DigitalOcean Droplet installieren. Wie das genau funktioniert, erfahren Sie hier."
date        = "2015-01-23T15:55:00"
tag         = ["Git", "Installation", "Linux", "Server", "Ubuntu"]
+++

GitLab ist ein Open-Source Version Control System (VCS), ähnlich wie GitHub, aber zum Selber-Hosten und in der Community Edition ohne Einschränkungen völlig kostenfrei.
Dieses lässt sich mit einer kleinen Anpassung sehr einfach in dem kleinsten Droplet bei DigitalOcean, einem günstigen Cloud-vServer-Hoster, installieren.

<!--more-->

**Hinweis:** Auch wenn es GitLab bereits als fertiges Application-Package bei DigitalOcean zu finden gibt, müssen / sollten Sie die hier gezeigte Anpassung trotzdem vornehmen, falls Sie ein Droplet mit weniger als 2GB RAM verwenden wollen.

## Wo liegt das Problem?
[GitLab](https://about.gitlab.com) ist eine sehr [ressourcenlastige Anwendung](http://doc.gitlab.com/ce/install/requirements.html) und braucht daher auch entsprechend gute Hardware. Empfohlen werden neben einer Mehrkern-CPU auch 2GB RAM, die aber erst bei einem mittleren Droplet anzutreffen sind.
Da [DigitalOcean](https://www.digitalocean.com/?refcode=a3c57ee7419e) aber ausschließlich auf SSDs als Datenspeicher setzt, bietet sich eine Swap-Datei als "RAM-Ersatz" an.

## Das Droplet einrichten
Ein Droplet ist im Prinzip eine vServer-Instanz, die Sie mit wenigen Klicks in unter einer Minute einrichten können.
Dazu klicken Sie in Ihrem DigitalOcean-Account auf "Create Droplet", geben dem Droplet einen **Namen**, wählen die gewünschten **Spezifikationen** (die kleinste Konfiguration reicht aus), den **Standort** (Amsterdam 3 ist aus Deutschland gut erreichbar), das **Betriebssystem** (Ubuntu 14.04 LTS x64 wird empfohlen) und eventuell auch einen bereits eingerichteten **SSH-Key** aus.
Mit dem Klick auf "Create Droplet" wird Ihr vServer nun eingerichtet.

![Digital Ocean: Droplet einrichten](/images/gitlab-in-digitalocean-droplet-installieren/GitLab1.png)
![Digital Ocean: Droplet einrichten](/images/gitlab-in-digitalocean-droplet-installieren/GitLab2.png)

Melden Sie sich nun mit einem SSH-Client (unter Windows z.B. mit PuTTY) an Ihrem Droplet mit dem Nutzernamen `root` und dem per E-Mail erhaltenen Passwort / dem SSH-Key an und aktualisieren Sie Ihre Installation:
```bash
apt-get update
apt-get dist-upgrade
```

### Swap-Datei erstellen und aktivieren
Zunächst erstellen Sie eine 4GB große Swap-Datei unter `/var/swap.img`:
```bash
dd if=/dev/zero of=/var/swap.img bs=1024 count=4M
mkswap /var/swap.img
```

Tragen Sie diese Datei nun in der `fstab`-Datei ein, damit die Swap-Datei beim Starten automatisch eingehangen und genutzt wird:
```bash
# fstab im Editor öffnen
nano /etc/fstab

# Swap-Datei in dieser Datei eintragen (Speichern mit Strg-O und Schließen mit Strg-X)
/var/swap.img swap swap sw 0 0
```

Anschließend aktivieren Sie die Swap-Datei manuell, um den Neustart umgehen zu können:
```bash
swapon /var/swap.img
```

## GitLab installieren
Die eigentliche GitLab-Installation erweist sich als sehr einfach. Diese Anleitung bezieht sich auf die Version 7.7 und kann daher veraltet sein. Prüfen Sie daher am besten vor der Installation unter https://about.gitlab.com/downloads/, ob sich nicht etwas am Installationsprozess verändert hat.

Installieren Sie zunächst den SSH-Server und den E-Mail Server "Postfix", um die Vorbereitungen abzuschließen:
```bash
apt-get install openssh-server postfix
```
Wählen Sie im Postfix-Installationsdialog die Option "Internet Site" aus und geben Sie als FQDN die Domain an, unter der Ihre GitLab-Instanz erreichbar sein soll (z.B. `mein-gitlab.com`).

Nun laden Sie das Installationspaket herunter und installieren dieses anschließend:
```bash
wget https://downloads-packages.s3.amazonaws.com/ubuntu-14.04/gitlab_7.7.0-omnibus.5.4.0.ci-1_amd64.deb
sudo dpkg -i gitlab_7.7.0-omnibus.5.4.0.ci-1_amd64.deb
```

Öffnen Sie nun mit dem Editor die GitLab-Konfiguration unter `/etc/gitlab/gitlab.rb` und passen Sie die URL (und falls gewünscht auch weitere Einstellungen) an.

Zum Abschluss starten Sie die Initialisierung der GitLab-Instanz mit folgendem Befehl:
```bash
gitlab-ctl reconfigure
```

## Letze Schritte
Sie finden Ihre Installation nun unter der von Ihnen angegebenen (und eingerichteten) Domain und können sich dort mit folgenden Nutzerdaten anmelden:
```
Username: root
Passwort: 5iveL!fe
```

Nachdem Sie anschließend Ihr Passwort geändert haben, können Sie GitLab beliebig verwenden - Projekte von GitHub importieren, Gruppen erstellen und Ihre Repositories verwalten.

![GitLab Installation](/images/gitlab-in-digitalocean-droplet-installieren/GitLab3.png)

## Fazit
Um GitLab in dem kleinsten DigitalOcean Droplet verwenden zu können benötigt es nicht viel - nur eine Swap-Partition und ein wenig mehr Geduld.
Dank den niedrigen Kosten müssen Sie für einen Monat Laufzeit gerade mal 5$ ausgeben und können das Droplet natürlich auch anderweitig (z.B. für kleine Webseiten oder NodeJS-Applikationen) verwenden.