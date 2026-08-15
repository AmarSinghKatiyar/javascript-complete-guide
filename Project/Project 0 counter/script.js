let head = document.querySelector(".heading");
let dec = document.querySelector(".b1");
let res = document.querySelector(".b2");
let inc = document.querySelector(".b3");


let count =0;
function decrease(){
    if(count>0){
        count--;
    }
    head.textContent = `${count}`
}
function increase(){
    count++;
    head.textContent = `${count}`
}
function reset(){
    count=0;
    head.textContent = `${count}`
}

inc.addEventListener("click",increase);
dec.addEventListener("click",decrease);
res.addEventListener("click",reset)
