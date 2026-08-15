let main = document.querySelector(".main");

window.addEventListener("mousemove",(val)=>{
    main.style.top = val.clientY+"px";
    main.style.left = val.clientX+"px";
})