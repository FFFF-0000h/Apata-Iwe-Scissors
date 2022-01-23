function game() {
    const maxGames = 5; // max number of games to play
    let computerstartPt = 0; // start point for the matrix
    let playerstartPt = 0; // start point for player

for (let i = 0; i < maxGames; i++) {
let playerSelection = prompt("Choose your hand: Apata, Iwe, or Scissors").toLowerCase();
function computerPlayer() {
    let ais = ["Apata", "Iwe", "Scissors"];
    let myAis = ais[Math.floor(Math.random() * ais.length)];
    return myAis;
    // Function to randomly generate a hand for the matrix
}
let computerSelection = computerPlayer();
let overallRound = playRound(playerSelection, computerSelection);
if (overallRound === "You Win! Iwe beats Apata") {
    playerstartPt++;
    console.log("You win");
} else if (overallRound === "You Lose! Apata beats Scissors") {
    computerstartPt++;
    console.log("You lose");
} else if (overallRound ===  "You Lose! Scissors beats Iwe") {
    computerstartPt++;
    console.log("You lose");
} else if (overallRound === "You Lose! Iwe beats Apata") {
    computerstartPt++;
    console.log("You Lose");
} else if (overallRound === "Game is Tied") {
    console.log("Tied");
} else if (overallRound === "You Win! Apata beats Scissors") {
    playerstartPt++;
    console.log("You win");
} else if (overallRound === "Game is Tied") {
    console.log("Tied");
} else if (overallRound === "You Win! Scissors beats Iwe") {
    playerstartPt++;
    console.log("You win");
} else {
    console.log("Tied");
} 
    }
     
if (playerstartPt > computerstartPt) {
    console.log("...");
    console.log("....");
    console.log("Congratulations! You beat the Matrix " + playerstartPt + " to " + computerstartPt);
} else {
    console.log("Try again. The Matrix beat you " + computerstartPt + " to " + playerstartPt);
} 
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "apata" && computerSelection == "Iwe") {
        return "You Lose! Iwe beats Apata";
    } else if (playerSelection == "scissors" && computerSelection == "Apata") {
        return "You Lose! Apata beats Scissors";
    } else if (playerSelection == "iwe" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Iwe";
    } else if (playerSelection == "iwe" && computerSelection == "Apata") {
        return "You Win! Iwe beats Apata";
    } else if (playerSelection == "iwe" && computerSelection == "Iwe") {
        return "Game is Tied";
    } else if (playerSelection == "apata" && computerSelection == "Scissors") {
        return "You Win! Apata beats Scissors";
    } else if (playerSelection == "apata" && computerSelection == "Apata") {
        return "Game is Tied";
    } else if (playerSelection == "scissors" && computerSelection == "Iwe") {
        return "You Win! Scissors beats Iwe";
    } else {
        return "Game is Tied";
    }
 }