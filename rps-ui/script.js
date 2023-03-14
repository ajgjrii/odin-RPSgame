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
var win = 0;
var lose = 0;
var draw = 0;

// Displays result of game by creating a <div> to display outcome
// <div> text will update on each button click
const messageSpace = document.querySelector('#message');
// This block displays the user and computer choices
const choices =document.createElement('p');
choices.textContent="";
messageSpace.appendChild(choices);
// This block displays the outcome of the round
const outcome = document.createElement('p');
outcome.textContent="";
messageSpace.appendChild(outcome);


// The blocks below are used to display W - L - D counter
const winDisplay = document.createElement('p');
winDisplay.textContent = `Wins: ${win}`;
messageSpace.appendChild(winDisplay);

const loseDisplay = document.createElement('p');
loseDisplay.textContent = `Losses: ${lose}`;
messageSpace.appendChild(loseDisplay);

const drawDisplay = document.createElement('p');
drawDisplay.textContent = `Draws: ${draw}`;
messageSpace.appendChild(drawDisplay);

// this function determines the win-loss-draw outcome based on user and computer choices
function game(user, computer) {
    choices.textContent=`You have chosen ${user}; the computer chose ${computer}`;

    if ((user =="rock" && computer =="scissors") || (user =="paper" && computer =="rock") ||(user =="scissors" && computer =="paper")) {
        outcome.textContent="You win!";
        ++win;
        winDisplay.textContent = `Wins: ${win}`;
    } else if (user ==computer ) {
        outcome.textContent="Draw!";
        ++draw;
        drawDisplay.textContent = `Draws: ${draw}`;
    } else if ((computer =="rock" && user =="scissors") || (computer =="paper" && user =="rock") ||(computer =="scissors" && user =="paper")) {
        ++lose;
        outcome.textContent="You lose!";
        loseDisplay.textContent = `Losses: ${lose}`;
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