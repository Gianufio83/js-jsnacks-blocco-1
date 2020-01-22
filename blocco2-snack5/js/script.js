// alert('Ciao');
// Scrivi una funzione per stabilire se un numero è primo.
// Chiedi un numero all’utente e utilizza la funzione per
// comunicargli se il numero inserito è primo oppure no.

var numeroUtente = parseInt(prompt('Inserici un numero'));
console.log(numeroUtente);
var risultato = isPrimeNumber(numeroUtente);
console.log(risultato);

function isPrimeNumber(num){
  if(Math.pow(2, num) % num == 2) {
    alert('Numero primo');
  } else {
    alert('Numero non è primo');
  }
}



// var numeroUtente = parseInt(prompt('Inserici un numero'));
// console.log(numeroUtente);
// var primeNumber = false;
// function isPrimeNumber(number) {
//   if (numeroUtente % 2 != 0) {
//     primeNumber = true;
//     console.log('Numero primo');
//   } else {
//     console.log('Numero non è primo');
//   };
// }
// var numberInsert = isPrimeNumber(numeroUtente);
// console.log(numberInsert);
