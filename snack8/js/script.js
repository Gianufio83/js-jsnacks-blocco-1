// alert('Ciao');
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
// var numero = prompt('Inserisci un numero di quattro cifre');
// console.log(numero);
// var somma = 0;
// for (var i = 0; i < numero.length; i++) {
//   console.log(parseInt(numero[i]));
//   somma = somma + parseInt(numero[i]);
// }
// console.log(somma);

var numeroUtente = prompt('Inserisci un nuero di quattro cifre');
var numeroUtenteArray = [];
numeroUtenteArray = numeroUtente.split('');
console.log(numeroUtenteArray);
var somma = 0;
for (var i = 0; i < numeroUtenteArray.length; i++) {
  somma = somma + parseInt(numeroUtenteArray[i]);
}
console.log(somma);
