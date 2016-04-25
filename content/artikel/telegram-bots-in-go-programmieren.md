+++
title       = "Telegram Bots in Go Programmieren"
description = "Wer sich mit der Telegram Bot Programmierung in Go auseinandersetzen will, erfährt in diesem kurzen Tutorial alles Wissenswerte über die Einrichtung und Programmierung eines einfachen Bots."
date        = "2016-04-25T19:45:00"
tag         = ["Golang", "Programmierung"]
+++

Wer ein wenig Go(lang) beherrscht und sich mit der Telegram Bot Programmierung auseinandersetzen will, erfährt in diesem kurzen Tutorial alles Wissenswerte über die Einrichtung und Programmierung eines solchen, einfachen Bots.

<!--more-->

## Vorbereitung auf dem lokalen Rechner

### Go
Zuallererst sollte eine aktuelle Version von Go auf dem Rechner installiert und eingerichtet sein.
Dazu laden Sie sich ein aktuelles Archiv von der [offiziellen Download-Seite](https://golang.org/dl/) herunter und installieren dieses der [Anleitung](https://golang.org/doc/install) für das jeweilige Betriebssystem entsprechend.
Wichtig ist, dass die Umgebungsvariable `GOPATH` korrekt gesetzt ist und auf ein existierendes Verzeichnis mit Schreibrechten zeigt.

### Telebot
Weiterhin benötigt wird ein aktueller Wrapper für die Telegram Bot API.
Ich empfehle die Verwendung von `tucnak/telebot`, welche sich durch folgenden Befehl installieren lässt:
```bash
go get github.com/tucnak/telebot
```

### Weiteres
Neben einem Text-Editor oder einer IDE (ich verwende IntelliJ IDEA mit dem Go-Plugin) benötigen Sie noch ein Arbeitsverzeichnis.
Erstellen Sie dieses am besten in ihrem `GOPATH`: z.B. unter `$GOPATH/src/telegram-bot` oder `$GOPATH/src/github.com/Nutzername/Projektname`.

## Vorbereitung bei Telegram
Damit Ihr Bot mit den Telegram Servern kommunizieren kann, müssen Sie diesen beim "BotFather" registrieren.
Dazu öffnen Sie einfach einen Chat mit dem User `@BotFather` (über [diesen Link](https://telegram.me/BotFather)) und beginnen das Gespräch mit dem `/start`Befehl.

Dieser empfiehlt zunächst die eingehende Lektüre der [Bot-Seite in der Telegram-Dokumentation](https://core.telegram.org/bots) und zeigt durch den `/help`-Befehl alle möglichen Befehle an.

![BotFather](/images/telegram-bots-in-go-programmieren/botfather.jpg)

### Bot anlegen
Legen Sie nun Ihren ersten Bot an. Dazu starten Sie den Prozess mit dem `/newbot`-Befehl und werden anschließend durch die Einrichtung geführt. Dabei müssen Sie bloß einen "Rufnamen" und den gewünschten Nutzernamen (der auf "bot" enden muss) eingeben und erhalten anschließend sofort den API-Token.
Außerdem werden Sie an dieser Stelle erneut auf die [Bot API](https://core.telegram.org/bots/api) hingewiesen, auf die Sie allerdings durch die zuvor installierte Wrapper-Anwendung zugreifen können.

### Weitere Einrichtung des Bots
Prinzipiell ist die Einrichtung des Bots nun abgeschlossen. Allerdings können Sie nach Wunsch auch ein Profilbild, Beschreibungstexte, Inline-Befehle (werden in diesem Tutorial nicht behandelt), Befehlslisten (zur Anzeige beim Nutzer, sobald dieser einen `/` eingibt), Privatsphäre-Einstellungen, ob der Bot Gruppen beitreten darf und vieles mehr einrichten.
Die dazu notwendigen Befehle erhalten Sie alle durch den `/help`-Befehl angezeigt.

## Den Bot programmieren
Öffnen Sie nun Ihren Editor und erstellen Sie eine neue Datei, die Sie z.B. `bot.go` nennen.
In diese Datei können Sie nun z.B. den folgenden Demo-Code des Telebot-Wrappers kopieren:

```go
package main

import (
	"github.com/tucnak/telebot"
	"time"
)

func main() {
	// erstelle neue Referenz auf den Bot
	bot, err := telebot.NewBot("API-Token")
	if err != nil {
		return
	}

	// Prüfe mit einem Timeout von einer Sekunde auf neue Nachrichten
	messages := make(chan telebot.Message)
	bot.Listen(messages, 1*time.Second)

	// Jede eingehende Nachricht durchläuft anschließend den in der for-Schleife eingeschlossenen Code
	for message := range messages {
		if message.Text == "/hi" || message.Text == "/hi@meinBot" {
			// Sende passende Antwort auf eingegangene Nachricht
			bot.SendMessage(message.Chat, "Hallo, "+message.Sender.FirstName+"!", nil)
		}
	}
}
```

Ersetzen Sie anschließend den Platzhalter `API-Token` durch den zuvor beim "BotFather" abgeholten API-Token und `meinBot` durch den Nutzernamen Ihres Bots.

Nun können Sie den Bot durch folgenden Befehl starten:
```bash
go run bot.go
```

Alternativ können Sie den Bot auch in eine ausführbare Datei kompilieren und diese starten:
```bash
go build bot.go
./bot
```

## Erster Test & Ausblick
Schreiben Sie Ihrem Bot nun einfach ein `/hi` und Sie sollten eine Nachricht wie `Hallo, [IhrVorname]!` zurück erhalten.
Falls nicht, prüfen Sie zuerst die Korrektheit des API-Tokens und ob der Quellcode erfolgreich kompiliert werden konnte.

Die hier verwendete Wrapper-API ist sehr viel mächtiger als das obige Beispiel vielleicht vermuten lässt. Weitere Beispiele und die gesamte Dokumentation finden Sie in der [README](https://github.com/tucnak/telebot/blob/master/README.md) oder im [GoDoc](https://godoc.org/github.com/tucnak/telebot).
