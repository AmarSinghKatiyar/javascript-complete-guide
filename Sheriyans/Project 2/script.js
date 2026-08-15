let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    inp.click();
})
inp.addEventListener("change",(val)=>{
    let filename = val.target.files[0];
    if(filename){
        btn.style.padding = "15px";
        btn.textContent = filename.name;
    }    
})