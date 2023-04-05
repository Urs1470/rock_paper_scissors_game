// get the computer choice
function getComputerChoice() {
    choices = ['rock','scissor','paper'];
    randomChoice = Math.floor(Math.random()*choices.length);
    let choiceString = choices[randomChoice].toString();
    return choiceString;
}


// DOM events and selectors
let paper = document.querySelector('.btn1');
let scissor = document.querySelector('.btn2');
let rock = document.querySelector('.btn3');
let result = document.querySelector('.result');
let pscore = document.querySelector('.pscore');
let cscore = document.querySelector('.cscore');
let player = 0;
let computer = 0;

paper.addEventListener("click", function (r) {
    result.textContent = ` ${playRound('paper')}`
    r = result.textContent = ` ${playRound('paper')}`
    if(r.includes('You win')) {
        player++;
        if(player === 5) {
            window.alert('You win')
            window.location.reload();
        } else {
            pscore.textContent = `${player} `
        }
    } else if(r.includes('You lose')) {
        computer++;
        if(computer === 5) {
            window.alert('You Lose')
            window.location.reload();
        } else {
            cscore.textContent = `${computer}`
        }
    } else {
        pscore.textContent = `${player}`
        cscore.textContent = `${computer}`
    }
})

scissor.addEventListener("click", function (r) {
    result.textContent = ` ${playRound('scissor')}`
    r = result.textContent = ` ${playRound('scissor')}`
    if(r.includes('You win')) {
        player++;
        if(player === 5) {
            window.alert('You win')
            window.location.reload();
        } else {
            pscore.textContent = `${player} `
        }
    } else if(r.includes('You lose')) {
        computer++;
        if(computer === 5) {
            window.alert('You Lose')
            window.location.reload();
        } else {
            cscore.textContent = `${computer}`
        }
    } else {
        pscore.textContent = `${player}`
        cscore.textContent = `${computer}`
    }
})

rock.addEventListener("click", function (r) {
    result.textContent = ` ${playRound('rock')}`
    r = result.textContent = ` ${playRound('rock')}`
    if(r.includes('You win')) {
        player++;
        if(player === 5) {
            window.alert('You win')
            window.location.reload();
        } else {
            pscore.textContent = `${player} `
        }
    } else if(r.includes('You lose')) {
        computer++;
        if(computer === 5) {
            window.alert('You Lose')
            window.location.reload();
        } else {
            cscore.textContent = `${computer}`
        }
    } else {
        pscore.textContent = `${player}`
        cscore.textContent = `${computer}`
    }
})




// return the result of one round
function playRound(playerSelection, computerSelection = getComputerChoice()) {
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
  

