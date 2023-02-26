// Outcome messages are variables; they will be used to create counters
var win = "You win!"
var lose = "You lose!"
var draw = "Draw!"
var other = "Read the game directions and try again!"

// Records are kept as global variables for ease of use
var userRecord = 0;
var compRecord = 0;
var drawRecord = 0;

// This function creates a string for rock, paper, scissors based on inputs
// inputs are integers 1-3; any other choice will give a "not following directions" message
// same function runs for user input and computer random choice
function userRPS(choice) {
    if (choice==1) {
        user="rock";
    } else if (choice==2){
        user="paper";
    } else if (choice==3){
        user="scissors";
    } else {
        user="Not to follow directions because you have chaotic energy.";
    }
    return user;
}

//This function displays choices and outcomes
function outcomes(choice, computer) {
    // choices are converted into strings for rock, paper, or scissors
    var userChoice = userRPS(choice);
    var compChoice = userRPS(computer);

    // display the choices
    console.log("You chose:", userChoice);
    console.log("The computer chose:", compChoice);

    // win-lose-draw conditions; variable "count" will be assigned (based on outcome) and returned
    if ((userChoice=="rock" && compChoice=="scissors") || (userChoice=="paper" && compChoice=="rock") ||(userChoice=="scissors" && compChoice=="paper")) {
        console.log(win);
        count=win;
    } else if (userChoice==compChoice) {
        console.log(draw);
        count=draw;
    } else if ((compChoice=="rock" && userChoice=="scissors") || (compChoice=="paper" && userChoice=="rock") ||(compChoice=="scissors" && userChoice=="paper")) {
        console.log(lose);
        count=lose;
    } else {
        console.log(other);
        count=other;
    }
    return count;
}

// Counter function; prints W-L-D record based on variable "count" from function "outcomes"
function counter(count) {
    if (count==win) {
        ++userRecord;
    } else if (count==lose) {
        ++compRecord;
    } else if (count==draw) {
        ++drawRecord;
    }
    console.log(`The current record(W-L-D) is ${userRecord}-${compRecord}-${drawRecord}` )
}

//Main game loop
function game() {
    console.log("Time to play rock, paper, scissors against a bot! The first to win 3 rounds will be declared the winner!")

    // while loop will be exited when user or computer have 3 wins; draws and invalid entries do not impact counters
    while (userRecord < 3 && compRecord < 3) {
        // Prompt for user choice
        var choice=Number(prompt("Input 1 for rock, 2 for paper, and 3 for scissors."));
        var computer= Math.floor(Math.random() * 3) + 1

        //Functions called here
        outcomes (choice,computer);
        counter(count);
    }

    // final win-loss message
    if (userRecord ==3) {
        console.log('Congratulations! You win!')

    } else if (compRecord ==3) {
        console.log('You lose! Better luck next time!')

    }
}

// calls the game function in console
game();