let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(val){
    if(val.key===" "){
        h1.textContent = "SPC";
    }
    else{
        h1.textContent = val.key;
    }
})