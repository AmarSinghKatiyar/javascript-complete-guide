# JavaScript Fundamentals & DOM Manipulation

A beginner-friendly JavaScript repository covering the most commonly used JavaScript concepts, ES6 features, Array methods, Objects, Closures, DOM Manipulation, and Event Handling.

---

# 📚 Table of Contents

1. Introduction
2. ES6 Features
3. Functions
4. Rest Operator
5. Spread Operator
6. Closures
7. Immediately Invoked Function Expression (IIFE)
8. Array Methods
9. Object Methods
10. Deep Copy vs Shallow Copy
11. JSON Methods
12. Optional Chaining
13. DOM Manipulation
14. Event Handling
15. Best Practices

---

# Introduction

This repository contains examples of modern JavaScript concepts used in interviews and real-world applications.

Topics covered:

- Variables
- Functions
- Arrow Functions
- Closures
- Rest Operator
- Spread Operator
- Arrays
- Objects
- JSON
- DOM
- Event Handling
- ES6 Features

---

# JavaScript Functions

Functions are reusable blocks of code designed to perform a specific task.

Example:

```javascript
function greet(name){
    console.log("Hello " + name);
}

greet("Amar");
```

Output

```
Hello Amar
```

---

## Function Declaration

Syntax

```javascript
function functionName(parameters){
    // code
}
```

Example

```javascript
function square(num){
    return num*num;
}

console.log(square(5));
```

Output

```
25
```

Advantages

- Hoisted
- Easy to read
- Reusable

---

## Function Expression

Functions can also be stored inside variables.

Example

```javascript
const square = function(num){
    return num*num;
};

console.log(square(5));
```

Output

```
25
```

Difference from Function Declaration

| Function Declaration | Function Expression |
|----------------------|---------------------|
| Hoisted | Not hoisted completely |
| Declared using function keyword | Stored inside variable |
| Can call before declaration | Cannot call before declaration |

---

# Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing functions.

Syntax

```javascript
const functionName = () => {

}
```

Example

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

Output

```
Hello
```

Example with Parameters

```javascript
const add = (a,b)=>{
    return a+b;
};

console.log(add(5,7));
```

Output

```
12
```

---

# Rest Operator (...)

The Rest Operator collects multiple arguments into a single array.

Syntax

```javascript
function demo(...args){

}
```

Example

```javascript
let abc = (...arr)=>{
    console.log(arr);
}

abc(1,2,3,4,5,6,7);
```

Output

```
[
 1,
 2,
 3,
 4,
 5,
 6,
 7
]
```

Explanation

```
1
2
3
4
5
6
7
```

are collected into

```
[
1,
2,
3,
4,
5,
6,
7
]
```

So

```
arr becomes an array.
```

Advantages

- Accept unlimited parameters
- Cleaner code
- Useful for utility functions

Example

```javascript
function sum(...numbers){

    let total = 0;

    for(let num of numbers){
        total += num;
    }

    return total;

}

console.log(sum(10,20,30));
```

Output

```
60
```

---

# Spread Operator (...)

Spread Operator expands arrays or objects.

Example

```javascript
let a = [1,2,3,4];

let b = [...a,5,6,7,8,9];

console.log(b);
```

Output

```
[
1,
2,
3,
4,
5,
6,
7,
8,
9
]
```

Explanation

```
...a
```

copies every element individually.

Equivalent to

```
1
2
3
4
```

Advantages

- Copy arrays
- Merge arrays
- Clone objects
- Pass array into functions

Example

```javascript
let first=[1,2];

let second=[3,4];

let result=[...first,...second];

console.log(result);
```

Output

```
[1,2,3,4]
```

---

# Higher Order Function

A Higher Order Function is a function that:

- Takes another function as an argument
- Returns another function

Example

```javascript
function abc(val){

    return function(){

        return val*val;

    }

}

console.log(abc(10)());
```

Output

```
100
```

Explanation

First call

```javascript
abc(10)
```

returns

```javascript
function(){
    return 100;
}
```

Then

```javascript
()
```

calls that returned function.

Hence

```
100
```

---

# Closures

A Closure is a function that remembers variables from its outer function even after the outer function has finished execution.

Example

```javascript
let abs = ()=>{

    let count = 0;

    return function(){

        count++;

        console.log(count);

    }

}

const counter = abs();

counter();
counter();
counter();
```

Output

```
1
2
3
```

Why?

The inner function still has access to

```javascript
count
```

because JavaScript creates a closure.

Real-world Uses

