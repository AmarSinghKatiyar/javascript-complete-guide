# Debouncing and Throttling

Debouncing and throttling are techniques used for **performance optimization** and **rate limiting** in applications.

They are especially useful for handling events that occur frequently, such as typing, scrolling, resizing, mouse movement, and button clicks.

---

## Debouncing

**Debouncing ensures that a function executes only after a specified amount of time has passed since the last event occurred.**

If the event keeps occurring, the timer keeps resetting.

### Example

Consider a search box:

```text
Typing:  H → He → Hel → Hell → Hello
         ↑    ↑    ↑     ↑      ↑
       Timer resets each time

After the user stops typing for 500ms
                         ↓
                    API request
```

The API request is made only after the user stops typing for the specified amount of time.

### Simple Definition

> **Debounce = Wait until the event stops happening.**

### Common Use Cases

* Search input / API calls
* Form validation
* Window resize
* Auto-save
* Input field handling

---

## Debouncing Implementation in JavaScript

```javascript
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
```

### Example: Search Input

```javascript
function search(query) {
  console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

document
  .getElementById("search")
  .addEventListener("input", (event) => {
    debouncedSearch(event.target.value);
  });
```

Here, the `search()` function will execute only when the user has stopped typing for **500ms**.

---

# Debouncing — Search Example

## Case 1: Without Debouncing

Suppose the user searches for `Hello`.

The user types:

```text
H → He → Hel → Hell → Hello
```

Without debouncing, an API request is made for every character:

```text
H     → API call → Search DB
He    → API call → Search DB
Hel   → API call → Search DB
Hell  → API call → Search DB
Hello → API call → Search DB
```

### Problem

An API request is made for every character typed.

This can cause:

* Too many API requests
* Unnecessary database queries
* Higher server load
* Increased network usage
* Poor performance

So, making an API call on every keystroke is generally inefficient when the search does not need to update that frequently.

---

## Case 2: Wait Until the User Has Typed the Full Word

One approach is to wait until the user has finished typing the complete word and then make the API call.

For example:

```text
H → He → Hel → Hell → Hello
```

Then make only one API request:

```text
Hello → API call → Search DB
```

This reduces unnecessary API calls.

However, the application does not actually know when the user has "completely" finished typing.

For example:

```text
Hello → API call

User continues:
Hello W → API call
Hello Wo → API call
Hello Wor → API call
...
```

So instead of trying to determine whether the user has typed the "full word", we use a **time-based approach**.

---

## Case 3: Debouncing — Wait for a Specific Amount of Time

With debouncing, we wait for a specified amount of time, for example **800ms**.

Every time the user types:

1. Start an 800ms timer.
2. If the user types again before 800ms, cancel the previous timer.
3. Start a new 800ms timer.
4. If the user does not type anything for 800ms, execute the function.

### Example

The user types:

```text
H
```

```text
H
↓
Wait 800ms
```

Before 800ms passes, the user types:

```text
He
```

The previous timer is cancelled and a new timer starts:

```text
He
↓
Reset timer
↓
Wait 800ms
```

Then the user types:

```text
Hel
```

Again, the timer is reset:

```text
Hel
↓
Reset timer
↓
Wait 800ms
```

Finally, the user types:

```text
Hello
```

The timer is reset again:

```text
Hello
↓
Reset timer
↓
Wait 800ms
```

Now the user stops typing.

After 800ms:

```text
User stops typing
        ↓
    Wait 800ms
        ↓
    API call
        ↓
    Search DB
```

Therefore, instead of making an API request for every character, we make the request only after the user has stopped typing for 800ms.

---

## Visual Representation

```text
Without Debouncing:

H      → API
He     → API
Hel    → API
Hell   → API
Hello  → API

Total API calls = 5
```

With debouncing:

```text
H      → Reset timer
He     → Reset timer
Hel    → Reset timer
Hell   → Reset timer
Hello  → Reset timer
          ↓
       User stops
          ↓
       Wait 800ms
          ↓
        API call

Total API calls = 1
```

---

## Why Does Debouncing Improve Performance?

Without debouncing:

```text
Every keystroke
      ↓
  API request
      ↓
Database query
      ↓
Server processing
```

With debouncing:

```text
User types
    ↓
Timer keeps resetting
    ↓
User stops typing
    ↓
Wait 800ms
    ↓
One API request
    ↓
Database query
```

This can:

* Reduce unnecessary API requests
* Reduce unnecessary database queries
* Reduce server load
* Reduce network traffic
* Improve application performance
* Provide a better user experience

---

## JavaScript Implementation

```javascript
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
```

### Using Debounce for Search

```javascript
function search(query) {
  console.log("API Request:", query);
}

const debouncedSearch = debounce(search, 800);

searchInput.addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
});
```

Now, if the user keeps typing, the API call is delayed.

The API call happens only when the user stops typing for **800ms**.

