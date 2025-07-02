

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
            return 'You win! Rock beats Scissors'
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            return 'You win! Paper beats Rock'
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            return 'You win! Scissors beat Paper'
        } else {
            return 'You Lose'
        }
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i=1; i<=5; i++) {
        console.log(`Round ${i} of 5`)
        const humanSelection = getHumanChoice()
        const computerSelecion = getComputerChoice()

        console.log(`Human's Score: ${humanScore}`, `Computer's Score: ${computerScore}`)
        roundResult = playRound(humanSelection, computerSelecion)
        if (roundResult.startsWith('You win')) {
            humanScore++
        } else if (roundResult.startsWith('You lose')) {
            computerScore++
        }
        
        console.log(roundResult)
    }

    if (humanScore > computerScore) {
        return `You won! You scored ${humanScore} points against ${computerScore} computer's score`
    } else if (humanScore < computerScore) {
        return `You lost! You scored ${humanScore} points against ${computerScore} computer's score`
    } else {
        return 'It was a draw!'
    }
}
        