- Counters
- Private Variables
- Timers
- Event Listeners
- Data Encapsulation

---

# Immediately Invoked Function Expression (IIFE)

An IIFE runs immediately after it is created.

Syntax

```javascript
(function(){

})();
```

Example

```javascript
(function(){

    console.log("Executed");

})();
```

Output

```
Executed
```

Your Example

```javascript
(function abc(){

    let count=0;

    count++;

    console.log(count);

})();
```

Output

```
1
```

Explanation

The function executes immediately and cannot be called again.

---

# Accessing IIFE Return Value

Example

```javascript
const count = (function(){

    let value=0;

    value++;

    return value;

})();

console.log(count);
```

Output

```
1
```

Why?

The returned value is stored inside

```javascript
count
```

instead of being lost.

---

# Summary

In this section you learned:

- ✅ Function Declaration
- ✅ Function Expression
- ✅ Arrow Functions
- ✅ Rest Operator
- ✅ Spread Operator
- ✅ Higher Order Functions
- ✅ Closures
- ✅ IIFE

# Arrays in JavaScript

Arrays are ordered collections used to store multiple values in a single variable.

```javascript
let arr = [1, 2, 3, 4, 5];
```

Properties of Arrays:

- Ordered collection
- Zero-based indexing
- Can store different data types
- Dynamic in size

---

# Array Methods

## 1. pop()

Removes the last element from an array.

### Syntax

```javascript
array.pop();
```

### Example

```javascript
let arr = [1,2,3,4,5];

console.log(arr.pop());
console.log(arr);
```

### Output

```
5
[1,2,3,4]
```

### Return Value

Returns the removed element.

### Time Complexity

```
O(1)
```

---

# 2. push()

Adds one or more elements to the end of an array.

### Syntax

```javascript
array.push(element);
```

### Example

```javascript
let arr = [1,2,3];

arr.push(4);

console.log(arr);
```

### Output

```
[1,2,3,4]
```

### Return Value

Returns the new length.

---

# 3. shift()

Removes the first element.

### Example

```javascript
let arr=[1,2,3,4];

console.log(arr.shift());

console.log(arr);
```

### Output

```
1

[2,3,4]
```

### Time Complexity

```
O(n)
```

---

# 4. unshift()

Adds elements at the beginning.

### Example

```javascript
let arr=[2,3,4];

arr.unshift(1);

console.log(arr);
```

### Output

```
[1,2,3,4]
```

### Time Complexity

```
O(n)
```

---

# 5. splice()

Adds, removes, or replaces elements.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2...)
```

### Example (Insert)

```javascript
let arr=[1,2,3,4,5];

arr.splice(2,0,10,20);

console.log(arr);
```

### Output

```
[1,2,10,20,3,4,5]
```

### Example (Delete)

```javascript
let arr=[1,2,3,4,5];

arr.splice(1,2);

console.log(arr);
```

### Output

```
[1,4,5]
```

### Example (Replace)

```javascript
let arr=[1,2,3,4];

arr.splice(2,1,100);

console.log(arr);
```

### Output

```
[1,2,100,4]
```

---

# 6. slice()

Returns a portion of an array.

Original array remains unchanged.

### Syntax

```javascript
array.slice(start,end)
```

### Example

```javascript
let arr=[1,2,3,4,5,6];

let newArr=arr.slice(2,5);

console.log(newArr);
```

### Output

```
[3,4,5]
```

---

# Difference between slice() and splice()

| slice() | splice() |
|----------|-----------|
| Doesn't modify original array | Modifies original array |
| Returns copied array | Returns removed elements |
| Used for copying | Used for insert/delete |

---

# 7. sort()

Sorts elements.

### Default Sort

```javascript
let arr=[20,3,100];

arr.sort();

console.log(arr);
```

Output

```
[100,20,3]
```

Why?

Because default sorting is alphabetical.

---

### Numeric Sort

```javascript
let arr=[20,3,100];

arr.sort((a,b)=>a-b);

console.log(arr);
```

Output

```
[3,20,100]
```

Descending

```javascript
arr.sort((a,b)=>b-a);
```

Output

```
[100,20,3]
```

---

# 8. reverse()

Reverses an array.

```javascript
let arr=[1,2,3];

arr.reverse();

console.log(arr);
```

Output

```
[3,2,1]
```

---

# 9. includes()

Checks if a value exists.

Returns true or false.

```javascript
let arr=[1,2,3];

console.log(arr.includes(2));

console.log(arr.includes(10));
```

Output

```
true

