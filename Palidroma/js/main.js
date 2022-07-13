//richiedere l'immissione di una parola

/*
const inserireParola = prompt('Prego, inserire la parola misteriosa');
console.log(inserireParola);

//creare variabili che definiscano la splittazione della parola immessa

let text = inserireParola.split('');
console.log(text);

let alContrario = text.reverse();
console.log(alContrario);

let valid = false;
//creare una funzione con al suo interno un ciclo, cosi facendo scopriremo se la parola immessa è palindroma

function ifPalindromo(poli){
    for(let i = 0; i < text.length; i++){
        if(text[0] === poli[0]){
            valid = true;
            return "E' un palindromo";
        }
    }if(text !== poli){
        valid = false;
        return "Non è un palindromo";
    }
}
//verifico il tutto attraverso la console.
const verifica = ifPalindromo(inserireParola);
console.log(verifica);
*/


let inserireParola = prompt('Prego, inserire la parola misteriosa');
console.log(inserireParola);

inserireParola = inserireParola.replaceAll(' ', '');
inserireParola = inserireParola.toLowerCase();

const parolaGirata = giraParola(inserireParola);
console.log(inserireParola, parolaGirata);

if( inserireParola == parolaGirata){
    alert("E' un palindromo")
}else{
    alert("Non è palindromo")
}



function giraParola(parola){
    //const parolaGirata = parola.split('').reverse().join('');
    let parolaGirata = '';

    for(let i = parola.length - 1; i >= 0; i--){
        parolaGirata += parola[i];
    }
    return parolaGirata;
}



