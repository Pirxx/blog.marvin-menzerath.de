+++
title       = "Android-Apps mit Navigation Drawer programmieren"
description = "Der Navigation Drawer bietet eine Sidebar zur Navigation durch die eigene App. Hier lernen Sie, wie Sie selbst diese Navigation implementieren können."
date        = "2013-06-06T17:58:00"
tag         = ["Android", "Programmierung"]
+++

Im Zuge der Google I/O wurde auch die Support Library für Android-Apps geupdated, die nun auch den Navigation Drawer offiziell unterstützt. Dieser bietet eine Sidebar als Navigationsmöglichkeit, wie sie bereits aus anderen Apps - wie der YouTube-App - bekannt ist.

<!--more-->

## Wozu ein Navigation Drawer?
Diese Art der Navigation ist besonders für Apps mit mehreren, wichtigen Ebenen gedacht, wie es unter anderem die Facebook-App vormacht. Dort gibt es die Möglichkeit zu den Nachrichten, Gruppen und auch den aktuellen Meldungen zu gelangen. Da die Navigation bereits durch einen Wischer von der linken zur rechten Seite oder einen Druck auf den ActionBar-Titel geöffnet wird, ist sie von überall aus erreichbar.

Weitere Einsatzszenarien und Verwendungshinweise im Hinblick auf das Design liefern die Design-Guidelines von Google, die Sie [hier](http://developer.android.com/design/patterns/navigation-drawer.html) finden können.

### Beispiele
In vielen Apps ist der Navigation Drawer bereits implementiert. Im folgenden sehen Sie nun einige Beispiele dafür:
![Navigation Drawer: Gmail](/images/android-apps-mit-navigation-drawer-programmieren/Gmail.png)
![Navigation Drawer: feedly](/images/android-apps-mit-navigation-drawer-programmieren/Feedly.png)
![Navigation Drawer: ASDV](/images/android-apps-mit-navigation-drawer-programmieren/ASDV.png)

## Implementation und Programmierung
Die Implementation mit eigenem und erweitertem Design, bzw. Style ist sehr einfach und auch für Anfänger geeignet. Im folgenden werde ich Ihnen zeigen, wie einfach Sie einen Navigation Drawer mit ActionBarSherlock implementieren können und Ihnen das Beispielprojekt auch zum Download anbieten. Falls Sie kein eigenes Design wünschen, sondern nur eine Auflistung der Navigationselemente, können Sie auch die [Anleitung aus dem Android Developers Training](http://developer.android.com/training/implementing-navigation/nav-drawer.html) verwenden.

* Erstellen Sie ein neues Projekt oder öffnen Sie ein bereits bestehendes Projekt.
* Machen Sie einen Rechtsklick auf Ihr Projekt und wählen Sie `Android Tools` --> `Add Support Library` aus. Überschreiben Sie die Support Library von ActionBarSherlock dabei einfach.
* Ändern Sie das Theme Ihrer App in ein `Theme.Sherlock.# ` ab.
* Öffnen Sie die Layout-Datei, in welcher Sie den Navigation Drawer nutzen wollen und ändern Sie diese einfach folgendermaßen ab:
```markup
<android.support.v4.widget.DrawerLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/drawer_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent" >
 
    <!-- Ihre Layout-Elemente oder ein Fragment-Container -->
 
    <ListView
        android:id="@+id/left_drawer"
        android:layout_width="300dp"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:background="# fff"
        android:choiceMode="singleChoice"
        android:divider="# e3e3e3"
        android:dividerHeight="0.1dp" />
</android.support.v4.widget.DrawerLayout>
```
* Legen Sie nun eine `drawer_list_item.xml` Datei im layout Ordner an und kopieren Sie diesen Inhalt dort hinein. Diese Datei gibt das Design des Navigation Drawers an.
```markup
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    style="?attr/spinnerDropDownItemStyle"
    android:layout_width="match_parent"
    android:layout_height="?dropdownListPreferredItemHeight"
    android:orientation="horizontal" >
 
    <ImageView
        android:id="@+id/icon"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:adjustViewBounds="true"
        android:paddingLeft="4dp"
        android:paddingRight="4dp"
        android:contentDescription="Entry-Icon" />
 
    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:gravity="center_vertical|left"
        android:minHeight="?listPreferredItemHeightSmall"
        android:orientation="vertical" >
 
        <TextView
            android:id="@+id/title"
            style="?spinnerDropDownItemStyle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ellipsize="end"
            android:textSize="17dp"
            android:singleLine="true" />
 
        <TextView
            android:id="@+id/subtitle"
            style="?spinnerDropDownItemStyle"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:ellipsize="end"
            android:textSize="13dp"
            android:singleLine="true"
            android:textAppearance="?textAppearanceSmall" />
    </LinearLayout>
 
</LinearLayout>
```
* Nun benötigen Sie noch ein Icon, welches den Navigation Drawer darstellt und einen Schatten, der sich über den Rest der Anwendung legt, falls der Navigation Drawer "ausgefahren" ist. Diese Ressourcen finden Sie im Beispielprojekt.
* Legen Sie nun eine Klasse namens `MenuListAdapter.java` an. Diese kümmert sich um die korrekte Darstellung der Elemente im Navigation Drawer.  
Wie Sie hier bereits sehen, sind im Layout Titel, Untertitel und Icons möglich - ein konkretes Beispiel dazu finden Sie oben im letzten Bild.
```java
package de.menzerath.tutorial.navdrawer;
 
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;
 
public class MenuListAdapter extends BaseAdapter {
    private Context context;
    private String[] mTitle;
    private String[] mSubTitle;
    private int[] mIcon;
    private LayoutInflater inflater;
 
    public MenuListAdapter(Context pContext, String[] pTitle, String[] pSubtitle, int[] pIcon) {
        context = pContext;
        mTitle = pTitle;
        mSubTitle = pSubtitle;
        mIcon = pIcon;
    }
 
    public View getView(int position, View convertView, ViewGroup parent) {
        inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View itemView = inflater.inflate(R.layout.drawer_list_item, parent, false);
 
        TextView txtTitle = (TextView) itemView.findViewById(R.id.title);
        TextView txtSubTitle = (TextView) itemView.findViewById(R.id.subtitle);
        ImageView imgIcon = (ImageView) itemView.findViewById(R.id.icon);
 
        txtTitle.setText(mTitle[position]);
        txtSubTitle.setText(mSubTitle[position]);
        imgIcon.setImageResource(mIcon[position]);
 
        return itemView;
    }
 
    @Override
    public int getCount() {
        return mTitle.length;
    }
 
    @Override
    public Object getItem(int position) {
        return mTitle[position];
    }
 
    @Override
    public long getItemId(int position) {
        return position;
    }
}
```
* Nun geht es an die `MainActivity.java`. Kopieren Sie dort einfach folgenden Code hinein - die Erklärungen stehen jeweils in Kommentaren.
```java
package de.menzerath.tutorial.navdrawer;
 
import android.content.res.Configuration;
import android.os.Bundle;
import android.support.v4.app.ActionBarDrawerToggle;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import com.actionbarsherlock.app.SherlockActivity;
import com.actionbarsherlock.view.Menu;
import com.actionbarsherlock.view.MenuInflater;
import com.actionbarsherlock.view.MenuItem;
 
public class MainActivity extends SherlockActivity {
    private DrawerLayout mDrawerLayout;
    private ListView mDrawerList;
    private ActionBarDrawerToggle mDrawerToggle;
    private CharSequence mTitle;
 
    private String[] drawerTitles;
    private String[] drawerSubtitles;
    private int[] drawerIcons;
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
 
        mTitle = getTitle();
 
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        mDrawerList = (ListView) findViewById(R.id.left_drawer);
        mDrawerLayout.setDrawerShadow(R.drawable.drawer_shadow, GravityCompat.START);
 
        // Hole die Titel aus einem Array aus der strings.xml
        drawerTitles = getResources().getStringArray(R.array.drawerTitles_array);
        // Hole die Untertitel aus einem Array aus der strings.xml
        drawerSubtitles = getResources().getStringArray(R.array.drawerSubtitles_array);
        // Setzt die Icons zu den Einträgen
        drawerIcons = new int[] {android.R.drawable.ic_menu_info_details, android.R.drawable.ic_menu_edit, android.R.drawable.ic_menu_delete};
 
        // Erstellt den neuen MenuAdapter aus der Klasse MenuListAdapter
        MenuListAdapter mMenuAdapter = new MenuListAdapter(this, drawerTitles, drawerSubtitles, drawerIcons);
        mDrawerList.setAdapter(mMenuAdapter);
        mDrawerList.setOnItemClickListener(new DrawerItemClickListener());
 
        // Bereitet die ActionBar auf den Navigation Drawer vor
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setHomeButtonEnabled(true);
 
        // Fügt den Navigation Drawer zur ActionBar hinzu
        mDrawerToggle = new ActionBarDrawerToggle(this, mDrawerLayout, R.drawable.ic_drawer, R.string.drawer_open, R.string.drawer_close) {
            public void onDrawerClosed(View view) {
                getSupportActionBar().setTitle(mTitle);
                supportInvalidateOptionsMenu();
            }
 
            public void onDrawerOpened(View drawerView) {
                getSupportActionBar().setTitle(R.string.app_name);
                supportInvalidateOptionsMenu();
            }
        };
        mDrawerLayout.setDrawerListener(mDrawerToggle);
    }
 
    // Fügt das Menü hinzu / ActionBar Einträge
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getSupportMenuInflater();
        inflater.inflate(R.menu.main, menu);
        return super.onCreateOptionsMenu(menu);
    }
 
    // Versteckt die ActionBar-Einträge, sobald der Drawer ausgefahren is
    @Override
    public boolean onPrepareOptionsMenu(Menu menu) {
        boolean drawerOpen = mDrawerLayout.isDrawerOpen(mDrawerList);
        menu.findItem(R.id.action_settings).setVisible(!drawerOpen);
        return super.onPrepareOptionsMenu(menu);
    }
 
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Öffnet und schließt den Navigation Drawer bei Klick auf den Titel/das Icon in der ActionBar
        if (item.getItemId() == android.R.id.home) {
            if (mDrawerLayout.isDrawerOpen(mDrawerList)) {
                mDrawerLayout.closeDrawer(mDrawerList);
            } else {
                mDrawerLayout.openDrawer(mDrawerList);
            }
        }
 
        // Gibt den ActionBar-Buttons Funktionen
        switch (item.getItemId()) {
            case R.id.action_settings:
                // Tu' etwas!
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
 
    // Listener für die Navigation Drawer Einträge - Achtung: Zählung beginnt bei 0!
    private class DrawerItemClickListener implements ListView.OnItemClickListener {
        @Override
        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
            if (position == 0) {
                // Aktion
            } else if (position == 1) {
                // Aktion
            } else if (position == 2) {
                // Aktion
            }
 
            mDrawerList.setItemChecked(position, true);
            mTitle = drawerTitles[position];
            getSupportActionBar().setTitle(mTitle);
            mDrawerLayout.closeDrawer(mDrawerList);
        }
    }
 
    @Override
    protected void onPostCreate(Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);
        mDrawerToggle.syncState();
    }
 
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        mDrawerToggle.onConfigurationChanged(newConfig);
    }
}
```
* Nun brauchen Sie noch einige Strings und String-Arrays in Ihrer `strings.xml` Datei und Sie sind fertig. Kopieren Sie dazu einfach diesen Code dort hinein:
```markup
<string name="drawer_open">Open navigation drawer</string>
<string name="drawer_close">Close navigation drawer</string>
 
<string-array name="drawerTitles_array">
    <item>Titel 1</item>
    <item>Toller Titel 2</item>
    <item>Mein dritter Titel</item>
</string-array>
<string-array name="drawerSubtitles_array">
    <item>Untertitel 1</item>
    <item>Toller Untertitel 2</item>
    <item>Mein dritter Untertitel</item>
</string-array>
```
* Starten Sie nun einfach das Projekt und Sie haben den Navigation Drawer erfolgreich implementiert! Ihre App sollte nun ein solches Menü aufweisen, wenn Sie den Titel der ActionBar berühren oder von links nach rechts wischen:
![Navigation Drawer: Beispiel](/images/android-apps-mit-navigation-drawer-programmieren/Resultat.png)
 
Den Download des Projekts finden Sie [hier](/downloads/NavigationDrawer.zip) zur freien Verwendung.
 
## Fazit
Der Navigation Drawer ist eine simple, aber sehr effektive Methode zur Navigation innerhalb Ihrer App - besonders bei der Verwendung von Fragments. Bereits jetzt verwenden viele bekannte Apps diese Möglichkeit der Navigation und begeistern viele Nutzer damit. Wieso nicht auch Sie?