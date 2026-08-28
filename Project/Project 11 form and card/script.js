let form = document.querySelector("form");
let inputs = document.querySelectorAll(".detail input");
let upload = document.querySelector(".uploadbtn");
let file = document.querySelector(".fileinp");
let card = document.querySelector(".card");
let fileName = document.querySelector(".filename");

let profile;


upload.addEventListener("click", () => {
    file.click();
})
file.addEventListener("change", (e) => {
    profile = e.target.files[0];
    if (profile) {
        fileName.textContent = profile.name;
    } else {
        fileName.textContent = "No File Chosen";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = inputs[0].value;
    let email = inputs[1].value;
    let Admission = inputs[2].value;
    let Age = inputs[3].value;
    let dob = inputs[4].value;
    let interviewtime = inputs[5].value;
    let gender = document.querySelector(".gender-group input[name='gender']:checked");
    let gen = gender.id;
    let course = document.querySelector("#Courseid");
    let courses = course.value;
    let address = document.querySelector("#address").value;
    let skills = document.querySelectorAll(".skills input:checked");
    let chooseskills = [];
    skills.forEach((e) => {
        chooseskills.push(e.id);
    })
    card.style.display = "block";

    let img = document.createElement("div");
    img.classList.add("image");

    let image = document.createElement("img");
    image.src=URL.createObjectURL(profile);
    img.appendChild(image);

    card.appendChild(img);

    let nameh3 = document.createElement("h3");
    nameh3.textContent = `Name:${name}`;
    card.appendChild(nameh3);

    let Emailh3 = document.createElement("h3");
    Emailh3.textContent = `Email:${email}`;
    card.appendChild(Emailh3);


    let Addmissionh3 = document.createElement("h3");
    Addmissionh3.textContent = `Admission Password:${Admission}`;
    card.appendChild(Addmissionh3);


    let Ageh3 = document.createElement("h3");
    Ageh3.textContent = `Age:${Age}`;
    card.appendChild(Ageh3);

    
    let dobh3 = document.createElement("h3");
    dobh3.textContent = `Date Of Birth:${dob}`;
    card.appendChild(dobh3);
    
    
    let interviewh3 = document.createElement("h3");
    interviewh3.textContent = `Preferred interview time:${interviewtime}`;
    card.appendChild(interviewh3);
    
    
    let genderh3 = document.createElement("h3");
    genderh3.textContent = `Gender:${gen}`;
    card.appendChild(genderh3);
    
    
    let courseh3 = document.createElement("h3");
    courseh3.textContent = `Course:${courses}`;
    card.appendChild(courseh3);
    
    
    let addressh3 = document.createElement("h3");
    addressh3.textContent = `Address:${address}`;
    card.appendChild(addressh3);
    
    
    let skillsh3 = document.createElement("h3");
    skillsh3.textContent = `Skills:${chooseskills.join(", ")}`;
    card.appendChild(skillsh3);

    form.reset();
})