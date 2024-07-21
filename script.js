function game() {
    const maxGames = 5; // max number of games to play
    let computerStartPt = 0; // start point for the matrix
    let playerStartPt = 0; // start point for player
  
    const choices = ["apata", "iwe", "scissors"];
    
    for (let i = 0; i < maxGames; i++) {
      const playerSelection = prompt("Choose your hand: Apata, Iwe, or Scissors");
      
      if (playerSelection === null) {
        console.log("Game cancelled by user.");
        break;
      }
      
      const playerSelectionLower = playerSelection.toLowerCase();
  
      const computerPlayer = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
      };
  
      const computerSelection = computerPlayer();
      const overallRound = playRound(playerSelectionLower, computerSelection);
  
      switch (overallRound) {
        case "You Win! Iwe beats Apata":
        case "You Win! Apata beats Scissors":
        case "You Win! Scissors beats Iwe":
          playerStartPt++;
          console.log("You win");
          break;
        case "You Lose! Apata beats Scissors":
        case "You Lose! Scissors beats Iwe":
        case "You Lose! Iwe beats Apata":
          computerStartPt++;
          console.log("You lose");
          break;
        case "Game is Tied":
        default:
          console.log("Tied");
          break;
      }
    }
  
    if (playerStartPt > computerStartPt) {
      console.log("...");
      console.log("....");
      console.log(`Congratulations! You beat the Matrix ${playerStartPt} to ${computerStartPt}`);
    } else if (computerStartPt > playerStartPt) {
      console.log(`Try again. The Matrix beat you ${computerStartPt} to ${playerStartPt}`);
    } else {
      console.log(`It's a tie. ${computerStartPt} to ${playerStartPt}`);
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "apata" && computerSelection === "iwe") {
      return "You Lose! Iwe beats Apata";
    } else if (playerSelection === "scissors" && computerSelection === "apata") {
      return "You Lose! Apata beats Scissors";
    } else if (playerSelection === "iwe" && computerSelection === "scissors") {
      return "You Lose! Scissors beats Iwe";
    } else if (playerSelection === "iwe" && computerSelection === "apata") {
      return "You Win! Iwe beats Apata";
    } else if (playerSelection === "iwe" && computerSelection === "iwe") {
      return "Game is Tied";
    } else if (playerSelection === "apata" && computerSelection === "scissors") {
      return "You Win! Apata beats Scissors";
    } else if (playerSelection === "apata" && computerSelection === "apata") {
      return "Game is Tied";
    } else if (playerSelection === "scissors" && computerSelection === "iwe") {
      return "You Win! Scissors beats Iwe";
    } else {
      return "Game is Tied";
    }
  }
  