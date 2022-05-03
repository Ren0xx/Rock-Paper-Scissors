//query selectors
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

const playerScore = document.querySelector('#score--player');
const computerScore = document.querySelector('#score--computer');

//scores 
playerScore.textContent = 0;
computerScore.textContent = 0;

let playerCounter = 0;
let computerCounter = 0;

function computerChoice(){
    const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function getResult(playerSelection, computerSelection){    
    playerSelection = playerSelection.toUpperCase();
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    if ((playerSelection === computerSelection)) {
        return result.textContent = "It's a draw.";
    }    
    if (playerSelection === choices[0]){       
        return (computerSelection === choices[2]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`, computerScore.textContent++, computerCounter++);
    }
    if (playerSelection === choices[1]){
        return (computerSelection === choices[0]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`, computerScore.textContent++, computerCounter++);
    }
    if (playerSelection === choices[2]){
        return (computerSelection === choices[1]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`, computerScore.textContent++, computerCounter++);
    }
        
}  
function restartGame(){
    const restart = document.querySelector('.restart');
    const restartButton = document.createElement('button');

    restartButton.textContent = "Play Again";
    restartButton.className = "button";
    restartButton.addEventListener('click', () =>{
        result.textContent = "Let's Play!";
        document.getElementById(`rock`).disabled = false; 
        document.getElementById(`paper`).disabled = false; 
        document.getElementById(`scissors`).disabled = false;    
        playerScore.textContent = 0, computerScore.textContent = 0;
        playerCounter = 0, computerCounter = 0;
        restartButton.remove();

    })
    restart.append(restartButton);
}

function stopGame(){   
    
    document.getElementById(`rock`).disabled = true; 
    document.getElementById(`paper`).disabled = true; 
    document.getElementById(`scissors`).disabled = true;    
    restartGame();
    return (computerCounter > playerCounter) ? result.textContent = `You've lost this one. Better luck next time!` :  result.textContent = `You've won this one. Congratulations!`;
    
}
function playGame(howManyGames = 5)
{    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {        
            choice = button.id;                
            getResult(choice, computerChoice());                  
            if (parseInt(playerScore.textContent) === howManyGames || parseInt(computerScore.textContent) === howManyGames){
                stopGame();                     
            }
            });
    });     
}
playGame(howManyGames = 5); //default value of games