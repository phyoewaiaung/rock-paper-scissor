/**** Function to get randomly returnn either 'ROCK' 'PAPER' 'SCISSORS'  *****/
function computerPlay() {
  if(Math.floor(Math.random() * 3) === 0){
      return "rock";
  }else if(Math.floor(Math.random() * 3) === 1){
      return "paper";
  }
  else {
      return "scissors";
  }
}
console.log(computerPlay());
var playerScore = 0;
var computerScore = 0;
/** a function that plays a single round of Rock Paper Scissors */
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if(playerSelection == computerSelection) {
        ++playerScore;
        ++computerScore;
        return "DRAW";
    }
    if(playerSelection == "rock"){
        if(computerSelection == "paper") {
            ++computerScore;
            return "Computer Score - PAPER WINS";

        } else {
            ++playerScore;
            return "Player Score - ROCK WINS";
        }
    }
    if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            ++playerScore;
            return "Player Score - PAPER WINS";
        } else if(computerSelection == "scissors"){
            ++computerScore;
            return "Computer Score - SCISSORS WINS";
        }
    }
    if(playerSelection == "scissors") {
        if(computerSelection == "rock") {
            ++computerScore;
            return "Computer Score - ROCK WINS";
        } else if(computerSelection == "paper") {
            ++playerScore;
            return "Player Score - SCISSORS WINS";
        }
    }
  }
  
// var countPlayer = 0;
// var countComputer = 0;

/** FIVE Rounds game function  */
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("ROCK PAPER SCISSORS?").toLowerCase();
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice,computerChoice));
        console.log("player - " + playerScore);
        console.log("computer - " +computerScore);
}
if(playerScore == computerScore) {
    return "This match is a tie";
} else if(playerScore > computerScore){
    return "CONGRATS YOU WIN!";
}
else {
    return "SORRY YOU LOSE!";
}
}

console.log(game());

// /** Function that declare Winner */
// function winner() {
//     if(countPlayer > countComputer) {
//         return "CONGRATS TO PLAYER";
//     }
//     else {
//         return "SORRY TO PLAYER";
//     }
// }

// game();
// console.log(winner());