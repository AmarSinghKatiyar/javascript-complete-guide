let btn = document.querySelector("#generateBtn");
let setu = document.querySelector("#setup");
let punch = document.querySelector("#punchline")

btn.addEventListener("click",function(){
    fetch("https://official-joke-api.appspot.com/random_joke").then(function(rawdata){
        return rawdata.json();
    }).then(function(data){
        setu.textContent = data.setup;
        punch.textContent = data.punchline;
    }).catch(function(err){
        setu.textContent = err;
        punch.textContent = "😴😴😴😴😴😴😴😴😴😴😴";
    })
})