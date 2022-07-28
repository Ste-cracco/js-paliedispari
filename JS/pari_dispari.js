let sceltaUtente = prompt("Scegli tra: 'pari' o 'dispari'" );

sceltaUtente = true;

if (sceltaUtente !== "pari" || sceltaUtente !== "dispari") {
    sceltaUtente = false;
    console.log ("Devi inserire solo la parola 'pari' o 'dispari' ")
}

const numeroUtente = prompt("Inserisci un numero da 1 a 5");

function generazioneNumeroRandom () {
    const numeroRandom = Math.floor(Math.random() * 6);
    return numeroRandom;
}

const numeroComputer = generazioneNumeroRandom();


