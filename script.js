function getComputerChoice(){
    let result;
    
    /* Get a random number between 1 and 3 */
    let number = Math.floor(Math.random() * 3) + 1;

    if(number === 1){
        result = "rock";
    } else if (number === 2){
        result = "paper";
    } else {
        result = "scissors";
    }

    
    return result;
}

function getHumanChoice(){
    let choice = prompt("rock, paper or scissors ?").toLowerCase();
    while(!(choice === 'rock' || choice === 'paper' || choice === 'scissors')){
        alert("Wrong choice! enter again :")
        choice = prompt("rock, paper or scissors ?").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice ===  computerChoice){
        console.log("There's a tie!!");
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            console.log(`You win! ${cap(humanChoice)} beats ${cap(computerChoice)}`);
            humanScore++;
    } else {
        console.log(`You lose! ${cap(humanChoice)} is beaten by ${cap(computerChoice)}`);
        computerScore++;
    }

}

let cap = (str) => str.At(0).toUpperCase() + str.slice(1); 

function playGame() {
    let humanSelection;
    let computerSelection;
        
    for(let i = 0; i< 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }

    if(humanScore > computerScore){
        console.log("Amazing! You won!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won!");
    } else {
        console.log("It's a tie");
    }

}

playGame();