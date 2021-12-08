// declare and initialize global variables first
    // inputs are playerSelection and computerSelection
    // output is message with result; may include other outputs
    // roundX is the for loop variable to execute 5 times
    // scores track computer and player scores through best of 5.  Tie is counted separately
    let playerSelection = " "; //initialize string
    let computerSelection = " "; //initialize
    let playerResult = " ";//initialize
    let roundX = 1;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

//start for loop for roundX
for (roundX = 1; roundX<6; roundX++) {

    // play the round
    // collect player input using prompt
    playerSelection = prompt("Let's play best of 5 Round "+roundX+"!  Type 'rock', 'paper', or 'scissors'");
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);

    // screen the input with function "screenRPS"
    let validInput = false;  // initialize variable to false
    validInput = screenRPS(playerSelection); // call screenRPS to verify valid input

    while (validInput === false) {
        playerSelection = prompt("Typo, try again!  Enter 'rock', 'paper', or 'scissors'");
        playerSelection = playerSelection.toUpperCase();
        validInput = screenRPS(playerSelection);
    }
    console.log(validInput, playerSelection);

    // begin screenRPS function
    function screenRPS(playerSelection) {
        let a = false;
        switch(playerSelection) {
            case "ROCK":
                a = true;
                break;
            case "PAPER":
                a = true;
                break;
            case "SCISSORS":
                a = true;
                break;
            default:  a = false;
        }
        return a;
    }

    //now generate computer selection
    let randNum = 0;
    randNum = Math.floor(Math.random()*3); //generates integer from 0 to 2
    console.log(randNum);
        if (randNum < 1) {
            computerSelection = "ROCK";
        }
        else if (randNum < 2) {
            computerSelection = "PAPER";
        }
        else {
            computerSelection = "SCISSORS";
        }
    console.log(computerSelection);

    // now compare and choose the winner

    playerResult = winner(playerSelection, computerSelection);
    console.log(playerResult);

    function winner(playerSelection, computerSelection) {
        let result = " ";
        if (playerSelection === computerSelection) {
            result = "Tie";
        }
        else if (playerSelection === "ROCK") {
            if (computerSelection === "SCISSORS") {
                result = "Win";
            }
            else {
                result = "Lose";
            }
        }
        else if (playerSelection === "PAPER") {
            if (computerSelection === "ROCK") {
                result = "Win";
            }
            else {
                result = "Lose";
            }
        }
        else if (computerSelection === "PAPER") {
            result = "Win";
        }
        else {
            result = "Lose";
        }
        return result;
    }
    
    //initialize round i variables "playerRoundOutcome", winner's selection, and loser's selection
    let playerRoundOutcome = " ";
    let winSelection = " ";
    let loseSelection = " ";

    //create result text string
    if (playerResult === "Tie") {
        playerRoundOutcome = "Round " + roundX + " outcome:  It's a Tie!";
        tieScore = tieScore + 1;
    }
    else if (playerResult === "Win") {
        playerScore = playerScore + 1;
        winSelection = playerSelection;
        loseSelection = computerSelection;
        playerRoundOutcome = "Round " + roundX + " outcome:  You win!  " + playerSelection + " beats " + computerSelection + "!";
    }
    else {
        computerScore = computerScore + 1;
        winSelection = computerSelection;
        loseSelection = playerSelection;
        playerRoundOutcome = "Round " + roundX + " outcome:  You lose!  " + computerSelection + " beats " + playerSelection + "!";
    }
    console.log(playerRoundOutcome);

    alert("Score:  Player "+playerScore+ ", Computer " +computerScore+ ", Tie " +tieScore)
}

alert("Final Score:  Player "+playerScore+ ", Computer " +computerScore+ ", Tie " +tieScore)
    // outputs are 
        // playerResult (win, lose, or tie)
        // result text message "It's a tie!" cite player & computer choices
        // or result is You win or You lose, winer beats loser
        // will return a random Rock Paper or Scissors value
    // initialize all variables to " "


// third function is to compare player and computer values and select a winner
    // if else will be method
    // variable playerResult will be outcome from player's perspective and be "win", "lose", or "tie"

// fourth function will be to declare the result of the game as an output string
    // will be a text message "You [win or lose]! [winnerselection] beats [loserselection"

// final function is to do best of 5 game where functions 1-4 are logged for 5 rouhds
    // create a for loop for 1 to 5
    // initialize index i, increment by 1 each round
    // Report round i result each round
    // after 5 rounds report winner and the score