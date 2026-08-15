// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <div class="main">
//         <form class="form">
//             <input type="text">
//             <input type="text">
//             <input type="text">
//             <input type="text">
//             <button class="submitbtn">Submit</button>
//         </form>
//     </div>

//     <div class="card">
//         <div class="profile"><img src="https://images.unsplash.com/photo-1785631829488-1042b6e97f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="."></div>
//         <h2>name</h2>
//         <h3>profession</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatem?</p>
//     </div>

//     <script src="script.js"></script>
// </body>

// </html>

let form = document.querySelector(".fom");
let inp = document.querySelectorAll("input");
let main = document.querySelector(".main");


form.addEventListener("submit",function(e){
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src",inp[0].value);

    profile.appendChild(img);
    card.appendChild(profile);

    let h2 = document.createElement("h2");
    h2.textContent = inp[1].value;
    card.appendChild(h2);

    let h3 = document.createElement("h3");
    h3.textContent = inp[2].value;
    card.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = inp[3].value;
    card.appendChild(p);
    main.appendChild(card);
    


    inp.forEach((val)=>{
        if(val!=="submit"){
            val.value = "";
        }
    })
})