false
```

---

# 10. find()

Returns the first matching element.

```javascript
let numbers=[1,2,8,10,15];

let result=numbers.find((num)=>{

    return num>5;

});

console.log(result);
```

Output

```
8
```

If nothing matches

```
undefined
```

---

# 11. findIndex()

Returns the index of the first matching element.

```javascript
let arr=[10,20,30];

console.log(arr.findIndex(val=>val==20));
```

Output

```
1
```

Not found

```
-1
```

---

# 12. length

Returns total number of elements.

```javascript
let arr=[1,2,3,4];

console.log(arr.length);
```

Output

```
4
```

---

# 13. forEach()

Loops over every element.

Cannot return a new array.

```javascript
let arr=[1,2,3];

arr.forEach((value)=>{

    console.log(value);

});
```

Output

```
1

2

3
```

---

# 14. for...of

Modern loop for arrays.

```javascript
let arr=[10,20,30];

for(let value of arr){

    console.log(value);

}
```

Output

```
10

20

30
```

---

# 15. map()

Creates a new transformed array.

Original array remains unchanged.

```javascript
let arr=[1,2,3];

let square=arr.map((num)=>{

    return num*num;

});

console.log(square);
```

Output

```
[1,4,9]
```

---

# 16. filter()

Returns only matching elements.

```javascript
let arr=[1,2,3,4,5];

let even=arr.filter(num=>num%2==0);

console.log(even);
```

Output

```
[2,4]
```

---

# 17. reduce()

Reduces array into a single value.

### Syntax

```javascript
array.reduce((accumulator,currentValue)=>{

},initialValue)
```

### Example

```javascript
let arr=[1,2,3,4];

let sum=arr.reduce((acc,val)=>{

    return acc+val;

},0);

console.log(sum);
```

Output

```
10
```

Example: Product

```javascript
let arr=[1,2,3,4];

let product=arr.reduce((acc,val)=>acc*val,1);

console.log(product);
```

Output

```
24
```

---

# 18. some()

Returns true if **at least one** element satisfies the condition.

```javascript
let arr=[1,2,3];

console.log(arr.some(val=>val>2));
```

Output

```
true
```

Another Example

```javascript
console.log(arr.some(val=>val>10));
```

Output

```
false
```

---

# 19. every()

Returns true only if **all** elements satisfy the condition.

```javascript
let arr=[2,4,6];

console.log(arr.every(val=>val%2==0));
```

Output

```
true
```

Another Example

```javascript
let arr=[2,4,5];

console.log(arr.every(val=>val%2==0));
```

Output

```
false
```

---

# Method Comparison Table

| Method | Modifies Original Array | Returns |
|---------|-------------------------|----------|
| push() | ✅ Yes | New length |
| pop() | ✅ Yes | Removed element |
| shift() | ✅ Yes | Removed element |
| unshift() | ✅ Yes | New length |
| splice() | ✅ Yes | Removed elements |
| slice() | ❌ No | New array |
| map() | ❌ No | New array |
| filter() | ❌ No | New array |
| reduce() | ❌ No | Single value |
| forEach() | ❌ No | Undefined |
| some() | ❌ No | Boolean |
| every() | ❌ No | Boolean |
| includes() | ❌ No | Boolean |
| find() | ❌ No | Element |
| findIndex() | ❌ No | Index |
| reverse() | ✅ Yes | Reversed array |
| sort() | ✅ Yes | Sorted array |

---

# Interview Tips

### Use `map()` when:
- You want to transform every element.
- A new array is needed.

### Use `filter()` when:
- You want only matching elements.

### Use `reduce()` when:
- You need one final result (sum, product, average, object, etc.).

### Use `find()` when:
- You only need the first matching element.

### Use `some()` when:
- At least one element should satisfy a condition.

### Use `every()` when:
- Every element must satisfy a condition.

---

# Summary

In this section, you learned:

- ✅ Array creation
- ✅ push()
- ✅ pop()
- ✅ shift()
- ✅ unshift()
- ✅ splice()
- ✅ slice()
- ✅ sort()
- ✅ reverse()
- ✅ includes()
- ✅ find()
- ✅ findIndex()
- ✅ forEach()
- ✅ for...of
- ✅ map()
- ✅ filter()
- ✅ reduce()
- ✅ some()
- ✅ every()
- ✅ Time complexity basics
- ✅ Interview use cases

# Objects in JavaScript

An **Object** is a collection of key-value pairs used to store related data and functionality.

```javascript
const person = {
    name: "Amar",
    age: 29
};
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

