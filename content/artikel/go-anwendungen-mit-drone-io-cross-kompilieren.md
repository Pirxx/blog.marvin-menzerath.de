+++
title       = "Go-Anwendungen mit Drone.io Cross-Kompilieren"
description = "Mit der kostenfreien Continuous Integration (CI) Anwendung Drone.io lassen sich Go-Anwendungen sehr einfach Cross-Kompilieren."
date        = "2015-07-26T15:18:00"
tag         = ["Drone.io", "Golang", "Programmierung"]
+++

Auch wenn der Titel seltsam klingen mag: mit der für Open-Source-Software kostenfreien Continuous Integration (CI) Anwendung [Drone.io](https://drone.io) lassen sich Go-Anwendungen sehr einfach Cross-Kompilieren.

<!--more-->

## Vorgehensweise
Fügen Sie einfach ein neues Go-Projekt hinzu oder öffnen Sie die Einstellungen (`Build & Test`) eines bestehenden Projekts.
Nun müssen zwei Textfelder mit folgenden Daten ersetzt werden:

### Environment Variables
```bash
GOPATH=$HOME
PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
GOX_OSARCH="darwin/386 darwin/amd64 linux/386 linux/amd64 linux/arm windows/386 windows/amd64"
```

Wenn Sie die Anwendung nicht für einige Architekturen / Betriebssysteme kompilieren möchten, entfernen Sie einfach die jeweilige Angabe aus dem String in der letzten Zeile.

### Commands
```bash
go get
go build
go test -short

rm -rf /usr/local/go/*
curl -L https://storage.googleapis.com/golang/go1.4.2.linux-amd64.tar.gz | tar -C /usr/local -xzf -

go get github.com/mitchellh/gox
gox --osarch="$GOX_OSARCH" --build-toolchain
gox --osarch="$GOX_OSARCH" --output="dist/{{.OS}}_{{.Arch}}/{{.Dir}}" ./...
```

Hier wird zunächst ganz normal der Quellcode der Anwendung heruntergeladen, kompiliert und getestet.
Insofern hier keine Fehler aufgetreten sind, wird die Go-Installation der Drone.io-Test-Instanz gelöscht und das Skript kompiliert die (zurzeit) aktuelle Go-Version 1.4.2 ([hier](https://golang.org/dl/) nach Updates suchen) für die gewünschten Architekturen.
Anschließend wird der eigene Quellcode mit den frisch erstellten Go-Versionen kompiliert und im angegebenen Verzeichnis abgelegt.

Damit diese Dateien auch von Drone.io abgespeichert werden, müssen Sie nun noch in die Einstellungen (`Artifacts`) wechseln und dort folgendes eintragen:

### Artifacts
```bash
dist/*/*
```

Anschließend können Sie sofort einen Build starten und nach einer kurzen Wartezeit (das Kompilieren von Go benötigt ebenfalls einige Zeit) finden Sie die gewünschten Dateien im Downloads-Tab vor:
![Download der Cross-Kompilierten Anwendung](/images/go-anwendungen-mit-drone-io-cross-kompilieren/DroneDownloads.jpg)

## Fazit und Einschränkungen
Bis zum Release von Go 1.5 - welches einfacheres und schnelleres Cross-Kompilieren mitbringen wird - ist dies eine einfache Möglichkeit, um ohne viel Aufwand Cross-Kompilate anzufertigen.
Drone.io bietet jedoch nur die Möglichkeit, bis zu 5 Dateien zu archivieren, die nicht mehr als 10 MB Speicherplatz belegen dürfen. Hier muss man also Abstriche machen, die Dateien zu einem anderen Speicherdienst übertragen (z.B. GitHub Releases) oder eine eigene Drone.io Installation verwenden.

Skript frei nach diesem [Gist](https://gist.github.com/shutej/ff2610b1b692c7726f7c) angepasst.