+++
title       = "Einfache Android ActionBar Programmieren"
description = "Mit dieser einfachen ActionBar kann jede Android-App auch unter älteren Versionen gut aussehen und komfortabel genutzt werden."
date        = "2012-05-05T21:00:00"
tag         = ["Android", "Programmierung"]
+++

Eine ActionBar ist immer eine gute Wahl um dem Benutzer eine einfache Möglichkeit zu bieten, durch die App zu navigieren. Doch leider ist diese Funktion erst ab Android 3.0 eingebaut. Daher gibt es folgende Basic-Alternative für *alle* Android-Versionen!

<!--more-->

**ACHTUNG! [Hier finden Sie eine bessere Alternative mit ActionBarSherlock und HoloEverywhere zu diesem Artikel](/artikel/android-apps-mit-actionbarsherlock-und-holoeverywhere/).**

## Vorbereitung
In einem neuen oder auch bestehendem Projekt wird einfach die `actionbar.xml` Datei im Layout-Ordner erstellt:
```markup
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:orientation="vertical"
	android:layout_width="fill_parent"
	android:layout_height="fill_parent"
	android:scrollbars="vertical">

<LinearLayout
	xmlns:android="http://schemas.android.com/apk/res/android"
	android:id="@+id/buttonlayout"
	android:orientation="horizontal"
	android:layout_width="fill_parent"
	android:layout_height="wrap_content"
	android:height="45dip"
	android:gravity="left|top"
	android:background="@drawable/actionbar_background"
	android:paddingTop="5dp"
	android:paddingBottom="5dp">"

		<LinearLayout
			xmlns:android="http://schemas.android.com/apk/res/android"
			android:id="@+id/buttonlayout2"
			android:orientation="horizontal"
			android:layout_height="wrap_content"
			android:gravity="left|center_vertical"
			android:layout_gravity="left"
			android:layout_width="wrap_content">

				<Button
					android:id="@+id/actionbarHome"
					android:layout_marginRight="1dp"
					android:layout_marginLeft="0dp"
					android:layout_width="40dp"
					android:layout_height="40dp"
					android:background="@drawable/ic_home" />

				<LinearLayout
					android:id="@+id/linearLayout1"
					android:layout_width="2dp"
					android:layout_height="45dip"
					android:orientation="horizontal"
					android:background="# 8B1A1A" >

				</LinearLayout>

				<TextView
					android:id="@+id/actionbarTxt"
					android:layout_width="fill_parent"
					android:layout_height="fill_parent"
					android:textStyle="bold"
					android:text="Meine ActionBar"
					android:textColor="# FFFFFF"
					android:textSize="18sp"
					android:gravity="center_vertical"
					android:paddingLeft="7dp">
				</TextView>
		</LinearLayout>

		<LinearLayout
			xmlns:android="http://schemas.android.com/apk/res/android"
			android:id="@+id/buttonlayout2"
			android:orientation="horizontal"
			android:layout_height="wrap_content"
			android:gravity="right"
			android:layout_gravity="right"
			android:layout_width="fill_parent">

			<Button
				android:id="@+id/actionbarFunk1"
				android:layout_width="45dp"
				android:layout_height="45dp"
				android:background="@android:drawable/ic_menu_share">
			</Button>

			<LinearLayout
				android:id="@+id/actionbar_seperator_funk"
				android:layout_width="2dp"
				android:layout_height="45dip"
				android:background="# 8B1A1A"
				android:orientation="horizontal" >
			</LinearLayout>

			<Button
				android:id="@+id/actionbarFunk2"
				android:layout_width="45sp"
				android:layout_height="45dp"
				android:background="@android:drawable/ic_menu_preferences">
			</Button>

		</LinearLayout>
</LinearLayout>
</LinearLayout>
```

