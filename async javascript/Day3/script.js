const Promise1 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject ("Promise 1 resolved");
    }, 2000);
})

const Promise2 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        reject ("Promise 2 resolved");
    }, 3000);
})

const Promise3 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        reject("Promise 3 resolved");
    }, 4000);
})

Promise.any([Promise1,Promise2,Promise3]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.error(err);
})