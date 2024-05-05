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
    let choice = prompt("rock, paper or scissors ?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        let toLowerHumanChoice = humanChoice.toLowerCase();

        if(toLowerHumanChoice ===  computerChoice){
            console.log("There's a tie!!");
        } else if(toLowerHumanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if(toLowerHumanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if(toLowerHumanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else if(toLowerHumanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if(toLowerHumanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if(toLowerHumanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("Your choice is incorrect");
        }

    }
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