+++
title       = "Cisco IP Phone 7940 / 7960 mit FritzBox verwenden"
description = "Hier erfahren Sie, wie man die Cisco IP Phones 7940 / 7960 mit einer SIP-Firmware ausstatten und mit der FritzBox verwenden kann."
date        = "2016-05-28T14:37:00"
tag         = ["Einrichtung", "Software"]
+++

Die Business IP-Telefone "Cisco IP Phone 7940" und "Cisco IP Phone 7960" sind auf eBay bereits für wenig Geld erhältlich und können mit wenig Aufwand mit einer SIP-Firmware ausgestattet und somit mit FritzBox, Sipgate und Co. verwendet werden.

<!--more-->

## Software

### Telefon
Das IP-Telefon selbst benötigt eine neue SIP-Firmware, die Sie von den offiziellen Cisco-Seiten nach einer vorherigen Anmeldung herunterladen können. Diese findet man aber mittlerweile auch auf anderen Seiten zum direkten Download, wobei da natürlich die Integrität der Dateien nicht garantiert werden kann.
Die momentan aktuelle Firmware-Version nennt sich `P0S3-8-12-00` und sollte die folgenden Dateien mitbringen:

* `P0S3-8-12-00.loads`
* `P0S3-8-12-00.sb2`
* `P003-8-12-00.bin`
* `P003-8-12-00.sbn`

Zustätzlich dazu benötigen Sie noch eine `OS79XX.txt`-Datei, welche nur folgende Zeile beinhalten darf:
```
P003-8-12-00
```

Neuere Geräte benötigen außerdem eine `XMLDefault.cnf.xml`-Datei mit folgendem Inhalt:
```markup
<Default>
	<callManagerGroup>
		<members>
			<member priority="0">
				<callManager>
					<ports>
						<ethernetPhonePort>2000</ethernetPhonePort>
					</ports>
					<processNodeName>192.168.1.1</processNodeName>
				</callManager>
			</member>
		</members>
	</callManagerGroup>
	<loadInformation6 model="IP Phone 7910"></loadInformation6>
	<loadInformation124 model="Addon 7914"></loadInformation124>
	<loadInformation9 model="IP Phone 7935"></loadInformation9>
	<loadInformation8 model="IP Phone 7940">P003-8-12-00</loadInformation8>
	<loadInformation7 model="IP Phone 7960">P003-8-12-00</loadInformation7>
	<loadInformation20000 model="IP Phone 7905"></loadInformation20000>
	<loadInformation30008 model="IP Phone 7902"></loadInformation30008>
	<loadInformation30007 model="IP Phone 7912"></loadInformation30007>
</Default>
```

