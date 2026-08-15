let int1 = document.querySelector("#nm");
let int2 = document.querySelector("#em");
let int3 = document.querySelector("#ps");
let sp = document.querySelector("span");
let box = document.querySelector(".box");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2")

let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form submitted");
    
    if(int1.value.length<5){
        sp.style.display = "block";
        return;
    }
    else{
        sp.style.display = "none";
    }
    box1.textContent = `Name :- ${int1.value}`;
    box2.textContent = `Email :- ${int2.value}`;
    box.style.display="block";

})


// <div class="box">
//         <h1 class="box1">Name:-</h1>
//         <h1 class="box2">Email:-</h1>
//     </div>


