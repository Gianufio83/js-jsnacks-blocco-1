// alert('Ciao');
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var arrayNumeri = [];
console.log(arrayNumeri);
for (var i = 1; i <= 6; i++) {
  var numeroUtente = parseInt(prompt('Inserisci un numero'));
  console.log(numeroUtente);
  // se non è un numero glielo richiedo
  // while (isNan(numeroUtente)) {
  //   numeroUtente = parseInt(prompt('Inserisci un numero e non altro'));
  // }
  if (numeroUtente % 2 != 0){
    arrayNumeri.push(numeroUtente);
  }
}
console.log(arrayNumeri);

// var arrayNumeri = [];
// for (var i = 0; i <= 6; i++) {
//   var numeroUtente = parseInt(prompt('Inserisci un numero'));
//   console.log(numeroUtente);
//   // se non è un numero glielo richiedo
//   while (isNan(numeroUtente)){
//     numeroUtente = parseInt(prompt('Non hai inserito un numero'));
//   }
//   if (numeroUtente % 2 != 0) {
//     console.log('dispari', numeroUtente);
//     arrayNumeri.push(numeroUtente)
//   }
// }
// console.log(arrayNumeri);

// con il while
// var arrayNumeri = [];
// var i = 0;
// while (i < 6) {
//   var numeroUtente = parseInt(prompt('Inserisci un numero'));
//   console.log(numeroUtente);
//   if (numeroUtente % 2 !=0) {
//     console.log('dispari', numeroUtente);
//     arrayNumeri.push(numeroUtente)
//   }
//   i++;
// }
// console.log(arrayNumeri);
