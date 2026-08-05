const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption, computerResult) {


  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const choicesMsg = document.getElementById("choices-msg");

function showResults(userOption) {
  const computerResult = getRandomComputerResult();
  roundResultsMsg.innerText = getRoundResults(userOption, computerResult);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  choicesMsg.innerHTML = `Player chose: <strong>${userOption} </strong><img class="gif-icon" src="./assets/${userOption.toLowerCase()}.gif" alt="${userOption}" /> 
   Computer chose: <strong>${computerResult} </strong><img class="gif-icon" src="./assets/${computerResult.toLowerCase()}.gif" alt="${computerResult}" />`;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;
    
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
    roundResultsMsg.style.display = "none"
    
    if (playerScore === 3)
    {winnerMsgElement.style.color = "green"}  else {winnerMsgElement.style.color = "red"}
  }
  roundNumber++;
    roundCounterElement.innerText = `Round: ${roundNumber}`;
};

function resetGame() {
  playerScore=0;
  computerScore=0;
  playerScoreSpanElement.innerText=playerScore;
  computerScoreSpanElement.innerText=computerScore;
  resetGameBtn.style.display="none"
  optionsContainer.style.display="block"
  roundResultsMsg.style.display="block"
  winnerMsgElement.innerText=""
  roundResultsMsg.innerText="Waiting for your move."
  choicesMsg.innerText=""
  roundNumber = 0;
  roundCounterElement.innerText = "Round: 0";

}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});


let roundNumber = 0;
const roundCounterElement = document.getElementById("round-counter");

