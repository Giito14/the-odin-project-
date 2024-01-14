function getComputerChoice(){
    let choice;
    let random  = Math.floor(Math.random() * (3 - 0) ) + 0;
    switch (random){
        case (0):
            choice = "rock";
            break;
        case (1):
            choice = "paper";
            break;
        case (2):
            choice = "scissors";
            break;
    }
    return choice;
}
function getplayerChoice(){
    let choice = prompt("Please type your choice (Rock, Paper, Scissors):").toLowerCase();
    return choice;
}
function playround(playerSelection, computerSelection){
    let roundWinner;
     // let capitalizedString = inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ){
        return roundWinner = `You win!!! ${playerSelection} beats ${computerSelection}`;
    } else if ( (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") ) {
        return roundWinner = `You lose!!! ${playerSelection} beats ${computerSelection}`;
    } else
        return roundWinner = "Tie!!!"
}
function game(){
    let rounds = 5;
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < rounds; i++ ){
        let result =playround(getplayerChoice(),getComputerChoice());
        console.log(result);
        if (result === "Tie!!!"){
            rounds++;
        }
        if (result.includes("You win!!!")){
            playerCount++;
        }
        if (result.includes("You lose!!!")){
            computerCount++;
        }
        console.log(playerCount,computerCount);
    }
    if (playerCount > computerCount)
        return "You win the game!!!";
    else
        return "You lose the game!!!";
    }
    console.log(game());