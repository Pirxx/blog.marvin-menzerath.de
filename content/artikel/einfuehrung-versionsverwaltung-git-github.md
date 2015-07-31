+++
title       = "Eine Einführung in die Versionsverwaltung mit Git und GitHub"
description = "Hier finden Sie eine Einführung in die Versionsverwaltung mit Git und GitHub. Dank Git vereinfachen Sie die Zusammenarbeit mit anderen Entwicklern enorm."
date        = "2013-09-08T16:05:00"
tag         = ["Git", "GitHub", "Grundlagen", "Software"]
+++

Mit einer Versionsverwaltung, bzw. einer Versionskontrolle behalten Sie jederzeit den Überblick über Änderungen am Quelltext und vereinfachen die Zusammenarbeit mit anderen Entwicklern. Sehr einfach und etabliert ist Git, welches aktuell weltweilt von tausenden Entwicklern eingesetzt wird.
Hier erhalten Sie nun eine Einführung in die Versionsverwaltung mit Git bei der Nutzung des kostenfreien Services von GitHub.

<!--more-->

Bevor es losgeht noch eine kleine Trivia: Ursprünglich wurde Git zur Verwaltung des Linux-Kernels von Linus Torvalds entwickelt.

## Installation
Die Installation ist unter Windows, Linux und OS X problemlos möglich. Neben der **Nutzung der Konsole** (die ich hier vorstellen werde), kann auch **einer von vielen grafischen Clients** genutzt werden, wobei diese meist nur bedingt zu empfehlen sind.

