+++
title       = "Der feine Herr Moralapostel"
description = "Ein etwas anderer Artikel über Moralapostel, anonyme E-Mails und wie leicht man doch wieder erkannt werden kann."
date        = "2015-03-16T21:47:00"
tag         = ["Offtopic"]
+++

Entgegen der üblichen Artikel möchte ich hier gerne mal ein anderes Thema - nicht ganz ernst gemeint und eventuell sogar mit Spuren von Sarkasmus - zur Sprache bringen.
Und zwar geht es um den (recht beliebten) [Artikel zum FritzBox-Passwort](/artikel/fritzbox-passwort-rausfinden/) - und wie kleinkariert und feige manche Menschen doch sein können.

<!--more-->

## Post vom Franz
Gegen 17:50 Uhr erhielt ich heute eine E-Mail von `perpetuum.mobile@secure-mail.cc` (das Konzept dieser Dinger widerspricht übrigens dem System der Energieerhaltung).
Der Autor nennt sich selbst "Franz" und eröffnet seinen netten Brief mit einem Hinweis auf den oben genannten Artikel.
Sofort danach werde ich freundlich begrüßt und es wird aus meinem Artikel zitiert:

> "Beachten Sie bitte, dass ich nicht für Ihr Handeln nach diesem Tutorial haftbar gemacht werden kann."
>
> Irtum!

Und ja, der Autor unterliegt hier wirklich einem Irrtum - denn ihm fehlt ein kleines "r".

Recht unsicher bin ich mir auch im nachfolgenden Teil, ob Franz mir nun drohen möchte, seine eher mittelmäßige Rechtschreibung und Grammatik demonstrieren will oder mir vielleicht doch viel eher einen guten Rat anbieten möchte:

> Warum dies so ist werden sie bald erfahren, ebenso sind Anleitungen zum Einbruch in fremde Systeme und deren Bereitstellung und Beschreibung strafbar.

Leider enttäuscht mich Franz an dieser Stelle komplett, da er sich (ohne einen einzigen guten Rat) schon wieder verabschieden will. Und zwar mit einem weiteren grammatikalischen Kunststück:

> freundlicher Gruß Franz

Grüße zurück, lieber Franz!
Spar' Dir ruhig den Absatz, der braucht doch nur unnötig viele KBs oder GBs oder diese Internet-Einheiten-Dinger.

Aber so schnell gibt sich Franz nicht geschlagen, denn es folgt sogleich ein "PS":

> P.S. Ihr Impressum und die Whoise Abfrage deutet auf falsche Angaben hin - fsm gemeldet!

Ja, jetzt ist es raus. Ich bin leider nur ein Fake und die "Whoise"-Abfrage wird wohl leider nur ein `Meinten Sie: Whois` zutage gefördert haben. So ein Mist aber auch.
Zum Thema "fsm" komme ich noch in meiner Antwort an Franz.

## Meine Antwort
Lieber Franz,

Du hast mich doch sehr neugierig mit deiner E-Mail gemacht, sodass ich mich kurz durch die Log-Files des Webservers (leider hast Du ja JavaScript und damit das Piwik-Tracking abgestellt) gewühlt habe, um dich besser verstehen zu können.

Du warst der einzige Besucher im fraglichen Zeitraum, der den Artikel und das Impressum aufgerufen hat, sodass ich Dich leicht finden konnte:
```
92.210.100.X - - [16/Mar/2015:17:23:04 +0100] "GET /artikel/fritzbox-passwort-rausfinden/ HTTP/1.1" 200 4399 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
92.210.100.X - - [16/Mar/2015:17:28:20 +0100] "GET /impressum/ HTTP/1.1" 200 3788 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
92.210.100.X - - [16/Mar/2015:17:39:55 +0100] "GET /artikel/fritzbox-passwort-rausfinden/ HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
92.210.100.X - - [16/Mar/2015:17:40:09 +0100] "GET /impressum/ HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
92.210.100.X - - [16/Mar/2015:17:45:41 +0100] "GET /impressum/ HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
92.210.100.X - - [16/Mar/2015:17:54:57 +0100] "GET /impressum/ HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:36.0) Gecko/20100101 Firefox/36.0"
```

Eine kurze Anfrage ergab anschließend, dass Du aus der Region rund um Bremen stammst, Vodafone Dein ISP ist und Du anscheinend nicht weißt, wie Du mehrere Tabs in deinem Browser offen halten kannst - sonst hättest Du sicherlich nicht so häufig das Impressum aufrufen müssen.

Aber zu Deinem Hauptproblem: Du hast zu viel Freizeit und suchst im Internet nach Anleitungen, die für Dich "nicht so ganz OK sind", um dem Seitenbetreiber dann eine E-Mail mit einer relativ wirr klingenden "Drohung"(?) zukommen zu lassen?
Oder willst Du eher Dich selbst schützen, damit Dein Nachbar nicht durch diese Anleitung Dein "Internetz hacken" kann?
Ich verstehe ja Deine Sorgen, aber lass Dir gesagt sein: nicht jeder Leser wird diese Anleitung problemlos umsetzen und auf neue FritzOS-Versionen anpassen können. Und solange Dein FritzBox-Passwort gut gewählt ist, kannst Du bedenkenlos weiter durch das Internet surfen.

Dann noch zu deinem "PS": Falls mit "fsm" die "Freiwillige Selbstkontrolle Multimedia-Diensteanbieter" gemeint ist, dann muss ich Dich leider enttäuschen, denn die beschäftigt sich eher mit jugendgefährdenden Inhalten, statt mit sachlichen Artikeln, die auf mögliche Sicherheitslücken in Netzwerken hinweisen oder potenziell gefälschten Daten in einem Impressum eines privaten Blog-Betreibers.
Außerdem finde ich es doch sehr komisch, dass Du mich in deiner E-Mail noch auf Deine Meldung bei der "fsm" hinweist. Warum lässt Du mich nicht einfach ins "offene Messer" rennen?
Schließlich werden mich meine komplett gefälschten Angaben für mehrere Jahre ins Gefängnis bringen, wenn ich nicht rechtzeitig auf eine karibische Insel abhaue!

Freundliche Grüße
Marvin - eventuell auch nicht - Menzerath

PS: Verstecke Dich doch bitte beim nächsten Mal nicht hinter einem Formular zum Versenden von anonymen E-Mails (so ganz anonym bist Du ja anscheinend doch nicht, Franz).
```
Received: from unknown (HELO emkei.cz) (2a01:5e0:36:5001::1e14:cf7b)
	by capella.uberspace.de with SMTP; 16 Mar 2015 16:49:31 -0000
Received: by emkei.cz (Postfix, from userid 33)
	id 85D5CD5799; Mon, 16 Mar 2015 17:49:30 +0100 (CET)
```
Ich würde gerne weiter mit Dir über das Thema diskutieren - melde Dich doch bitte noch einmal per E-Mail.
