const apiButton = document.querySelector("#apiButton");
const status = document.querySelector("#status");
const count = document.querySelector("#count");

let counter = 0;
let lastCountTime = 0;

function apiCall() {
  counter++
  count.textContent = counter
  console.log("Api called");

}

apiButton.addEventListener("click", function () {
  let currentTime = Date.now();
  //console.log(currentTime)
  if (currentTime - lastCountTime >= 2000) {
    apiCall();
    lastCountTime = currentTime
  }else{
    console.log("API NOT Called")
  }
});

