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

let cap = (str) => str.charAt(0).toUpperCase() + str.slice(1); 

const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.id, getComputerChoice());
    });
});
