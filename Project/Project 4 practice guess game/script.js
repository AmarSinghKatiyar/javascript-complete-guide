// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Guess The Number</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

// <div class="container">

//     <h1>Guess The Number</h1>

//     <p>Guess a number between 1 and 100</p>

//     <input
//         type="number"
//         class="guess-input"
//         placeholder="Enter your guess"
//     >

//     <br><br>

//     <button class="check-btn">
//         Check
//     </button>

//     <button class="reset-btn">
//         Reset
//     </button>

//     <h2 class="message">
//         Start Guessing...
//     </h2>

// </div>

// <script src="script.js"></script>

// </body>
// </html>


let input = document.querySelector(".guess-input");
let check = document.querySelector(".check-btn");
let reset = document.querySelector(".reset-btn");
let output = document.querySelector(".message");

let random = Math.floor(Math.random()*100)+1

function checkval(){

    let number = Number(input.value);

    if(number===random){
        output.textContent = "you won !!!";
    }
    else{
        if(random<number){
            output.textContent = "Too High";
        }
        else{
            output.textContent = "Too Low";
        }
    }
}

function resetgame(){
    random = Math.floor(Math.random()*100)+1;
    input.value="";
    output.textContent = "Play Game Again";
}

check.addEventListener("click",checkval);
reset.addEventListener("click",resetgame);