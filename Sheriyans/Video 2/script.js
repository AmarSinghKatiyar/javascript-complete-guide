//DAY 1

// // createElement first then select where to add then append or prepend it as per need
// // for selection of place other document.body.append or prepend() after body we use . to directicion and name for tag like document.body.header etc

// let h1=document.createElement("h1");
// h1.textContent = "hello my name amar";
// document.body.append(h1);//script se pahale
// document.body.prepend(h1);//script se baad
// h1.remove();
// console.log(h1);


//--------------------------------------------------------------------------------------------------------------------------------------------

//DAY 2

//adding css simple 

// let h1 = document.querySelector(".a");
// let h2 = document.querySelector(".b");

// h1.style.color = "red";
// h1.style.backgroundColor = "cyan";
// h2.style.color = "green";

//adding a class in html element using js to apply css like hululu
// let h1 = document.querySelector("h1");
// h1.classList.add("c");//adding class c in h1 additional class
// h1.classList.remove("a");//removing class a from h1 previous class
// h1.classList.toggle("d");//if class d is in h1 themn it remove or if not present then simply add it


//Practice
// let li = document.querySelectorAll("li");//use querySelectorAll
// li.forEach(function(val){
//     console.log(val.value);
    
// })
// function col(){
//     h1.style.color = "aqua";
// }


// let h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter",col);
// h1.removeEventListener("mouseleave",col);

// let int = document.querySelector("input");
// int.addEventListener("input",function(val){
//     if(val.data !== null){
//         // console.log(val.target.value);
//         console.log(val.data);
        
//     }
// })


// <div class="main">
//         <h3 class="head">Select Your Device</h3>
//         <select  id="choose">
//             <option value="Choose device">Choose Your Device</option>
//             <option value="Smsung">Samsung</option>
//             <option value="Mi">Xiomi</option>
//             <option value="Apple">I Phone</option>
//             <option value="Realme">Realme Pro</option>
//             <option value="Moto">Moto g64</option>
//         </select>
        
//     </div>

// let head = document.querySelector(".head");
// let select = document.querySelector("#choose");

// select.addEventListener("change",function(val){
//     head.textContent = `${val.target.value} Device Selected`;
// })

// let main = document.querySelector(".main");

// main.addEventListener("mouseenter",()=>{
//     main.style.backgroundColor = "#4682B4";
// })
// main.addEventListener("mouseleave",()=>{
//     main.style.backgroundColor = "aquamarine";
// })

// window.addEventListener("mousemove",(val)=>{
//     main.style.top = val.clientY+"px";
//     main.style.left = val.clientX+"px";
// })

document.querySelector(".nav").addEventListener("click",function(){
    alert("button clicked run event bubbling") // this is called event bubbling
});