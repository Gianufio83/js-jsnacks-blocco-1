// alert('Ciao');
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for

var somma = 0;
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt('Inserisci un numero'));
  console.log(numero);
  somma = somma + numero;
}
console.log(somma);

document.getElementById('totale').innerHTML = somma;

// con il while
// var somma = 0;
// var i = 1 ;
// while (i <= 5) {
//   var numero = parseInt(prompt('Inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero;
//   i++;
// }
// console.log(somma);
//
// document.getElementById('totale').innerHTML = somma;








// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci il tuo numero'));
//   console.log(numero);
//   somma = somma + numero;
// }
// console.log(somma);

// con il while

// var somma = 0;
// var i = 0
// while (i < 5) {
//
//   var numero = parseInt(prompt('Inserisci il tuo numero'));
//   console.log(numero);
//   somma = somma + numero;
//   i++;
// }
// console.log(somma);

// var richiesta1 = parseInt(prompt('Inserisci il primo numero'));
// console.log(richiesta1);
// var richiesta2 = parseInt(prompt('Inserisci il secondo numero'));
// console.log(richiesta2);
// var richiesta3 = parseInt(prompt('Inserisci il terzo numero'));
// console.log(richiesta3);
// var richiesta4 = parseInt(prompt('Inserisci il quarto numero'));
// console.log(richiesta4);
// var richiesta5 = parseInt(prompt('Inserisci il quinto numero'));
// console.log(richiesta5);
//
// var totale = richiesta1 + richiesta2 + richiesta3 + richiesta4 + richiesta5;
// console.log(totale);
//
// for (var i = 0; i < 6; i++) {
//   richiesta [i];
// }
