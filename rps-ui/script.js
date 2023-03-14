// This function is used to randomly select a choice for the computer
function computerChoice () {
    var rando = Math.floor(Math.random() * 3) + 1
    if (rando == 1) {
        computer = "rock";
    } else if ( rando == 2) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

// user and computer variables start as empty strings
var user = "";
var computer = "";

// this function determines the win-loss-draw outcome based on user and computer choices
function game(user, computer) {
    console.log("You have chosen: ",user);
    console.log("The computer has chosen: ", computer);

    if ((user =="rock" && computer =="scissors") || (user =="paper" && computer =="rock") ||(user =="scissors" && computer =="paper")) {
        console.log("You win!");
    } else if (user ==computer ) {
        console.log("Draw!");
    } else if ((computer =="rock" && user =="scissors") || (computer =="paper" && user =="rock") ||(computer =="scissors" && user =="paper")) {
        console.log("You lose!");
    }
};

// sets var user to "rock" when rock button is clicked, then runs computer choice and game functions
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    var user="rock";
    computerChoice();
    game(user, computer);
});

// sets var user to "paper" when paper button is clicked, then runs computer choice and game functions
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    var user="paper";    
    computerChoice();
    game(user, computer);
});

// sets var user to "scissors" when scissors button is clicked, then runs computer choice and game functions
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    var user="scissors";    
    computerChoice();
    game(user, computer);   
});