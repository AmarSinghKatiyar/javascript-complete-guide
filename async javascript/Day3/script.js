// const Promise1 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         reject ("Promise 1 resolved");
//     }, 2000);
// })

// const Promise2 = new Promise((resolve,reject)=>{
//     setTimeout(function() {
//         reject ("Promise 2 resolved");
//     }, 3000);
// })

// const Promise3 = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         reject("Promise 3 resolved");
//     }, 4000);
// })

// Promise.any([Promise1,Promise2,Promise3]).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.error(err);
// })



const Promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject("Promise 1 resolved");
    }, 1000);
})

const Promise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Promise 2 resolved");
        console.log("hello promise 2");
    }, 3000);

})

const Promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Promise 3 resolved");
        console.log("hello promise 3");
    }, 5000);

})

Promise.all([Promise1, Promise2, Promise3]).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.error(err);
})



//A Promise that has already started continues executing even if another Promise rejects. The 
// Promise combinator (all, any, race, allSettled) determines what result you receive, not whether 
// the other Promises are automatically stopped.


//"All Promises that have started will continue running. The Promise
//  method determines which results are considered for the final result and 
// when that final result is settled."