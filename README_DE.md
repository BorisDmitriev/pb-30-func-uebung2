# Funktionen Übungen

**1. Summieren.**
Erstelle eine Funktion namens `sumIntFrom1ToN`, die eine ganze Zahl als Argument entgegennimmt. Addiere alle Ganzzahlen von 1 bis zu der Ganzzahl, die du die Funktion übergeben hast. Wenn die Eingabe zum Beispiel 4 ist, sollte deine Funktion 10 zurückgeben, denn 1 + 2 + 3 + 4 = 10.

Beispiele:
* `sumIntFrom1ToN(4)` ➞ 10
* `sumIntFrom1ToN(13)` ➞ 91
* `sumIntFrom1ToN(600)` ➞ 180300

**2. Cubed.**
Erstelle eine Funktion namens `sumOfCubes`, die drei Zahlen entgegennimmt und die Summe ihrer Würfel zurückgibt.

Beispiele:
* `sumOfCubes(1, 5, 9)` ➞ 855 // Da 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* `sumOfCubes(2, 8)` ➞ NaN // falsche Zahlenargumente
* `sumOfCubes()` ➞ NaN

**3. String Check.**
Erstelle eine Funktion namens `isStrStartOfWord`, die 2 Strings als Parameter entgegennimmt, wobei der zweite String ein Wort ist und die Funktion`true` oder `false` zurückgibt, je nachdem, ob das Wort mit dem im ersten Parameter übergebenen String beginnt.


Beispiele:
* `isStrStartOfWord("bu", "button")` ➞ true
* `istStrStartOfWord("tri", "triplet")` ➞ wahr
* `isStrStartOfWord("beau", "pastry")` ➞ false

**4. Kleiner als oder gleich Null?**
Erstelle eine Funktion namens `isLEQZero`, die eine Zahl als einziges Argument nimmt und `true` zurückgibt, wenn sie kleiner oder gleich Null ist, ansonsten `false`.

Beispiele:
* `isLEQZero(3)` ➞ false
* `isLEQZero(0)` ➞ true
* `isLEQZero(-4)` ➞ true
* `istLEQNull(10)` ➞ false

**5. Vorkommen zählen.**
Erstelle eine Funktion namens `countOccurrences`, die zwei Argumente entgegennimmt: eine Zeichenkette und einen Buchstaben. Die Funktion soll die Anzahl der Vorkommen dieses Buchstabens in der Zeichenkette zurückgeben.

Beispiel:
* `countOccurrences("this is a string", "i")` ➞ 3

**6. X hoch X.**
Erstelle eine Funktion namens `calcBaseToExponent`, die eine Basiszahl und eine Exponentenzahl als Parameter nimmt und das Ergebnis zurückgibt. **NB:** Alle Testeingaben sind positive ganze Zahlen.

Beispiele:
* `calcBaseToExponent(5, 3)` ➞ 125
* `calcBaseToExponent(10, 10)` ➞ 10000000000
* `calcBaseToExponent(3, 3)` ➞ 27

**7. Hundejahre.**
Erstelle eine Funktion namens `dogAge`, die berechnet, wie alt ein Hund in Hundejahren ist. Die Funktion sollte ein Argument akzeptieren, das das Alter des Hundes in Menschenjahren angibt. Berechne das Alter des Hundes in Hundejahren, indem du davon ausgehst, dass 1 Menschenjahr = 7 Hundejahre ist. Die Funktion sollte eine Zeichenkette wie im folgenden Beispiel zurückgeben.

Beispiel:
* `dogAge(4)` ➞ "Your doggo is 28 years old in dog years!"

**8. Ein lebenslanger Vorrat...**
Du hast gerade einen lebenslangen Vorrat von deinem Lieblingssnack gewonnen! Die Snackfirma muss ausrechnen, was das bedeutet und wie viel sie dir auf Lebenszeit geben muss.  Erstelle eine Funktion mit dem Namen `calcLifetimeSupply`, die dir hilft, diesen Betrag für dich zu berechnen. Die Funktion sollte zwei Argumente akzeptieren: das aktuelle Alter und den Betrag an Snacks pro Tag. Die Funktion sollte die Menge berechnen, die du für den Rest deines Lebens verbrauchen wirst, wenn du ein konstantes Höchstalter von 100 Jahren annimmst. Die Funktion sollte eine Zeichenkette wie im folgenden Beispiel zurückgeben.

