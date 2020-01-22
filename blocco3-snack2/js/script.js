// alert('Ciao');
// data una stringa controlliamo che un'altra stringa sia presente al suo interno
var stringa = 'Oggi è una giornata molto ventosa';
console.log(stringa);
var stringa2 = "Oggi"
console.log(stringa2);
var check = stringa.includes(stringa2);
console.log(check);
if(check == true) {
  alert('hai vinto');
} else {
  alert('hai perso');
}