---

# Creating Objects

Objects can be created using object literals.

```javascript
const obj = {
    name: "Amar",
    age: 29
};

console.log(obj);
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

---

# Accessing Object Properties

## Dot Notation

```javascript
console.log(obj.name);
console.log(obj.age);
```

Output

```text
Amar
29
```

---

## Bracket Notation

Useful when property names are dynamic.

```javascript
console.log(obj["name"]);
console.log(obj["age"]);
```

Output

```text
Amar
29
```

---

# Adding New Properties

```javascript
obj.pet = "Lion";

console.log(obj);
```

Output

```text
{
  name: "Amar",
  age: 29,
  pet: "Lion"
}
```

---

# Updating Properties

```javascript
obj.pet = "Dog";

console.log(obj);
```

Output

```text
{
  name: "Amar",
  age: 29,
  pet: "Dog"
}
```

---

# Deleting Properties

```javascript
delete obj.pet;

console.log(obj);
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

---

# Copying Objects using Spread Operator

```javascript
const obj = {
    name: "Amar",
    age: 29
};

const newObj = { ...obj };

console.log(newObj);
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

Now change the original object.

```javascript
obj.name = "Anupam";

console.log(obj);
console.log(newObj);
```

Output

```text
{
  name: "Anupam",
  age: 29
}

{
  name: "Amar",
  age: 29
}
```

Since primitive values are copied by value, the copied object remains unchanged.

---

# Object.assign()

`Object.assign()` copies properties from one or more source objects into a target object.

Syntax

```javascript
Object.assign(target, source);
```

Example

```javascript
const obj = {
    name: "Amar",
    age: 29
};

const newObj = Object.assign({ roll: 28 }, obj);

console.log(newObj);
```

Output

```text
{
  roll: 28,
  name: "Amar",
  age: 29
}
```

Clone an object

```javascript
const clone = Object.assign({}, obj);

console.log(clone);
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

---

# Object.keys()

Returns all property names.

```javascript
const obj = {
    name: "Amar",
    age: 29
};

console.log(Object.keys(obj));
```

Output

```text
["name","age"]
```

---

# Object.values()

Returns all property values.

```javascript
console.log(Object.values(obj));
```

Output

```text
["Amar",29]
```

---

# Object.entries()

Returns an array of key-value pairs.

```javascript
console.log(Object.entries(obj));
```

Output

```text
[
 ["name","Amar"],
 ["age",29]
]
```

---

# Nested Objects

Objects can contain other objects.

```javascript
const student = {

    name: "Amar",

    age: 29,

    location: {

        city: "Kanpur",

        state: "Uttar Pradesh",

        country: "India",

        pincode: 208017

    }

};

console.log(student);
```

Output

```text
{
  name: "Amar",
  age: 29,
  location: {
      city: "Kanpur",
      state: "Uttar Pradesh",
      country: "India",
      pincode: 208017
  }
}
```

---

# Accessing Nested Properties

```javascript
console.log(student.location.city);
```

Output

```text
Kanpur
```

---

# Optional Chaining (?.)

Optional chaining safely accesses nested properties.

```javascript
console.log(student?.location?.city);
```

Output

```text
Kanpur
```

If the property doesn't exist:

```javascript
console.log(student?.address?.city);
```

Output

```text
undefined
```

Without optional chaining:

```javascript
console.log(student.address.city);
```

Output

```text
TypeError
```

Optional chaining prevents runtime errors when accessing undefined properties.

---

# Shallow Copy

Spread operator and `Object.assign()` create a **shallow copy**.

Example

```javascript
const user = {

    name: "Amar",

    location: {

        country: "India"

    }

};

const copy = { ...user };

copy.location.country = "USA";

console.log(copy.location.country);

console.log(user.location.country);
```

Output

```text
USA

USA
```

Why?

Only the first level is copied.

Nested objects still reference the same memory.

---

# Deep Copy

Deep copy creates completely independent copies.

One common approach:

```javascript
const deepCopy = JSON.parse(JSON.stringify(user));
```

Example

```javascript
const user = {

    name: "Amar",

    location: {

        country: "India"

    }

};

const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.location.country = "Australia";

console.log(user.location.country);

console.log(deepCopy.location.country);
```

Output

```text
India

Australia
```

---

# JSON.stringify()

Converts a JavaScript object into a JSON string.

Example

```javascript
const obj = {

    name: "Amar",

    age: 29

};

const json = JSON.stringify(obj);

console.log(json);
```

Output

