let coinFlip = Math.round(Math.random());                    //Initialize a random number for the coin flip
let headOrTails = prompt("Heads or Tails?").toLowerCase();   //User is prompted to select heads or tails

if (coinFlip < 30) { //If the random number is less then 30, then it's heads
    if (headOrTails === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else { //If the random number is greater than or equal to 30, then it's tails
    if (headOrTails === "tails") {
        alert("The flip was tails and you chose tails...you win!");
    } else {
        alert("The flip was tails but you chose heads...you lose!");
    }
}