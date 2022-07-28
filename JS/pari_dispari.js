let sceltaUtente = prompt("Scegli tra: 'pari' o 'dispari'" );

while (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
    sceltaUtente = prompt("Scelta non corretta. Scegli tra: 'pari' o 'dispari'" );
}

const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

function generazioneNumeroRandom () {
    const numeroRandom = parseInt(Math.floor(Math.random() * 6));
    return numeroRandom;
}

const numeroComputer = generazioneNumeroRandom();
const sommaNumeri = numeroUtente + numeroComputer;

function numeroPariDispari(numero) {
    check = false;
    if(numero % 2 === 0) {
        check = true;
    }
    return check;
}

const controlloSommaNumeri = numeroPariDispari(sommaNumeri);

console.log("La scelta dell'Giocatore è:", sceltaUtente)
console.log("Il numero del giocatore è:", numeroUtente)
console.log("Il numero del Computer è:", numeroComputer)


if ((sceltaUtente === "pari" && controlloSommaNumeri === true) || (sceltaUtente === "dispari" && controlloSommaNumeri === false)) {
    console.log("Il Giocatore ha vinto!")
}
else {
    console.log("Il Computer ha vinto!")
}

