# JavaScript Fundamentals & DOM Manipulation

A beginner-friendly and interview-focused JavaScript repository covering the most important **JavaScript fundamentals, ES6+, functions, execution context, hoisting, closures, arrays, objects, DOM manipulation, events, asynchronous JavaScript, Promises, async/await, browser storage, and performance optimization techniques**.

This repository is designed as a practical roadmap for learning JavaScript from the fundamentals to asynchronous programming and DOM-based applications.

---

# 📚 Table of Contents

1. [JavaScript Fundamentals](#1-javascript-fundamentals)
2. [Variables, Scope & Hoisting](#2-variables-scope--hoisting)
3. [Data Types & Type System](#3-data-types--type-system)
4. [Operators & Type Conversion](#4-operators--type-conversion)
5. [Functions](#5-functions)
6. [Advanced Function Concepts](#6-advanced-function-concepts)
7. [Execution Context & Call Stack](#7-execution-context--call-stack)
8. [Arrays](#8-arrays)
9. [Objects](#9-objects)
10. [Destructuring, Spread & Rest](#10-destructuring-spread--rest)
11. [Copying Data](#11-copying-data)
12. [JSON](#12-json)
13. [DOM Fundamentals](#13-dom-fundamentals)
14. [DOM Manipulation](#14-dom-manipulation)
15. [Events & Event Handling](#15-events--event-handling)
16. [Event Bubbling, Capturing & Delegation](#16-event-bubbling-capturing--delegation)
17. [Forms & Form Validation](#17-forms--form-validation)
18. [Browser Storage](#18-browser-storage)
19. [Synchronous JavaScript](#19-synchronous-javascript)
20. [Asynchronous JavaScript](#20-asynchronous-javascript)
21. [Callbacks & Callback Hell](#21-callbacks--callback-hell)
22. [Timers](#22-timers)
23. [Promises](#23-promises)
24. [Promise Methods](#24-promise-methods)
25. [Fetch API](#25-fetch-api)
26. [Async & Await](#26-async--await)
27. [Error Handling](#27-error-handling)
28. [Event Loop](#28-event-loop)
29. [This Keyword](#29-this-keyword)
30. [call(), apply() & bind()](#30-call-apply--bind)
31. [Throttling & Debouncing](#31-throttling--debouncing)
32. [Modern JavaScript Best Practices](#32-modern-javascript-best-practices)
33. [Common Interview Questions](#33-common-interview-questions)
34. [JavaScript Cheat Sheet](#34-javascript-cheat-sheet)
35. [How to Run](#35-how-to-run)
36. [Contributing](#36-contributing)
37. [License](#37-license)

---

# 1. JavaScript Fundamentals

JavaScript is a high-level, dynamically typed programming language primarily used to create interactive web applications.

JavaScript can run in:

* Browsers
* Node.js
* Servers
* Mobile applications
* Desktop applications
* Runtime environments

## Basic Example

```javascript
console.log("Hello JavaScript");
```

Output:

```text
Hello JavaScript
```

---

# 2. Variables, Scope & Hoisting

Variables are used to store data.

JavaScript provides:

* `var`
* `let`
* `const`

## var

```javascript
var name = "Amar";
```

`var` is function-scoped.

## let

```javascript
let age = 29;
```

`let` is block-scoped.

## const

```javascript
const country = "India";
```

`const` cannot be reassigned.

---

## Scope

JavaScript has several types of scope:

* Global scope
* Function scope
* Block scope
* Lexical scope

Example:

```javascript
{
    let x = 10;
    const y = 20;
}

console.log(x); // ReferenceError
```

---

## Hoisting

Hoisting is JavaScript's behavior of processing declarations before executing code.

### var

```javascript
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Conceptually:

```javascript
var a;

console.log(a);

a = 10;
```

---

## let and const Hoisting

`let` and `const` are also hoisted, but they remain inaccessible inside the **Temporal Dead Zone (TDZ)** until their declaration is evaluated.

```javascript
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

---

## Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and reaching the declaration of a `let`, `const`, or `class`.

```javascript
console.log(name); // ReferenceError

let name = "Amar";
```

---

## Function Hoisting

Function declarations are hoisted.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

Function expressions are different.

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

This results in a `ReferenceError` because `greet` is in the TDZ.

---

# 3. Data Types & Type System

JavaScript is a **dynamically typed language**.

This means a variable can hold values of different types during its lifetime.

```javascript
let value = 10;

value = "Hello";

value = true;
```

---

## Primitive Data Types

JavaScript has these primitive types:

1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

Example:

```javascript
let name = "Amar";
let age = 29;
let isStudent = true;
let value;
let data = null;
let bigNumber = 12345678901234567890n;
let id = Symbol("id");
```

---

## Non-Primitive Data Types

The main non-primitive/reference type is:

```text
Object
```

Examples:

```javascript
const user = {
    name: "Amar",
    age: 29
};

const numbers = [1, 2, 3];

const greet = function () {
    console.log("Hello");
};
```

Arrays and functions are objects in JavaScript's type system.

---

## typeof

```javascript
typeof "Hello"; // string
typeof 10;      // number
typeof true;    // boolean
typeof undefined; // undefined
typeof {};      // object
typeof [];      // object
typeof function() {}; // function
```

---

## Why is `typeof NaN` a Number?

```javascript
typeof NaN;
```

Output:

```text
"number"
```

`NaN` means **Not-a-Number**, but it represents a special numeric value defined by JavaScript's Number type.

```javascript
0 / 0;
```

Result:

```text
NaN
```

Check it with:

```javascript
Number.isNaN(NaN);
```

Output:

```text
true
```

---

# 4. Operators & Type Conversion

## Arithmetic Operators

```javascript
+
-
*
/
%
**
```

---

## Comparison Operators

```javascript
==
===
!=
!==
>
<
>=
<=
```

Prefer strict equality:

```javascript
5 === 5;
```

---

## Logical Operators

```javascript
&&
||
!
```

---

## Ternary Operator

The ternary operator is a short form of `if...else`.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

## Type Conversion

Type conversion means explicitly converting one type to another.

```javascript
const value = "10";

const number = Number(value);

console.log(number);
```

---

## Type Coercion

Type coercion occurs when JavaScript automatically converts one type into another during an operation.

```javascript
console.log("5" + 2);
```

Output:

```text
52
```

But:

```javascript
console.log("5" - 2);
```

Output:

```text
3
```

The `+` operator can concatenate strings, while other arithmetic operators generally coerce numeric strings to numbers.

---

# 5. Functions

Functions are reusable blocks of code.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Amar");
```

---

## Function Declaration

```javascript
function square(num) {
    return num * num;
}

console.log(square(5));
```

Output:

```text
25
```

Function declarations are hoisted.

---

## Function Expression

A function can be assigned to a variable.

```javascript
const square = function (num) {
    return num * num;
};

console.log(square(5));
```

---

## Arrow Function

Arrow functions provide shorter syntax.

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 7));
```

Short form:

```javascript
const add = (a, b) => a + b;
```

---

## Important Arrow Function Difference

Arrow functions do not have their own:

* `this`
* `arguments`
* `super`
* `new.target`

They obtain `this` lexically from their surrounding scope.

---

# 6. Advanced Function Concepts

## Rest Parameter

The rest parameter collects multiple arguments into an array.

```javascript
function sum(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));
```

Output:

```text
60
```

---

## Spread Syntax

Spread syntax expands an iterable or object.

```javascript
const first = [1, 2, 3];
const second = [...first, 4, 5];

console.log(second);
```

Output:

```text
[1, 2, 3, 4, 5]
```

Object example:

```javascript
const user = {
    name: "Amar",
    age: 29
};

const copy = {
    ...user
};
```

---

## Higher-Order Function

A higher-order function is a function that:

* Accepts another function as an argument
* Returns a function
* Or does both

Example:

```javascript
function calculate(operation, a, b) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(add, 10, 20));
```

Output:

```text
30
```

---

## IIFE

IIFE means **Immediately Invoked Function Expression**.

It executes immediately after being created.

```javascript
(function () {
    console.log("Executed immediately");
})();
```

Arrow-function version:

```javascript
(() => {
    console.log("Executed immediately");
})();
```

---

## Lexical Scoping

Lexical scope means a function can access variables based on where the function was defined in the source code.

```javascript
const outer = "Hello";

function test() {
    console.log(outer);
}

test();
```

---

## Closure

A closure occurs when a function remembers and accesses variables from its outer lexical scope even after the outer function has finished execution.

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;

        return count;
    };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
```

Output:

```text
1
2
3
```

Common uses:

* Data encapsulation
* Counters
* Function factories
* Event handlers
* Callbacks

---

## Pure Function

A pure function:

* Produces the same output for the same input
* Does not modify external state

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Impure Function

An impure function can depend on or modify external state.

```javascript
let total = 0;

function add(value) {
    total += value;
}
```

---

# 7. Execution Context & Call Stack

JavaScript code executes inside **execution contexts**.

The major contexts are:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

---

## Global Execution Context

Created when JavaScript starts executing a script.

It provides the global environment for the program.

---

## Function Execution Context

Created every time a function is called.

Example:

```javascript
function greet() {
    const message = "Hello";

    console.log(message);
}

greet();
```

A new function execution context is created when `greet()` runs.

---

## Call Stack

The call stack tracks currently executing functions.

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Conceptually:

```text
three()
two()
one()
Global
```

Functions are removed from the stack when they finish execution.

---

# 8. Arrays

Arrays store ordered collections.

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Arrays are:

* Zero-indexed
* Ordered
* Dynamic
* Able to contain different values

---

## Common Array Methods

### push()

Adds elements to the end.

```javascript
const arr = [1, 2, 3];

arr.push(4);
```

---

### pop()

Removes the last element.

```javascript
arr.pop();
```

---

### shift()

Removes the first element.

```javascript
arr.shift();
```

---

### unshift()

Adds elements to the beginning.

```javascript
arr.unshift(0);
```

---

## slice()

Returns a portion of an array without modifying the original array.

```javascript
const arr = [1, 2, 3, 4, 5];

const result = arr.slice(1, 4);

console.log(result);
```

Output:

```text
[2, 3, 4]
```

---

## splice()

Adds, removes, or replaces elements and **modifies the original array**.

```javascript
const arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Output:

```text
[1, 4]
```

---

## slice() vs splice()

| slice()                     | splice()                       |
| --------------------------- | ------------------------------ |
| Does not modify original    | Modifies original              |
| Returns a portion           | Returns removed elements       |
| Used for copying/extracting | Used for insert/delete/replace |

---

## map()

`map()` creates a new array by transforming every element.

```javascript
const numbers = [1, 2, 3];

const squares = numbers.map(num => num * num);

console.log(squares);
```

Output:

```text
[1, 4, 9]
```

### Why is `map()` a Higher-Order Function?

Because it accepts a callback function:

```javascript
numbers.map(num => num * 2);
```

The callback is a function passed into another function.

---

## forEach()

Executes a function for each element.

```javascript
numbers.forEach(num => {
    console.log(num);
});
```

`forEach()` does not create a new transformed array.

---

## map() vs forEach()

| map()                               | forEach()                           |
| ----------------------------------- | ----------------------------------- |
| Returns a new array                 | Returns `undefined`                 |
| Used for transformation             | Used for side effects               |
| Can be chained                      | Usually used for iteration          |
| Does not mutate the array by itself | Does not mutate the array by itself |

---

## filter()

Returns elements that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
```

Output:

```text
[2, 4]
```

---

## find()

Returns the **first matching element**.

```javascript
const numbers = [1, 2, 8, 10];

const result = numbers.find(num => num > 5);

console.log(result);
```

Output:

```text
8
```

---

## filter() vs find()

| filter()             | find()                      |
| -------------------- | --------------------------- |
| Returns an array     | Returns one element         |
| Returns all matches  | Returns first match         |
| Returns `[]` if none | Returns `undefined` if none |

---

## reduce()

`reduce()` processes an array and accumulates it into a single result.

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);
```

Output:

```text
10
```

Common uses:

* Sum
* Product
* Average
* Grouping
* Building objects
* Counting values

---

## some()

Returns `true` if at least one element satisfies the condition.

```javascript
[1, 2, 3].some(num => num > 2);
```

---

## every()

Returns `true` only when every element satisfies the condition.

```javascript
[2, 4, 6].every(num => num % 2 === 0);
```

---

# 9. Objects

Objects store data using key-value pairs.

```javascript
const person = {
    name: "Amar",
    age: 29
};
```

---

## Two Ways to Access Object Properties

### Dot Notation

```javascript
console.log(person.name);
```

### Bracket Notation

```javascript
console.log(person["name"]);
```

Bracket notation is especially useful with dynamic property names.

```javascript
const property = "name";

console.log(person[property]);
```

---

## Adding Properties

```javascript
person.city = "Kanpur";
```

---

## Updating Properties

```javascript
person.age = 30;
```

---

## Deleting Properties

```javascript
delete person.city;
```

---

## Object.keys()

```javascript
Object.keys(person);
```

Returns property names.

---

## Object.values()

```javascript
Object.values(person);
```

Returns property values.

---

## Object.entries()

```javascript
Object.entries(person);
```

Returns key-value pairs.

---

## Nested Objects

```javascript
const student = {
    name: "Amar",

    location: {
        city: "Kanpur",
        state: "Uttar Pradesh"
    }
};
```

---

## Optional Chaining

Optional chaining safely accesses nested properties.

```javascript
console.log(student?.location?.city);
```

If a property does not exist:

```javascript
console.log(student?.address?.city);
```

Result:

```text
undefined
```

---

# 10. Destructuring, Spread & Rest

## Object Destructuring

```javascript
const user = {
    name: "Amar",
    age: 29
};

const { name, age } = user;

console.log(name);
console.log(age);
```

---

## Nested Destructuring

```javascript
const student = {
    name: "Amar",
    location: {
        city: "Kanpur",
        state: "Uttar Pradesh"
    }
};

const {
    location: { city, state }
} = student;
```

---

## Array Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
```

---

## Rest vs Spread

The same `...` syntax has different purposes.

### Rest

Collects values.

```javascript
function test(...args) {
    console.log(args);
}
```

### Spread

Expands values.

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

---

# 11. Copying Data

## Shallow Copy

Copies only the first level.

```javascript
const user = {
    name: "Amar",
    address: {
        city: "Kanpur"
    }
};

const copy = { ...user };
```

Nested objects are still shared.

```javascript
copy.address.city = "Lucknow";

console.log(user.address.city);
```

Output:

```text
Lucknow
```

---

## Creating a Shallow Copy

Using spread:

```javascript
const copy = { ...user };
```

Using `Object.assign()`:

```javascript
const copy = Object.assign({}, user);
```

For arrays:

```javascript
const copy = [...arr];
```

---

## Deep Copy

A deep copy creates independent nested structures.

Modern JavaScript provides:

```javascript
const copy = structuredClone(user);
```

For supported values, this is generally preferable to using JSON serialization as a generic deep-cloning technique.

---

## JSON Deep Copy

```javascript
const copy = JSON.parse(JSON.stringify(user));
```

However, JSON cloning has limitations and does not preserve values such as:

* Functions
* `undefined`
* `Symbol`
* `BigInt`
* `Map`
* `Set`
* Some special object types

It also cannot handle circular references.

---

# 12. JSON

## JSON.stringify()

Converts a JavaScript value into a JSON string.

```javascript
const user = {
    name: "Amar",
    age: 29
};

const json = JSON.stringify(user);

console.log(json);
```

---

## JSON.parse()

Converts JSON text into a JavaScript value.

```javascript
const json = '{"name":"Amar","age":29}';

const user = JSON.parse(json);

console.log(user.name);
```

---

# 13. DOM Fundamentals

DOM means **Document Object Model**.

The browser creates a tree-like representation of an HTML document.

JavaScript can use the DOM to:

* Read elements
* Change content
* Change attributes
* Modify styles
* Create elements
* Remove elements
* Handle events

---

## Selecting Elements

### getElementById()

```javascript
document.getElementById("title");
```

---

### getElementsByClassName()

```javascript
document.getElementsByClassName("card");
```

Returns an `HTMLCollection`.

---

### getElementsByTagName()

```javascript
document.getElementsByTagName("p");
```

---

### querySelector()

Returns the first matching element.

```javascript
document.querySelector(".card");
```

---

### querySelectorAll()

Returns all matching elements.

```javascript
document.querySelectorAll(".card");
```

---

## HTMLCollection vs NodeList

| HTMLCollection                                          | NodeList                                       |
| ------------------------------------------------------- | ---------------------------------------------- |
| Commonly returned by older DOM collection APIs          | Returned by `querySelectorAll()`               |
| Some HTMLCollections are live                           | `querySelectorAll()` returns a static NodeList |
| Array-like                                              | Array-like                                     |
| Modern HTMLCollection supports useful iteration methods | NodeList supports `forEach()`                  |

---

# 14. DOM Manipulation

## textContent

Reads or writes text content.

```javascript
element.textContent = "Hello";
```

---

## innerText

Works with rendered text and is affected by CSS/layout.

```javascript
element.innerText = "Hello";
```

---

## innerHTML

Reads or writes HTML markup.

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

Do not insert untrusted user input into `innerHTML`, because it can create security problems such as XSS.

---

## textContent vs innerText vs innerHTML

| Property      | Purpose                        |
| ------------- | ------------------------------ |
| `textContent` | Text content                   |
| `innerText`   | Rendered/visible text behavior |
| `innerHTML`   | HTML markup                    |

---

## getAttribute()

```javascript
const image = document.querySelector("img");

console.log(image.getAttribute("src"));
```

---

## setAttribute()

```javascript
image.setAttribute("src", "images/photo.jpg");
```

---

## Creating Elements

```javascript
const heading = document.createElement("h1");

heading.textContent = "Hello JavaScript";

document.body.appendChild(heading);
```

---

## Removing Elements

```javascript
element.remove();
```

---

## Dynamic DOM Manipulation

```javascript
const li = document.createElement("li");

li.textContent = "JavaScript";

document.querySelector("ul").appendChild(li);
```

---

# 15. Events & Event Handling

An event is an action detected by the browser.

Examples:

* `click`
* `dblclick`
* `input`
* `change`
* `submit`
* `keydown`
* `keyup`
* `mouseenter`
* `mouseleave`
* `scroll`
* `resize`

---

## addEventListener()

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## Why Use addEventListener()?

It is generally preferred over inline event handlers and the `onclick` property because it:

* Separates JavaScript from HTML
* Supports multiple listeners for the same event
* Works well with modern event-driven code
* Makes event management more flexible

---

## onclick vs addEventListener()

### onclick

```javascript
button.onclick = () => {
    console.log("Clicked");
};
```

### addEventListener()

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Multiple listeners can be registered:

```javascript
button.addEventListener("click", firstHandler);
button.addEventListener("click", secondHandler);
```

---

## Event Object

```javascript
button.addEventListener("click", event => {
    console.log(event);
});
```

Useful properties include:

```javascript
event.target
event.currentTarget
event.type
event.key
event.clientX
event.clientY
```

---

# 16. Event Bubbling, Capturing & Delegation

## Event Bubbling

Events normally propagate from the target toward ancestors.

```text
Button
   ↓
Div
   ↓
Body
   ↓
Document
```

---

## Event Capturing

Capturing travels from ancestors toward the target.

```text
Document
   ↓
Body
   ↓
Div
   ↓
Button
```

Enable capturing:

```javascript
element.addEventListener("click", handler, true);
```

---

## stopPropagation()

Stops further propagation of the event.

```javascript
child.addEventListener("click", event => {
    event.stopPropagation();
});
```

---

## Event Delegation

Instead of attaching listeners to every child, attach one listener to a parent.

```javascript
const list = document.querySelector("ul");

list.addEventListener("click", event => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

Advantages:

* Fewer event listeners
* Works with dynamically added elements
* Useful for large lists

---

## removeEventListener()

```javascript
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

The same function reference must be used to remove the listener.

---

# 17. Forms & Form Validation

Forms collect user input.

```html
<form id="signupForm">
    <input id="email" type="email" required>
    <button type="submit">Submit</button>
</form>
```

---

## Handling Form Submission

```javascript
const form = document.querySelector("#signupForm");

form.addEventListener("submit", event => {
    event.preventDefault();

    console.log("Form submitted");
});
```

---

## Basic Validation

```javascript
const email = document.querySelector("#email");

if (!email.value) {
    console.log("Email is required");
}
```

HTML also provides built-in validation:

```html
<input
    type="email"
    required
    minlength="5"
>
```

---

# 18. Browser Storage

Browsers provide several ways to store data.

## localStorage

Data remains after the browser is closed.

```javascript
localStorage.setItem("name", "Amar");

console.log(localStorage.getItem("name"));

localStorage.removeItem("name");
```

---

## sessionStorage

Data is associated with the current browser tab/session.

```javascript
sessionStorage.setItem("name", "Amar");
```

---

## Cookies

Cookies are small pieces of data associated with a website.

```javascript
document.cookie = "username=Amar";
```

Cookies can have attributes such as:

* `Expires`
* `Max-Age`
* `Path`
* `Secure`
* `SameSite`

Server-set cookies can also use `HttpOnly`, which prevents JavaScript from reading them.

---

## localStorage vs sessionStorage vs Cookies

| Feature                               | localStorage           | sessionStorage      | Cookies                        |
| ------------------------------------- | ---------------------- | ------------------- | ------------------------------ |
| Persists after browser close          | Usually yes            | No                  | Depends on expiration          |
| Sent automatically with HTTP requests | No                     | No                  | Yes                            |
| Accessible through JS                 | Yes                    | Yes                 | Usually yes, except `HttpOnly` |
| Storage size                          | Larger than cookies    | Larger than cookies | Small                          |
| Typical use                           | Persistent client data | Tab/session data    | Server/client state            |

Do not store highly sensitive information in browser storage without understanding the security implications.

---

# 19. Synchronous JavaScript

Synchronous code executes one operation at a time.

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

The next statement normally waits for the previous statement to complete.

---

# 20. Asynchronous JavaScript

Asynchronous programming allows JavaScript applications to handle operations that complete later without blocking the entire flow of execution.

Common asynchronous APIs include:

* Timers
* Network requests
* DOM events
* Promises
* `fetch()`

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Async");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Async
```

---

# 21. Callbacks & Callback Hell

A callback is a function passed to another function to be executed later.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

greet("Amar", () => {
    console.log("Callback executed");
});
```

---

## Callback Hell

Nested callbacks can become difficult to read and maintain.

```javascript
doTask1(() => {
    doTask2(() => {
        doTask3(() => {
            doTask4(() => {
                console.log("Done");
            });
        });
    });
});
```

---

## Problems with Callback-Based Code

### 1. Inversion of Control

You pass control of when/how a callback executes to another function.

### 2. Callback Hell

Deep nesting makes code difficult to understand and maintain.

Promises and async/await provide cleaner patterns for many asynchronous workflows.

---

# 22. Timers

## setTimeout()

Executes a callback after at least the specified delay once the call stack is available.

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

## setInterval()

Repeats a callback approximately according to the specified interval.

```javascript
const id = setInterval(() => {
    console.log("Running");
}, 1000);
```

Stop it:

```javascript
clearInterval(id);
```

---

## clearTimeout()

```javascript
const id = setTimeout(() => {
    console.log("Hello");
}, 3000);

clearTimeout(id);
```

---

## setTimeout() vs setInterval()

| setTimeout()                           | setInterval()                           |
| -------------------------------------- | --------------------------------------- |
| Runs once                              | Repeats                                 |
| Can be cancelled with `clearTimeout()` | Can be cancelled with `clearInterval()` |
| Useful for delayed tasks               | Useful for repeated tasks               |

Important: timers do not guarantee exact execution time. They schedule callbacks to run no earlier than the specified delay, subject to the runtime and event loop.

---

# 23. Promises

A Promise represents the eventual result of an asynchronous operation.

A Promise has three main states:

```text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
```

---

## Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});
```

---

## Consuming a Promise

```javascript
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
```

---

## then()

Runs when the Promise is fulfilled.

```javascript
promise.then(result => {
    console.log(result);
});
```

---

## catch()

Handles rejection.

```javascript
promise.catch(error => {
    console.error(error);
});
```

---

## finally()

Runs regardless of fulfillment or rejection.

```javascript
promise.finally(() => {
    console.log("Finished");
});
```

---

# 24. Promise Methods

JavaScript provides several useful Promise combinators.

## Promise.all()

Waits for all promises to fulfill.

If one rejects, the returned Promise rejects.

```javascript
Promise.all([
    promise1,
    promise2,
    promise3
])
.then(results => {
    console.log(results);
})
.catch(error => {
    console.log(error);
});
```

---

## Promise.allSettled()

Waits for all promises to settle, regardless of whether they fulfill or reject.

```javascript
Promise.allSettled([
    promise1,
    promise2,
    promise3
])
.then(results => {
    console.log(results);
});
```

---

## Promise.race()

Settles when the first input Promise settles.

```javascript
Promise.race([
    promise1,
    promise2
])
.then(result => {
    console.log(result);
});
```

---

## Promise.any()

Fulfills when the first input Promise fulfills.

It rejects only if all input promises reject.

```javascript
Promise.any([
    promise1,
    promise2,
    promise3
])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});
```

---

## Promise Methods Comparison

| Method                 | Resolves when          | Rejects when                               |
| ---------------------- | ---------------------- | ------------------------------------------ |
| `Promise.all()`        | All fulfill            | Any rejects                                |
| `Promise.allSettled()` | All settle             | Does not reject because of input rejection |
| `Promise.race()`       | First Promise settles  | First settled Promise rejects              |
| `Promise.any()`        | First Promise fulfills | All reject                                 |

---

# 25. Fetch API

`fetch()` is used to make HTTP requests.

```javascript
fetch("https://example.com/data")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

## Important Fetch Concept

`fetch()` returns a Promise.

The first `.then()` receives a `Response` object, not the final JSON data.

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

`response.json()` also returns a Promise.

Conceptually:

```text
fetch()
   ↓
Promise<Response>
   ↓
response.json()
   ↓
Promise<JavaScript Value>
```

---

# 26. Async & Await

`async` and `await` provide a cleaner syntax for working with Promises.

```javascript
async function getData() {
    const response = await fetch("https://example.com/data");

    const data = await response.json();

    console.log(data);
}

getData();
```

An `async` function always returns a Promise.

---

## Await

`await` pauses execution of the current async function until the Promise settles.

It does not block the JavaScript thread in the same way a synchronous blocking operation would.

---

# 27. Error Handling

## Promise Error Handling

```javascript
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

## try...catch

```javascript
try {
    const result = JSON.parse("invalid json");
} catch (error) {
    console.error(error);
}
```

---

## Async/Await Error Handling

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## finally

```javascript
try {
    console.log("Running");
} catch (error) {
    console.log(error);
} finally {
    console.log("Finished");
}
```

---

# 28. Event Loop

JavaScript execution involves concepts such as:

* Call Stack
* Web APIs / Host APIs
* Task Queue
* Microtask Queue
* Event Loop

Example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
Timeout
```

Why?

```text
Synchronous code
      ↓
Call Stack
      ↓
Microtasks
      ↓
Tasks
```

Promise callbacks are microtasks, while timer callbacks are tasks/macrotasks. After the current synchronous work finishes, the runtime processes queued microtasks before moving on to the next task.

---

# 29. This Keyword

`this` refers to a value determined by how a function is called.

Example:

```javascript
const user = {
    name: "Amar",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Amar
```

---

## Arrow Functions and this

Arrow functions do not create their own `this`.

```javascript
const user = {
    name: "Amar",

    greet: () => {
        console.log(this.name);
    }
};
```

For object methods, regular method syntax is generally used when you need `this` to refer to the object.

---

# 30. call(), apply() & bind()

These methods allow explicit control over `this` for regular functions.

## call()

Arguments are passed individually.

```javascript
function greet(city) {
    console.log(this.name, city);
}

const user = {
    name: "Amar"
};

greet.call(user, "Kanpur");
```

---

## apply()

Arguments are passed as an array-like value.

```javascript
greet.apply(user, ["Kanpur"]);
```

---

## bind()

Returns a new function with `this` and optionally some arguments bound.

```javascript
const newGreet = greet.bind(user, "Kanpur");

newGreet();
```

---

## call() vs apply() vs bind()

| Method    | Executes immediately | Arguments              |
| --------- | -------------------- | ---------------------- |
| `call()`  | Yes                  | Individual             |
| `apply()` | Yes                  | Array-like             |
| `bind()`  | No                   | Returns a new function |

---

# 31. Throttling & Debouncing

These techniques control how frequently functions execute.

## Debouncing

Runs the function after the event stops occurring for a specified time.

Useful for:

* Search input
* Auto-save
* Resize handling

```javascript
function debounce(callback, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
```

---

## Throttling

Limits execution to at most approximately once per specified interval.

Useful for:

* Scroll events
* Mouse movement
* Window resize
* Continuous user interactions

```javascript
function throttle(callback, delay) {
    let waiting = false;

    return (...args) => {
        if (waiting) {
            return;
        }

        callback(...args);

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}
```

---

## Debounce vs Throttle

| Debounce                   | Throttle                         |
| -------------------------- | -------------------------------- |
| Waits until activity stops | Limits execution frequency       |
| Good for search            | Good for scrolling               |
| Executes after inactivity  | Executes at controlled intervals |

---

# 32. Modern JavaScript Best Practices

## Prefer const

```javascript
const user = {
    name: "Amar"
};
```

Use `let` when reassignment is required.

---

## Avoid unnecessary var

Prefer:

```javascript
const
let
```

over:

```javascript
var
```

---

## Use strict equality

Prefer:

```javascript
a === b;
```

over:

```javascript
a == b;
```

when you want to avoid implicit type coercion.

---

## Use meaningful variable names

Instead of:

```javascript
const x = document.querySelector("button");
```

Prefer:

```javascript
const submitButton = document.querySelector("button");
```

---

## Keep Functions Small

Prefer focused functions:

```javascript
function validateForm() {}

function submitForm() {}

function resetForm() {}
```

instead of one huge function.

---

## Separate HTML, CSS and JavaScript

Recommended structure:

```text
project/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│
└── README.md
```

---

# 33. Common Interview Questions

## What is hoisting?

Hoisting describes how JavaScript processes declarations before execution. `var` declarations are initialized to `undefined`; `let` and `const` remain in the TDZ until their declaration is evaluated; function declarations can be called before their declaration in the same scope.

---

## What is TDZ?

The Temporal Dead Zone is the period in which a `let`, `const`, or `class` binding exists but cannot be accessed before its declaration is evaluated.

---

## What is closure?

A closure allows a function to retain access to variables from its lexical scope.

---

## What is a higher-order function?

A function that accepts a function, returns a function, or both.

---

## Why is map() a higher-order function?

Because `map()` accepts a callback function.

---

## Difference between map() and forEach()?

`map()` creates and returns a new array. `forEach()` returns `undefined` and is normally used for side effects.

---

## Difference between filter() and find()?

`filter()` returns all matching elements in an array. `find()` returns the first matching element.

---

## Difference between slice() and splice()?

`slice()` does not modify the original array. `splice()` modifies it.

---

## What is the Event Loop?

The Event Loop coordinates synchronous JavaScript execution with queued asynchronous callbacks and microtasks.

---

## Why does Promise callback execute before setTimeout(..., 0)?

Promise reactions are microtasks, while timer callbacks are tasks. Microtasks are processed after the current synchronous work and before the next task.

---

## What is callback hell?

Deeply nested callback-based asynchronous code that becomes difficult to read and maintain.

---

## What is inversion of control?

When a function gives another function control over when/how a callback will be invoked.

---

## What does fetch() return?

`fetch()` returns a Promise that fulfills with a `Response` object.

---

## Why do we use response.json()?

Because `response.json()` reads and parses the response body as JSON and itself returns a Promise.

---

## What is async/await?

Syntax built on top of Promises that makes asynchronous code easier to read and write.

---

## Difference between localStorage and sessionStorage?

`localStorage` persists across browser sessions, while `sessionStorage` is associated with the current tab/session.

---

## Difference between call(), apply() and bind()?

`call()` and `apply()` invoke a function immediately with a chosen `this`; `bind()` returns a new function with a chosen `this`.

---

# 34. JavaScript Cheat Sheet

| Topic                  | Key Point                                             |
| ---------------------- | ----------------------------------------------------- |
| `var`                  | Function-scoped variable                              |
| `let`                  | Block-scoped variable                                 |
| `const`                | Block-scoped binding that cannot be reassigned        |
| Hoisting               | Declaration processing before execution               |
| TDZ                    | Restricted access before `let`/`const` initialization |
| Dynamic Typing         | Variables can hold values of different types          |
| Type Coercion          | Automatic type conversion                             |
| Ternary                | Short conditional expression                          |
| Closure                | Function remembers lexical variables                  |
| IIFE                   | Immediately executed function expression              |
| HOF                    | Function accepting/returning functions                |
| Rest                   | Collects values                                       |
| Spread                 | Expands values                                        |
| `map()`                | Transforms into a new array                           |
| `filter()`             | Returns matching elements                             |
| `find()`               | Returns first match                                   |
| `reduce()`             | Produces an accumulated result                        |
| `forEach()`            | Iterates for side effects                             |
| `slice()`              | Non-mutating extraction                               |
| `splice()`             | Mutating insert/delete/replace                        |
| Shallow Copy           | Nested references can remain shared                   |
| Deep Copy              | Nested structures are independently copied            |
| Destructuring          | Extracts values from arrays/objects                   |
| Optional Chaining      | Safely accesses nested values                         |
| DOM                    | Object representation of HTML                         |
| `querySelector()`      | First CSS-selector match                              |
| `querySelectorAll()`   | All CSS-selector matches                              |
| `textContent`          | Text content                                          |
| `innerText`            | Rendered text behavior                                |
| `innerHTML`            | HTML markup                                           |
| Event Listener         | Responds to browser events                            |
| Bubbling               | Event travels toward ancestors                        |
| Capturing              | Event travels from ancestors toward target            |
| Delegation             | Parent handles child events                           |
| `localStorage`         | Persistent browser storage                            |
| `sessionStorage`       | Tab/session storage                                   |
| Callback               | Function passed for later execution                   |
| Promise                | Represents eventual async result                      |
| `Promise.all()`        | All must fulfill                                      |
| `Promise.allSettled()` | Waits for all to settle                               |
| `Promise.race()`       | First settled Promise                                 |
| `Promise.any()`        | First fulfilled Promise                               |
| `async`                | Function returns a Promise                            |
| `await`                | Waits for a Promise inside async function             |
| Event Loop             | Coordinates queued async work                         |
| `setTimeout()`         | Schedules one callback                                |
| `setInterval()`        | Repeatedly schedules callbacks                        |
| `this`                 | Determined by function invocation/context             |
| `call()`               | Invoke with explicit `this`                           |
| `apply()`              | Invoke with explicit `this` and array-like args       |
| `bind()`               | Returns function with bound `this`                    |
| Debounce               | Execute after activity stops                          |
| Throttle               | Limit execution frequency                             |

---

# 35. How to Run

Clone the repository:

```bash
git clone https://github.com/your-username/javascript-fundamentals.git
```

Open the project folder:

```bash
cd javascript-fundamentals
```

Open:

```text
index.html
```

in a browser.

Open Developer Tools:

```text
F12
```

Then open the **Console** to view JavaScript output.

---

# 36. Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Add or improve examples.
4. Commit your changes.
5. Push the branch.
6. Open a Pull Request.

---

# 37. License

This project is licensed under the **MIT License**.

---

# Author

**Amar**

Learning and practicing JavaScript fundamentals, ES6+, DOM manipulation, asynchronous JavaScript, and browser APIs through hands-on examples.

---

# Conclusion

This repository is designed as a practical JavaScript learning roadmap covering the most important concepts from beginner to intermediate level.

The roadmap includes:

* JavaScript fundamentals
* Variables and scope
* Hoisting and TDZ
* Data types
* Type coercion and conversion
* Operators
* Functions
* Arrow functions
* Rest and spread
* Higher-order functions
* IIFE
* Lexical scoping
* Closures
* Pure and impure functions
* Execution contexts
* Call stack
* Arrays
* Objects
* Destructuring
* Shallow and deep copying
* JSON
* DOM manipulation
* Events
* Event bubbling and capturing
* Event delegation
* Forms and validation
* Browser storage
* Synchronous JavaScript
* Asynchronous JavaScript
* Callbacks
* Callback hell
* Timers
* Promises
* Promise combinators
* Fetch API
* Async/await
* Error handling
* Event Loop
* `this`
* `call()`, `apply()`, and `bind()`
* Debouncing
* Throttling

The goal is to understand not only **what JavaScript features do**, but also **how JavaScript executes code and handles asynchronous operations in the browser**.

Happy Coding! 🚀
