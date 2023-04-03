function getComputerChoice() {
    choices = ['rock','scissor','paper'];
    randomChoice = Math.floor(Math.random()*choices.length);
    let choiceString = choices[randomChoice].toString();
    return choiceString;
}

function playRound(playerSelection = prompt('Enter your choice!'), computerSelection = getComputerChoice()) {
    // your code here!
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection,computerSelection)
    if (playerSelection == computerSelection) {
        return "It's equal!!!"
    } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
        return "You win!!! Rock beats scissor!"
    } else if (playerSelection == 'scissor' && computerSelection == 'rock') {
        return "You lose!!! Rock beats scissor!"
    } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        return "You win!!! Scissor beats paper!"
    } else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        return "You lose!!! Scissor beats paper!"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win!!! Paper beats rock!"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose!!! Paper beats rock!"
    } else {
        return "Your input is not a choice!"
    }
  } 
   
  