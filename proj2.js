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

function playRound() {
    if (userChoice === computerChoice)
    {
        tiesScore = tiesScore++; tiesScore++; gameTies.textContent = tiesScore;
    }
    else if (userChoice === "Rock")
    {
        if (computerChoice === "Scissors")
        {
            userScores = userScores++; userScores++; userChoiceW.textContent = userScores;
        }
    }
    else if (computerChoice === "Paper")
    {
        computerScores = computerScores++; computerScores++; computerChoiceL.textContent = computerScores;
    }
    else if (userChoice === "Scissors")
    {
        if (computerChoice === "Rock")
        {
            computerScores = computerScores++; computerScores++; computerChoiceL.textContent = computerScores;
        }
    }
    else if (computerChoice === "Paper")
    {
        userScores = userScores++; userScores++; userChoiceW.textContent = userScores;
    }
    return (userChoice, computerChoice);
}