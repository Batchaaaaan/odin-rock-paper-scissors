let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return "Rock"
    } else if (randomNumber === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}


function getHumanChoice() {
    let choice = prompt("Choose 1: Rock, Paper or Scissors? :")
    return choice
}


function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()

        if (humanChoice === computerChoice) {
            return 'Draw!'
        } else if (humanChoice === 'rock' &&  computerChoice === 'scissors') {
            humanScore++
            return 'You win! Rock beats Scissors'
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++
            return 'You win! Paper beats Rock'
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++
            return 'You win! Scissors beat Paper'
        } else {
            computerScore++
            return 'You Lose'
        }
}

        
