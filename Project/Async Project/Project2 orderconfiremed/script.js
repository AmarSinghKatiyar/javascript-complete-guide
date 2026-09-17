// function orderebooked(callback){
//     setTimeout(() => {
//         console.log("ordere booked");
//         callback();
//     }, 2000);
// }

// function vieworder(callback){
//     setTimeout(() => {
//         console.log("view order");
//         callback();
//     }, 2000);
// }

// function inventaroyanalysis(callback){
//     setTimeout(() => {
//         console.log("Inventaroy analysis");
//         callback();
//     }, 2000);
// }

// function orderconfirmed(){
//     setTimeout(() => {
//         console.log("order confirmed");
//     }, 2000);
// }

// orderebooked(()=>{
//     vieworder(()=>{
//         inventaroyanalysis(()=>{
//             orderconfirmed();
//         });
//     });
// });

// promises
const firstpromises = new Promise(function(resolve,reject){
    // console.log("first promises initiated")
    let error=true;
    if(!error){
        resolve({"name":"amar"})
    }
    else{
        reject("something went wrong");
    }
})
firstpromises.then(function(obj){
    console.log("promises resolved");
    console.log(obj);
    return obj.name;
}).then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err); 
})
.finally(function(){
    console.log("complete whole promises");
})

// // console.log(firstpromises);
// firstpromises.then(function(){
//     console.log("promises completed");
// }).catch(function(){
//     console.log("promises failed");
    
// })
