// alert('Ciao');
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

var listaNomi = ['Marco', 'Luca', 'Gabriele', 'Alberto'];
console.log(listaNomi);
var listaCognomi = ['Rossi', 'Bianchi','Verdi', 'Neri'];
console.log(listaCognomi);

var listaNomiCognomi =[];

for (var i = 0; i < listaNomi.length; i++) {
  var listaNomiCognomi = listaNomi[Math.floor(Math.random() * listaNomi.length)] + listaCognomi[Math.floor(Math.random() * listaNomi.length)];
}
console.log(listaNomiCognomi);
