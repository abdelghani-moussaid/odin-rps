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

    const div = document.querySelector("#display-result");
    const para = document.createElement("p");
    if(humanChoice ===  computerChoice){
        para.textContent = "There's a tie!!";
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            para.textContent =  `You win! ${cap(humanChoice)} beats ${cap(computerChoice)}`;
            humanScore++;
    } else {
        para.textContent = `You lose! ${cap(humanChoice)} is beaten by ${cap(computerChoice)}`;
        computerScore++;
    }
    div.appendChild(para);
}

let cap = (str) => str.charAt(0).toUpperCase() + str.slice(1); 

const buttons = document.querySelectorAll("button");


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.id, getComputerChoice());
        displayRunningScore();
    });
});

function displayRunningScore(){
    const div = document.querySelector("div");
    const displayPara = document.createElement("p");
    const displayWinner = document.createElement("h3");
    displayPara.textContent = `Player : ${humanScore}, Computer : ${computerScore}`;
    div.appendChild(displayPara);
    if(computerScore >= 5){
        displayWinner.textContent = `The winner is computer`;
        div.appendChild(displayWinner);
        computerScore = humanScore = 0;
    } else if(humanScore >= 5){
        displayWinner.textContent = 'The winner is player';
        div.appendChild(displayWinner);
        computerScore = humanScore = 0;
    }    
}