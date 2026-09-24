Async/await is syntactical sugar over Promises.

It uses two keywords: `async` and `await`.

We can make a function asynchronous by using the `async` keyword before the function.

The `await` keyword is generally used inside an `async` function. If we use `await` in a normal function, it gives an error (with the exception of top-level `await` in supported environments).

An `async` function always returns a Promise.

`await` temporarily suspends the execution of the current `async` function until the Promise settles, but it does not block the call stack. JavaScript can continue executing other tasks while the function is suspended.



# JavaScript Promises, Async/Await & Event Loop

## 1. Promise kya hota hai?

JavaScript me **Promise** ek object hai jo future me hone wale asynchronous operation ka result represent karta hai.

Promise ki 3 states hoti hain:

* `pending` → abhi result nahi aaya
* `fulfilled` → operation successfully complete ho gaya
* `rejected` → operation fail ho gaya

Example:

```
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolved");
    }, 5000);
});

promise.then(function(data) {
    console.log(data);
});
```

Output:

```
promise resolved
```

### Flow

```
Promise created
     ↓
  pending
     ↓
5 seconds wait
     ↓
resolve("promise resolved")
     ↓
  fulfilled
     ↓
.then() callback
     ↓
console.log(data)
```

---

# 2. `new Promise()` ke andar executor kab run hota hai?

Important point:

**Promise create hote hi executor function immediately run hota hai.**

Example:

```
const promise = new Promise((resolve, reject) => {
    console.log("Promise executor");

    setTimeout(() => {
        resolve("Done");
    }, 5000);
});

console.log("After promise");
```

Output:

```
Promise executor
After promise
```

Promise ka result 5 seconds baad aayega, lekin executor immediately run ho gaya.

---

# 3. `resolve()` kya karta hai?

`resolve()` Promise ko fulfilled state me le jaata hai.

Example:

```
const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});

promise.then((data) => {
    console.log(data);
});
```

Output:

```
Hello
```

Yaha:

```
resolve("Hello");
```

Promise ka result:

```
"Hello"
```

ban gaya.

---

# 4. `.then()` kya karta hai?

`.then()` Promise ke successful result ko handle karta hai.

Example:

```
const promise = new Promise((resolve, reject) => {
    resolve("Hello");
});

promise.then((data) => {
    console.log(data);
});
```

Yaha:

```
data = "Hello"
```

---

# 5. Async Function

Agar kisi function ke aage `async` laga diya jaye:

```
async function test() {
    console.log("Hello");
}
```

Toh ye function **hamesha Promise return karta hai**.

Example:

```
async function test() {
    return "Hello";
}

const result = test();

console.log(result);
```

`result` directly `"Hello"` nahi hoga.

Instead:

```
Promise { "Hello" }
```

Conceptually:

```
async function test() {
    return "Hello";
}
```

approximately behaves like:

```
function test() {
    return Promise.resolve("Hello");
}
```

---

# 6. `await` kya karta hai?

`await` Promise ke result ka wait karne ke liye use hota hai.

Example:

```
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 5000);
});

async function test() {
    const data = await promise;

    console.log(data);
}

test();
```

5 seconds ke baad:

```
Hello
```

---

# 7. `await` actually kya karta hai?

Ye bahut important concept hai.

`await` JavaScript ko completely block nahi karta.

Ye sirf **current async function ko temporarily suspend** karta hai.

Example:

```
async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("3");
}

test();

console.log("2");
```

Output:

```
1
2
3
```

### Kyu?

Flow:

```
test()
  ↓
console.log("1")
  ↓
await Promise.resolve()
  ↓
test() function temporarily suspend
  ↓
console.log("2")
  ↓
Promise settle
  ↓
await ke baad ka code microtask me schedule
  ↓
console.log("3")
```

Isliye:

```
1
2
3
```

---

# 8. `await` Call Stack ko block karta hai?

**Nahi.**

`await` ka matlab ye nahi hai:

```
"JavaScript pura ruk jao."
```

Instead:

```
"Is async function ko yaha pause karo,
 aur Promise complete hone ke baad aage continue karo."
```

Example:

```
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

Output:

```
A
C
B
```

---

# 9. Event Loop

JavaScript ka execution samajhne ke liye kuch important components hain:

```
Call Stack
Web APIs / Host APIs
Microtask Queue
Task / Macrotask Queue
Event Loop
```

Simplified flow:

```
JavaScript Code
      ↓
  Call Stack
      ↓
┌───────────────┐
│ Web / Host API│
└───────────────┘
      ↓
  Queues
   ↙   ↘
Microtask   Task
  Queue     Queue
      ↓
  Event Loop
      ↓
  Call Stack
```

---

# 10. Call Stack

Call Stack me currently execute ho raha JavaScript code hota hai.

Example:

```
function one() {
    console.log("one");
}

one();
```

Flow:

```
one()
  ↓
Call Stack
  ↓
console.log()
  ↓
