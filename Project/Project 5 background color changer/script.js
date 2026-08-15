let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");

function redcolor(){
    document.body.style.backgroundColor = "red";
}

function greencolor(){
    document.body.style.backgroundColor = "greenyellow";
}

function bluecolor(){
    document.body.style.backgroundColor = "royalblue";
}

function yellowcolor(){
    document.body.style.backgroundColor = "yellow";
}

function aquacolor(){
    document.body.style.backgroundColor = "aqua";
}



b1.addEventListener("click",redcolor);
b2.addEventListener("click",greencolor);
b3.addEventListener("click",bluecolor);
b4.addEventListener("click",yellowcolor);
b5.addEventListener("dblclick",aquacolor);