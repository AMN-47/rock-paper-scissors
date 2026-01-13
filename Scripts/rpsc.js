const choices = ["rock", "paper", "scissors"]


function game () {
    //play the game with computer
    //play five rounds
    //console based
    playRound();
} 

function playRound () {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
} 

function playerChoice () {
    //player input
    let input = prompt("Type Rock, Paper or Scissors");
    input = input.toLowerCase();
    console.log(input);
}

function computerChoice (){
    //computer chooses random choice
    return choices[Math.floor(Math.random()*choices.length)]
} 

game();