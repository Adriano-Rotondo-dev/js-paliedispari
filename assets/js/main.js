// TODO: creo un prompt per chiedere all'utente di inserire una parola

let userWord = prompt("Scrivi una parola")
//* stampo la parola inserita in console
console.log(userWord)

//TODO: creo una funzione che verifichi se la parola inserita è palindroma
//* creo una funzione che legga al contrario la parola inserita , la salvo in una variabile e stampo in console il risultato
function palindroma() {   
    let reverseWord = "";
    for (let i= userWord.length - 1; i >= 0; i --) {
        const thisLetter = userWord[i];
        console.log (thisLetter);
        reverseWord = reverseWord + userWord[i];
    }
    return reverseWord
}
let palindromaCheck = palindroma()
console.log(palindroma(userWord))

if(userWord === palindromaCheck) {
    alert("La parola " + userWord + " è palindroma.")
} else {
    alert("La parola " + userWord + " non è palindroma.")
}
