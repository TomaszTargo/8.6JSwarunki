// scripts.js
//zmienne
var a = -3,
	b = 5,
	value = (a * a) + (2 * a * b) - (b * b);

// informacja w konsoli
console.log('Result= ' + value);

// sprawdzanie czy dodatni, czy ujemny
var plusOrMinus = value > 0 ? 'wynik jest dodatni' : 'Wynik jest ujemny';
console.log(plusOrMinus);

//sprawdzanie czy równy 0
if ( value == 0 ) {
    console.log('wynik jest równy: \"0\"')
} else {
	console.log('wynik jest różny od: \"0\"')
}