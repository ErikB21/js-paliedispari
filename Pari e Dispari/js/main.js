//L'utente dovrà scegliere se pari o dispari
const sceltaUtente = prompt("Salve, prego scelga tra pari e dispari"); 
console.log(sceltaUtente);
//L'utente dovrà scegliere un numero compreso tra 1 e 5
const numeroUtente = parseInt(prompt("scelga un numero da 1 a 5"));
console.log(numeroUtente);
//Tramite funzione generiamo un numero random per il computer

let numeroComputer = 0;

function numeroRandomCom(min, max){
    const range = max - min + 1;
    const randomCom = Math.floor(Math.random() * range) + min;
    
    return randomCom;
}

let numeroRandom = numeroRandomCom(1, 5);
alert('Il numero estratto per il pc è: ' + numeroRandom);

//Sommare i numeroUtente con numeroRandom

let somma = 0;
somma += numeroUtente + numeroRandom
 alert('La somma data dai due numeri è: ' + somma);

 //definire se la somma è pari o dispari

 function pariOppureDispari (somma){
    if(somma % 2 == 0){
        return 'pari';
    }else{
        return 'dispari';
    }
 }

 const chiVince = pariOppureDispari(somma);
 alert('La somma è: ' + chiVince);

//stabilire il vincitore

if (sceltaUtente == chiVince){
    alert('Bravo, hai vinto!')
}else{
    alert('Peccato, prova di nuovo!')
}

/* 
const sceltaUtente = prompt("Salve, prego scelga tra pari e dispari"); 
const numeroUtente = parseInt(prompt("scelga un numero da 1 a 5"));
const numeroRandom = numeroRandomCom(1, 5);
const sommaNumeri = numeroRandom + numeroUtente;
const risultatoPariODispari = pariOppureDispari(sommaNumeri);

if (sceltaUtente == risultatoPariODispari){
    alert('Bravo, hai vinto!')
}else{
    alert('Peccato, prova di nuovo!')
}


function pariOppureDispari (somma){
    if(somma % 2 == 0){
        return 'pari';
    }else{
        return 'dispari';
    }
}

function numeroRandomCom(min, max){
    const range = max - min + 1;
    const randomCom = Math.floor(Math.random() * range) + min;
    
    return randomCom;
}

*/
