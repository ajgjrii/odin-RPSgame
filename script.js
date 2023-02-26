var choice=Number(prompt("Time to play rock, paper, scissors!  \n Input 1 for rock, 2 for paper, and 3 for scissors."));
var computer= Math.floor(Math.random() * 3) + 1

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

var userChoice = userRPS(choice);
var compChoice = userRPS(computer);

console.log("You chose:", userChoice);
console.log("The computer chose:", compChoice);

if ((userChoice=="rock" && compChoice=="scissors") || (userChoice=="paper" && compChoice=="rock") ||(userChoice=="scissors" && compChoice=="paper")) {
    console.log("You win!");
} else if (userChoice==compChoice) {
    console.log("Draw!");
} else if ((compChoice=="rock" && userChoice=="scissors") || (compChoice=="paper" && userChoice=="rock") ||(compChoice=="scissors" && userChoice=="paper")) {
    console.log("You lose!")
} else {
    console.log("Read the directions homie! Try again.");
}


