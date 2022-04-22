function computerPlay () {
    let cpuChoice = Math.floor(Math.random()*3);

    if (cpuChoice == 0) {
        cpuChoice = "rock";
    } else if (cpuChoice == 1) {
        cpuChoice = "paper";
    } else if (cpuChoice == 2) {
        cpuChoice = "scissors";
    }

    return cpuChoice;
}

const computerSelection = computerPlay();
const playSelection = "paper";

function playRound (playerSelection, computerSelection) {
    


}