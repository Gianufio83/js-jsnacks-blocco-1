// alert('Ciao');
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parolaUno = prompt('inserisci la prima parola');
console.log(parolaUno);
var parolaDue = prompt('inserisci la seconda parola');
console.log(parolaDue);


if (parolaUno.length == parolaDue.length) {
  alert('Parole con la stessa lunghezza');
}
else if (parolaUno.length > parolaDue.length) {
  console.log(parolaDue + '' + parolaUno);
}
else {
  console.log(parolaUno + '' + parolaDue);
}









// var parolaUno = prompt('Inserisci prima parola');
// var parolaDue = prompt('Inserisci seconda parola');
// console.log(parolaUno);
// console.log(parolaDue);
//
//
// if(parolaUno.length == parolaDue.length) {
//   alert('Hai inserito parole con la stessa lunghezza');
// }
// else if (parolaUno.length > parolaDue.length){
//   console.log('parolaDue' + '' + 'parolaUno');
// }
// else {
//   console.log('parolaUno' + '' + 'parolaDue');
// }
