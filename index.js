function computerPlay(){
    const myArray = ['ROCK', 'PAPER', 'SCISSORS'];
    return myArray[Math.floor(Math.random()*myArray.length)];
}
function playRound(playerSelection, computerPlay){
    
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    if (playerSelection ===  choices[0]) {
        if ( computerPlay === choices[1] ) {
            return `You lose! ${computerPlay} beats ${playerSelection}`;
        }
        else if ( computerPlay ===  choices[2]) {
            return `You win! ${playerSelection} beats ${computerPlay}`;
        }
        else{
            return "It's a draw";
        }
    }

    if (playerSelection === choices[1] ) {
        if ( computerPlay ===  choices[2]) {
            return `You lose! ${computerPlay} beats ${playerSelection}`;
        }
        else if ( computerPlay === choices[0]){
            return `You win! ${playerSelection} beats ${computerPlay}`;
        }
        else{
            return "It's a draw";
        }
    }

    if (playerSelection === choices[2] ) {
        if ( computerPlay === choices[0] ) {
            return `You lose! ${computerPlay} beats ${playerSelection}`;
        }
        else if ( computerPlay === choices[1]){
            return `You win! ${playerSelection} beats ${computerPlay}`;
        }
        else{
            return "It's a draw";
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

        let player = prompt("What do you choose?").toUpperCase();
        const computer = computerPlay();

        console.log('You chose: ' + player);
        console.log('Computer chose: ' + computer);    
        console.log(playRound(player, computer));
        let result = playRound(player, computer);

        if (result.includes("lose")){
                computerScore++;
            }
        else if (result.includes("win")){
                playerScore++;
        }
        console.log(`Resuls: \n Computer: ${computerScore}, You : ${playerScore}`);
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