```text
{"name":"Amar","age":29}
```

Data Type

```text
String
```

---

# JSON.parse()

Converts a JSON string back into a JavaScript object.

```javascript
const json = '{"name":"Amar","age":29}';

const obj = JSON.parse(json);

console.log(obj);
```

Output

```text
{
  name: "Amar",
  age: 29
}
```

---

# Object Destructuring (ES6)

Extract properties into variables.

```javascript
const student = {

    name: "Amar",

    age: 29,

    location: {

        city: "Kanpur",

        state: "Uttar Pradesh",

        country: "India",

        pincode: 208017

    }

};

const {

    city,

    state,

    country,

    pincode

} = student.location;

console.log(city);

console.log(state);

console.log(country);

console.log(pincode);
```

Output

```text
Kanpur

Uttar Pradesh

India

208017
```

---

# Object.freeze()

Prevents modifications to an object.

```javascript
const obj = {

    name: "Amar"

};

Object.freeze(obj);

obj.name = "Anupam";

console.log(obj.name);
```

Output

```text
Amar
```

After freezing:

- Cannot add properties
- Cannot delete properties
- Cannot update properties

---

# Spread Operator vs Object.assign()

| Spread Operator | Object.assign() |
|-----------------|-----------------|
| ES6 Feature | ES5 Method |
| Cleaner syntax | More verbose |
| Creates shallow copy | Creates shallow copy |
| Easy to merge objects | Can merge multiple objects |

Example

```javascript
const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
};

const merged = {
    ...obj1,
    ...obj2
};

console.log(merged);
```

Output

```text
{
  a: 1,
  b: 2
}
```

---

# Shallow Copy vs Deep Copy

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies first level only | Copies every level |
| Nested objects are shared | Nested objects are independent |
| Fast | Slightly slower |
| Spread / Object.assign() | JSON.parse(JSON.stringify())* |

> **Note:** `JSON.parse(JSON.stringify())` works well for plain objects but does **not** preserve functions, `Date`, `Map`, `Set`, `undefined`, or circular references. Modern JavaScript also provides `structuredClone()` for many deep-copy use cases.

---

# Best Practices

- Prefer object destructuring for cleaner code.
- Use optional chaining (`?.`) to avoid runtime errors.
- Use the spread operator for simple cloning and merging.
- Use `Object.freeze()` for immutable configuration objects.
- Use `structuredClone()` (or another suitable deep-cloning technique) when you need a true deep copy of supported data types.

---

# Summary

In this section, you learned:

- ✅ Object creation
- ✅ Accessing properties
- ✅ Adding, updating, deleting properties
- ✅ Spread operator with objects
- ✅ Object.assign()
- ✅ Object.keys()
- ✅ Object.values()
- ✅ Object.entries()
- ✅ Nested objects
- ✅ Optional chaining
- ✅ Shallow copy
- ✅ Deep copy
- ✅ JSON.stringify()
- ✅ JSON.parse()
- ✅ Object destructuring
- ✅ Object.freeze()
- ✅ Best practices for working with objects

# DOM (Document Object Model)

The **Document Object Model (DOM)** is a programming interface for HTML documents.

It represents every HTML element as an object, allowing JavaScript to:

- Read HTML elements
- Modify HTML content
- Change CSS styles
- Add or remove elements
- Respond to user events

---

# What is the DOM?

When a webpage loads, the browser converts the HTML into a tree-like structure.

Example HTML

```html
<body>

    <h1 class="first">Hello World</h1>

    <h2 id="third">JavaScript</h2>

    <h3>DOM Tutorial</h3>

</body>
```

DOM Tree

```
Document
│
└── html
    │
    └── body
        │
        ├── h1
        ├── h2
        └── h3
```

JavaScript can access any node in this tree.

---

# Selecting Elements

JavaScript provides multiple ways to select HTML elements.

1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. querySelector()
5. querySelectorAll()

---

# getElementById()

Selects an element using its unique **id**.

### Syntax

```javascript
document.getElementById("id");
```

### HTML

```html
<h1 id="title">Hello</h1>
```

### JavaScript

```javascript
let title = document.getElementById("title");

console.log(title);
```

Output

```
<h1 id="title">Hello</h1>
```

Returns

```
HTMLElement
```

---

# getElementsByClassName()

Selects all elements having the same class.

### Syntax

```javascript
document.getElementsByClassName("className");
```

### HTML

```html
<p class="first">One</p>

<p class="first">Two</p>
```

### JavaScript

