const choices = ["rock", "paper", "scissors"];
const winners = [];

function game () {
    //play the game with computer
    //play five rounds
    //console based
     playRound();
    
    logWins();
} 

function playRound (round) {
   
    const computerSelection = computerChoice();
    
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    
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
   
}





