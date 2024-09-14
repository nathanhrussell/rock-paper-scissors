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
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer wins!");
        computerScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!");
        humanScore++;
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie");
        console.log(`Current score: Computer: ${computerScore} Player: ${humanScore}`);
    }

    // TO DO: CONSOLE.LOG THE COMPUTER'S MOVE TO MAKE TESTING EASIER THEN TEST ALL POSSIBLE OUTCOMES FROM ABOVE



    // IF HUMAN CHOICE IS ROCK AND COMPUTER CHOICE IS PAPER --> RETURN COMPUTER WINS MESSAGE AND COMPUTER SCORE PLUS ONE
    // IF HUMAN CHOICE IS ROCK AND COMPUTER CHOICE IS SCISSORS --> RETURN YOU WIN MESSAGE AND HUMAN SCORE PLUS ONE
    // IF HUMAN CHOICE IS ROCK AND COMPUTER CHOICE IS ROCK --> RETURN DRAW MESSAGE AND SCORES REMAIN THE SAME

    // IF HUMAN CHOICE IS PAPER AND COMPUTER CHOICE IS SCISSORS --> RETURN COMPUTER WINS MESSAGE AND COMPUTER SCORE PLUS ONE
    // IF HUMAN CHOICE IS PAPER AND COMPUTER CHOICE IS ROCK --> RETURN YOU WIN MESSAGE AND HUMAN SCORE PLUS ONE
    // IF HUMAN CHOICE IS PAPER AND COMPUTER CHOICE IS PAPER --> RETURN DRAW MESSAGE AND SCORES REMAIN THE SAME

    // IF HUMAN CHOICE IS SCISSORS AND COMPUTER CHOICE IS ROCK --> RETURN COMPUTER WINS MESSAGE AND COMPUTER SCORE PLUS ONE
    // IF HUMAN CHOICE IS SCISSORS AND COMPUTER CHOICE IS PAPER --> RETURN YOU WIN MESSAGE AND HUMAN SCORE PLUS ONE
    // IF HUMAN CHOICE IS SCISSORS AND COMPUTER CHOICE IS SCISSORS --> RETURN DRAW MESSAGE AND SCORES REMAIN THE SAME




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

}