---

## Important Point

The `800ms` value is only an example.

It could be:

```text
300ms
500ms
800ms
1000ms
```

The appropriate delay depends on the application's requirements and desired user experience.

---

## Simple Definition

> **Debouncing ensures that a function executes only after a specified amount of time has passed without the event occurring again.**

### Easy Way to Remember

```text
Debouncing = "Wait until the user stops."
```


# Throttling

**Throttling ensures that a function executes at most once during a specified time interval, regardless of how many times the event occurs during that interval.**

### Example

If the throttle interval is **1000ms**:

```text
Events:    ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
           |<---- 1 second ---->|
Execute:   ✓                    ✓
```

Even if the event occurs many times during the 1-second interval, the function executes at a controlled rate.

### Simple Definition

> **Throttle = Execute at a controlled rate.**

### Common Use Cases

* Scroll events
* Mouse movement
* Window resizing
* Button clicks
* API rate limiting

---

## Throttling Implementation in JavaScript

```javascript
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}
```

### Example: Scroll Event

```javascript
function handleScroll() {
  console.log("Scroll position:", window.scrollY);
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

Here, `handleScroll()` can execute at most **once every 1000ms**, even if the user scrolls continuously.

---

# Debouncing vs Throttling

| Feature        | Debouncing                 | Throttling                    |
| -------------- | -------------------------- | ----------------------------- |
| Main idea      | Wait for the event to stop | Limit execution frequency     |
| Execution      | After the events stop      | At most once per interval     |
| Timer          | Resets on every event      | Runs at a controlled interval |
| Common example | Search box                 | Scroll handler                |
| Mental model   | "Wait..."                  | "Slow down."                  |

---

## Easy Way to Remember

### Debouncing

```text
Event Event Event Event
                    ↓
              Wait for silence
                    ↓
                 Execute
```

**Debounce = "Wait..."**

### Throttling

```text
Event Event Event Event Event Event
  ↓
Execute
       ↓
    Wait
       ↓
    Execute
```

**Throttle = "Slow down."**

---

# Real-World Examples

## 1. Search Box → Debouncing

When a user types:

```text
H → He → Hel → Hell → Hello
```

Instead of making an API request for every character, debounce the request.

```javascript
const searchUsers = debounce((query) => {
  console.log("API Request:", query);
}, 500);

input.addEventListener("input", (event) => {
  searchUsers(event.target.value);
});
```

This reduces unnecessary API requests.

---

## 2. Scroll Event → Throttling

Scroll events can fire many times per second.

```javascript
const handleScroll = throttle(() => {
  console.log("User is scrolling");
}, 200);

window.addEventListener("scroll", handleScroll);
```

The function executes at most once every **200ms**.

---

# Performance Optimization

Without debouncing or throttling:

```text
User Action
    ↓
Event fires many times
    ↓
Function executes many times
    ↓
More CPU usage
    ↓
Possible performance issues
```

With debouncing or throttling:

```text
User Action
    ↓
Debounce / Throttle
    ↓
Controlled function execution
    ↓
Less unnecessary work
    ↓
Better performance
```

---

# Debouncing vs Throttling: When to Use What?

### Use Debouncing When:

You only care about the **final event** after the user stops performing an action.

Examples:

* Search input
* API calls while typing
* Form validation
* Auto-save
* Resize calculations after resizing stops

### Use Throttling When:

You want to respond **continuously but at a controlled rate**.

Examples:

* Scroll events
* Mouse movement
* Window resizing
* Dragging
* Continuous API requests

---

## In Short

> **Debouncing waits for the event to stop occurring, while throttling limits how frequently the event handler can execute.**

Both techniques help improve application performance by reducing unnecessary function executions and API requests.


# Throttling — Real-World Examples

Throttling is useful when an event can happen many times, but we want to allow the function to execute only at a controlled frequency.

> **Throttling = "Execute at a controlled rate."**

---

## Case 1: Refresh Button Without Throttling

Suppose we have a button that refreshes data from an API.

The user clicks the button multiple times:

```text id="x1c9za"
Click → API call
Click → API call
Click → API call
Click → API call
Click → API call
```

Every click creates a new API request.

### Problem

The user may accidentally or intentionally click the button many times.

This can cause:

* Too many API requests
* Unnecessary server load
* Duplicate requests
* Increased network usage
* Poor performance
* Possible rate-limit problems

For example:

```text id="f3c8vu"
User clicks Refresh 10 times
          ↓
      10 API calls
          ↓
      Server receives
      10 requests
```

This is unnecessary if the application only needs to refresh the data occasionally.

---

# Case 2: Refresh Button With Throttling

We can use throttling to control how frequently the refresh function can execute.

Suppose we set a throttle interval of **5 seconds**.

```text id="q1f4rm"
First click
    ↓
API call ✓
    ↓
5 second cooldown
    ↓
