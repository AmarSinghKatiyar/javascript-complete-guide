const n1 = document.querySelector(".num1");
const n2 = document.querySelector(".num2");

const add = document.querySelector(".b1");
const sub = document.querySelector(".b2");
const mul = document.querySelector(".b3");
const div = document.querySelector(".b4");

const resultBtn = document.querySelector(".result");
const result = document.querySelector(".res");

let operation = "";

function selectAdd() {
    operation = "+";
}

function selectSub() {
    operation = "-";
}

function selectMul() {
    operation = "*";
}

function selectDiv() {
    operation = "/";
}

function showResult() {
    let number1 = Number(n1.value);
    let number2 = Number(n2.value);

    if (operation === "+") {
        result.textContent = number1 + number2;
    }
    else if (operation === "-") {
        result.textContent = number1 - number2;
    }
    else if (operation === "*") {
        result.textContent = number1 * number2;
    }
    else if (operation === "/") {
        if (number2 === 0) {
            result.textContent = "Cannot divide by 0";
        } else {
            result.textContent = number1 / number2;
        }
    }
}

add.addEventListener("click", selectAdd);
sub.addEventListener("click", selectSub);
mul.addEventListener("click", selectMul);
div.addEventListener("click", selectDiv);

resultBtn.addEventListener("click", showResult);