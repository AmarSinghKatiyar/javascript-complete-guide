// // Order book -> Payment Conformation -> View Order Summary -> Inventory Update

// function bookOrder(callback) {
//   setTimeout(function () {
//     console.log("Order booked");
//     callback();
//   }, 2000);
// }

// function paymentConformation(callback) {
//   setTimeout(function () {
//     console.log("Payment is confirmed");
//     callback();
//   }, 2000);
// }

// function viewOrderSummary(callback) {
//   setTimeout(function () {
//     console.log("View Order Summary");
//     callback();
//   }, 2000);
// }

// function inventoryUpdate() {
//   setTimeout(function(){
//     console.log("Inventory Update");
//   },2000)
// }

// bookOrder()
// paymentConformation()
// viewOrderSummary()
// inventoryUpdate()

// // callbacks

// bookOrder(() => {
//   paymentConformation(function () {
//     viewOrderSummary(() => {
//       inventoryUpdate();
//     });
//   });
// });

// Promises

//creating a promise
// const firstPromise = new Promise(function (resolve, reject) {
//   console.log("Promise Initiated");
//   let error = true;
//   if (!error) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// firstPromise
//   .then(function () {
//     console.log("Promise completed");
//   })
//   .catch(function () {
//     console.log("Promise Failed");
//   });

// another promise

// const oneMorePromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({name : "Mohan",password:"123"});
//     } else {
//       reject("Something went wrong");
//     }
//   }, 2000);
// });


// oneMorePromise.then(function(obj){
//   console.log("Promise fulfilled")
//   console.log(obj)
// }).catch(function(err){
//   console.log(err)
// })


// oneMorePromise.then(function(obj){
//   console.log(obj)
//   return obj.password
// }).then(function(password){
//   console.log(password)
// })
// .catch(function(err){
//   console.log(err)
// })
// .finally(function(){
//   console.log("Promise either resolved or rejected")
// })















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
