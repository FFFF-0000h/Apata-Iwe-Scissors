function computerPlayer() {
    let ais = ["Apata", "Iwe", "Scissors"];
    let myAis = ais[Math.floor(Math.random() * ais.length)];
    return myAis;
}

function game() {
    const maxGames = 5;
    let computerstartPt = 0;
    let playerstartPt = 0;

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

    let overallRound = playRound(playerSelection, computerSelection);
    if (overallRound === )
}

let playerSelection = prompt("Choose your hand: Apata, Iwe, or Scissors").toLowerCase();
let computerSelection = computerPlayer();