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