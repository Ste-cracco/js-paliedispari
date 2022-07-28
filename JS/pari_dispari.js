// let sceltaUtente = prompt("Scegli tra: 'pari' o 'dispari'" );

// sceltaUtente = true;

// if (sceltaUtente !== "pari" || sceltaUtente !== "dispari") {
//     sceltaUtente = false;
//     console.log ("Devi inserire solo la parola 'pari' o 'dispari' ")
// }

// const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// function generazioneNumeroRandom () {
//     const numeroRandom = parseInt(Math.floor(Math.random() * 6));
//     return numeroRandom;
// }

// const numeroComputer = generazioneNumeroRandom();
// const sommaNumeri = numeroUtente + numeroComputer;

function numeroPariDispari(numero) {
    numero = false;
    if(numero % 2 === 0) {
        numero = true;
    }
    return numero;
}

let ciao = numeroPariDispari(3)
console.log(ciao)

