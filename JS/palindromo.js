let parolaUtente = prompt("Inserisci una parola");

let arrayParolaUtente = []
arrayParolaUtente = parolaUtente;

function arrayInvertito(parola) {    

    let arrayParolaInvertita = [];    

    // ciclo for per invertire gli indici dell'array "arrayParolaInvertita"
    for(i = parola.length - 1; i >= 0; i--) {
        arrayParolaInvertita.push(parola[i]);
    }

    // conversione dell'array "arrayParolaInvertita" in stringa
    let parolaInvertita = arrayParolaInvertita.join('');

    // return della stringa "parolaInvertita"
    return parolaInvertita;
}

let parolaInvertita = arrayInvertito(parolaUtente);

if (parolaUtente === parolaInvertita) {
        console.log("La parola è palindroma");
    }
    else {
        console.log("La parola non è palindroma");
    }  