Call Stack se remove
```

---

# 11. Web APIs / Host APIs

Browser environment kuch asynchronous operations provide karta hai.

Examples:

* `setTimeout`
* `setInterval`
* `fetch`
* DOM events
* network operations

Example:

```
setTimeout(() => {
    console.log("Hello");
}, 3000);
```

Timer ka waiting part browser/host environment handle karta hai.

JavaScript Call Stack 3 seconds ke liye blocked nahi hota.

---

# 12. Task / Macrotask Queue

`setTimeout` jaise operations complete hone ke baad unke callbacks task queue me aa sakte hain.

Example:

```
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
```

Output:

```
1
3
2
```

Flow:

```
console.log("1")
      ↓
     1

setTimeout()
      ↓
Browser / Host API
      ↓
Task Queue

console.log("3")
      ↓
     3

Event Loop
      ↓
Task Queue callback
      ↓
     2
```

---

# 13. Microtask Queue

Microtask Queue me Promise related callbacks generally jaate hain.

Examples:

```
promise.then()

promise.catch()

promise.finally()

await continuation

queueMicrotask()
```

Example:

```
Promise.resolve().then(() => {
    console.log("Promise");
});
```

Ye callback microtask queue me schedule hota hai.

---

# 14. Microtask vs Task

Common examples:

### Microtasks

```
Promise.then()
Promise.catch()
Promise.finally()
await continuation
queueMicrotask()
```

### Tasks / Macrotasks

```
setTimeout()
setInterval()
some browser events
```

Simplified rule:

```
Current synchronous code
        ↓
Microtasks
        ↓
Next task
```

Microtasks ko generally next task/macrotask se pehle drain kiya jaata hai.

---

# 15. Important Example

```
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
```

Output:

```
1
4
3
2
```

### Explanation

Initially synchronous code:

```
console.log("1");
console.log("4");
```

Output:

```
1
4
```

Promise callback microtask queue me gaya:

```
console.log("3");
```

Timer callback task queue me gaya:

```
console.log("2");
```

Current synchronous code complete hone ke baad:

```
Microtask Queue
      ↓
     3
```

Then task:

```
Task Queue
      ↓
     2
```

Final:

```
1
4
3
2
```

---

# 16. Multiple Promises

Consider:

```
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p1");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p2");
    }, 3000);
});
```

Important:

**Dono Promise ke executors immediately run hote hain.**

Isliye dono timers immediately start ho jaate hain.

Timeline:

```
0 sec
│
├── promise1 timer starts → 5 sec
│
└── promise2 timer starts → 3 sec
│
3 sec → promise2 resolved
│
5 sec → promise1 resolved
```

Isliye `promise2` pehle resolve ho jayega.

---

# 17. `await` ke saath Multiple Promises

Example:

```
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p1");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p2");
    }, 3000);
});

async function getdata() {
    const data1 = await promise1;

    console.log(data1);

    const data2 = await promise2;

    console.log(data2);

    console.log("hello");
}

getdata();
```

Output:

```
hello p1
hello p2
hello
```

### Important

`promise2` 3 seconds me already resolve ho chuka hoga.

Lekin `getdata()` pehle:

```
await promise1
```

par suspended hai.

5 seconds ke baad `promise1` resolve hota hai.

Then function continue karta hai:

```
const data2 = await promise2;
```

Lekin `promise2` already resolved hai.

Isliye `data2` mil jaata hai.

---

# 18. Promises Sequentially likhne ka meaning

Ye:

```
const data1 = await promise1;
const data2 = await promise2;
```

ka matlab ye nahi hai ki `promise2` ka timer tabhi start hoga jab `await promise1` complete hoga.

Agar Promise pehle hi create ho chuka hai:

```
const promise1 = new Promise(...);
const promise2 = new Promise(...);
```

toh dono executors immediately run ho chuke hain.

`await` sirf current async function ki continuation ko control karta hai.

---

# 19. `fetch()` kya return karta hai?

`fetch()` ek Promise return karta hai.

Example:

```
const result = fetch("https://randomuser.me/api/");
```

Conceptually:

```
fetch()
   ↓
Promise<Response>
```

Matlab:

```
const result = fetch(api);
```

`result` actual JSON data nahi hai.

Ye:

```
Promise<Response>
```

hai.

---

# 20. `await fetch()` kya karta hai?

Example:

```
const response = await fetch(api);
```

Ab:

```
response
```

ek `Response` object hai.

Flow:

```
fetch(api)
   ↓
Promise<Response>
   ↓
await
   ↓
Response object
```

---

# 21. `response.json()` kya karta hai?

Important point:

`response.json()` bhi Promise return karta hai.

Example:

```
const response = await fetch(api);

const data = response.json();
```

Yaha:

```
data
```

actual JSON data nahi hai.

Ye:

```
Promise
```

hai.

Isliye hume isko bhi `await` karna hota hai.

Correct:

```
const response = await fetch(api);

const data = await response.json();

