/*

Mail

Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per 
controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

function control(){

   let inputEmail = document.getElementById('inputEmail');

   let valueEmail = inputEmail.value;

   let email = [
            'alessiacarrera@gmail.com', 
            'federicosimone@gmail.com', 
            'martinacarrera@gmail.com'
        ];
   for (let i = 0; i < email.length; i++) {
    if (valueEmail == email[i]){
        console.log('Email non presente');
    }else {
        console.log('Email presente');
    }
   }
}


