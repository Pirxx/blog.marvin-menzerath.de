+++
title       = "Gravatar - Den globalen Avatar auf Ihrer Website nutzen"
description = "Hier erfahren Sie, wie Sie kostenfreien Avatar-Dienst Gravatar in Ihrem CMS oder mit wenigen Zeilen PHP-Code in Ihren Websites nutzen können."
date        = "2013-01-20T19:00:00"
tag         = ["PHP", "Webmaster"]
+++

Mit dem kostenlosen Service Gravatar nutzen Sie auf vielen Websites den gleichen Avatar. Dieser muss nur an einer globalen Stelle festgelegt werden und gilt dann für die angegebene E-Mail Adresse(n).
Hier erfahren Sie, wie Sie Gravatar in Ihrem CMS oder mit wenigen Zeilen PHP-Code in Ihren Websites nutzen können.

<!--more-->

## Wie funktioniert Gravatar?
Um Ihren Gravatar festzulegen müssen Sie sich nur unter [https://de.gravatar.com/](https://de.gravatar.com/) mit Ihrer E-Mail Adresse registrieren und einen Avatar hochladen.
Nun müssen Sie noch die Jugendfreigabe für Ihren Avatar einschätzen. Wegen dieser Angabe können auch später Ihre Gravatare nicht angezeigt werden (Bsp: Sie haben einen "ab-12-Jahren"-Gravatar und kommentieren einen Inhalt auf einer Kinder-Website -> Ihr Gravatar wird nicht angezeigt)
Weiterhin können Sie mehrere E-Mail Adressen nutzen und diesen auch andere Avatare zuweisen.
![Gravatar: Website](/images/gravatar-nutzen/Webseite.png)

Wenn Sie nun einen Kommentar auf einer unterstützen Website hinterlassen, wird nicht der Standard-Avatar neben Ihrem Kommentar angezeigt, sondern der zur angegebenen E-Mail Adresse gehörende Avatar.

## Wie baue ich Gravatar in meine Website ein?
Sollten Sie ein CMS nutzen, gibt es meist schon fertige Plugins oder Scripte, die Ihnen die Arbeit abnehemen. Daher sehen Sie nachfolgend eine Liste der drei bekanntesten CMS mit einem Link zu Ihren jeweiligen Gravatar-Plugins:

* Joomla: [http://extensions.joomla.org/extensions/social-web/social-presence/profiles/17572](http://extensions.joomla.org/extensions/social-web/social-presence/profiles/17572)
* WordPress: Funktion bereits im Core vorhanden -> Kein Plugin nötig
* Drupal: [http://drupal.org/project/gravatar](http://drupal.org/project/gravatar)

Wenn Sie keines dieser Systeme nutzen, oder vielleicht sogar selber Eines programmiert haben, können Sie durch wenige Zeilen PHP-Code die Avatare von Gravatar abrufen und anzeigen lassen. Der nun folgende Code ist von der offiziellen Gravatar-Website und wurde von mir kommentiert/erweitert.

### Der "manuelle" Weg
```php
<?php
// Die E-Mail Adresse des Kommentators
$email = "someone@somewhere.com";
// Der Standart-Avatar (falls kein Gravatar existiert)
$default = "http://www.somewhere.com/homestar.jpg";
// Die Größe des Avatars (Länge x Breite in Pixeln)
$size = 40;

// Die Gravatar-URL "zusammenbauen"
$grav_url = "http://www.gravatar.com/avatar/".md5(strtolower(trim($email)))."?d=".urlencode($default)."&s=".$size;

// Und schließlich den Gravatar anzeigen lassen
<img src="<?php echo $grav_url; ?>" alt="" />
?>
```

### Per Funktion
```php
<?php
/**
 * Get either a Gravatar URL or complete image tag for a specified email address.
 *
 * @param string $email The email address
 * @param string $s Size in pixels, defaults to 80px [ 1 - 2048 ]
 * @param string $d Default imageset to use [ 404 | mm | identicon | monsterid | wavatar ]
 * @param string $r Maximum rating (inclusive) [ g | pg | r | x ]
 * @param boole $img True to return a complete IMG tag False for just the URL
 * @param array $atts Optional, additional key/value attributes to include in the IMG tag
 * @return String containing either just a URL or a complete image tag
 * @source http://gravatar.com/site/implement/images/php/
 */
function get_gravatar($email, $s = 80, $d = 'mm', $r = 'g', $img = false, $atts = array()) {
    $url = 'http://www.gravatar.com/avatar/';
    $url .= md5(strtolower(trim($email)));
    $url .= "?s=$s&d=$d&r=$r";
    if ($img) {
        $url = '<img src="'.$url.'"';
        foreach ($atts as $key => $val)
            $url .= ' '.$key.'="'.$val.'"';
        $url .= ' />';
    }
    return $url;
}
?>
```

## Fazit
Gravatar ist ein wirklich nützlicher Dienst für Websitebetreiber und User, die oft auf verschiedenen Websites Kommentare hinterlassen.
Allein durch wenige Zeilen Code lässt sich jeder Artikel und jeder Kommentar personalisieren und die User werden schneller wiedererkannt.
