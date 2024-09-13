const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

// ASK FOR USER INPUT STATING THE AVAILABLE OPTIONS
// CHECK IF USER INPUT IS A VALID OPTION
// IF USER INPUT NOT VALID OPTION --> RETURN TRY AGAIN MESSAGE
// IF USER INPUT VALID OPTION --> RETURN USER INPUT