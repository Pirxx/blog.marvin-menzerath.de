+++
title       = "RSS-Feed erstellen"
description = "Um Ihre Nutzer jederzeit über neue Artikel auf Ihrer Website zu informieren, bietet sich ein RSS-Feed an, den Sie sehr einfach einrichten können."
date        = "2012-09-18T23:00:00"
tag         = ["Webmaster"]
+++

Wenn Sie eine eigene Website betreiben möchten Sie sicherlich, dass Ihre Nutzer jederzeit über einen neuen Artikel informiert sind. Dazu bietet sich ein RSS-Feed an, den Sie mit dieser kleinen Anleitung problemlos einrichten können.

<!--more-->

## Was sind RSS-Feeds?
RSS Feeds sind im Grunde **kleine XML-Dateien**, die den Namen der Website und die dazugehörigen letzten Artikel mit einer Zusammenfassung des Textes und einem Link zu eben diesem Artikel beinhalten. Diese Feeds können dann von Lesern der Website in ihren Reader eingefügt werden, um direkt über neue Artikel informiert zu werden. Dazu aber später mehr.

## Einen RSS-Feed erstellen
Beinahe jedes CMS wie WordPress bietet einen RSS Feed **ohne Zutun des Betreibers** an. Sollten Sie jedoch kein CMS nutzen, müssen Sie den Feed (meist) von Hand erstellen. Dieser Vorgang ist aber ganz einfach und erfordert fast kein Vorwissen.

Erstellen Sie zuerst eine Datei mit dem Namen `feed.xml`. Dort kopieren Sie einfach das folgende Grundgerüst hinein. Dieses beinhaltet grundlegende Informationen über die Website und zwei Artikel. Dabei sind aber nur Beispielwerte angegeben, die Sie abändern müssen. Um diese Datei dann für den Leser auffindbar zu machen, fügen Sie einfach einen Link mit dem Ziel dieser Datei in Ihrer Website ein.
```markup
<xml version="1.0" encoding="utf-8">
  <rss version="2.0">
    <channel>
        <title>Website-Name</title>
        <link>http://domain.tld</link>
        <description>Website-Beschreibung</description>
        <language>de-de</language>
 
        <item>
            <title>Artikel 1</title>
            <description>Beschreibung des Artikels</description>
            <link>http://domain.tld/artikel.php</link>
            <guid>http://domain.tld/artikel.php</guid>
            <pubdate>30 Jul 2012 17:00:00 +0000</pubdate>
        </item>
 
        <item>
            <title>Artikel 2</title>
            <description>Beschreibung des Artikels</description>
            <link>http://domain.tld/artikel.php</link>
            <guid>http://domain.tld/artikel.php</guid>
            <pubdate>29 Jul 2012 16:00:00 +0000</pubdate>
        </item>
    </channel>
  </rss>
</xml>
```

## RSS-Feed lesen
Der Webbrowser Firefox bietet bereits von Haus aus die Möglichkeit an, RSS Feeds in der Lesezeichenleiste zu speichern. Bequemer geht es aber mit dem E-Mail Programm Thunderbird. Dort lassen sich die Feeds abbonieren und sie werden wie bei einer E-Mail benachrichtigt, sobald ein neuer Artikel vorliegt.
Probieren Sie es doch einfach mit meinem RSS Feed in der Sidebar aus! Viel Erfolg.