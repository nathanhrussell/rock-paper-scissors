const options = ["rock", "paper", "scissors"];

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