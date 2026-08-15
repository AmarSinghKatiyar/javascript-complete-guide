let votesA = 0;
let votesB = 0;

const voteA = document.querySelector(".vote-a");
const voteB = document.querySelector(".vote-b");
const btnA = document.querySelector(".btn-a");
const btnB = document.querySelector(".btn-b");
const winner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset-btn");

function updateWinner() {
    if (votesA > votesB) {
        winner.textContent = "🏆 Candidate A is Winning!";
    } else if (votesB > votesA) {
        winner.textContent = "🏆 Candidate B is Winning!";
    } else {
        winner.textContent = "It's a Tie!";
    }
}

function buttonA() {
    votesA++;
    voteA.textContent = votesA;
    updateWinner();
}

function buttonb() {
    votesB++;
    voteB.textContent = votesB;
    updateWinner();
}



btnA.addEventListener("click", buttonA);
btnB.addEventListener("click", buttonb);
resetBtn.addEventListener("click", function () {
    votesA = 0;
    votesB = 0;

    voteA.textContent = votesA;
    voteB.textContent = votesB;

    winner.textContent = "No Winner Yet";
});
