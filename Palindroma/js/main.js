// TODO: creo un prompt per chiedere all'utente di inserire una parola

let userWord = prompt("Scrivi una parola");
//* stampo la parola inserita in console
console.log(userWord);

//TODO: creo una funzione che verifichi se la parola inserita è palindroma
//* creo una funzione che legga al contrario la parola inserita , la salvo in una variabile e stampo in console il risultato
function palindroma() {
  let reverseWord = "";
  for (let i = userWord.length - 1; i >= 0; i--) {
    //ciclo all'interno della parola al contrario
    const thisLetter = userWord[i];
    console.log(thisLetter); // stampo le lettere ciclate
    reverseWord = reverseWord + userWord[i]; //unisco le lettere ciclate nella variabile reverseWord
  }
  return reverseWord;
}
let palindromaCheck = palindroma(); //salvo la funzione in una variabile da richiamare
console.log(palindroma(userWord)); // stampo la funzione applicata al prompt iniziale

if (userWord === palindromaCheck) {
  //messaggio di alert una volta applicata la funzione
  alert("La parola " + userWord + " è palindroma.");
} else {
  alert("La parola " + userWord + " non è palindroma.");
}
