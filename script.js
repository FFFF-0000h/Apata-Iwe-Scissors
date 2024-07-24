document.addEventListener('DOMContentLoaded', (event) => { // Wait until the DOM is fully loaded before running the script
  let computerStartPt = 0; // start point for the matrix
  let playerStartPt = 0; // start point for player

  const choices = ["apata", "iwe", "scissors"]; // Define the choices for the game
  
  const buttons = document.querySelectorAll('button'); // Select all buttons
  const resultsDiv = document.getElementById('results'); // Select the results div

  // Add event listeners to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => { // Add a click event listener to each button
      if (button.id === 'reset') { // Check if the clicked button is the reset button
        resetGame(); // Call the resetGame function if it is the reset button
      } else {
          const playerSelection = button.id; // Get the player's choice from the button's id
          const computerSelection = computerPlayer(); // Get the computer's random choice
          const overallRound = playRound(playerSelection, computerSelection); // Determine the result of the round
          
          switch (overallRound) { // Update scores based on the round's result
            case "You Win! Iwe beats Apata":
            case "You Win! Apata beats Scissors":
            case "You Win! Scissors beats Iwe":
              playerStartPt++; // Increment player's score
              break;
            case "You Lose! Apata beats Scissors":
            case "You Lose! Scissors beats Iwe":
            case "You Lose! Iwe beats Apata":
              computerStartPt++; // Increment computer's score
              break;
          }

          // Update the results and score in the DOM
          updateResults(playerSelection, computerSelection, overallRound, playerStartPt, computerStartPt);
          
          // Check if either player has won
          if (playerStartPt === 5 || computerStartPt === 5) {
            declareWinner(playerStartPt, computerStartPt); // Declare the winner if a score reaches 5
          }
        }
    });
  });

  // Function to generate a random computer choice
  const computerPlayer = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]; // Select a random choice
    return randomChoice; // Return the computer's choice
  };

  // Function to update the results in the DOM
  const updateResults = (playerSelection, computerSelection, overallRound, playerStartPt, computerStartPt) => {
    resultsDiv.innerHTML = ` <!-- Update the resultsDiv with the current game status -->
      <p>You chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}</p> <!-- Display player's choice -->
      <p>Computer chose: ${computerSelection}</p> <!-- Display computer's choice -->
      <p>${overallRound}</p> <!-- Display round result -->
      <p>Player Score: ${playerStartPt}</p> <!-- Display player's score -->
      <p>Computer Score: ${computerStartPt}</p> <!-- Display computer's score -->
    `;
  };

  // Function to declare the winner and reset the game
  const declareWinner = (playerStartPt, computerStartPt) => {
    if (playerStartPt === 5) { // Check if the player won
      resultsDiv.innerHTML += `<p>Congratulations! You beat the Matrix ${playerStartPt} to ${computerStartPt}</p>`;
    } else { // Check if the computer won
      resultsDiv.innerHTML += `<p>Try again. The Matrix beat you ${computerStartPt} to ${playerStartPt}</p>`;
    }
    // Reset scores
    computerStartPt = 0; // Reset computer's score
    playerStartPt = 0; // Reset player's score
  };

  // Function to reset the game
  const resetGame = () => {
    computerStartPt = 0; // Reset computer's score
    playerStartPt = 0; // Reset player's score
    resultsDiv.innerHTML = ''; // Clear the resultsDiv
  };

  // Function to determine the outcome of a round
  function playRound(playerSelection, computerSelection) {
    // Determine the winner or if the game is tied based on player and computer choices
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