```javascript
let items = document.getElementsByClassName("first");

console.log(items);
```

Output

```
HTMLCollection(2)
```

Access first element

```javascript
console.log(items[0]);
```

---

# getElementsByTagName()

Selects all matching HTML tags.

Example

```javascript
let headings = document.getElementsByTagName("h1");

console.log(headings);
```

Output

```
HTMLCollection
```

---

# querySelector()

Returns the **first** matching element.

Syntax

```javascript
document.querySelector(selector);
```

Examples

Select by tag

```javascript
let h3 = document.querySelector("h3");
```

Select by class

```javascript
let element = document.querySelector(".first");
```

Select by id

```javascript
let title = document.querySelector("#third");
```

Returns

```
HTMLElement
```

---

# querySelectorAll()

Returns **all** matching elements.

Syntax

```javascript
document.querySelectorAll(selector);
```

Example

```javascript
let paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

Output

```
NodeList
```

Loop through them

```javascript
paragraphs.forEach((item)=>{

    console.log(item);

});
```

---

# Difference

| Method | Returns | Selects |
|---------|----------|----------|
| getElementById() | HTMLElement | One ID |
| getElementsByClassName() | HTMLCollection | Multiple classes |
| getElementsByTagName() | HTMLCollection | Multiple tags |
| querySelector() | HTMLElement | First match |
| querySelectorAll() | NodeList | All matches |

---

# getAttribute()

Reads an attribute value.

HTML

```html
<img src="cat.jpg">
```

JavaScript

```javascript
let image = document.querySelector("img");

console.log(image.getAttribute("src"));
```

Output

```
cat.jpg
```

---

# setAttribute()

Changes or creates an attribute.

Syntax

```javascript
element.setAttribute(name,value);
```

Example

```javascript
image.setAttribute("width","300");
```

Output

```
Image width becomes 300px.
```

---

# Changing Image Dynamically

Example

```javascript
let image = document.querySelector("img");

image.setAttribute(
    "src",
    "images/photo.jpg"
);

image.setAttribute(
    "width",
    "300"
);
```

Output

The displayed image changes.

---

# Multiple Images

Your project changes several images.

Example

```javascript
let i1 = document.querySelector(".a");

i1.setAttribute(
    "src",
    "image1.jpg"
);

i1.setAttribute(
    "width",
    "200"
);
```

Similarly

```javascript
.a
.b
.c
.d
.e
```

are updated.

---

# Accessing Elements

By Tag

```javascript
document.querySelector("img");
```

By ID

```javascript
document.querySelector("#third");
```

By Class

```javascript
document.querySelector(".first");
```

---

# HTMLCollection vs NodeList

| HTMLCollection | NodeList |
|----------------|----------|
| Live Collection | Static Collection |
| Returned by getElementsByClassName() | Returned by querySelectorAll() |
| Doesn't have forEach() in older browsers | Supports forEach() |

---

# Common Mistakes in Your Code

## Mistake 1

```javascript
document.querySelectorAll("fifth");
```

Problem

```
Missing dot (.)
```

Correct

```javascript
document.querySelectorAll(".fifth");
```

---

## Mistake 2

```javascript
nest_obj.location.city
```

Your object contains

```javascript
locations
```

not

```javascript
location
```

Correct

```javascript
nest_obj.locations.city
```

---

## Mistake 3

```javascript
nest_obj?.location?.city
```

Should be

```javascript
nest_obj?.locations?.city
```

---

## Mistake 4

Using long external URLs directly.

A better approach is

```html
<img src="images/photo.jpg">
```

Project structure

```
project/

│

├── images/

│      cat.jpg

│      dog.jpg

│

├── css/

├── js/

└── index.html
```

---

# Best Practices

✅ Use IDs for unique elements.

```javascript
document.getElementById("title");
```

---

✅ Use classes for repeated elements.

```javascript
document.querySelectorAll(".card");
```

---

✅ Prefer `querySelector()` for modern JavaScript.

---

✅ Cache frequently used elements.

Instead of

```javascript
document.querySelector("img");
```

multiple times

Use

```javascript
const image = document.querySelector("img");
```

---

✅ Store image paths in variables or arrays.

Example

```javascript
const images = [

    "images/1.jpg",

    "images/2.jpg",

    "images/3.jpg"

];
```

---

# Interview Questions

### Difference between HTMLCollection and NodeList?

| HTMLCollection | NodeList |
|----------------|----------|
| Live | Static |
| Returned by getElementsByClassName() | Returned by querySelectorAll() |
| Older browser support differs | Supports forEach() |

---

### Difference between getElementById() and querySelector()?

| getElementById() | querySelector() |
|------------------|-----------------|
| Faster | Slightly slower |
| Only IDs | Any CSS selector |
| Returns one element | Returns first matching element |

---

### Why use querySelector()?

Because it accepts any valid CSS selector.

Examples

```javascript
document.querySelector("#id");

