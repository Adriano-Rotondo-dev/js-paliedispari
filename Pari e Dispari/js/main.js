// TODO L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//* chiedo all'utente di scegliere Pari o Dispari con un prompt e salvo il tutto nel let userChoice, che stampo in console
let userChoice = prompt("Seleziona Pari o Dispari");
userChoice = userChoice.toLowerCase(); // converte in minuscolo per evitare errori futuri di battitura
console.log(userChoice);

//*chiedo all'utente di scegliere un numero da 1 a 5 con un prompt e salvo il tutto nel let userNumber, che stampo in console
let userNumber = Number(prompt("Inserisci un numero intero da 1 a 5"));
console.log(userNumber);
// * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function botRNG() {
  let rng = Math.floor(Math.random() * 5) + 1;
  console.log(rng);
  return rng;
}
let botNumber = botRNG(); // salvo la funzione in una variabile

// * Sommiamo i due numeri
// * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// * Dichiariamo chi ha vinto.

let somma = userNumber + botNumber; // salvo la somma dei numeri in una variabile
console.log("La somma è " + somma); // stampo la somma in console
if (userChoice === "pari" && somma % 2 === 0) {
  alert("La somma " + somma + " è pari! Hai vinto");
  console.log("Hai vinto");
} else if (userChoice === "dispari" && somma % 2 === 1) {
  alert("La somma " + somma + " è dispari! Hai vinto");
  console.log("Hai vinto");
} else if (userChoice === "dispari" && somma % 2 === 0) {
  alert("La somma " + somma + " è pari! Hai perso");
  console.log("Hai perso");
} else if (userChoice === "pari" && somma % 2 === 1) {
  alert("La somma " + somma + " è dispari! Hai perso");
  console.log("Hai perso");
}
else console.log ("Errore!") 
alert("Hai sbagliato qualcosa! Ricarica la pagina e riprova!") 
