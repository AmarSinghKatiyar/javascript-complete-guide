// use of this keyword also called dogala special keyword

// global use = window
// function use = window
// addEventListener = element on which event is occured (<h1>hello</h1>)
// inside method or function used inside objects we sue this keyword gives = same object

// function and method
// all function not method but all method are function  inner cirecle method and outter function

// console.log(this);

// function hello(){
//     console.log(this);
    
// }
// hello();

// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log(this); //arrow function take parent this value and normal function take original this vbalue
// })

// btn.addEventListener("click",()=>{
//     console.log(this);  
// })

// let student = {
//     name:"amar",
//     age:21,
//     hello:function(){
//         console.log(this);
//     }
// }

// student.hello();

// let student = {
//     name:"amar",
//     age:21,
//     hello:()=>{
//         console.log(this);
//     }
// }

// student.hello();

//OOPS O STAND FOR OBJECT AND OBJECT CONTAINS 2 THINGS PROPERTIES AND METHOD 
//PROBLEM = GLOBAL VARIABLE POLUTION AND 
//SOLUTION IS NAMESPACE AMANGEMENT

// let laptop={
//     name:"lenovo",
//     ssd:512,
//     charger:135
// };

// let mobile={
//     name:"realme",
//     storage:64,
//     charger:33
// };

// function hello(ssd,charger){
//     console.log(`heloo i have ${this.name} having ssd= ${ssd} and charger ${charger}`);
// }

// hello.call(mobile,64,33);
// hello.apply(mobile,[64,33]);
// let b=hello.bind(laptop,512,135);
// b();

//inthis call function first parameter is always object then next are parameter

// let b=hello.bind(laptop);
// b();
// console.log(b);


// console.log(laptop.name,laptop.charger);
// console.log(mobile.name,mobile.charger);




//WHAT TO LEARN AND PRACTICE FOR INTERVIEW MORE
// EVENT PROPOGATION(BUBBLIBG AND CAPTURING)
// PROTOTYPE IN JS
// PROMISES
// CALLBACK AND CALLBACK HELL
// DEBOUNCING AND TROTTLING
// BASICS OF APIS
// EXECUTION CONTEXT AND CALL BACK STACK
// LOCAL Storage AND SESSION Storage

//async js and sync js
//event loop
//execution context & callstack

//best(async and await)
//promises(better)
//to come out form callback hell we use promises and async and await
//wrost(callback) what is callback hell

//promises :-1. resolve 2. reject 3. pending  .then when something is sure to complete then its code written inside .then and when something 
// is rejected the code written inside .catch also there is a .finally

//debouncing and trottling code with explanation
//api and method to fetch
//prototype

//event propogtion means capturing or bubbling 3 argument in eventlistner
//eventlistner take 3 argeument by default 3 argument is false

//capturing->target->bubbling
