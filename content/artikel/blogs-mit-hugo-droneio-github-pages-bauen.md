+++
title       = "Blogs mit Hugo, Drone.io und GitHub Pages bauen"
description = "Wer seinen Blog auf Basis des Generators \"Hugo\" betreibt, kann diesen dank GitHub Pages und Drone.io automatisiert bauen und ohne Kosten hosten lassen."
date        = "2015-12-20T22:15:00"
lastmod     = "2015-12-22T15:15:00"
tag         = ["Drone.io", "GitHub", "Webmaster"]
+++

Wer seinen Blog auf Basis des Generators "Hugo" betreibt, kann diesen dank Drone.io automatisch bei Veränderungen bauen lassen und anschließend ohne Kosten durch GitHub Pages hosten.

<!--more-->

**Hinweis**: Dieser Artikel richtet sich an Leser, die bereits Vorkenntnisse im Bezug auf GitHub und den Umgang mit Shell-Skripten haben.
Weiterhin gehe ich davon aus, dass Sie Ihren Blog bereits in "Rohform" in einem GitHub-Repository liegen haben.

## Vorgehensweise
Im Folgenden richten Sie ein wie folgt funktionierendes System ein:

1. Änderung am Blog lokal erstellen, committen und ins GitHub-Repository pushen.
Mehr müssen Sie nicht machen.
2. Drone.io lädt das Repository und Hugo herunter.
3. Drone.io baut mit Hugo den fertigen Blog zusammen und pusht diesen in den `gh-pages`-Branch des GitHub-Repositories.

### GitHub
Erstellen Sie zunächst [auf dieser Seite](https://github.com/settings/tokens) einen neuen Access-Token, mit dem Drone.io später den fertig gebauten Blog zurück in den `gh-pages`-Branch des Repositories pushen darf.
Die beiden Berechtigungen `repo` und `public_repo` sollten dabei vollkommen ausreichend sein.

Kopieren Sie den nun angezeigten Token an eine sichere Stelle, denn er wird Ihnen nie wieder angezeigt werden können.

Legen Sie außerdem im Blog-Repository einen neuen Branch namens `gh-pages` an, damit es später zu keiner Fehlermeldung kommt.

### Drone.io
Legen Sie bei Drone.io ein [neues Projekt](https://drone.io/new#/github) an, nachdem Sie sich dort angemeldet haben.
Wählen Sie das passende Repository aus und anschließend eine beliebige Sprache (ich empfehle Go, da "Hugo" in dieser Sprache geschrieben ist).
Das nun angezeige Standard-Build-Script können Sie entfernen und anschließend das Projekt anlegen.

Nun müssen Sie beiden Textfelder folgendermaßen verändern:

#### Environment Variables
Fügen Sie hier zwischen den beiden Anführungszeichen Ihren GitHub-Nutzernamen, den Blog-Repository-Namen und den zuvor erstellten GitHub Access-Token ein. Achten Sie dabei unbedingt auf Groß- und Kleinschreibung.

```bash
GH_USER_NAME=""
GH_REPO_NAME=""
ACCESS_TOKEN=""
```

#### Commands
```bash
# Hugo herunterladen und installieren; ggf eine aktuellere Version von der Hugo-Release-Seite auswählen
cd ..
wget https://github.com/spf13/hugo/releases/download/v0.15/hugo_0.15_amd64.deb
sudo dpkg -i hugo_0.15_amd64.deb

# Git Subtree herunterladen und einrichten
curl -L https://www.kernel.org/pub/software/scm/git/git-2.5.0.tar.gz | tar -C /home/ubuntu/ -xzf -
cd /home/ubuntu/git-2.5.0/contrib/subtree
sudo chmod +x /home/ubuntu/git-2.5.0/contrib/subtree/git-subtree.sh
sudo ln -s /home/ubuntu/git-2.5.0/contrib/subtree/git-subtree.sh /usr/lib/git-core/git-subtree

# Blog bauen
cd /home/ubuntu/src/github.com/$GH_USER_NAME/$GH_REPO_NAME
hugo -d dist

# Blog ins Repository pushen
git add dist && git commit -m "Site updated by Drone.io"
git remote set-url origin https://$GH_USER_NAME:$ACCESS_TOKEN@github.com/$GH_USER_NAME/$GH_REPO_NAME.git
git push origin `git subtree split --prefix dist master`:gh-pages --force
```

### Testen
Speichern Sie nun die Einstllungen mit einem Klick auf "Save" und führen Sie einen manuellen Blog-Build durch einen Klick auf "Build Now" aus.
Sie sehen die Ausgabe der Befehle live im Browser und sollten nach dem Vorgang den fertigen Blog im GitHub-Repository vorfinden.

## Fazit
Mit diesem simplen Skript können Sie sich einiges an Arbeit, Zeit und Kosten sparen: anstatt den Blog lokal bauen zu lassen und die Dateien via FTP zu einem Hoster hochladen zu müssen, übernehmen nun Drone.io und GitHub automatisch diese Aufgaben.
Mittels einer passenden CNAME-Datei (im `static`-Verzeichnis) und der korrekten `baseurl`-Einstellung in der Hugo-Konfiguration können Sie Ihren Blog nun unter einer URL wie `https://username.github.io/blog-repository` erreichen.
