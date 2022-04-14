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

/** a function that plays a single round of Rock Paper Scissors */
function playRound(playerSelection,computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    console.log("You - " + player);
    console.log("computer - " + computer);
    if(player == computerSelection){
        ++countPlayer;
        ++countComputer;
        return "DRAW";
    }else if(player == "rock" && computer == "paper") {
        ++countComputer;
        return "You Lose, Paper beats Rock!";
    }else if(player == "rock" && computer == "scissors") {
        ++countPlayer;
        return "You Win, Rock beats scissors!";
    }else if(player == "paper" && computer == "rock"){
        ++countPlayer;
        return "You Win, Paper beats Rock!";
    }else if(player == "paper" && computer == "scissors"){
        ++countComputer;
        return "You Lose, Scissors beats paper!";
    }else if(player == "scissors" && computer == "paper"){
        ++countPlayer;
        return "You Win, Scissors beat paper!";
    }else if(player == "scissors" && computer == "rock"){
        ++countComputer;
        return "You Lose, Rock beats Scissors!";
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
var countPlayer = 0;
var countComputer = 0;

/** FIVE Rounds game function  */
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("ROCK PAPER SCISSORS?");
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice,computerChoice));
    }  
}

/** Function that declare Winner */
function winner() {
    if(countPlayer > countComputer) {
        return "CONGRATS TO PLAYER";
    }
    else {
        return "SORRY TO PLAYER";
    }
}

game();
console.log(winner());