Damit der Hintergrund der ActionBar auch gut aussieht, wird eine `actionbar_background.xml` Datei im Drawable-Ordner erstellt. Sie beinhaltet die Farbwerte, die als Hintergrund dienen. Weitere Farbwerte können [hier](http://www.ceveni.com/2009/08/set-rgb-color-codes-for-android-and-rgb.html) gefunden werden.
```markup
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
	android:shape="rectangle">
	<gradient
	android:startColor="# 8B1A1A"
	android:endColor="# CD2626"
	android:angle="-90" />
</shape>
```

Nun wird noch das Home-Icon in diesen Ordner kopiert (heißt `ic_home.png`).

## In Ihre App einfügen
Nun ist die ActionBar schon fast fertig eingerichtet. Sie muss nur noch mit folgendem Code in ein bestehendes Layout eingebunden werden:
```markup
<include
	android:layout_width="match_parent"
	android:layout_height="wrap_content"
	layout="@layout/actionbar" />
```

Einen eventuellen Fehler, dass es Probleme mit dem Layout gibt, sobald man in den visuellen Editor umschaltet, kann man ignorieren, die ActionBar funktioniert trotzdem ohne Probleme.

Im Manifest sollten Sie nun noch als Style `Theme.NoTitleBar` einstellen, um Android-Versionen ab Version 3.0 die Anzeige der eigenen ActionBar zu verbieten:
```markup
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
	package="de.menzerath.actionbar.tutorial"
	android:versionCode="1"
	android:versionName="1.0" >

	<uses-sdk android:minSdkVersion="6" android:targetSdkVersion="10"/>

	<application
		android:icon="@drawable/ic_launcher"
		android:label="@string/app_name" >
		<activity
			android:name=".Main"
			android:label="@string/app_name" android:theme="@android:style/Theme.NoTitleBar">
			<intent-filter>
				<action android:name="android.intent.action.MAIN" />

				<category android:name="android.intent.category.LAUNCHER" />
			</intent-filter>
		</activity>
	</application>
</manifest>
```

## Aktionen festlegen
Nun müssen Sie nur noch in der Activity die ActionBar ansprechen und Aktionen für die Buttons festlegen. In diesem Beispiel sieht das dann folgendermaßen aus:
```java
package de.menzerath.actionbar.tutorial;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class Main extends Activity {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		Button actionbar_home = (Button)findViewById(R.id.actionbarHome);
		Button actionbar_funk1 = (Button)findViewById(R.id.actionbarFunk1);
		Button actionbar_funk2 = (Button)findViewById(R.id.actionbarFunk2);
		final TextView actionbar_title = (TextView)findViewById(R.id.actionbarTxt);
		actionbar_funk1.setBackgroundResource(android.R.drawable.ic_menu_share);
		actionbar_funk2.setBackgroundResource(android.R.drawable.ic_menu_preferences);
		actionbar_title.setText("Action-Bar-Titel");
		actionbar_home.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				finish();
			}
		});
		actionbar_funk2.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				einToast();
			}
		});
		actionbar_funk1.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				einToast();
			}
		});

		Button buttonSetTitle = (Button)findViewById(R.id.button1);
		final EditText editTitle = (EditText)findViewById(R.id.editText1);
		buttonSetTitle.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {
				actionbar_title.setText(editTitle.getText().toString());
			}
		});
	}

	public void einToast() {
		Toast toast = Toast.makeText(this, "Ich bin nur ein kleiner Toast...", Toast.LENGTH_SHORT);
		toast.show();
	}
}
```

## Resultat
Folgendermaßen sollte sich die ActionBar nun verhalten:
![Einfache ActionBar: Ergebnis](/images/android-einfache-actionbar-programmieren/Resultat1.png)
![Einfache ActionBar: Ergebnis](/images/android-einfache-actionbar-programmieren/Resultat2.png)

## Anhang
Folgende Elemente der ActionBar durch die Activity geändert werden:

* Icons des Home-Buttons, der 1. Funktion & der 2. Funktion
* Titel der ActionBar
* Sichtbarkeit aller Elemente
* Aktionen der Buttons

## Download
Den kostenlosen Download des gesamten Beispielprojekts finden Sie [hier](/downloads/ActionBar-Tutorial.zip) zur freien Verwendung.
