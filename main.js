window.onload = function () {
    playGame();
    }


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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Draw!';
    } else if ((humanChoice === 'Rock' &&  computerChoice === 'Scissors')
            || (humanChoice === 'Paper' &&  computerChoice === 'Rock')
            || (humanChoice === 'Scissors' &&  computerChoice === 'Paper')) {
        return `You won a round! ${humanChoice} beats ${computerChoice}`
    } else {
        return `You lost a round! ${computerChoice} beats ${humanChoice}`;
    }
}


function getButtonID(event) {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    return event.target.id;
}


function updateRound(roundNumber) {
    const round = document.querySelector('#round-section');
    round.textContent = `Round ${roundNumber}`
    return;
}


function updateHumanScore(humanScore) {
    const score = document.querySelector('#human-score');
    score.textContent = (`Human's Score: ${humanScore}`);
    return;
}


function updateComputerScore(computerScore) {
    const score = document.querySelector('#computer-score');
    score.textContent = (`Computer's Score: ${computerScore}`);
    return;
}


function updateResults (roundResult) {
    const result = document.querySelector('#results');
    result.textContent = roundResult;
    return;
}


function scoreChecker(humanScore, computerScore) {
    const maxScore = 5;

    if (humanScore >= maxScore) {
        const h_score = document.querySelector('#results');
        h_score.textContent = `You got ${humanScore} Points! Well Played.`;
        return true
    } else if (computerScore >= maxScore) {
        const c_score = document.querySelector('#results');
        c_score.textContent = `Computer got ${computerScore} Points. Better luck next time.`;
        return true
    } else {
        return false;
    }
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 1;
    let scoreOver5 = false;

    const wrapper = document.querySelector('#buttons');

    roundResult = wrapper.addEventListener('click', function(event) {
        const humanSelection = getButtonID(event);
        const computerSelection = getComputerChoice();
        
        if (scoreOver5 === true) {
            humanScore = 0;
            computerScore = 0;
            roundNumber = 1;
            updateComputerScore(computerScore);
            updateHumanScore(humanScore);
            updateRound(roundNumber);
            updateResults('Restarted Game')
            scoreOver5 = false;
            
        } else {
            const result = playRound(humanSelection, computerSelection);
            scoreChecker(humanScore, computerScore)
            console.log(result);
            
            if (result === '' || result === undefined) {
                return ''
            } else if (result.includes('won')) {
                humanScore++;
                updateHumanScore(humanScore);
                updateRound(roundNumber++);
                updateResults(result);
                scoreOver5 = scoreChecker(humanScore, computerScore)
                return result;
            } else if (result.includes('lost')) {
                computerScore++;
                updateComputerScore(computerScore);
                updateRound(roundNumber++);
                updateResults(result);
                scoreOver5 = scoreChecker(humanScore, computerScore)
                return result;
            } else {
                updateResults(result);
            }
        }
    })
}
