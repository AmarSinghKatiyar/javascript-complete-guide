let nameint = document.querySelector("#name");
let emailint = document.querySelector("#email");
let courseint = document.querySelector("#course");
let ageint = document.querySelector("#age");
let form = document.querySelector("form");
let emailcard = document.querySelector("#cardEmail");
let namecard = document.querySelector("#cardName");
let agecard = document.querySelector("#cardAge");
let coursecard = document.querySelector("#cardCourse");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    namecard.textContent = nameint.value;
    emailcard.textContent = emailint.value;
    agecard.textContent = ageint.value;
    coursecard.textContent = courseint.value;
    
})