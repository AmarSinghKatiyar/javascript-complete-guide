console.log("hello start");

setTimeout(() => {
    console.log("i am a timeer");
}, 0);

//console.log("now its time to end");\

// hello start
// script.js:7 now its time to end
// script.js:4 i am a timeer

const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("Promise resolved");
    }, 0);
});

promise.then((data) => {
    console.log(data);
});

console.log("End");

// hello start
// script.js:23 End
// script.js:4 i am a timeer
// script.js:20 Promise resolved