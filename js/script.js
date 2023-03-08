// INSTRUCTIONS 
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Calcolare il prezzo totale del viaggio, secondo queste regole:
    // 1. Il prezzo del biglietto è definito in base ai km (0.21 € al km).
    // 2. Va applicato uno sconto del 20% per i minorenni. 
    // 3. Va applicato uno sconto del 40% per gli over 65.

//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// LOGIC
// Input km and age of passenger
const kmNumber = prompt('Inserire il numero di Km che si vuole percorrere');
const ageNumber = prompt('Inserire l\'età del passeggero');
console.log(ageNumber, kmNumber);

// Calculating travelPrice
const unitPrice = 0.21;
let travelPrice = (unitPrice * kmNumber)
console.log(travelPrice);

// Calculating discount and lastPrice
if (ageNumber < 18){
    const discount = (travelPrice * 20 / 100);
    const lastPrice = (travelPrice - discount).toFixed(2); 
    console.log(lastPrice);
    // Show finalPrice on HTML
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è di € ${lastPrice}`;
}
else if (ageNumber > 65){
    const discount = (travelPrice * 40 / 100);
    const lastPrice = (travelPrice - discount).toFixed(2);
    console.log(lastPrice);
    // Show finalPrice on HTML
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è di € ${lastPrice}`;
} 
else {
    lastPrice = travelPrice.toFixed(2);
    console.log(lastPrice);
    // Show finalPrice on HTML
    document.getElementById("price").innerHTML = `Il prezzo del biglietto è di € ${lastPrice}`;
}

