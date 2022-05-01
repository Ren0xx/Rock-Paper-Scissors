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

function stopGame(){
    const restart = document.querySelector('.restart');
    const restartButton = document.createElement('button');

    restartButton.textContent = "Play Again";
    restartButton.className = "button";
    restartButton.addEventListener('click', () =>{
        result.textContent = "Let's Play!";
        document.getElementById(`btn1`).disabled = false; 
        document.getElementById(`btn2`).disabled = false; 
        document.getElementById(`btn3`).disabled = false;    
        playerScore.textContent = 0, computerScore.textContent = 0;
        playerCounter = 0, computerCounter = 0;
        restartButton.remove();

    })
    restart.append(restartButton);
}

function restart(){
    if (computerCounter === 5 || playerCounter === 5){    
        document.getElementById(`btn1`).disabled = true; 
        document.getElementById(`btn2`).disabled = true; 
        document.getElementById(`btn3`).disabled = true;    
        stopGame();
        return (computerCounter > playerCounter) ? result.textContent = `You've lost this one. Better luck next time!` :  result.textContent = `You've won this one. Congratulations!`;
    }

}
function playGame()
{    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {        
            choice = button.firstChild.textContent;                
            getWinner(choice, computerPlay());        
            restart();                     
            });
    });     
}
function computerPlay(){
    const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function getWinner(playerSelection, computerPlay){
    
    playerSelection = playerSelection.toUpperCase();
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    if ((playerSelection === computerPlay)) {
        return result.textContent = "It's a draw";
    }    
    if (playerSelection === choices[0]){       
        return (computerPlay === choices[2]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerPlay}`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`, computerScore.textContent++, computerCounter++);
    }
    if (playerSelection === choices[1]){
        return (computerPlay === choices[0]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerPlay}`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`, computerScore.textContent++, computerCounter++);
    }
    if (playerSelection === choices[2]){
        return (computerPlay === choices[1]) ? 
        (result.textContent = `You win! ${playerSelection} beats ${computerPlay}`, playerScore.textContent++, playerCounter++) 
        :(result.textContent = `You lose! ${computerPlay} beats ${playerSelection}`, computerScore.textContent++, computerCounter++);
    }
    
    
}    
playGame();

// Adding buttons through js, not html (will not be used here)
// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
// const btn3 = document.createElement('button');

// btn1.textContent = 'Rock';
// btn2.textContent = 'Paper';
// btn3.textContent = 'Scissors';


// container.appendChild(btn1);
// container.appendChild(btn2);
// container.appendChild(btn3);