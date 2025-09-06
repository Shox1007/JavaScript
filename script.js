// # Zad. 1
// # Napisz program, który doda do siebie dwie liczby: 12 i 8.
console.log(12 + 8);
// # Zad. 2
// # Oblicz różnicę między liczbą 50 a 23.
console.log(50 - 23);
// # Zad. 3
// # Pomnóż liczbę 7 przez 9 i wypisz wynik.
console.log(7 * 9);
// # Zad.4
// # Podziel liczbę 20 przez 5 i wypisz wynik.
console.log(20 / 5);
// # Zad. 5
// # Przy pomocy ternary operator sprawdź czy liczba -20 jest "dodatnia" lub "ujemna".
console.log(-20 == "-20");
// # Zad. 6
// # Oblicz resztę z dzielenia liczby 29 przez 5.
console.log(29 % 5);
// # Zad. 7
// # Podnieś liczbę 3 do potęgi 4.
console.log(3 ** 4);
// # Zad. 8
// # Sprawdź, czy liczby 10 i 15 są sobie równe.
console.log(10 == 15);
// # Zad.9
// # Sprawdź, czy liczby 20 i 25 są różne.
console.log(20 != 25);
// # Zad. 10
// # Sprawdź, czy liczba 18 jest większa od liczby 12.
console.log(18 > 12);
// # Zad. 11
// # Sprawdź, czy liczba 5 jest mniejsza od liczby 9.
console.log(5 < 9);
// # Zad. 12
// # Sprawdź, czy liczba 15 jest większa lub równa liczbie 15.
console.log(15 >= 15);
// # Zad. 13
// # Sprawdź, czy liczba 8 jest mniejsza lub równa liczbie 10.
console.log(8 <= 10);
// # Zad. 14
// # Sprawdź, czy liczba 5 jest większa od 2 i mniejsza od 10.
console.log(5 > 2 && 5 < 10);
// # Zad. 15
// # Sprawdź, czy liczba 8 jest mniejsza od 5 lub większa od 6.
console.log(8 < 5 || 8 > 6);
// # Zad. 16
// # Sprawdź, czy liczba 3 nie jest większa od 5.
console.log(!(3 > 5));
// # Zad. 17
// # Przy pomocy operatora przypisania, zwiększ wartość liczby 10 o 5.
let a = 10;
a += 5;
console.log(a); 
// # Zad. 18
// # Przy pomocy operatora przypisania, zmniejsz wartość liczby 20 o 7.
let b = 20;
b -= 7;
console.log(b);
// # Zad. 19
// # Połącz dwa napisy: "Cześć, " i "Świecie!".
let first = "Cześć";
let second = "Swiecie"
console.log(first + " " + second);
// # Zad. 20
// const first = 10;
// const array = [20, 30, 40, 50];

// Dla podanych wartośći, przy pomocy operatora rest, stwórz nową zmienną i przypisz do niej
// podane wyżej wartości.
let obj = {a: 10};
let newobj = {...obj, c: 20, r: 30, e: 40, t: 50};
console.log(newobj);
// # Zad. 21
// # Napisz program, który sprawdzi, czy dwie zmienne a i b wskazują na ten sam obiekt.
let z=10;
let x=12;
console.log(z === x);
// # Zad. 22
// # Podstaw wartość domyślną w zmiennej result, jeśli zmienna test jest null lub undefined:

// const test = null;
// const result =............
const test = null;
const result = test ?? "domyslna wartosc";
console.log(result);
// # Zad. 23
// # Przesuń cyfrę 4 o dwa bity w lewo.
const res = 4 << 2;
console.log(res);
// # Zad. 24
// # Przesuń liczbę 16 o jeden bit w prawo.
const bit = 16 >> 1;
console.log(bit);
// # Zad. 25
// # Sprawdź, czy liczba 50 jest równa liczbie 55.
console.log(50 == 55);
// # Zad. 26
// # Sprawdź, czy liczba 51 jest różna od liczby 37.
console.log(51 != 37);