+++
title       = "Raspberry Pi als WLAN Access Point nutzen"
description = "Hier erfahren Sie, wie einfach Sie einen WLAN Access-Point mit einem Raspberry Pi und einem kostengünstigen WLAN-Stick aufbauen können."
date        = "2014-06-27T16:00:00"
tag         = ["Access Point", "Raspberry Pi", "WLAN"]
+++

Um möglichst überall im Haus mit WLAN versorgt zu sein, bedarf es meistens eines teuren WLAN-Repeaters oder eines zusätzlichen Access-Points. Beides ist mit einem Raspberry Pi kostengünstig umsetzbar und hier erfahren Sie, wie einfach Sie einen WLAN-Access-Point mit einem Raspberry Pi und einem günstigen WLAN-Stick aufbauen können.

<!--more-->

## Voraussetzungen
Natürlich benötigen Sie zuerst einen Raspberry Pi mit Netzteil, SD-Karte (mit installiertem Raspbian) und ein LAN-Kabel. Außerdem benötigen Sie einen [WLAN-Stick/-Dongle](http://www.amazon.de/CSL-Antennenbuchse-abnehmbarer-besonders-Reichweite-Schwarz/dp/B007K871ES), den Sie schon [für weniger als 10€](http://www.amazon.de/Raspberry-inkl-automatische-Netzeinbindung-Windows/dp/B00A8BWSKG) bei Amazon kaufen können.
Bedenken Sie bei der Wahl der Position des Raspberry Pis, dass dieser möglichst viel Raum mit WLAN abdecken soll und platzieren Sie diesen daher möglichst zentral.

## Installation & Einrichtung
Nachdem der Raspberrry Pi nun seinen Platz gefunden hat und angeschlossen ist, verbinden Sie sich mittels SSH und aktualisieren Sie zuerst alle Pakete und den Kernel, damit die Unterstützung für möglichst jeden WLAN-Stick sichergestellt ist:
```language-bash
sudo apt-get update
sudo apt-get dist-upgrade
sudo rpi-update
sudo reboot
```

Prüfen Sie nun, ob der WLAN-Stick erkannt wird, indem Sie dazu `lsusb`  auf dem Terminal eingeben. Die Ausgabe der letzten Zeile sollte dann folgendermaßen (oder ähnlich) aussehen:
![Raspberry Pi Access Point 1: lsusb](/images/raspberry-pi-als-wlan-access-point-nutzen/AccessPointPi.png)
Anschließend können Sie die nötigen Pakete **hostapd** und **dnsmasq** installieren:
```
sudo apt-get install hostapd dnsmasq
```

### Access Point einrichten
Zuerst müssen Sie dem WLAN-Stick eine feste IP-Adresse zuweisen. Editieren Sie dazu die Datei `/etc/network/interfaces`, sodass der Inhalt nun folgendermaßen aussieht:
```bash
auto lo
iface lo inet loopback
 
# ...
 
iface wlan0 inet static
address 192.168.2.1
netmask 255.255.255.0
```

Wichtig ist, dass `wlan0` nur einmalig in dieser Datei genannt werden darf!

Nun muss hostapd eingerichtet werden. Dazu editieren Sie zunächst die 10. Zeile in der Datei `/etc/default/hostapd`:
```bash
# Defaults for hostapd initscript
# 
# See /usr/share/doc/hostapd/README.Debian for information about alternative
# methods of managing hostapd.
# 
# Uncomment and set DAEMON_CONF to the absolute path of a hostapd configuration
# file and hostapd will be started during system boot. An example configuration
# file can be found at /usr/share/doc/hostapd/examples/hostapd.conf.gz
# 
DAEMON_CONF="/etc/hostapd/hostapd.conf"

# Additional daemon options to be appended to hostapd command:-
#       -d   show more debug messages (-dd for even more)
#       -K   include key data in debug messages
#       -t   include timestamps in some debug messages
# 
# Note that -B (daemon mode) and -P (pidfile) options are automatically
# configured by the init.d script and must not be added to DAEMON_OPTS.
# 
# DAEMON_OPTS=""
```

Und schließlich muss die dort angegebene Deamon-Konfiguration erstellt und mit den gewünschten Einstellungen gefüllt werden. Dazu kopieren Sie einfach diese Konfiguration (mit eventuellen Anpassungen) in die `/etc/hostapd/hostapd.conf`-Datei.
Die wichtigste Anpassung ist die des verwendeten Treibers. Bei den meisten Edimax-Dongles muss nichts nachinstalliert werden, sodass Sie hier den Treiber verwenden können, den die Eingabe von `dmesg` nach dem Einstecken des Dongles selbst anzeigt.
```bash
# Genutztes Interface, muss bei Bedarf geändert werden (siehe "ifconfig"-Ausgabe)
interface=wlan0
# Realtek-Treiber, muss bei anderem Hersteller angepasst werden
driver=rtl871xdrv
 
# Deamon-Einstellungen
ctrl_interface=/var/run/hostapd
ctrl_interface_group=0
 
# WLAN-Konfiguration
ssid=Raspberry Pi
channel=1
hw_mode=g
ieee80211n=1
 
# WLAN-Sicherheit (Passwort unbedingt anpassen!)
wpa=2
wpa_passphrase=passwort123456
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
rsn_pairwise=CCMP
 
# Ländercode
country_code=DE
```

Zum Abschluss muss ein Client noch eine IP-Adresse erhalten, wenn er sich beim Access Point anmeldet. Dazu editieren Sie die dnsmasq-Konfiguration unter `/etc/dnsmasq.conf` folgendermaßen:
```bash
# Configuration file for dnsmasq.
 
# ...
 
# If you want dnsmasq to listen for DHCP and DNS requests only on
# specified interfaces (and the loopback) give the name of the
# interface (eg eth0) here.
# Repeat the line for more than one interface.
interface=wlan0
 
# ...
 
# Uncomment this to enable the integrated DHCP server, you need
# to supply the range of addresses available for lease and optionally
# a lease time. If you have more than one network, you will need to
# repeat this for each network on which you want to supply DHCP
# service.
dhcp-range=192.168.2.2,192.168.2.100,255.255.255.0,12h
 
# ...
```

Somit vergibt der Raspberry Pi nun IP-Adressen im Bereich von `192.168.2.2` bis `192.168.2.100` für jeweils 12 Stunden. Starten Sie nun die beiden Services neu und verbinden Sie sich mit dem neuen WLAN "Raspberry Pi". Zwar haben Sie noch keine Internet-Verbindung, jedoch können Sie (falls installiert) unter `192.168.2.1` einen Webserver erreichen.
```bash
sudo service hostapd restart
sudo service dnsmasq restart
```

### Internet-Verbindung weiterleiten
Damit nun auch die WLAN-Clients eine Verbindung zum Internet erhalten, müssen Sie ein paar weitere Einstellungen vornehmen: Entfernen Sie zunächst die Raute vor dieser Zeile in der Datei `/etc/sysctl.conf`:
```bash
# Uncomment the next line to enable packet forwarding for IPv4
# net.ipv4.ip_forward=1
```

Und lesen Sie die Datei anschließend erneut ein:
```
sudo sysctl -p
```

Nun weisen Sie `iptables` an, den Internet-Traffic von `wlan0` auf `eth0` weiterzuleiten, indem Sie folgendes Skript bei jedem Neustart des Raspberry Pis ausführen lassen. Legen Sie dazu eine Datei unter `/etc/network/if-up.d/accesspoint` an und kopieren Sie folgenden Inhalt dort hinein:
```bash
# !/bin/sh
iptables --table nat --append POSTROUTING --out-interface eth0 -j MASQUERADE
iptables --append FORWARD --in-interface wlan0 -j ACCEPT
```

Schließlich machen Sie diese Datei noch ausführbar und starten den Raspberry Pi neu:
```bash
sudo chmod +x /etc/network/if-up.d/accesspoint
sudo reboot
```

## Abschluss
Nun können Sie sich mit dem Access Point verbinden und haben eine funktionierende Internetverbindung.

Sollten Sie jedoch weiterhin nicht das Internet erreichen können, prüfen Sie folgende Fehlerquellen:

* Wurden die `iptables`-Einstellungen übernommen? Führen Sie die beiden Zeilen (s.o.) mit einem vorgestellten `sudo` einzeln aus und prüfen Sie die Verbindung erneut.
* Dem Gerät ist der Gateway unbekannt? Fügen Sie folgenden Zeile in die `dnsmasq`-Konfiguration ein: `dhcp-option=3,192.168.2.1`
* Die Treiber für Ihren WLAN-Stick fehlen? Meist bieten die Hersteller auch Linux-Treiber an; andernfalls gibt es auch zu vielen Modellen bereits detaillierte Anleitungen in Foren oder Blogs.