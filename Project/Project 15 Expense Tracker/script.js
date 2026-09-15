let balance = 0;
let incomes = 0;
let expense = 0;


let bl = document.querySelector("#balance");
let inc = document.querySelector("#income");
let ex = document.querySelector("#expense");
let amo = document.querySelector("#amount");
let form = document.querySelector("form");
let type = document.querySelector("#type");
let transactionList = document.querySelector("#transactionList");
let clearAll = document.querySelector("#clearAll");

let arr = [];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let amount = Number(amo.value);
    if (type.value == "income") {
        incomes = incomes + amount;
        inc.textContent ="₹"+incomes;
    }
    else {
        expense = expense + amount;
        ex.textContent = "₹"+expense;
    }
    balance = incomes - expense;
    bl.textContent = "₹"+balance;

    let description = document.querySelector("#description").value;
    let category = document.querySelector("#category").value;

    let obj = {
        descr:description,
        categ:category,
        am:amount,
        ty:type.value
    }

    arr.push(obj);
    console.log(arr);
    

    let d1 = document.createElement("div");
    d1.classList.add("transaction");

    let info = document.createElement("div");
    info.classList.add("transaction-info");

    let desc = document.createElement("div");
    desc.classList.add("transaction-description");
    desc.textContent = description;

    let cate = document.createElement("div");
    cate.classList.add("transaction-category");
    cate.textContent = category;

    info.appendChild(desc);
    info.appendChild(cate);

    let right = document.createElement("div");
    right.classList.add("transaction-right");

    let amountElement = document.createElement("div");
    amountElement.classList.add("transaction-amount");

    amountElement.textContent =
        (type.value === "income" ? "+₹" : "-₹") + amount;

    amountElement.classList.add(
        type.value === "income" ? "income" : "expense"
    );


    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";


    right.appendChild(amountElement);
    right.appendChild(deleteBtn);

    d1.appendChild(info);
    d1.appendChild(right);

    transactionList.appendChild(d1);

    clearAll.addEventListener("click", function () {
        transactionList.textContent = "";
        balance = 0;
        incomes = 0;
        expense = 0;
        inc.textContent = "₹0";
        ex.textContent = "₹0";
        bl.textContent = "₹0";

    })
    deleteBtn.addEventListener("click",function(){
        deleteBtn.closest(".transaction").remove();
    })

})

