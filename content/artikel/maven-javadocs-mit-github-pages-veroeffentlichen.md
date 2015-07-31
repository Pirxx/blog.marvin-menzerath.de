+++
title       = "Maven: Javadocs generieren und mit GitHub Pages veröffentlichen"
description = "Dank der vielfältigen Einsetzbarkeit von Maven lassen sich die Javadocs eines Projekts sehr einfach generieren und bei GitHub Pages zum Hosting hochladen."
date        = "2015-02-12T18:19:00"
tag         = ["Git", "GitHub", "Java", "Maven"]
+++

Dank der großen Vielfältigkeit und Einsetzbarkeit von Maven lassen sich ganz einfach die Javadocs eines Projekts generieren und im nächsten Schritt bei GitHub Pages zum kostenfreien Hosting hochladen.

<!--more-->

Am Ende dieses Tutorials werden Sie in der Lage sein, durch den Einsatz eines Maven-Goals, die Javadocs zu Ihrem Projekt generieren und diese anschließend automatisiert in den `gh-pages`-Branch des Projekts auf GitHub pushen zu lassen, damit die Dokumentation dort kostenfrei zur Betrachtung im Browser zur Verfügung steht.

## Vorbereitungen
Sie sollten bereits ein Java-Projekt mit Maven realisiert haben und dieses in einem GitHub-Repository aufbewahren.
Sollte das nicht der Fall sein, erhalten Sie [hier](http://www.torsten-horn.de/techdocs/maven.htm) eine kleine Einführung in das Maven-Buildsystem, [hier](/artikel/einfuehrung-versionsverwaltung-git-github/) eine Einführung in das Versionsverwaltungstool Git und [hier](/artikel/websites-kostenfrei-mit-github-pages-hosten/) schließlich Informationen über GitHub Pages.

### Branch erstellen
Öffnen Sie die Repository-Seite des Projekts auf GitHub, klicken Sie auf die Branch-Auswahl und tippen Sie den Namen `gh-pages` ein, um anschließend die Erstellung dieser Branch auswählen zu können.
![GitHub: Branch erstellen](/images/maven-javadocs-mit-github-pages-veroeffentlichen/GitHub-Branch-erstellen.png)

### Access-Token generieren
Wechseln Sie nun auf [diese Seite](https://github.com/settings/applications) und generieren Sie dort einen Access-Token, der Zugriff auf öffentliche und private Repositorys hat.
![GitHub: Access-Token generieren](/images/maven-javadocs-mit-github-pages-veroeffentlichen/GitHub-AccessToken-generieren.png)

Dieser Token muss nun in der `settings.xml`-Datei Ihrer Maven-Installation abgelegt werden.
Öffnen Sie dazu diese Datei, die üblicherweise im Unterordner `.m2` Ihres Nutzerverzeichnisses liegt und tragen Sie folgende Daten ein:

```markup
<settings>
	<servers>
		<server>
			<id>github</id>
			<username>IhrNutzername</username>
			<password>IhrAccessToken</password>
		</server>
	</servers>
</settings>
```

## POM anpassen
Im letzten Schritt müssen Sie das POM, das die Struktur und wichtige Informationen zu Ihrem Projekt beinhaltet, anpassen.
Hier finden Sie nun eine Beispielkonfiguration des `Build`-Teils, die Sie an den markierten Stellen bearbeiten sollten:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<project>
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <artifactId>maven-site-plugin</artifactId>
                    <version>3.4</version>
                </plugin>

                <plugin>
                    <artifactId>maven-javadoc-plugin</artifactId>
                    <version>2.10.1</version>
                </plugin>

                <plugin>
                    <artifactId>maven-scm-publish-plugin</artifactId>
                    <version>1.1</version>
                </plugin>
            </plugins>
        </pluginManagement>

        <plugins>
            <!-- Verhindert, dass eine Maven-Site generiert wird -->
            <plugin>
                <artifactId>maven-site-plugin</artifactId>
                <configuration>
                    <skip>true</skip>
                    <skipDeploy>true</skipDeploy>
                </configuration>
            </plugin>

            <!-- Generiert die Javadocs in das Verzeichnis "target/apidocs", sobald das Goal "site" ausgeführt wird -->
            <plugin>
                <artifactId>maven-javadoc-plugin</artifactId>
                <configuration>
                    <outputDirectory>${project.build.directory}/apidocs</outputDirectory>
                    <reportOutputDirectory>${project.build.directory}</reportOutputDirectory>
                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <goal>javadoc</goal>
                        </goals>
                        <phase>site</phase>
                    </execution>
                </executions>
            </plugin>

            <!-- Pusht die Javadocs in das Repository, sobald das Goal "site" ausgeführt wird -->
            <plugin>
                <artifactId>maven-scm-publish-plugin</artifactId>
                <configuration>
                    <serverId>github</serverId>
                    <!-- URL zum Repository anpassen! -->
                    <pubScmUrl>scm:git:https://github.com/MarvinMenzerath/IsMyWebsiteDown.git</pubScmUrl>
                    <scmBranch>gh-pages</scmBranch>
                    <checkinComment>Updated JavaDocs via Maven</checkinComment>
                    <content>${project.build.directory}/apidocs</content>
                    <siteOutputEncoding>UTF-8</siteOutputEncoding>
                    <tryUpdate>true</tryUpdate>
                </configuration>
                <executions>
                    <execution>
                        <goals>
                            <goal>publish-scm</goal>
                        </goals>
                        <phase>site</phase>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

## Abschluss
Sobald Sie nun `mvn site` im Projektverzeichnis ausführen oder Ihre IDE anweisen, das `site`-Goal auszuführen, werden die Javadocs in das Verzeichnis `target/apidocs` innerhalb des Projektverzeichnisses generiert und anschließend von dort aus in den `gh-pages`-Branch Ihres Repositorys gepusht.

Danach können die Javadocs ganz einfach im Browser unter https://ihr-nutzername.github.io/repository-name betrachtet werden. Wie üblich kann hier natürlich auch eine beliebige Domain aufgeschaltet werden.

Dies kann dann - hier am Beispiel von [Is My Website Down?](https://github.com/MarvinMenzerath/IsMyWebsiteDown) - folgendermaßen aussehen:
![Javadocs: IMWD](/images/maven-javadocs-mit-github-pages-veroeffentlichen/Javadocs-Demo.png)