Additional clicks during 5 seconds
    ↓
Ignored
```

For example:

```text id="a8v7pl"
Time:     0s    1s    2s    3s    4s    5s    6s

Clicks:   ↑     ↑     ↑     ↑     ↑     ↑
          ↓
Execute:  ✓                              ✓
```

The first click executes immediately.

Any additional clicks during the 5-second throttle period do not execute the function.

After 5 seconds, another click can execute the function.

### Result

```text id="w3d6ab"
10 user clicks
      ↓
Throttle
      ↓
Only controlled API requests
```

This prevents users from accidentally sending many requests in a short period.

---

# Case 3: YouTube / Live Chat Slow Mode

A similar concept can be used in live chat systems to prevent users from sending messages too quickly.

Suppose a chat system has a **5-second slow mode**.

Without rate limiting:

```text id="s5b3xq"
User:
Hello      → Send
Hi         → Send
Everyone   → Send
How are you? → Send
Spam       → Send
Spam       → Send
Spam       → Send
```

A user can send many messages in a very short amount of time.

This can result in:

* Chat spam
* Too many messages
* Poor user experience
* Increased server load
* Other users' messages being difficult to see

---

## With Throttling / Rate Limiting

Suppose the user can send only **one message every 5 seconds**.

```text id="z9p2kx"
0s  → "Hello"       ✓ Sent
1s  → "Hi"          ✗ Blocked
2s  → "Everyone"    ✗ Blocked
3s  → "How are you?" ✗ Blocked
4s  → "Spam"        ✗ Blocked
5s  → "Hello again" ✓ Sent
```

The user can continue typing, but the system controls how frequently messages can be sent.

```text id="k4n8sw"
Message
   ↓
Check rate limit
   ↓
Allowed?
  ↙   ↘
Yes    No
 ↓      ↓
Send   Block/Wait
```

This helps prevent users from flooding the chat with messages.

> Note: In real applications, chat systems often implement this as **server-side rate limiting**, rather than relying only on client-side JavaScript throttling.

---

# JavaScript Implementation

A simple throttle function:

```javascript id="p7x3lm"
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback.apply(this, args);
    }
  };
}
```

---

# Example: Refresh Button

```javascript id="r6q2vn"
function refreshData() {
  console.log("Fetching latest data...");
  
  // API request
  fetch("/api/data");
}

const throttledRefresh = throttle(refreshData, 5000);

refreshButton.addEventListener("click", throttledRefresh);
```

Now:

```text id="u8j4kp"
Click
 ↓
API call ✓

Click immediately again
 ↓
Blocked ✗

Click again after 5 seconds
 ↓
API call ✓
```

---

# Example: Chat Message Rate Limiting

```javascript id="b2m7qd"
function sendMessage(message) {
  console.log("Sending:", message);

  // Send message to server
}

const throttledSendMessage = throttle(sendMessage, 5000);

sendButton.addEventListener("click", () => {
  throttledSendMessage(input.value);
});
```

This allows the client to send at most one message every 5 seconds.

However, for a real chat application, **server-side rate limiting is essential**, because users can bypass client-side JavaScript restrictions.

---

# Important Difference: Throttling vs Debouncing

### Debouncing

```text id="e4s6yt"
User keeps performing an action
        ↓
Timer keeps resetting
        ↓
User stops
        ↓
Wait
        ↓
Execute
```

Example:

```text
Search box

Typing → Typing → Typing → Typing
                              ↓
                         Stop typing
                              ↓
                          API call
```

> **Debounce = Wait until the activity stops.**

---

### Throttling

```text id="n5c1xr"
Event → Execute
         ↓
      Cooldown
         ↓
Events during cooldown → Block/Ignore
         ↓
Cooldown ends
         ↓
Next event → Execute
```

Example:

```text
Refresh button

Click → API call ✓
Click → Block ✗
Click → Block ✗
Click → Block ✗
5 seconds pass
Click → API call ✓
```

> **Throttle = Control how frequently the function executes.**

---

# Quick Comparison

| Scenario               | Technique                          | Reason                          |
| ---------------------- | ---------------------------------- | ------------------------------- |
| Search while typing    | Debouncing                         | Wait until user stops typing    |
| Auto-save after typing | Debouncing                         | Avoid saving on every keystroke |
| Scroll event           | Throttling                         | Limit execution frequency       |
| Refresh button         | Throttling                         | Prevent repeated requests       |
| Live chat message rate | Rate limiting / Throttling concept | Prevent message flooding        |
| Mouse movement         | Throttling                         | Control frequent events         |

---

## Easy Way to Remember

```text id="q7k2fz"
Debouncing:
"Wait until the user stops."

Throttling:
"Don't let the function run too frequently."
```

### In Short

> **Debouncing delays execution until the activity stops, while throttling limits how often execution can happen during continuous activity.**
