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

var user = "";
var computer = "";

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

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    var user="rock";
    computerChoice();
    game(user, computer);
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    var user="paper";    
    computerChoice();
    game(user, computer);
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    var user="scissors";    
    computerChoice();
    game(user, computer);   
});



