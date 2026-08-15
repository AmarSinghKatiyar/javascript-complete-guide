let inp = document.querySelector("input");
let button = document.querySelector("button");
let form = document.querySelector("form");
let dynamiccard = document.querySelector(".dynamiccard");

todos = []


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todo = {
        val: inp.value
    }
    todos.push(todo);
    display();
    form.reset();
    // inp.value="";
})

function display() {
    dynamiccard.innerHTML = "";

    todos.forEach((val, index) => {
        let card = document.createElement("div");
        card.classList.add("card");

        let p = document.createElement("p");
        let deletebtn = document.createElement("button");

        p.textContent = val.val;
        deletebtn.textContent = "Delete";

        deletebtn.classList.add("deletebtn");

        card.append(p, deletebtn);
        dynamiccard.append(card);


        deletebtn.addEventListener("click", function () {
            deleteitem(index);
        })
    });
}

function deleteitem(index) {
    todos.splice(index, 1);
    display();

}