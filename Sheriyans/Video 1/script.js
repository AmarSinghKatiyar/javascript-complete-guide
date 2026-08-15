// let abc = (...arr) =>{
// 	console.log(arr)
// }
// abc(1,2,3,4,5,6,7)

// let a=[1,2,3,4]
// let b=[...a,5,6,7,8,9]
// console.log(b);


// function abc(val){
//     return function(){
//         return val*val;
//     }
// }
// console.log(abc(10)());

// let abs = () => {
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// abs()();


// (function abc(){
//     let count=0;
//     count++;
//     console.log(count);
//     return count;

// })();
// console.log(count);



//use function expression to access value of iife
// const count = (function abc() {
//     let count = 0;
//     count++;
//     return count;
// })();

// console.log(count);


//let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.pop());
// console.log(arr.push(10));
// console.log(arr.shift());
// console.log(arr.unshift(35));
// arr.splice(5,0,20,30,40)
// console.log(arr);
// let new_arr = arr.slice(2,7)
// console.log(new_arr);
// arr.sort((a,b)=>{
//     return a-b;
// })
// console.log(arr);
// console.log(arr.includes(5));
// console.log(arr.includes(80));
// console.log(arr.reverse());
// console.log(arr.findIndex((val)=>{
//     return val===2;
// }));
// console.log(arr.findIndex((val)=>{
//     return val===80;
// }));
// console.log(arr.length);
// arr.forEach((element) => {
//     console.log(element);
// });
// for(let i of arr){
//     console.log(i);
// }
// let ar=[1,2,3]
// let new_arr1 = ar.map((val)=>{
//     return val*val;
// })
// console.log(new_arr1);

// let ar2=ar.filter((val)=>{
//     return val>2; 
// })
// console.log(ar2);

// let a=ar.reduce((acc,val)=>{
//     return acc+val;
// },0)
// console.log(a);
// let b=arr.some((val)=>{
//     return val>2;
// })
// console.log(b);
// let c=ar.every((val)=>{
//     return val>4;
// })
// console.log(c);

// let num=[1,2,2,3,6,6,5,5,4,9]
// let res=num.find((val)=>{
//     return val>5;
// })
// console.log(`value is ${res}`);

// const obj = {
//     name:"amar",
//     age:29
// };
// const new_obj={...obj};//you can do this but when ther is another object as value in object then we use JSON.parseint(Json.stringfy(obj))
// obj.name="anupam";
// console.log(obj);
// console.log(new_obj);

// let new_obj=Object.assign({roll:28},obj);
// let obj1=Object.assign({},obj);
// console.log(new_obj);
// console.log(obj1);

// //creation
// obj.pet="lion";
// console.log(obj);
// //updating
// obj.pet="dog";
// console.log(obj);
// //deleting
// delete obj.pet;
// console.log(obj);

//getting keys,values
// let key=Object.keys(obj);
// let val=Object.values(obj);
// console.log(key,val);

// //getting key value pair in array form array of array
// let arr=Object.entries(obj);
// console.log(arr);


// let nest_obj = {
//     name:"amar",
//     age:29,
//     locations:{
//         city:"kanpur",
//         sta:"uttarpradesh",
//         country:"india",
//         pincode:208017
//     }
// };

// console.log(nest_obj.location["streat"]);
// console.log(nest_obj?.location?.city); //optional chaining
// console.log(nest_obj.location.city); //it gives error in city but see its pervious since previous is wrong

// console.log(nest_obj);
// let obj3 = {...nest_obj};
// console.log(obj3);
// obj3.locations.country = "us";
// console.log(obj3);
// console.log(nest_obj);
// let str = JSON.stringify(nest_obj);
// console.log(str);
// let obj4=JSON.parse(JSON.stringify(nest_obj));
// console.log(obj4);
// obj4.locations.country = "aus";
// console.log(obj4);
// console.log(nest_obj);

// let {city,sta,country,pincode}=nest_obj.locations;
// console.log(city,sta,country,pincode);

// Object.freeze(nest_obj);
// nest_obj.name="anupam";
// console.log(nest_obj.name);


//getElementsByClassName
// let h1 = document.getElementsByClassName('first');
// console.log(h1);

// //getElementByID
// let h2 = document.getElementById("third");
// console.dir(h2);

// //querySelector
// let h3 = document.querySelector("h3");
// console.dir(h3);

// //querySelectorAll
// let group = document.querySelectorAll("fifth");
// console.dir(group);

// //querySelector using id
// let idselect = document.querySelector("#third");
// console.dir(idselect);


// //querySelector using class
// let classselect = document.querySelector(".fifth1");
// console.dir(classselect);

// let image = document.querySelector("img");
// image.setAttribute("src","https://plus.unsplash.com/premium_photo-1767615278643-3bc025bf74cb?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
// image.setAttribute("width",'200px');

// console.log(image.getAttribute("src"));


// let i1 = document.querySelector(".a");
// i1.setAttribute("src","https://images.unsplash.com/photo-1784384631378-29f7b57c6d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D");
// i1.setAttribute("width",'200px');

// let i2 = document.querySelector(".b");
// i2.setAttribute("src","https://images.unsplash.com/photo-1773332585754-f1436987743b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D");
// i2.setAttribute("width",'200px');

// let i3 = document.querySelector(".c");
// i3.setAttribute("src","https://plus.unsplash.com/premium_photo-1785023406348-f7a9d067703d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D");
// i3.setAttribute("width",'200px');

// let i4 = document.querySelector(".d");
// i4.setAttribute("src","https://images.unsplash.com/photo-1784704564341-d09f0023d30f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D");
// i4.setAttribute("width",'200px');

// let i5 = document.querySelector(".e");
// i5.setAttribute("src","https://images.unsplash.com/photo-1784931370020-41177270aae9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D");
// i5.setAttribute("width",'200px');


// let change = document.querySelector(".b1");
// let reset = document.querySelector(".b2");

// function changebg(){
//     if(document.body.style.backgroundColor == "red"){
//         document.body.style.backgroundColor = "white";
//     }
//     else{
//         document.body.style.backgroundColor = "red";
//     }
// }
// function resetbg(){
//     document.body.style.backgroundColor = "white";
// }

// change.addEventListener("click",changebg);
// reset.addEventListener("click",resetbg);








