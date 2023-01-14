
let computerChoice = getComputerChoice()
 console.log(computerChoice)
function getComputerChoice() {
  let computerChoice
let choices = ['rock','paper','Scissors']
computerChoiceIndex = Math.floor(Math.random()*3)

computerChoice = choices[computerChoiceIndex]

return computerChoice
}

console.log(getResult('rock',computerChoice))
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
 let  score;

  // All situations where human draws, set `score` to 0
  if (playerChoice == "rock" && computerChoice == "scissors"){
    score = 1
  }
  else if (playerChoice == "scissors" && computerChoice == "paper"){
    score = 1
  }
  else if (playerChoice == "paper" && computerChoice == "rock"){
    score = 1
  }
  else if (playerChoice == computerChoice){
    score = 0
  }
else{
  score = -1
}
return score;
  
function showResult(score, playerChoice, computerChoice) {

function onClickRPS(playerChoice) {
  
}



function endGame() {
  
}
