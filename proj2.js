let userScores = 0;
let computerScores = 0;
let tiesScore = 0;

let computerChoice;
let userChoice;

const userChoiceW = document.getElementById("userChoiceW");
const gameTies = document.getElementById("gameTies");
const computerChoiceL = document.getElementById("computerChoiceL");

const buttonChoices = document.querySelectorAll("button");

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    generateComputerChoice()
    playRound()
}))

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "Rock"
    }
    if (randomNumber === 1) {
        computerChoice = "Paper"
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors"
    }
}