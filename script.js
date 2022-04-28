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

var playerScore = 0;
var computerScore = 0;
// /** a function that plays a single round of Rock Paper Scissors */
function playRound(playerSelection, computerSelection) {
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
  
// /** FIVE Rounds game function  */
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("ROCK PAPER SCISSORS?").toLowerCase();
//         let computerChoice = computerPlay();
//         // console.log(playRound(playerChoice,computerChoice));
//         // console.log("player - " + playerScore);
//         // console.log("computer - " +computerScore);
// }
// if(playerScore == computerScore) {
//     return "This match is a tie";
// } else if(playerScore > computerScore){
//     return "CONGRATS YOU WIN!";
// }
// else {
//     return "SORRY YOU LOSE!";
// }
// }

var rounds = 0;
function rock() {
    if(document.querySelector(".playerChoice").textContent == "" && 
    document.querySelector(".compChoice").textContent == "") {

        document.querySelector(".playerChoice").textContent += "rock";
        document.querySelector(".compChoice").textContent +=  computerPlay();
    }
    else{
        document.querySelector(".playerChoice").textContent = "";
        document.querySelector(".compChoice").textContent = "";
        rock();
        --rounds;
    }
    function result () {
        var playerResult = document.querySelector(".playerChoice").textContent;
        var computerResult = document.querySelector(".compChoice").textContent;
        var singleRound = document.querySelector(".singleResult").textContent;
        if(singleRound == "") {
            document.querySelector(".singleResult").textContent += playRound(playerResult,computerResult);
        }
        else {
            document.querySelector(".singleResult").textContent = "";
            result();
        }
    }
    result();
    ++rounds;
    function winnerOfTheMatch() {
        if(rounds == 5) {
            if(playerScore == computerScore) {
                document.querySelector(".winner").textContent = "THIS MATCH IS A TIE in 5 Rounds!";
            }else if(playerScore > computerScore) {
                document.querySelector(".winner").textContent = "CONGRATS YOU WIN in 5 Rounds!";
            }else {
                document.querySelector(".winner").textContent = "SORRY YOU LOSE in 5 Rounds !";
            }
        }
        else {
            return;
        }
    }
    winnerOfTheMatch();
}

function paper() {
    if(document.querySelector(".playerChoice").textContent == "" && 
    document.querySelector(".compChoice").textContent == "") {

        document.querySelector(".playerChoice").textContent += "paper";
        document.querySelector(".compChoice").textContent +=  computerPlay();
    }
    else{
        document.querySelector(".playerChoice").textContent = "";
        document.querySelector(".compChoice").textContent = "";
        paper();
        --rounds;
    }
    function result () {
        var playerResult = document.querySelector(".playerChoice").textContent;
        var computerResult = document.querySelector(".compChoice").textContent;
        var singleRound = document.querySelector(".singleResult").textContent;
        if(singleRound == "") {
            document.querySelector(".singleResult").textContent += playRound(playerResult,computerResult);
        }
        else {
            document.querySelector(".singleResult").textContent = "";
            result();
        }
    }
    result();
    ++rounds;
    function winnerOfTheMatch() {
        if(rounds == 5) {
            if(playerScore == computerScore) {
                document.querySelector(".winner").textContent = "THIS MATCH IS A TIE in 5 Rounds!";
            }else if(playerScore > computerScore) {
                document.querySelector(".winner").textContent = "CONGRATS YOU WIN in 5 Rounds!";
            }else {
                document.querySelector(".winner").textContent = "SORRY YOU LOSE in 5 Rounds !";
            }
        }
        else {
            return;
        }
    }
    winnerOfTheMatch();
}

function scissors() {
    if(document.querySelector(".playerChoice").textContent == "" && 
    document.querySelector(".compChoice").textContent == "") {

        document.querySelector(".playerChoice").textContent += "scissors";
        document.querySelector(".compChoice").textContent +=  computerPlay();
    }
    else{
        document.querySelector(".playerChoice").textContent = "";
        document.querySelector(".compChoice").textContent = "";
        scissors();
        --rounds;
    }
    function result () {
        var playerResult = document.querySelector(".playerChoice").textContent;
        var computerResult = document.querySelector(".compChoice").textContent;
        var singleRound = document.querySelector(".singleResult").textContent;
        if(singleRound == "") {
            document.querySelector(".singleResult").textContent += playRound(playerResult,computerResult);
        }
        else {
            document.querySelector(".singleResult").textContent = "";
            result();
        }
    }
    result();
    ++rounds;
    function winnerOfTheMatch() {
        if(rounds == 5) {
            if(playerScore == computerScore) {
                document.querySelector(".winner").textContent = "THIS MATCH IS A TIE in 5 Rounds!";
            }else if(playerScore > computerScore) {
                document.querySelector(".winner").textContent = "CONGRATS YOU WIN in 5 Rounds!";
            }else {
                document.querySelector(".winner").textContent = "SORRY YOU LOSE in 5 Rounds !";
            }
        }
        else {
            return;
        }
    }
    winnerOfTheMatch();
}
