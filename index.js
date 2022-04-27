function computerPlay(){
    const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}
function playRound(playerSelection, computerPlay){
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

function playerChoice(){
        try{
            let player = prompt("What do you choose?").toUpperCase();
       
        const computer = computerPlay();

        console.log('You chose: ' + player);
        console.log('Computer chose: ' + computer);  
        
        return [player, computer];

        }
        catch(err){
            alert('Something went wrong!... Please try again')
        }

}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        const [player, computer] = playerChoice();
               

        console.log(playRound(player, computer));
        let result = playRound(player, computer);

        if (result.includes("lose")){
                computerScore++;
            }
        else if (result.includes("win")){
                playerScore++;
        }

        console.log(`Results: \nComputer: ${computerScore}, You : ${playerScore}`);
    }
    if (playerScore > computerScore){
        console.log('You won the whole game!');
    }
    else if (computerScore > playerScore){
        console.log("Computer won :(. Mission Failed, we will get'em next time");
        }
    else {
        console.log("Result is ... : draw ? ");
    }    
}

game();