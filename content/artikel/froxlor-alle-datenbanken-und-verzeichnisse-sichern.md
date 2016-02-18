+++
title       = "Froxlor: Alle Datenbanken, Web-Verzeichnisse und Mails sichern"
description = "Mit diesem Shell-Skript können Sie Backups aller Datenbanken, Web-Verzeichnisse und E-Mail-Konten in Froxlor erstellen und verschlüsselt hochladen lassen."
date        = "2014-03-01T13:56:00"
tag         = ["Dropbox", "Froxlor", "Server", "Webmaster"]
+++

Um alle Daten einer Froxlor-Installation zu sichern, benötigt man ein Skript, welches sowohl die Datenbanken, Kunden-Verzeichnisse und alle Mails sichert und danach auf Wunsch verschlüsselt bei einem Cloud-Speicherdienst hochlädt. Mit diesem einfachen Bash-Skript geschieht die Sicherung einfach und schnell über Nacht.

<!--more-->

## Was kann das Skript?
Das Skript kann einfach über Nacht per Cronjob oder auch jederzeit manuell ausgeführt werden und sichert alle Datenbanken (außer `information_schema`, `performance_schema` und `mysql`), alle Kundenverzeichnisse (unter `/var/customers/webs/`) und alle E-Mail Konten (unter `/var/customers/mail/`).
Alle Daten werden dabei Speicherplatz-schonend in `.tar.gz` Archive gepackt; jeweils nach Datenbanken, Kundenverzeichnissen und Mail-Verzeichnissen getrennt.
Nach der Sicherung werden die Archive sofort zu einem beliebigen Cloud-Speicherdienst (hier: Google Drive) hochgeladen und wieder vom Server selbst gelöscht. Dieser Upload wird von einem externen Skript (wie [diesem Google Drive Uploader](https://github.com/odeke-em/drive)) durchgeführt und kann beliebig ausgetauscht werden.

## Voraussetzungen
Um das Skript nutzen zu können, benötigen Sie neben einer Froxlor-Installation einen SSH-Zugriff, Root-Rechte (+ das Datenbank-Root-Passwort), sowie genügend Speicherplatz für die Sicherungen auf dem Server selbst und auf Ihrem Cloud-Speicher.

Für die Verschlüsselung benötigen Sie außerdem die GPG-Tools und ein Schlüsselpaar, von welchem Sie den öffentlichen Schlüssel (`ultimately trusted`) auf dem Server hinterlegen müssen. Eine ausführliche Anleitung zu diesem Thema finden Sie in der offiziellen [GPG-Dokumentation](https://www.gnupg.org/gph/en/manual.html).

## Einrichtung
* Legen Sie in Ihrem `/home` Verzeichnis ein Unter-Verzeichnis `backup` an.
* Richten Sie Ihren gewünschten Cloud-Speicherdienst ein. Das nachfolgende Skript verwendet [drive](https://github.com/odeke-em/drive).
* Laden Sie das Backup-Skript von dieser Seite herunter (s.u.) und machen Sie es ausführbar (`chmod +x backup.sh`).
* Öffnen Sie das Backup-Skript auf Ihrem Server und passen Sie im ersten Abschnitt die vorhandenen Pfade und Variablen an.

### Einmaliger Aufruf
Starten Sie das Skript einfach durch folgenden Aufruf:
```bash
sudo ./backup.sh
```

### Regelmäßiger Aufruf
Bei Bedarf können Sie das Skript auch jede Nacht zu einer festgelegten Uhrzeit laufen lassen. Tragen Sie es dazu einfach in den Cronjobs des Root-Nutzers ein:

Aufruf des Editors mit
```bash
sudo crontab -e
```
und folgende Zeile hinein kopieren:
```
0 3 * * * /home/user/backup/backup.sh
```

Somit wird das Backup-Skript nun jede Nacht um 3 Uhr aufgerufen.

## Das Skript
```bash
#!/bin/bash

##############################
### AUTHENTICATION & PATHS ###
##############################
BACKUP_DIR="/home/user/backup"
BACKUP_TO="/home/user/googledrive/backups/mein-server"
GPG_RECIPIENT_NAME="Nutzername des GPG-Schlüssel-Besitzers"
MYSQL_USER="root"
MYSQL_PASSWORD="rootpw"

####################
### PREPARATIONS ###
####################
mkdir -p $BACKUP_TO/mysql
mkdir -p $BACKUP_TO/webs
mkdir -p $BACKUP_TO/mail
BACKUP_DATE=( $(date +"%Y-%m-%d_%H-%M") )

####################
### MYSQL-BACKUP ###
####################
echo "Starte Datenbank-Backup..."

databases=`mysql -u $MYSQL_USER -p$MYSQL_PASSWORD -e "SHOW DATABASES;" | grep -Ev "(Database|information_schema|performance_schema|mysql)"`
for db in $databases; do
	mkdir -p $BACKUP_TO/mysql/$db
	mysqldump -u $MYSQL_USER -p$MYSQL_PASSWORD $db | gzip | gpg --encrypt --yes --recipient "$GPG_RECIPIENT_NAME" --output $BACKUP_TO/mysql/$db/$BACKUP_DATE.sql.gz.gpg
done

echo "Datenbank-Backup beendet!"

####################
### DATEN-BACKUP ###
####################
echo "Starte Daten-Backup..."

dirs=( $(find /var/customers/webs/ -maxdepth 1 -type d -printf '%P\n') )
for dir in "${dirs[@]}"; do
	mkdir -p $BACKUP_TO/webs/$dir
	tar -zcf - /var/customers/webs/$dir | gpg --encrypt --yes --recipient "$GPG_RECIPIENT_NAME" --output $BACKUP_TO/webs/$dir/$BACKUP_DATE.tar.gz.gpg
done

echo "Daten-Backup beendet!"

###################
### MAIL-BACKUP ###
###################
echo "Starte Mail-Backup..."

dirs=( $(find /var/customers/mail/ -maxdepth 1 -type d -printf '%P\n') )
for dir in "${dirs[@]}"; do
	mkdir -p $BACKUP_TO/mail/$dir
	tar -zcf - /var/customers/mail/$dir | gpg --encrypt --yes --recipient "$GPG_RECIPIENT_NAME" --output $BACKUP_TO/mail/$dir/$BACKUP_DATE.tar.gz.gpg
done

echo "Mail-Backup beendet!"

##############
### UPLOAD ###
##############
echo "Starte Upload..."

drive push -no-clobber -quiet $BACKUP_TO
rm -rf $BACKUP_TO/*

echo "Backup beendet!"
```

### Erläuterung der Einstellungen
| Name                 | Verwendung                                                                    |
|----------------------|-------------------------------------------------------------------------------|
| `BACKUP_DIR`         | Verzeichnis, in dem alle Dateien und Verzeichnisse des Backup-Skripts liegen. |
| `BACKUP_TO`          | Verzeichnis auf dem Cloud-Speicher, wo die Backups abgelegt werden sollen.    |
| `GPG_RECIPIENT_NAME` | Der Nutzername, der im verwendeten GPG-Schlüssel eingetragen ist.             |
| `MYSQL_USER`         | Nutzer, der Zugriff auf alle MySQL-Datenbanken hat.                           |
| `MYSQL_PASSWORD`     | Passwort dieses Nutzers.                                                      |

## Backup entschlüsseln
Sollten Sie nun Ihr Backup benötigen, benötigen Sie zunächst Ihren privaten Schlüssel des beim Backup verwendeten Schlüsselpaars. Sobald dieser importiert ist (falls noch nicht geschehen), können Sie folgendermaßen Dateien entschlüsseln:
```bash
gpg --decrypt MEIN_BACKUP.tar.gz.gpg > MEIN_BACKUP.tar.gz
```