document.querySelector(".class");

document.querySelector("div");

document.querySelector("div img");
```

---

# Summary

In this section, you learned:

- ✅ What is the DOM?
- ✅ DOM Tree
- ✅ Selecting elements
- ✅ getElementById()
- ✅ getElementsByClassName()
- ✅ getElementsByTagName()
- ✅ querySelector()
- ✅ querySelectorAll()
- ✅ getAttribute()
- ✅ setAttribute()
- ✅ Updating images dynamically
- ✅ HTMLCollection vs NodeList
- ✅ Common mistakes and fixes
- ✅ Best practices
- ✅ Frequently asked interview questions

# Event Handling in JavaScript

An **event** is an action performed by the user or browser.

Examples:

- Mouse Click
- Double Click
- Keyboard Press
- Form Submit
- Scroll
- Resize
- Mouse Hover
- Input Change

JavaScript listens for these events and executes a function when they occur.

---

# addEventListener()

The recommended way to handle events.

## Syntax

```javascript
element.addEventListener("event", callbackFunction);
```

Example

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Button Clicked!");
});
```

Output

```
Button Clicked!
```

---

# Click Event

Your project contains two buttons:

```javascript
let change = document.querySelector(".b1");
let reset = document.querySelector(".b2");
```

One button changes the background color.

The other resets it.

---

# Background Color Toggle

Your Code

```javascript
function changebg() {

    if (document.body.style.backgroundColor == "red") {

        document.body.style.backgroundColor = "white";

    } else {

        document.body.style.backgroundColor = "red";

    }

}
```

Explanation

Initially

```
white
```

↓

Click button

```
red
```

↓

Click again

```
white
```

↓

Click again

```
red
```

This is called **toggle behavior**.

---

# Reset Background

```javascript
function resetbg() {

    document.body.style.backgroundColor = "white";

}
```

Whenever Reset is clicked,

the background becomes white.

---

# Connecting Events

```javascript
change.addEventListener("click", changebg);

reset.addEventListener("click", resetbg);
```

Flow

```
User Clicks

↓

Button

↓

Event Listener

↓

Function Executes

↓

Background Changes
```

---

# Anonymous Function

Instead of creating a separate function

```javascript
button.addEventListener("click", function () {

    console.log("Clicked");

});
```

---

# Arrow Function

Modern approach

```javascript
button.addEventListener("click", () => {

    console.log("Clicked");

});
```

---

# Event Object

Every event listener receives an event object.

Example

```javascript
button.addEventListener("click", (event) => {

    console.log(event);

});
```

Useful properties

```javascript
event.target

event.type

event.clientX

event.clientY

event.key
```

---

# Mouse Events

```javascript
click

dblclick

mousedown

mouseup

mouseenter

mouseleave

mousemove

contextmenu
```

Example

```javascript
button.addEventListener("dblclick", () => {

    console.log("Double Click");

});
```

---

# Keyboard Events

```javascript
keydown

keyup

keypress (deprecated)
```

Example

```javascript
document.addEventListener("keydown", (event) => {

    console.log(event.key);

});
```

Press

```
A
```

Output

```
a
```

---

# Input Events

Example

```javascript
const input = document.querySelector("input");

input.addEventListener("input", (event) => {

    console.log(event.target.value);

});
```

Every key press updates the value.

---

# preventDefault()

Stops the browser's default behavior.

Example

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    console.log("Form Submitted");

});
```

Without

```javascript
preventDefault()
```

the page reloads.

---

# stopPropagation()

Stops the event from bubbling to parent elements.

Example

```javascript
child.addEventListener("click", (event) => {

    event.stopPropagation();

});
```

---

# Event Bubbling

Default behavior.

```
Button

↓

Div

↓

Body

↓

Document
```

The event travels upward.

---

# Event Capturing

Opposite of bubbling.

```
Document

↓

Body

↓

Div

↓

Button
```

Enable capturing

```javascript
button.addEventListener("click", demo, true);
```

---

# Event Delegation

Instead of attaching listeners to many elements,

attach one listener to their parent.

Example

```javascript
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {

        console.log(event.target.textContent);

    }

});
```

Advantages

- Better performance
- Less memory usage
- Works for dynamically added elements

---

# removeEventListener()

Removes an event listener.

```javascript
function clickHandler() {

    console.log("Clicked");

}

