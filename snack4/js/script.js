// alert('Ciao');
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var nomiInvitati = ['Marco', 'Giovanni', 'Gabriella', 'Lucia', 'Giampaolo'];
console.log(nomiInvitati);
var nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);
var invitato = 'Puoi entrare';
var nonInvitato = 'Non puoi entrare';
for (var i = 0; i < nomiInvitati.length; i++) {
  console.log(nomiInvitati[i]);
  if (nomeUtente == nomiInvitati[i]) {
    invitato;
  } else {
    nonInvitato;
  }

};














// var invitati = ['Marco' , 'Luca', 'Claudia', 'Lucia', 'Gabriele'];
// console.log(invitati);
//
// var nomeIvitato = parseInt(prompt('Inserisci il tuo nome'));
// console.log(nomeIvitato);
//
// var invitato = false;
// for (var i = 0; i < invitati.length; i++) {
//   console.log(invitati[i]);
//   if (nomeIvitato == invitati[i]) {
//     invitato = true;
//   }
// }
// console.log(invitato);
// if (invitato==true) {
//   console.log('sei invitato');
// }
// else {
//   console.log('Non sei invitato');
// }

// con il while
  // var i = 0;
  // var invitato = false;
  // var messaggio = 'Non puoi entrare';
  // while (nomeInvitato == false && i < invitati.length){
  //   if (nomeIvitato == invitati[i]){
  //     messaggio = 'Puoi entrare';
  //     invitato = true;
  //   }
  //   i++
  // }
  // document.getElementById('messaggio').innerHTML = messaggio;
