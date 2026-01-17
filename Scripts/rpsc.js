const choices = ["rock", "paper", "scissors"];
const winners = [];

function game () {
    //play the game with computer
    //play five rounds
    //console based
    for (let i = 1; i <=5; i++){
        playRound(i);
    }
    logWins();
} 

function playRound (round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
} 

function playerChoice () {
    //player input
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false){
        input = prompt("Type Rock, Paper or Scissors, capatilisation does not matter, just make sure spelling is correct!");
        while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice (){
    //computer chooses random choice
    return choices[Math.floor(Math.random()*choices.length)]
} 

function validateInput(choice) {
    //this function ensures that there is error handeling when wrong choice/input is given
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return "Tie";
    }else if(
        (choiceP === "rock" && choiceC == "scissors") || 
        (choiceP === "paper" && choiceC == "rock") || 
        (choiceP === "scissors" && choiceC == "paper")
    ){
        return "Player";
    }else{
        return "Computer";
    }
} 

function logWins(){
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties)
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round)
    console.log("Player Choice", playerChoice);
    console.log("Computer Choice", computerChoice);
    console.log(winner, "Won the Round");
    console.log("--------------------------------------------")
}