button.addEventListener("click", clickHandler);

button.removeEventListener("click", clickHandler);
```

---

# Best Practices

### Cache DOM Elements

❌ Bad

```javascript
document.querySelector(".btn").style.color = "red";

document.querySelector(".btn").style.background = "blue";
```

✅ Good

```javascript
const button = document.querySelector(".btn");

button.style.color = "red";

button.style.background = "blue";
```

---

### Use Meaningful Variable Names

❌

```javascript
let a = document.querySelector("button");
```

✅

```javascript
const submitButton = document.querySelector(".submit-btn");
```

---

### Prefer `const`

Use `const` whenever the variable is not reassigned.

```javascript
const user = {
    name: "Amar"
};
```

---

### Keep Functions Small

❌

```javascript
function everything() {
    // hundreds of lines
}
```

✅

```javascript
function changeBackground() {}

function resetBackground() {}

function updateImage() {}
```

---

### Separate HTML, CSS, and JavaScript

Project structure

```
project/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

---

# Common Mistakes

### Forgetting `.` for Class Selectors

❌

```javascript
document.querySelector("button");
```

This selects the first `<button>` element.

To select a class:

```javascript
document.querySelector(".button");
```

---

### Forgetting `#` for ID Selectors

❌

```javascript
document.querySelector("header");
```

If the HTML is

```html
<div id="header"></div>
```

Correct

```javascript
document.querySelector("#header");
```

---

### Using `innerHTML` Unnecessarily

Prefer

```javascript
textContent
```

when inserting plain text.

It is safer and faster.

---

# Mini Project Flow

```
Page Loads

↓

Buttons Selected

↓

Click Event Registered

↓

User Clicks

↓

Background Changes

↓

Reset Button Restores White Background
```

---

# JavaScript Topics Covered

## ES6

- Arrow Functions
- Rest Operator
- Spread Operator
- Destructuring
- Optional Chaining

---

## Functions

- Function Declaration
- Function Expression
- Closures
- Higher Order Functions
- IIFE

---

## Arrays

- push()
- pop()
- shift()
- unshift()
- splice()
- slice()
- sort()
- reverse()
- includes()
- map()
- filter()
- reduce()
- some()
- every()
- find()
- findIndex()
- forEach()
- for...of

---

## Objects

- Object Creation
- Object.assign()
- Spread Operator
- Nested Objects
- Optional Chaining
- Object.keys()
- Object.values()
- Object.entries()
- JSON.stringify()
- JSON.parse()
- Object.freeze()

---

## DOM

- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()
- getAttribute()
- setAttribute()

---

## Events

- addEventListener()
- Click Events
- Keyboard Events
- Mouse Events
- Event Object
- preventDefault()
- stopPropagation()
- Event Bubbling
- Event Capturing
- Event Delegation
- removeEventListener()

---

# Interview Cheat Sheet

| Topic | Key Point |
|--------|-----------|
| Closure | Inner function remembers outer variables |
| IIFE | Executes immediately after definition |
| Rest Operator | Collects arguments into an array |
| Spread Operator | Expands arrays/objects |
| Shallow Copy | Copies first level only |
| Deep Copy | Creates an independent copy |
| `map()` | Returns a transformed array |
| `filter()` | Returns matching elements |
| `reduce()` | Returns a single accumulated value |
| `find()` | Returns the first matching element |
| `findIndex()` | Returns the index of the first match |
| `some()` | `true` if at least one element matches |
| `every()` | `true` only if all elements match |
| `querySelector()` | Returns the first matching element |
| `querySelectorAll()` | Returns all matching elements |
| `addEventListener()` | Attaches an event listener |
| `preventDefault()` | Prevents default browser behavior |
| `stopPropagation()` | Stops event bubbling |

---

# How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/javascript-fundamentals.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Open Developer Tools (`F12`) and view the **Console** to see outputs.

---

# Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# License

This project is licensed under the **MIT License**.

---

# Author

**Amar**

Learning and practicing modern JavaScript, ES6, and DOM concepts through hands-on examples.

---

# Conclusion

This repository serves as a practical reference for learning JavaScript fundamentals, ES6 features, array methods, object manipulation, DOM APIs, and event handling. Each example is designed to be simple, easy to understand, and useful for both beginners and interview preparation.

Happy Coding! 🚀