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
    let resultsDiv = document.createElement("div");
    const resultsDivContainer = document.getElementById("results-div");
    resultsDivContainer.appendChild(resultsDiv);

    let humanChoiceText = document.createTextNode(`You played ${humanChoice}.`);
    resultsDiv.appendChild(humanChoiceText);

    let computerChoiceText = document.createTextNode(`The computer plays ${computerChoice}.`);
    resultsDiv.appendChild(computerChoiceText);

    let tieResultText = document.createTextNode("It's a tie.");

    let humanWinText = document.createTextNode(`${humanChoice} beats ${computerChoice}. You win!`);

    let computerWinText = document.createTextNode(`${computerChoice} beats ${humanChoice}. Computer wins!`);

    let scoreText = document.createTextNode(`Current score: Computer: ${computerScore} Player: ${humanScore}`);

    let computerWinnerText = document.createTextNode("The computer has won five matches and is the winner!");

    let humanWinnerText = document.createTextNode("Congratulations! You have won five matches and are the winner!");

    // If it's a tie
    if (humanChoice === computerChoice) {
        resultsDiv.appendChild(tieResultText);
    } 
    // Check for human win scenarios
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.appendChild(humanWinText);
        humanScore++;
    } 
    // Otherwise, the computer wins
    else {
        resultsDiv.appendChild(computerWinText);
        computerScore++;
    }
    
    resultsDiv.appendChild(scoreText);;

}

// TDL: ADD CODE TO ANNOUNCE WINNER WHEN ONE PLAYER REACHES 5 VICTORIES WITH CORRESPONDING MESSAGE

let rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const rockBtnContainer = document.getElementById("button-container");
rockBtnContainer.appendChild(rockBtn);

let paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const paperBtnContainer = document.getElementById("button-container");
paperBtnContainer.appendChild(paperBtn);

let scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
const scissorsBtnContainer = document.getElementById("button-container");
scissorsBtnContainer.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});



// function playGame() {
//     let gameCount = 0;
//     while (gameCount < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         gameCount++;
//     }
//     console.log(`Final score: Computer: ${computerScore} Player: ${humanScore}`);
//     if (computerScore > humanScore) {
//         console.log("The computer is the winner!");
//     } else if (humanScore > computerScore) {
//         console.log("Congratulations! You are the winner!");
//     } else if (humanScore == computerScore) {
//         console.log("The spoils are shared! The match ends in a draw!");
//     }
    
//     }