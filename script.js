function getComputerChoice() {
    choices = ['rock','scissor','paper'];
    randomChoice = Math.floor(Math.random()*choices.length);
    let choiceString = choices[randomChoice].toString();
    return choiceString;
}

function playRound(playerSelection = prompt('Enter your choice!'), computerSelection = getComputerChoice()) {
    // your code here!
    playerSelection = playerSelection.toLowerCase()
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
   
  function game() {
    let player = 0;
    let computer = 0;

    let round1 = playRound();
    if(round1.includes('You win')) {
        player++;
        console.log("Round1 : ",round1)
    } else if(round1.includes('You lose')) {
        computer++;
        console.log("Round1 : ",round1)
    } else {
        console.log("Round1 : ",round1)
    }
    
    let round2 = playRound();
    if(round2.includes('You win')) {
        player++;
        console.log("Round2 : ",round2)
    } else if(round2.includes('You lose')) {
        computer++;
        console.log("Round2 : ",round2)
    } else {
        console.log("Round2 : ",round2)
    }

    let round3 = playRound();
    if(round3.includes('You win')) {
        player++;
        console.log("Round3 : ",round3)
    } else if(round3.includes('You lose')) {
        computer++;
        console.log("Round3 : ",round3)
    } else {
        console.log("Round3 : ",round3)
    }

    let round4 = playRound();
    if(round4.includes('You win')) {
        player++;
        console.log("Round4 : ",round4)
    } else if(round4.includes('You lose')) {
        computer++;
        console.log("Round4 : ",round4)
    } else {
        console.log("Round4 : ",round4)
    }

    let round5 = playRound();
    if(round5.includes('You win')) {
        player++;
        console.log("Round5 : ",round5)
    } else if(round5.includes('You lose')) {
        computer++;
        console.log("Round5 : ",round5)
    } else {
        console.log("Round5 : ",round5)
    }

    if(player > computer) {
        return `You Win Game!!! Score ${player}|${computer} `
    } else if(player < computer) {
        return `You Lose Game!!! Score ${player}|${computer} `
    } else {
        return `It's a Equal Game!!! Score ${player}|${computer} `
    }
    
  }

  console.log(game())