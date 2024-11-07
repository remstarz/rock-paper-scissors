// Select DOM elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const scoreDiv = document.createElement('div');
document.body.appendChild(scoreDiv);

// Initialize scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        resultDiv.innerText = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    
    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDiv.innerText = `Score - You: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry! The computer won the game.");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    resultDiv.innerText = "New game started! Make your choice.";
}

// Attach event listeners to buttons
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Initialize display
updateScore();
resultDiv.innerText = "Choose Rock, Paper, or Scissors to start playing!";
