const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise resolved")
    }, 5000);
})

promise.then(function(rawdata){
    console.log(rawdata);
    
})