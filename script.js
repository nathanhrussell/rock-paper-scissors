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

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(humanChoice, computerChoice) {
    let resultsDiv = document.createElement("div");
    const resultsDivContainer = document.getElementById("results-div");
    resultsDivContainer.appendChild(resultsDiv);
    resultsDiv.appendChild(document.createElement("br"));

    let humanChoiceText = document.createTextNode(`You played ${humanChoice}.`);
    resultsDiv.appendChild(humanChoiceText);
    resultsDiv.appendChild(document.createElement("br"));

    let computerChoiceText = document.createTextNode(`The computer plays ${computerChoice}.`);
    resultsDiv.appendChild(computerChoiceText);
    resultsDiv.appendChild(document.createElement("br"));

    let tieResultText = document.createTextNode("It's a tie.");
    let humanWinText = document.createTextNode(`${capitaliseFirstLetter(humanChoice)} beats ${computerChoice}. You win!`);
    let computerWinText = document.createTextNode(`${capitaliseFirstLetter(computerChoice)} beats ${humanChoice}. Computer wins!`);

    // If it's a tie
    if (humanChoice === computerChoice) {
        resultsDiv.appendChild(tieResultText);
        resultsDiv.appendChild(document.createElement("br"));
    } 
    // Check for human win scenarios
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultsDiv.appendChild(humanWinText);
        resultsDiv.appendChild(document.createElement("br"));
    } 
    // Otherwise, the computer wins
    else {
        computerScore++;
        resultsDiv.appendChild(computerWinText);
        resultsDiv.appendChild(document.createElement("br"));
    }

    let scoreText = document.createTextNode(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    resultsDiv.appendChild(scoreText);
    resultsDiv.appendChild(document.createElement("br"));

    if(humanScore == 5) {
        let humanWinnerText = document.createTextNode("Congratulations! You have won five matches and are the winner!");
        resultsDiv.appendChild(humanWinnerText);
        resultsDiv.appendChild(document.createElement("br"));
        computerScore = 0;
        humanScore = 0;
    }

    if(computerScore == 5) {
        let computerWinnerText = document.createTextNode("The computer has won five matches and is the winner!");
        resultsDiv.appendChild(computerWinnerText);
        resultsDiv.appendChild(document.createElement("br"));
        computerScore = 0;
        humanScore = 0;
    }


}

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