Beispiele:
 * `calcLifetimeSupply(25, 2)` ➞ "The snack company should provide you with 54 units, until you are a ripe old age of 100. Happy snacking!"

* `calcLifetimeSupply(40, 3)` ➞ "The snack company should provide you with 65 units, until you are a ripe old age of 100. Happy snacking!"

**Bonus:**
1) Akzeptiere ein drittes Argument für das Höchstalter (nur für den Fall, dass die Snackfirma eine bestimmte Altersgrenze hat).
2) Akzeptiere Fließkommawerte für die Menge pro Tag und runde das Ergebnis (für den Fall, dass die Snackfirma eine seltsame Durchschnittsberechnung für die Menge pro Tag hat).

* `calcLifetimeSupply(32, 0.58, 65)` ➞ "The snack company should provide you with 6991 units, until you are a ripe old age of 65. Happy snacking!"

**9. Wo ist Waldo?**
Erstelle eine Funktion namens `isWaldoHere`, die eine Zeichenkette annimmt und `true` zurückgibt, wenn Waldo gefunden wurde, und `false`, wenn er nicht da ist.

Beispiele:
* `isWaldoHere("is there a wal here?")` ➞ false
* `isWaldoHere("I found you Waldo!")` ➞ true
* `isWaldoHere(""Wait, don't you mean Wally?")` ➞ false
* `istWaldoHier("waldo is here")` ➞ wahr

**10. Pie.**
Erstelle eine Funktion namens `isEqualSlices`, die feststellt, ob es möglich ist, eine Torte mit diesen drei Parametern gerecht zu teilen oder nicht:

* Gesamtzahl der Scheiben.
* Anzahl der Empfänger.
* Wie viele Scheiben jede Person bekommt. (in dieser Reihenfolge)

Beispiele:
* `isEqualSlices(11, 5, 3)` ➞ false // 5 Personen x je 3 Stück = 15 Stück > 11 Stück

* `isEqualSlices(8, 3, 2)` ➞ true
* `isEqualSlices(8, 3, 3)` ➞ false
* `isEqualSlices(24, 12, 2)` ➞ true

**11. XO**
Erstelle eine Funktion namens `isEqualNumXandOs`, die eine Zeichenkette nimmt, prüft, ob sie die gleiche Anzahl von 'x's und 'o's hat und entweder `true` oder `false` zurückgibt.

Anmerkungen:

* Gibt einen booleschen Wert zurück (`true` oder `false`).
* Die Zeichenkette kann jedes Zeichen enthalten.
* Wenn weder ein x noch ein o in der Zeichenkette enthalten ist, wird `true` zurückgegeben.

Beispiele:
* `isEqualNumXandOs("ooxx")` ➞ true
* `isEqualNumXandOs("xooxx")` ➞ false
* `isEqualNumXandOs("ooxXm")` ➞ true (Groß-/Kleinschreibung wird nicht berücksichtigt)
* `isEqualNumXandOs("zpzpzpp")` ➞ true (liefert true, weil kein x und o)
* `isEqualNumXandOs("zzoo")` ➞ false

**12. isPrime?**
Erstelle eine Funktion namens `isPrime`, die `true` zurückgibt, wenn eine Zahl eine Primzahl ist, und `falsch`, wenn sie es nicht ist. **NB:** Eine Primzahl ist jede positive ganze Zahl *größer als 1*, die *nur durch zwei Teiler gleichmäßig teilbar ist: sich selbst und 1*. Die ersten zehn Primzahlen sind 2, 3, 5, 7, 11, 13, 17, 19, 23 und 29.

Beispiele:
* `istPrime(7)` ➞ wahr
* `isPrime(9)` ➞ falsch
* `isPrime(10)` ➞ falsch

**Viel Glück und viel Spaß :)**
