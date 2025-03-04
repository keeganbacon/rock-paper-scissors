let playerScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
  updateScore();
  document
    .getElementById("restartButton")
    .addEventListener("click", restartGame);
  console.log("Welcome to Rock Paper Scissors! Click the buttons to play.");
});

function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    console.log("You win!");
  } else {
    computerScore++;
    console.log("You lose!");
  }
  updateScore();
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  console.log("Game restarted and score reset!");
}
