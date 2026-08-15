{/* <div class="main">
        <div class="upper">
            <h1>Guess the Number</h1>
            <h3>Guess a number between 1 to 100</h3>
        </div>
        <div class="middle"><input class="take" type="number" placeholder="guess no..."></div>
        <div class="lower">
            <div class="btn">
                <button class="check">Guess</button>
                <button class="reset">Reset</button>
            </div>
        </div>
        <h2 class="result">Start</h2>
    </div> */}

let num = document.querySelector(".take");
let guess = document.querySelector(".check");
let reset = document.querySelector(".reset");
let result = document.querySelector(".result");

let random = Math.floor(Math.random()*100)+1;

function play(){
    let number = Number(num.value);
    if(number === random){
        result.textContent = "Value match you won";
    }
    else{
        if(number>random){
            result.textContent = "Too high";
        }
        else{
            result.textContent = "to low";
        }
    }
}

function newgame(){
    random=Math.floor(Math.random()*100)+1
    num.value="";
    result.textContent = "start";
}

guess.addEventListener("click",play);
reset.addEventListener("click",newgame);