console.log(data);
```

Flow:

```
fetch(api)
   ↓
Promise<Response>
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
Promise<Data>
   ↓
await
   ↓
Parsed JSON Data
```

---

# 22. Fetch ka Complete Example

```
const api = "https://randomuser.me/api/";

async function getdata() {
    try {
        const response = await fetch(api);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getdata();
```

---

# 23. Tumhare Code ka Correct Version

Original pattern:

```
const fetchdata = fetch(api);
const wait = (await fetchdata).json();
```

Problem:

```
(await fetchdata).json()
```

`Response` object se `json()` call karta hai.

Lekin:

```
response.json()
```

khud ek Promise return karta hai.

Isliye:

```
wait
```

me actual JSON data nahi, Promise milega.

Correct version:

```
const fetchdata = fetch(api);

const response = await fetchdata;

const data = await response.json();

console.log(data);
```

Ya directly:

```
const response = await fetch(api);

const data = await response.json();

console.log(data);
```

---

# 24. Complete Fetch + Multiple Promise Example

```
const api = "https://randomuser.me/api/";

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p1");
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello p2");
    }, 3000);
});

async function getdata() {
    try {
        const response = await fetch(api);

        const data = await response.json();

        console.log(data);

        const data1 = await promise1;

        console.log(data1);

        const data2 = await promise2;

        console.log(data2);

        console.log("hello");
    } catch (error) {
        console.error(error);
    }
}

getdata();
```

---

# 25. `try...catch` with Async/Await

Promise reject hone par `await` error throw kar sakta hai.

Example:

```
async function getdata() {
    try {
        const response = await fetch(api);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getdata();
```

Agar:

```
fetch()
```

reject ho gaya

ya:

```
response.json()
```

reject ho gaya

toh control:

```
catch
```

me ja sakta hai.

---

# 26. Async/Await ka Main Advantage

Promise chaining:

```
fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
```

Async/Await:

```
async function getdata() {
    try {
        const response = await fetch(api);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getdata();
```

Async/await asynchronous code ko synchronous-looking style me likhne deta hai.

---

# 27. Async/Await Internally kaise sochna hai?

Ye code:

```
async function getdata() {
    const response = await fetch(api);

    const data = await response.json();

    console.log(data);
}
```

Isko conceptually aise samjho:

```
fetch(api)
   ↓
Promise
   ↓
async function temporarily suspend
   ↓
Promise resolve
   ↓
continuation microtask
   ↓
Response mil gaya
   ↓
response.json()
   ↓
Promise
   ↓
async function temporarily suspend
   ↓
JSON Promise resolve
   ↓
continuation microtask
   ↓
console.log(data)
```

---

# 28. Important Mental Model

`await` ko aise mat samjho:

```
"JavaScript ruk gayi."
```

Better mental model:

```
"Current async function yaha temporarily pause hai.
 Baaki JavaScript execution continue kar sakta hai.
 Promise settle hone ke baad function continue hoga."
```

---

# 29. Event Loop ka Simplified Mental Model

```
JavaScript Code
      ↓
  Call Stack
      ↓
Async operation
      ↓
Browser / Host API
      ↓
   Queue
   ↙   ↘
Microtask  Task
   ↓       ↓
   └── Event Loop ──┘
           ↓
      Call Stack
```

Important:

```
Promise callbacks
      ↓
Microtask Queue
```

and commonly:

```
setTimeout callbacks
      ↓
Task Queue
```

---

# 30. Final Quick Revision

### Promise

```
Promise = future result ko represent karta hai.
```

States:

```
pending
fulfilled
rejected
```

### `resolve()`

```
Promise ko fulfilled karta hai.
```

### `reject()`

```
Promise ko rejected karta hai.
```

### `.then()`

```
Successful Promise result handle karta hai.
```

### `async`

```
Function ko async banata hai aur function always Promise return karta hai.
```

### `await`

```
Current async function ki execution ko temporarily suspend karta hai.
```

### Important

```
await Call Stack ko block nahi karta.
```

### Promise callbacks

```
.then()
.catch()
.finally()
```

Generally:

```
Microtask Queue
```

### `await` continuation

```
Microtask Queue
```

### `setTimeout`

```
Task / Macrotask Queue
```

### `fetch()`

```
Promise<Response> return karta hai.
```

### `response.json()`

```
Promise<ParsedData> return karta hai.
```

### Fetch pattern

```
const response = await fetch(api);
const data = await response.json();
```

### Complete mental model

```
fetch()
   ↓
Promise<Response>
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
Promise<Data>
   ↓
await
   ↓
Data
```

---

# 31. One-Line Summary

```
Promise → future result

async → function returns Promise

await → current async function temporarily pause

fetch() → Promise<Response>

response.json() → Promise<Data>

Promise callbacks → Microtask Queue

setTimeout callback → Task Queue

Event Loop → queues se callbacks ko Call Stack tak laane me coordinate karta hai
```
