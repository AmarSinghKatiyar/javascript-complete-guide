// const url =
//         `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchValue)}`;

let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let statusText = document.querySelector("#statusText");
let timer = document.querySelector("#timer");

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let time = 5;
let interval;

start.addEventListener("click", function () {
    red.classList.add("active");
    statusText.textContent = "STOP";
    timer.textContent = time;

    clearInterval(interval);

    interval = setInterval(() => {
        time--;
        timer.textContent = time;

        if (time === 0) {
            clearInterval(interval);
            red.classList.remove("active");

            yellow.classList.add("active");
            statusText.textContent = "READY";
        }
    }, 1000);
});

stop.addEventListener("click", function () {
    clearInterval(interval);
});

reset.addEventListener("click", function () {
    clearInterval(interval);

    time = 5;
    timer.textContent = time;

    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.remove("active");

    statusText.textContent = "STOP";
});