let form = document.querySelector("form");

let inputs = document.querySelectorAll(".detail input");

let upload = document.querySelector(".uploadbtn");
let file = document.querySelector(".fileinp");
let fileName = document.querySelector(".filename");

let maincard = document.querySelector(".maincard");

let profile;


/* Upload Photo */

upload.addEventListener("click", () => {
    file.click();
});


file.addEventListener("change", (e) => {

    profile = e.target.files[0];

    if (profile) {
        fileName.textContent = profile.name;
    } else {
        fileName.textContent = "No File Chosen";
    }

});


/* Form Submit */

form.addEventListener("submit", (e) => {

    e.preventDefault();


    /* Get form values */

    let name = inputs[0].value;
    let email = inputs[1].value;
    let admission = inputs[2].value;
    let age = inputs[3].value;
    let dob = inputs[4].value;
    let interviewtime = inputs[5].value;


    /* Gender */

    let gender = document.querySelector(
        ".gender-group input[name='gender']:checked"
    );

    let gen = gender.value;


    /* Course */

    let course = document.querySelector("#Courseid");

    let courses = course.value;


    /* Address */

    let address = document.querySelector("#address").value;


    /* Skills */

    let skills = document.querySelectorAll(
        ".skills input:checked"
    );

    let chooseskills = [];

    skills.forEach((skill) => {
        chooseskills.push(skill.value);
    });


    /* Create Card */

    let card = document.createElement("div");

    card.classList.add("card");


    /* Create Image */

    let imageBox = document.createElement("div");

    imageBox.classList.add("image");


    let image = document.createElement("img");


    if (profile) {

        image.src = URL.createObjectURL(profile);

    } else {

        image.src =
            "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500";

    }


    image.alt = "Student Photo";

    imageBox.appendChild(image);

    card.appendChild(imageBox);


    /* Create Red Section */

    let cardinner = document.createElement("div");

    cardinner.classList.add("cardinner");


    /* Name */

    let nameh3 = document.createElement("h3");

    nameh3.textContent = "Name: " + name;

    cardinner.appendChild(nameh3);


    /* Email */

    let emailh3 = document.createElement("h3");

    emailh3.textContent = "Email: " + email;

    cardinner.appendChild(emailh3);


    /* Password */

    let admissionh3 = document.createElement("h3");

    admissionh3.textContent =
        "Admission Password: " + admission;

    cardinner.appendChild(admissionh3);


    /* Age */

    let ageh3 = document.createElement("h3");

    ageh3.textContent = "Age: " + age;

    cardinner.appendChild(ageh3);


    /* Date */

    let dobh3 = document.createElement("h3");

    dobh3.textContent = "Date Of Birth: " + dob;

    cardinner.appendChild(dobh3);


    /* Interview */

    let interviewh3 = document.createElement("h3");

    interviewh3.textContent =
        "Preferred Interview Time: " + interviewtime;

    cardinner.appendChild(interviewh3);


    /* Gender */

    let genderh3 = document.createElement("h3");

    genderh3.textContent = "Gender: " + gen;

    cardinner.appendChild(genderh3);


    /* Course */

    let courseh3 = document.createElement("h3");

    courseh3.textContent = "Course: " + courses;

    cardinner.appendChild(courseh3);


    /* Address */

    let addressh3 = document.createElement("h3");

    addressh3.textContent = "Address: " + address;

    cardinner.appendChild(addressh3);


    /* Skills */

    let skillsh3 = document.createElement("h3");

    if (chooseskills.length > 0) {

        skillsh3.textContent =
            "Skills: " + chooseskills.join(", ");

    } else {

        skillsh3.textContent =
            "Skills: No skills selected";

    }

    cardinner.appendChild(skillsh3);


    /* Add Red Section */

    card.appendChild(cardinner);


    /* Add Card */

    maincard.appendChild(card);


    /* Reset Form */

    form.reset();

    fileName.textContent = "No File Chosen";

    profile = null;

});