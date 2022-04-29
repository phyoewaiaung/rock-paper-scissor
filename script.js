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
    
    var rounds = 0; 
    /*** Rock button function */
  function rock() {
    
      if(document.querySelector(".playerChoice").textContent == "" && 
      document.querySelector(".compChoice").textContent == "") {
  
          document.querySelector(".playerChoice").textContent = "rock";
          document.querySelector(".compChoice").textContent =  computerPlay();
          result();
      }
      else{
          document.querySelector(".playerChoice").textContent = "";
          document.querySelector(".compChoice").textContent = "";
          --rounds;
          rock();
          
      }
      ++rounds;
      showScores();
      winnerOfTheMatch();
  }
  
  /*** Paper button function */
  function paper() {
    
      if(document.querySelector(".playerChoice").textContent == "" && 
      document.querySelector(".compChoice").textContent == "") {
  
          document.querySelector(".playerChoice").textContent = "paper";
          document.querySelector(".compChoice").textContent =  computerPlay();
          result();
      }
      else{
          document.querySelector(".playerChoice").textContent = "";
          document.querySelector(".compChoice").textContent = "";
          --rounds;
          paper();
          
      }
      ++rounds;
      showScores();
      winnerOfTheMatch();
  }
  
  /**** Scissors button function */
  function scissors() {
   
      if(document.querySelector(".playerChoice").textContent == "" && 
      document.querySelector(".compChoice").textContent == "") {
  
          document.querySelector(".playerChoice").textContent = "scissors";
          document.querySelector(".compChoice").textContent =  computerPlay();
          result();
      }
      else{
          document.querySelector(".playerChoice").textContent = "";
          document.querySelector(".compChoice").textContent = "";
          --rounds;
          scissors();
          
      }
      ++rounds;
      showScores();
      winnerOfTheMatch();
  }
/*** Declarng a single round winner */
  function result () {
    var playerResult = document.querySelector(".playerChoice").textContent;
    var computerResult = document.querySelector(".compChoice").textContent;
    var singleRound = document.querySelector(".singleResult").textContent;
    if(singleRound == "") {
        document.querySelector(".singleResult").textContent = playRound(playerResult,computerResult);
    }
    else {
        document.querySelector(".singleResult").textContent = "";
        result();
    }
}

/*** Declaring winner in 5 rounds game */
function winnerOfTheMatch() {
    if(rounds == 5) {
        playAgainFun();
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

function showScores() {
    document.querySelector(".message1").innerHTML = "Player Scores : " + playerScore;
    document.querySelector(".message2").innerHTML = " Computer Scores : " +computerScore;
}
function playAgainFun () {
        var a = document.createElement("a");
        var linkText = document.createTextNode("Play Again");
        a.appendChild(linkText);
        a.href = "index.html";
        document.querySelector(".playAgain").appendChild(a);
}