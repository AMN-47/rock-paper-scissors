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
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    if (check == true){
        console.log(input)
    }
    //console.log(input);
}

function computerChoice (){
    //computer chooses random choice
    return choices[Math.floor(Math.random()*choices.length)]
} 

function validateInput(choice) {
    //this function ensures that there is error handeling when wrong choice/input is given
    if(choices.includes(choice)){
        return true
    }else{
        return false
    }
}


game();