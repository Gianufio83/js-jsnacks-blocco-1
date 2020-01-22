// alert('Ciao');
// Dare la possibilità di inserire due parole. Verificare tramite
// una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe
// altrimenti stampare la più lunga delle due.
var parolaUno = prompt('Inserisci la prima parola');
console.log(parolaUno);
var parolaDue = prompt('inserisci la seconda parola');
console.log(parolaDue);
var risultato = longerWord(parolaUno, parolaDue);
console.log(risultato);

// if (parolaUno.length == parolaDue.length) {
//   console.log('hanno la stessa lunghezza');
// } else if ( parolaUno.length > parolaDue.length){
//   console.log(parolaUno);
// } else {
//   console.log(parolaDue);
// }


function longerWord(parola1, parola2) {
  var stampaparola = '';
  if (parola1.length == parola1.length) {
    stampaParola = (parola1 + ''+ parola2);
  } else if (parola1.length > parola2.length){
    stampaParola = (parola1);
  } else {
    stampaParola = (parola1);
  }
    return stampaParola;
}
