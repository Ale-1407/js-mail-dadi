/*

Mail

Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per 
controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo.

*/

let inputEmail = document.getElementById('inputEmail');
let email = [
            'alessiacarrera@gmail.com', 
            'federicosimone@gmail.com', 
            'martinacarrera@gmail.com'
        ];
let emailpresente = false;

function control(){

   let valueEmail = inputEmail.value;

    for ( i = 0; i < email.length; i++){

        let thisEmail = email[i];

        if (valueEmail == thisEmail){
            emailpresente = true;
        }
    }

    if (emailpresente == true){
        document.getElementById('result').innerHTML = `Hai effettuato l'accesso!`
    } else{
        document.getElementById('result').innerHTML = `Ti sei registrato!`
    }
}


/*
 Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
  - scrivere quante partite ha vinto il giocatore
  - scrivere quante partite ha vinto il computer

 */

let inputUser = document.getElementById('inputUser');
let inputComputer = document.getElementById('inputComputer');
  
function genera(){

    




  }