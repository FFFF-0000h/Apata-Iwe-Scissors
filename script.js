document.addEventListener('DOMContentLoaded', (event) => {
  let computerStartPt = 0; // start point for the matrix
  let playerStartPt = 0; // start point for player

  const choices = ["apata", "iwe", "scissors"];
  
  const buttons = document.querySelectorAll('button'); // Select all buttons
  const resultsDiv = document.getElementById('results'); // Select the results div

  // Add event listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerSelection = button.id; // Get the player's choice from the button's id
      const computerSelection = computerPlayer();
      const overallRound = playRound(playerSelection, computerSelection);
      
      switch (overallRound) {
        case "You Win! Iwe beats Apata":
        case "You Win! Apata beats Scissors":
        case "You Win! Scissors beats Iwe":
          playerStartPt++;
          break;
        case "You Lose! Apata beats Scissors":
        case "You Lose! Scissors beats Iwe":
        case "You Lose! Iwe beats Apata":
          computerStartPt++;
          break;
      }

      // Update the results and score
      updateResults(playerSelection, computerSelection, overallRound, playerStartPt, computerStartPt);
      
      // Check if either player has won
      if (playerStartPt === 5 || computerStartPt === 5) {
        declareWinner(playerStartPt, computerStartPt);
      }
    });
  });

  // Function to generate a random computer choice
  const computerPlayer = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
  };

  // Function to update the results in the DOM
  const updateResults = (playerSelection, computerSelection, overallRound, playerStartPt, computerStartPt) => {
    resultsDiv.innerHTML = `
      <p>You chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}</p>
      <p>Computer chose: ${computerSelection}</p>
      <p>${overallRound}</p>
      <p>Player Score: ${playerStartPt}</p>
      <p>Computer Score: ${computerStartPt}</p>
    `;
  };

  // Function to declare the winner and reset the game
  const declareWinner = (playerStartPt, computerStartPt) => {
    if (playerStartPt === 5) {
      resultsDiv.innerHTML += `<p>Congratulations! You beat the Matrix ${playerStartPt} to ${computerStartPt}</p>`;
    } else {
      resultsDiv.innerHTML += `<p>Try again. The Matrix beat you ${computerStartPt} to ${playerStartPt}</p>`;
    }
    // Reset scores
    computerStartPt = 0;
    playerStartPt = 0;
  };

  // Function to determine the outcome of a round
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
});