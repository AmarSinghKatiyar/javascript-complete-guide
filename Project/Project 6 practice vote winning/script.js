let votesA = 0;
let votesB = 0;

// Select elements
const voteA = document.querySelector(".vote-a");
const voteB = document.querySelector(".vote-b");
const btnA = document.querySelector(".btn-a");
const btnB = document.querySelector(".btn-b");
const winner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset-btn");

// Function to update winner
function updateWinner() {
    if (votesA > votesB) {
        winner.textContent = "🏆 Candidate A is Winning!";
    } else if (votesB > votesA) {
        winner.textContent = "🏆 Candidate B is Winning!";
    } else {
        winner.textContent = "It's a Tie!";
    }
}

// Vote for Candidate A
btnA.addEventListener("click", function () {
    votesA++;
    voteA.textContent = votesA;
    updateWinner();
});

// Vote for Candidate B
btnB.addEventListener("click", function () {
    votesB++;
    voteB.textContent = votesB;
    updateWinner();
});

// Reset Election
resetBtn.addEventListener("click", function () {
    votesA = 0;
    votesB = 0;

    voteA.textContent = votesA;
    voteB.textContent = votesB;

    winner.textContent = "No Winner Yet";
});