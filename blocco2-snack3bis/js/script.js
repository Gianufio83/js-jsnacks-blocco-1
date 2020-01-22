// alert('Ciao');
// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

var numeri = [2, 3, 4, 8];
var risultato = number(numeri);
console.log(risultato);
function number(numeri) {
  var somma = 0;
  for (var i = 0; i < numeri.length; i++){
    if (i % 2 == 0) {
      somma = somma + numeri[i];
    }
    return somma;
  }
};














// var numeri = getRandomInt(1, 20);
// console.log(numeri);
// var array = [numeri];
//
// for (var i = 0; i < numeri.length; i++) {
//   console.log(numeri);
//   var array = [];
//   array.push(numeri[i]);
// };


// if (numeri % 2 = 0) {
//   array.push(numeri);
// };
// console.log(array);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// };
// var array = [ 2, 4, 6, 8,];
