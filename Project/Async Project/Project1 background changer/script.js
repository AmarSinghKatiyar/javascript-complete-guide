let start = document.querySelector(".start");
let stopbtn = document.querySelector(".stop");

const hex="ABCDEF0123456789";

let interval;
function changecolor(){
    interval = setInterval(()=>{
        let color="#";
        for(let i=0;i<6;i++){
            color+=hex[Math.floor(Math.random()*16)]
            document.body.style.backgroundColor=color
        }
    },2000)
}

start.addEventListener("click",changecolor);

stopbtn.addEventListener("click",function(){
    clearInterval(interval);
})
    