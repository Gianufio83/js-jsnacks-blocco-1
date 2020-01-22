// alert('Ciao');
// scrivete una funzione che genera array di numeri random diversi, dato il numero di elementi richiesto

var richiesta = prompt('Invividua tre numeri');
console.log(richiesta);
var numeriGenerati = [];
while (numeriGenerati.length < 3) {
  var genera = getRandomIntInclusive(1, 100);
  if (numeriGenerati.includes(genera) == false) {
  numeriGenerati.push(genera);
  }
}
console.log(numeriGenerati);
alert(numeriGenerati);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
