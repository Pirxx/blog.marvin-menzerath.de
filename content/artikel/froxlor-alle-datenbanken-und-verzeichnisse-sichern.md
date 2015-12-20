+++
title       = "Froxlor: Alle Datenbanken, Web-Verzeichnisse und Mails sichern"
description = "Mit diesem Shell-Skript können Sie Backups aller Datenbanken, Web-Verzeichnisse und E-Mail-Konten in Froxlor erstellen und bei Dropbox hochladen lassen."
date        = "2014-03-01T13:56:00"
tag         = ["Dropbox", "Froxlor", "Server", "Webmaster"]
+++

Um alle Daten einer Froxlor-Installation zu sichern, benötigt man ein Skript, welches sowohl die Datenbanken, als auch die Kunden-Verzeichnisse sichert und danach bei einem Cloud-Speicherdienst hochlädt. Mit diesem einfachen Bash-Skript geschieht die Sicherung einfach und schnell über Nacht.

<!--more-->

## Was kann das Skript?
Das Skript kann einfach über Nacht per Cronjob oder auch jederzeit manuell ausgeführt werden und sichert alle Datenbanken (außer `information_schema`, `performance_schema` und `mysql`) sowie alle Kundenverzeichnisse (unter `/var/customers/webs/`) und alle E-Mail Konten (unter `/var/customers/mail/`).
Alle Daten werden dabei Speicherplatzschonend in ein `.tar.gz` Archiv gepackt; die Datenbanken zusammen, die Kundenverzeichnisse jeweils in ein eigenes Archiv.
Nach der Sicherung werden die Archive sofort zu einem beliebigen Cloud-Speicherdienst (hier: Dropbox) hochgeladen und wieder vom Server selbst gelöscht. Dieser Upload wird von einem externen Skript (wie [diesem Dropbox-Uploader](https://github.com/andreafabrizi/Dropbox-Uploader)) durchgeführt und kann beliebig ausgetauscht werden.

## Voraussetzungen
Um das Skript nutzen zu können benötigen Sie neben einer Froxlor-Installation einen SSH-Zugriff, Root-Rechte (+ das Datenbank-Root-Passwort) sowie genügend Speicherplatz für die Sicherungen auf dem Server selbst und auf Ihrem Cloud-Speicher.

## Einrichtung
Legen Sie in Ihrem `/home` Verzeichnis ein Unter-Verzeichnis "backup" an, welches außerdem die Verzeichnisse "tmp" und "DBs" enthalten muss.
Nun laden Sie das `dropbox_uploader.sh` Skript, sowie das `backup.sh` Skript hoch und führen Ersteres einmalig aus, um die Einrichtung abzuschließen.

Öffnen Sie nun das eigentliche Backup-Skript und passen Sie alle Dinge wie MySQL-Nutzer/-Passwort und Pfade an, damit das Skript funktionieren kann. Testen Sie dieses nun mittels
```bash
sudo ./backup.sh
```
und warten Sie, bis das Backup abgeschlossen ist. Sollten dabei Fehler auftreten, prüfen Sie zuerst nach, ob Sie wirklich *alle* Pfade korrekt angepasst haben.

Bei Bedarf können Sie das Skript auch jede Nacht zu einer festgelegten Uhrzeit laufen lassen. Tragen Sie es dazu einfach in den Cronjobs des Root-Nutzers ein:

Aufruf des Editors mit
```bash
sudo crontab -e
```
und folgende Zeile hineinkopieren:
```
0 3 * * * /home/marvin/backup/backup.sh
```
Somit wird das Backup-Skript nun jede Nacht um 3 Uhr aufgerufen.

## Das Skript
Hier finden Sie nun das Backup-Skript zum Download, bzw. Kopieren. Den Dropbox-Uploader finden Sie [hier](https://github.com/andreafabrizi/Dropbox-Uploader).

```bash
# !/bin/bash

############################
### ZUGANGSDATEN & PFADE ###
############################
BACKUP_DIR="/home/marvin/backup"
BACKUP_TO="backups/server"
UPLOADER_CONFIG="/home/marvin/.dropbox_uploader"
MYSQL_USER="root"
MYSQL_PASSWORD="passwort"

####################
### MYSQL-BACKUP ###
####################
echo "Starte Datenbank-Backup..."

databases=`mysql -u $MYSQL_USER -p$MYSQL_PASSWORD -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema|mysql)"`
for db in $databases; do
	mysqldump -u $MYSQL_USER -p$MYSQL_PASSWORD $db > "$BACKUP_DIR/DBs/$db.sql"
done

# Alle SQL-Dumps in ein Archiv packen
tar -zcf $BACKUP_DIR/tmp/backup.tar.gz $BACKUP_DIR/DBs/

# Archiv hochladen
echo "Lade Datenbank-Backup hoch..."
$BACKUP_DIR/dropbox_uploader.sh -p -f $UPLOADER_CONFIG upload $BACKUP_DIR/tmp/backup.tar.gz $BACKUP_TO/databases/backup_$(date +"%Y-%m-%d_%H-%M").tar.gz

# Daten des MySQL-Backups löschen
rm $BACKUP_DIR/DBs/*
rm $BACKUP_DIR/tmp/backup.tar.gz
echo "Datenbank-Backup beendet!"

####################
### DATEN-BACKUP ###
####################
echo "Starte Daten-Backup..."

# Lade alle Verzeichnisse
dirs=( $(find /var/customers/webs/ -maxdepth 1 -type d -printf '%P\n') )

# Alle packen, hochladen und wieder löschen
for dir in "${dirs[@]}"; do
		tar -zcf $BACKUP_DIR/tmp/backup.tar.gz /var/customers/webs/$dir
		$BACKUP_DIR/dropbox_uploader.sh -p -f $UPLOADER_CONFIG upload $BACKUP_DIR/tmp/backup.tar.gz $BACKUP_TO/$dir/backup_$(date +"%Y-%m-%d_%H-%M").tar.gz
		rm $BACKUP_DIR/tmp/backup.tar.gz
done

###################
### MAIL-BACKUP ###
###################
echo "Starte Mail-Backup..."

# Packe das Mail-Verzeichnis in ein Archiv
tar -zcf $BACKUP_DIR/tmp/backup.tar.gz /var/customers/mail/

# Archiv hochladen
echo "Lade Mail-Backup hoch..."
$BACKUP_DIR/dropbox_uploader.sh -p -f $UPLOADER_CONFIG upload $BACKUP_DIR/tmp/backup.tar.gz $BACKUP_TO/mail/backup_$(date +"%Y-%m-%d_%H-%M").tar.gz

# Daten des Mail-Backup löschen
rm $BACKUP_DIR/tmp/backup.tar.gz

echo "Backup beendet!"
```

### Erläuterung der Einstellungen
* `BACKUP_DIR`: Verzeichnis, in dem alle Dateien und Verzeichnisse des Backup-Skripts liegen.
* `BACKUP_TO`: Verzeichnis auf dem Cloud-Speicher, wo die Backups abgelegt werden sollen. Diese Konfiguration funktioniert problemlos mit dem Dropbox-Uploader
* `UPLOADER_CONFIG`: Datei, die die Konfiguration für den Dropbox-Uploader beinhaltet.
* `MYSQL_USER`: Nutzer, der Zugriff auf alle MySQL-Datenbanken hat.
* `MYSQL_PASSWORD`: Passwort dieses Nutzers.
