console.log("Hello, World!")
/* psuedocode 
1.
2.
3.
4.
5.
*/


function getComputerChoice() {
    // Generate a random number between 0 and 1, then multiply by 3 to get a range from 0 to <3
    let randomNumber = Math.floor(Math.random() * 3);
    
    // Conditionally return one of the choices based on the random number
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    // Prompt the user to enter "rock", "paper", or "scissors"
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();

    // Check if the choice is valid
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice, please try again.");
        return getHumanChoice(); // Re-run function if input is invalid
    }
}

// Test the function
//console.log(getHumanChoice());

// Global scope variables to keep track of scores
let humanScore = 0;   // Initialize human player's score to 0
let computerScore = 0; // Initialize computer's score to 0


function playRound(humanChoice, computerChoice) {
    // Make the humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Compare choices and determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
    }

    // Log the current scores
    console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}
function playGame() {
    // Declare score variables inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Define the playRound function inside playGame
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`);
        }

        // Log the current scores
        console.log(`Score: You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declare the overall winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner.");
    } else {
        console.log("The game ends in a tie!");
    }
}

// Call the playGame function to start the game
playGame();
