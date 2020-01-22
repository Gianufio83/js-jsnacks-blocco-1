// alert('Ciao');
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.
var elementOne = ['Pippo', 'Pluto', 'Paperino'];
console.log(elementOne.length);
var elementTwo = ['Matteo', 'Marco', 'Gabriele','Claudia'];
console.log(elementTwo.length);

var arreyMax;
var arreyMin;
if (elementOne.length == elementTwo.lenght) {
  console.log('Le Lunghezze sono uguali');
} else if (elementOne.length > elementTwo.lenght){
  arreyMax = elementOne;
  arreyMin = elementTwo;
} else if (elementOne.length < elementTwo.lenght) {
  arreyMax = elementTwo;
  arreyMin = elementOne;
}
var sottrazione = arreyMax.lenght - arreyMin.lenght;
var i = 0;
while (i < sottrazione) {
  arreyMin.push('Sebastaiano');
  console.log(elementOne);
  i++;
}
