const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter 'rock', 'paper' or 'scissors' as your move.").toLowerCase();
    while (options.includes(choice) != true) {
        choice = prompt("Please enter 'rock', 'paper' or 'scissors' as your move.").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${computerChoice} beats ${humanChoice}.`)
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${humanChoice} beats ${computerChoice}.`)
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${computerChoice} beats ${humanChoice}.`)
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${humanChoice} beats ${computerChoice}.`)
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${computerChoice} beats ${humanChoice}.`)
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log(`${humanChoice} beats ${computerChoice}.`)
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log(`The computer plays ${computerChoice}.`)
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    }
    }


function playGame() {
    let gameCount = 0;
    while (gameCount != 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameCount++;
    }
    console.log(`Final score: Computer: ${computerScore} Player: ${humanScore}`);
    if (computerScore > humanScore) {
        console.log("The computer is the winner!");
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    } else if (humanScore == computerScore) {
        console.log("The spoils are shared! The match ends in a draw!");
    }
    
    }