### PC
Auf Ihrem PC benötigen Sie außerdem einen TFTP-Server. Ich empfehle die Verwendung des kostenlosen und portablen `tftpd32`, den Sie sich von [dieser Seite](http://tftpd32.jounin.net) herunterladen können.
Dieser beinhaltet die TFTP- und DHCP-Komponenten, die für das Firmware-Update und die Bereitstellung der Konfiguration notwendig sind.

## Konfiguration

### FritzBox
Öffnen Sie die Benutzeroberfläche Ihrer FritzBox und navigieren Sie unter "Telefonie" zu "Telefoniegeräte". Dort klicken Sie nun auf "Neues Gerät einrichten", wählen "Telefon (mit und ohne Anrufbeantworter)" aus, selektieren als Anschlusstyp "LAN/WLAN (IP-Telefon)", vergeben einen passenden Namen, legen ein Kennwort fest und wählen schließlich aus, mit welcher Nummer ausgehende Gespräche geführt werden und welche Nummern auf diesem Gerät klingeln sollen.
Anschließend notieren Sie sich den Benutzernamen und das Passwort, da diese gleich benötigt werden.

### Telefon
Am einfachsten ist es, die Konfiguration des Telefons schon jetzt vorzunehmen, damit das Gerät diese bereits bei der Einrichtung von Ihrem PC laden kann. Außerdem lassen sich dabei deutlich mehr Einstellungen vornehmen, als später am Telefon selbst.

Zunächst legen Sie die Standard-Konfiguration `SIPDefault.cnf` an, die erst einmal für alle Telefone gelten soll:
```
# SIP Default Generic Configuration File

# Image Version
image_version: P0S3-8-12-00

# Call Manager
call_manager1_addr: ""
call_manager1_sip_port: 5060
call_manager2_addr: ""
call_manager2_sip_port: 5060
call_manager3_addr: ""
call_manager3_sip_port: 5060
call_manager4_addr: ""
call_manager4_sip_port: 5060
call_manager5_addr: ""
call_manager5_sip_port: 5060
call_manager6_addr: ""
call_manager6_sip_port: 5060

# Proxy Server
proxy1_address: ""
proxy2_address: ""
proxy3_address: ""
proxy4_address: ""
proxy5_address: ""
proxy6_address: ""

# Proxy Server Port
proxy1_port: 5060
proxy2_port: 5060
proxy3_port: 5060
proxy4_port: 5060
proxy5_port: 5060
proxy6_port: 5060

# Proxy Registration (0-disable (default), 1-enable)
proxy_register: 1

# Phone Registration Expiration [1-3932100 sec] (Default - 3600)
timer_register_expires: 500

# Codec for media stream (g711ulaw (default), g711alaw, g729a)
preferred_codec: g711ulaw

# TOS bits in media stream [0-5] (Default - 5)
tos_media: 5

# Inband DTMF Settings (0-disable, 1-enable (default))
dtmf_inband: 1

# Out of band DTMF Settings (none-disable, avt-avt enable (default), avt_always - always avt )
dtmf_outofband: avt

# DTMF dB Level Settings (1-6dB down, 2-3db down, 3-nominal (default), 4-3db up, 5-6dB up)
dtmf_db_level: 3

# SIP Timers
timer_t1: 500 				; Default 500 msec
timer_t2: 4000 				; Default 4 sec
sip_retx: 10				; Default 10
sip_invite_retx: 6 			; Default 6
timer_invite_expires: 180 	; Default 180 sec

# Dialplan template (.xml format file relative to the TFTP root directory)
dial_template: dialplan

# TFTP Phone Specific Configuration File Directory
tftp_cfg_dir: ""

# Time Server (There are multiple values and configurations refer to Admin Guide for Specifics)
sntp_server: "192.53.103.104"	; SNTP Server IP Address
sntp_mode: unicast				; unicast, multicast, anycast, or directedbroadcast (default)
time_zone: CET					; Time Zone Phone is in
dst_offset: 1					; Offset from Phone's time when DST is in effect
dst_start_month: April			; Month in which DST starts
dst_start_day: ""				; Day of month in which DST starts
dst_start_day_of_week: Sun		; Day of week in which DST starts
dst_start_week_of_month: 1		; Week of month in which DST starts
dst_start_time: 02				; Time of day in which DST starts
dst_stop_month: Oct				; Month in which DST stops
dst_stop_day: ""				; Day of month in which DST stops
dst_stop_day_of_week: Sunday	; Day of week in which DST stops
dst_stop_week_of_month: 8		; Week of month in which DST stops 8=last week of month
dst_stop_time: 2				; Time of day in which DST stops
dst_auto_adjust: 1				; Enable(1-Default)/Disable(0) DST automatic adjustment
time_format_24hr: 1				; Enable(1 - 24Hr Default)/Disable(0 - 12Hr)

# Do Not Disturb Control (0-off, 1-on, 2-off with no user control, 3-on with no user control)
dnd_control: 0				; Default 0 (Do Not Disturb feature is off)

# Caller ID Blocking (0-disbaled, 1-enabled, 2-disabled no user control, 3-enabled no user control)
callerid_blocking: 0		; Default 0 (Disable sending all calls as anonymous)

# Anonymous Call Blocking (0-disabled, 1-enabled, 2-disabled no user control, 3-enabled no user control)
anonymous_call_block: 0		; Default 0 (Disable blocking of anonymous calls)

# DTMF AVT Payload (Dynamic payload range for AVT tones - 96-127)
dtmf_avt_payload: 101		; Default 101

# Sync value of the phone used for remote reset
sync: 1						; Default 1

# Backup Proxy Support
proxy_backup: ""			; Dotted IP of Backup Proxy
proxy_backup_port: 5060		; Backup Proxy port (default is 5060)

# Emergency Proxy Support
proxy_emergency: "" 		; Dotted IP of Emergency Proxy
proxy_emergency_port: 5060	; Emergency Proxy port (default is 5060)

# Configurable VAD option
enable_vad: 0				; VAD setting 0-disable (Default), 1-enable

# NAT/Firewall Traversal
nat_enable: 0               ; 0-Disabled (default), 1-Enabled
nat_address: ""		        ; WAN IP address of NAT box (dotted IP or DNS A record only)
voip_control_port: 5060     ; UDP port used for SIP messages (default - 5060)
start_media_port: 16384 	; Start RTP range for media (default - 16384)
end_media_port: 32766   	; End RTP range for media (default - 32766)
nat_received_processing: 0	; 0-Disabled (default), 1-Enabled

# Outbound Proxy Support
outbound_proxy: ""	 		; restricted to dotted IP or DNS A record only
outbound_proxy_port: 5060   ; default is 5060

# Allow for the bridge on a 3way call to join remaining parties upon hangup
cnf_join_enable : 1			; 0-Disabled, 1-Enabled (default)

# Allow Transfer to be completed while target phone is still ringing
semi_attended_transfer: 1	; 0-Disabled, 1-Enabled (default)

# Telnet Level (enable or disable the ability to telnet into the phone)
telnet_level: 1				; 0-Disabled (default), 1-Enabled, 2-Privileged

# XML URLs
services_url: ""			; URL for external Phone Services
directory_url: ""			; URL for external Directory location
logo_url: ""				; URL for branding logo to be used on phone display

# HTTP Proxy Support
http_proxy_addr: ""			; Address of HTTP Proxy server
http_proxy_port: 80			; Port of HTTP Proxy Server (80-default)

# Dynamic DNS/TFTP Support
dyn_dns_addr_1: ""			; restricted to dotted IP
dyn_dns_addr_2: ""			; restricted to dotted IP
dyn_tftp_addr: ""			; restricted to dotted IP

# Remote Party ID
remote_party_id: 0			; 0-Disabled (default), 1-Enabled

# Call Hold Ringback (0-off, 1-on, 2-off with no user control, 3-on with no user control)
call_hold_ringback: 0		; Default 0 (Call Hold Ringback feature is off)

# Dialtone Stutter for MWI
stutter_msg_waiting: 0		; 0-Disabled (default), 1-Enabled

# RTP Call Statistics (SIP BYE/200 OK message exchange)
call_stats: 0				; 0-Disabled (default), 1-Enabled

# User classifcation used when Registering [ none(default), phone, ip ]
user_info: none
```

Anschließend folgt die Konfiurationsdatei für das Telefon selbst. Dabei lautet der Dateiname `SIP<MAC>.cnf`, wobei `<MAC>` durch die MAC-Adresse des Geräts ersetzt werden muss. Hier ersetzen Sie außerdem alle nötigen IP-Adressen, Benutzernamen und Kennwörter durch die zuvor notierten Daten.
Natürlich können hier weitere Leitungen nach dem gleichen Schema hinzugefügt werden.
```
# SIP Configuration Generic File

# Call Manager
call_manager1_addr: "192.168.1.1"
call_manager1_sip_port: 5060
call_manager2_addr: "192.168.1.1"
call_manager2_sip_port: 5060

# Line 1
proxy1_address: "USECALLMANAGER"
proxy1_port: 5060
line1_name: "620"
line1_authname: "620"
line1_password: "passwort"
line1_displayname: "Ihr Name"
line1_shortname: "Leitung 1"

# Line 2
proxy2_address: "USECALLMANAGER"
proxy2_port: 5060
line2_name: "621"
line2_authname: "621"
line2_password: "passwort"
line2_displayname: "Ihr Name"
line2_shortname: "Leitung 2"

phone_label: "Telefon"

# Phone Prompt (The prompt that will be displayed on console and telnet)
phone_prompt: "Mein Telefon"

# Phone Password (Password to be used for console or telnet login)
phone_password: "cisco"
```

Um Fehlermeldungen des Telefons zu vermeiden, können Sie außerdem eine `dialplan.xml`-Datei anlegen, die allerdings leer bleiben kann:
```markup
<dialplan>
</dialplan>
```

### PC
Am PC besteht der Rest der Arbeit nun darin, den TFTP-Server korrekt zu konfigurieren. Starten Sie dazu das Programm und wählen Sie unter "Settings" im Reiter "GLOBAL" nur die Dienste "TFTP Server" und "DHCP Server" aus.
Anschließend legen Sie im TFTP-Tab das Verzeichnis mit den zuvor erstellten Dateien als "Base Directory" fest und konfigurieren im DHCP-Tab den gewünschten IP-Bereich, in dem der Server IPs verteilen soll.
Am wichtigsten ist hier allerdings, dass Sie die bei "Additional Option" den Code `150` verwenden und als Inhalt `a <Ihre IP>` eintragen, wobei `<Ihre IP>` durch die IP-Adresse Ihres Rechners zu ersetzen ist. Diese Option teilt dem Telefon mit, welcher TFTP-Server seine Firmware und Konfiguration bereit hält und ist essentiell wichtig.
Dazu richten Sie am besten in den Netzwerkeinstellungen eine feste IP für Ihren PC ein.

## Abschluss
Trennen Sie nun Ihren Rechner aufgrund möglicher DHCP-Konflikte vom restlichen Netzwerk und verbinden Sie das Telefon durch einen Switch mit Ihrem Rechner. Starten Sie den TFTP-/DHCP-Server neu und schließen Sie das Telefon an das Stromnetz an.
Nun sollte das Gerät selbstständig eine IP erhalten, die Firmware aktualiseren, die Konfiguration laden und nach kurzer Zeit einsatzbereit sein. Je nach verwendeter Sicherheitslösung auf dem PC kann es allerdings sein, dass zuvor die Firewall deaktiviert werden muss.
