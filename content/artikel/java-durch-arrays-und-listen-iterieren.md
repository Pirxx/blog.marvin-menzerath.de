+++
title       = "Schnell durch Arrays und Listen iterieren"
description = "Oft muss man durch Arrays und Listen (ArrayLists) iterieren. Dies ist schon mit wenig Aufwand in einer einfachen foreach-Schleife möglich."
date        = "2014-01-06T14:45:00"
tag         = ["Java"]
+++

Oft muss man als Programmierer durch Arrays und Listen (ArrayLists) iterieren. Dank einem kleinen Trick ist dies mit wenig Aufwand in einer einfachen foreach-Schleife möglich.

<!--more-->

## Durch Arrays iterieren
Um durch ein Array zu iterieren nutzen Sie einfach die folgende Schreibweise für eine `foreach`-Schleife:
```java
String[] myArray = new String[]{"Hallo", "ich", "bin", "ein", "Array"};
 
for (String s : myArray) {
    System.out.println(s);
}
```

Somit sparen Sie sich folgende `for`-Schleife zum Durchlaufen des Arrays:
```java
String[] myArray = new String[]{"Hallo", "ich", "bin", "ein", "Array"};
 
for (int i = 0; i < myArray.length; i++) {
    System.out.println(myArray[i]);
}
```

Die Ausgabe ist aber immer die gleiche: Jeder Eintrag des Arrays (beginnend bei Eintrag 0) wird auf der Konsole angezeigt:
```
Hallo
ich
bin
ein
Test
```

## Durch Listen iterieren
Bei Listen (ArrayList) ist die Vorgehensweise die gleiche. Iterieren Sie einfach mit einer `foreach`-Schleife über alle Einträge in der Liste:
```java
ArrayList<String> myList = new ArrayList<>();
myList.add("Hallo");
myList.add("ich");
myList.add("bin");
myList.add("eine");
myList.add("Liste");
 
for (String s : myList) {
    System.out.println(s);
}
```

Auch hier ist die Ausgabe auf der Konsole wieder wie erwartet:
```
Hallo
ich
bin
eine
Liste
```

## Fazit
Durch die Ersetzung der `for`-Schleifen mit `foreach`-Schleifen verhindern Sie `NullPointerExceptions` bei Arrays und können schnell und einfach ganze Arrays und Listen durchlaufen.