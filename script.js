const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter 'rock', 'paper' or 'scissors' as your move.").toLowerCase();
    
    // Reprompt until a valid choice is made
    while (!options.includes(choice)) {
        choice = prompt("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.").toLowerCase();
    }
    
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`The computer plays ${computerChoice}.`);
    
    // If it's a tie
    if (humanChoice === computerChoice) {
        console.log("It's a tie.");
    } 
    // Check for human win scenarios
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        humanScore++;
    } 
    // Otherwise, the computer wins
    else {
        console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
        computerScore++;
    }
    
    console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
}

function playGame() {
    let rounds = 5;
    
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    console.log(`Final score: Computer: ${computerScore} Player: ${humanScore}`);
    
    if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else {
        console.log("The match ends in a draw!");
    }
}