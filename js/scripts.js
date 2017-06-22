// scripts.js
//zmienne
var a = 1,
	b = 2,
	value = (a * a) + (2 * a * b) - (b * b);

// informacja w konsoli
console.log('Result= ' + value);

//sprawdzanie warunków
if ( value > 0 ) {
    console.log('wynik jest dodatni')
} else if ( value < 0 ){
	console.log('Wynik jest ujemny')
} else {
	console.log('wynik jest równy: \"0\"')
}