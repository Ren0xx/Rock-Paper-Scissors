function computerPlay(){
    const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function playRound(playerSelection, computerPlay){
    playerSelection = playerSelection.toUpperCase();
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    if ((playerSelection === computerPlay)) {
        return "It's a draw";
    }    
    if (playerSelection === choices[0]){
        return (computerPlay === choices[2]) ? `You win! ${playerSelection} beats ${computerPlay}` : `You lose! ${computerPlay} beats ${playerSelection}`;
    }
    if (playerSelection === choices[1]){
        return (computerPlay === choices[0]) ? `You win! ${playerSelection} beats ${computerPlay}` : `You lose! ${computerPlay} beats ${playerSelection}`;
    }
    if (playerSelection === choices[2]){
        return (computerPlay === choices[1]) ? `You win! ${playerSelection} beats ${computerPlay}` : `You lose! ${computerPlay} beats ${playerSelection}`;
    }
}

// function playerChoice(){
//         try{
//             let player = prompt("What do you choose?").toUpperCase();
       
//         const computer = computerPlay();

//         console.log('You chose: ' + player);
//         console.log('Computer chose: ' + computer);  
        
//         return [player, computer];

//         }
//         catch(err){
//             alert('Something went wrong!... Please try again')
//         }

// }
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const choice = button.firstChild.textContent;
        playRound(choice, computerPlay());
        console.log(playRound(choice, computerPlay()));
    });
});

