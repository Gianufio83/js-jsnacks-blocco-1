// alert('Ciao');
// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.



var n = parseInt(prompt('Inserisci un numero'));
console.log(n);
for (var i = 1; i <= n; i++) {
  console.log(Math.pow(i, 3));
  var cubo = document.getElementById('numeri').innerHTML;
  document.getElementById('numeri').innerHTML = cubo + Math.pow(i, 3);

}

document.getElementById('numeri').innerHTML = cubo + Math.pow(i, 3);

//  con il while

// var n = parseInt(prompt('Inserisci un numero'));
// console.log(n);
// var i = 1 ;
// while (i <= n) {
//   console.log(Math.pow(i, 3));
//   i++;
// }









// var n = parseInt(prompt('inserisci un numero'));
// for (var i = 1; i <=n; i++) {
//   console.log(Math.pow(i, 3));
// }
