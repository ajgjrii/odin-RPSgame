function compChoice () {
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


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    var user="rock";    
    console.log("You have chosen: ",user);
    compChoice();
    console.log("The computer has chosen: ", computer)
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    var user="paper";    
    console.log("You have chosen: ",user);
    compChoice();
    console.log("The computer has chosen: ", computer)
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    var user="scissors";    
    console.log("You have chosen: ",user);
    compChoice();
    console.log("The computer has chosen: ", computer)   
});



// const runGame = document.querySelector('.choice');
// runGame.addEventListener('click', () => {
//     console.log("You have chosen: ", user);
//    console.log("The computer has chosen: ", computer);
// });