### Windows
Gehen Sie auf [diese Seite](http://git-scm.com/downloads) und laden Sie sich den Windows-Installer herunter. Während der Installation sollten Sie die voreingestellten Einstellungen beibehalten, außer Sie wissen bereits, dass Sie Dinge ändern wollen/müssen. Als einfachen grafischen Client kann ich hier besonders den [GitHub-Client](http://github-windows.s3.amazonaws.com/GitHubSetup.exe) empfehlen, der Ihnen alle Arbeit an der Konsole abnimmt, jedoch nicht den vollen Funktionsumfang bieten kann.

### Linux
Führen Sie einfach in Ihrer Konsole unter Debian ein
```bash
sudo apt-get install git
```
durch und unter Arch ein
```bash
sudo pacman -S git
```

### OS X
Auch hier laden Sie sich einfach den Installer von [dieser Seite](http://git-scm.com/downloads) herunter oder den nativen GitHub-Client von [hier](https://central.github.com/mac/latest) und folgen der Installation.

## Einrichtung
Um nun mit Git arbeiten zu können, sollten Sie sich einen kostenfreien [GitHub-Account anlegen](http://github.com/signup/free) und danach Git auf Ihrem Rechner einrichten. Starten Sie dazu unter Windows die Git Bash und unter Linux/OS X eine Konsole.

Um Ihre Arbeit auch unter Ihrem Namen zu veröffentlichen/verwenden, müssen Sie Git Ihren Namen und die bei GitHub hinterlegte E-Mail Adresse nennen. Dies geht wie folgt:
```bash
git config --global user.name "Ihr Name"
git config --global user.email "Ihre@EMail.adresse"
```
Ändern Sie jeweils die persönlichen Angaben und bestätigen Sie Ihre Eingabe dann mit einem Druck auf die Enter-Taste.

### SSH-Keys
Eigentlich könnten Sie jetzt schon anfangen und mit Git arbeiten, jedoch würden Sie immer nach einem Passwort gefragt. Daher empfehle ich Ihnen die Arbeit mit **SSH-Keys**.

Wechseln Sie dazu in das Verzeichnis `~./ssh` und überprüfen Sie mittels `ls` ob dort bereits eine Datei namens `id_rsa.pub` vorhanden ist. Falls ja, können Sie mit dem nächsten Schritt fortfahren. Andernfalls müssen Sie sich erstmal mit diesem Befehl ein Schlüsselpaar generieren lassen:
```bash
ssh-keygen -t rsa -C "Ihre@EMail.adresse"
```

Bestätigen Sie den Speicherort nun einfach mit einem Druck auf die Enter-Taste und geben Sie (falls gewünscht) noch eine Passphrase ein. Sobald Sie nun eine Ausgabe mit `The key fingerprint is:` sehen, ist das Schlüsselpaar erzeugt.

#### SSH-Key einfügen
Teilen Sie nun GitHub auf [dieser Seite](http://github.com/settings/ssh) Ihren öffentlichen Schlüssel mit, indem Sie den Inhalt der `id_rsa.pub` Datei als neuen SSH-Key in das vorgesehene Feld einfügen. Dazu geben Sie einfach `cat id_rsa.pub` auf der Git Bash ein und kopieren die Ausgabe in das Feld.

Testen Sie nun die Funktion, indem Sie nun eine SSH-Verbindung herstellen:
```bash
ssh -T git@github.com
```

Daraufhin erhalten Sie nun eine solche Ausgabe:
```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)?
```

Bestätigen Sie den Fingerprint nun und Sie sollen diese Nachricht sehen:
```
Hi IhrNutzername! You've successfully authenticated, but GitHub does not provide shell access.
```

## Die Arbeit im Repository
Nun können Sie loslegen. Wechseln Sie in der Git Bash in das gewünschte Verzeichnis (oder erstellen Sie eins) und führen Sie dort dann
```bash
git init
```
aus, um das Repository lokal anzulegen.

Kopieren Sie nun einfach Dateien in das Verzeichnis und arbeiten Sie damit. Nach jeder (wichtigen) Änderung sollten Sie dann diese zwei Befehle hintereinander ausführen, um die Änderungen zu dokumentieren (`commit`anlegen):
```bash
git add -A git commit -m 'Was verändert wurde'
```

### Veröffentlichen
Wenn Sie Ihre Arbeit nun öffentlich zeigen oder Mitarbeiter gewinnen wollen, müssen Sie Ihr Projekt veröffentlichen. Dazu erstellen Sie einfach [hier](http://github.com/new/) ein neues Repository und kopieren dann die SSH-URL in die Zwischenablage. Und zwar geben Sie Git nun das Remote-Ziel an; also wohin die Daten gesendet werden sollen. Führen Sie dazu dann einfach diesen Befehl aus:
```bash
git remote add origin git@github.com:IhrNutzername/RepoName.git
```

Um die Daten nun hochzuladen, verwenden Sie einfach diesen Befehl:
```bash
git push -u origin master
```

### Änderungen hochladen
Bei Ihrer Arbeit im Repository verändern Sie Dinge und wollen diese dann auch direkt veröffentlichen? Dazu müssen Sie nur diese drei Befehle in folgender Reihenfolge ausführen:
```bash
git add -A
git commit -m 'Was verändert wurde'
git push -u origin master
```

Und schon können Sie Ihre Änderungen bei GitHub sehen.
 
## Tipps & Tricks
Git und GitHub haben so **viel mehr zu bieten**, als dass ich all das in einem Artikel beleuchten könnte. Daher hier noch ein paar Tipps für den Umgang mit Git und GitHub.

### Git
* Falls Sie einen kleinen Fehler (Tippfehler, ...) in einem Commit gemacht haben, ist es am einfachsten einen **weiteren Commit** mit einer Richtigstellung zu erstellen, anstatt den vorherigen Commit zu entfernen.
* Um zum Stand eines vorherigen Commits zurückzukehren, können Sie einfach folgende Zeile nutzen: `git revert bf39dm63`  
Dabei muss der letze Parameter zu einem Commit gehören. Mit der Ausführung dieses Befehls wird ein neuer Commit angelegt, welcher alle Dateien auf den Stand des angegebenen Commits zurücksetzt.

### GitHub
* Nutzen Sie die "**Issues**"-Funktion! Damit haben Sie einen leichten Überblick über vorhandene Fehler und andere Nutzer können Verbesserungen einreichen. Ein Commit der sich auf ein Issue bezieht, kann einfach `Closes # 42` benannt werden, damit das Issue 42 automatisch (mit einer entsprechenden Nachricht) geschlossen wird.
* Nutzen Sie GitHub doch auch zum **Hosten Ihrer Website**! Mit GitHub Pages können Sie selbst statische Websites bei GitHub hosten - auch mit einer eigenen Domain. Weitere Informationen dazu finden Sie [hier](/artikel/websites-kostenfrei-mit-github-pages-hosten/).

## Fazit
Dank Git und GitHub ist die Versionsverwaltung und der Überblick über gemachte Änderungen am Quelltext sehr einfach für den Entwickler. Ich kann jedem nicht-Nutzer einen Test von Git empfehlen - Sie werden es nicht mehr missen wollen. Und zum Abschluss auch ein wenig Eigenwerbung:
Meinen GitHub-Account finden Sie [hier](http://github.com/MarvinMenzerath/) und in der Sidebar.