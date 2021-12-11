// Scrivi un programma che stampi in console i numeri da 1 a 100.

// 1. FISSO DICHIARAZIONE COSTANTE PER COLLEGAMENTO TRA JS E HTML
const boxes = document.querySelector('.container-box');


// 2. CREO COSTANTE X
// let x = 1;

// 3. CREO CONTATORE CHE INCREMENTA FINCHE' NON RAGGIUNGE 100 (LIMITE PREDEFINITO)
// 4. STAMPO IN CONSOLE I NUMERI DA 1 A 100

// for (let x = 1; x <= 100; x++) {
//     console.log(x);
// }

// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        // multiplo di 3 e 5 
        console.log('FizzBuzz');  
    }
    else if (x % 3 === 0) {
        // multiplo di 3
        console.log('Fizz');  
    }  
    else if (x % 5 === 0)  {
        // multiplo di 5
        console.log('Buzz'); 
    }
    else{
        // se tutte le altre condizioni sono false, stampa in console il numero corrispondente
        console.log(x);
    }

}

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, 
// per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.