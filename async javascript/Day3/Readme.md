promise.all() is a kind api of promise api
promise.all() accept a array of promises []
promise accept an iterable or we can say an array of promises []
it gives an array of reponse as a output
and it is mandatory to that if promise.all() have [p1,p2,p3] and p1 takes 3 p2 takes4 and p3 takes 6 sec so it gives response as its maximum time and if there is any error in any promise then it will not give any fruitfull result and it gives response when any the first promise gets error




### `Promise.all()`

`Promise.all()` JavaScript ke **Promise API** ka ek method hai.

* `Promise.all()` ke andar hum **Promises ka array** pass karte hain.
* Ye **iterable** accept karta hai, jaise array.
* Jab saare promises successfully complete ho jaate hain, to `Promise.all()` **responses ka ek array** return karta hai.
* Ye responses **usi order mein deta hai jis order mein promises array mein diye gaye hain**, chahe koi promise pehle ya baad mein complete ho.

### Example:

```javascript
Promise.all([p1, p2, p3])
```

Agar:

* `p1` ko 3 seconds lagte hain
* `p2` ko 4 seconds lagte hain
* `p3` ko 6 seconds lagte hain

To `Promise.all()` **6 seconds ke baad result dega**, kyunki usse saare promises ke complete hone ka wait karna padta hai.

### Agar kisi ek Promise mein error aa jaye?

Agar `[p1, p2, p3]` mein se **kisi bhi ek promise ko error/reject milta hai**, to `Promise.all()` **reject ho jaata hai**.

Matlab agar `p2` fail ho gaya, to `Promise.all()` successful result ka array return nahi karega.

**Simple words mein:**

> `Promise.all()` tabhi successfully result deta hai jab **saare promises resolve** ho jaayein.
> Agar **ek bhi promise reject** ho gaya, to `Promise.all()` bhi reject ho jaata hai.


Promise.all() mein rejection timing:

- Agar saare promises resolve ho jaate hain, to Promise.all() maximum time tak wait karta hai.
- Example: p1 = 3 sec, p2 = 4 sec, p3 = 6 sec → result 6 sec ke baad milega.
- Lekin agar kisi bhi promise mein rejection/error aa jaye, to Promise.all() us rejection ke time par hi reject ho jaata hai.
- Example: p1 = 3 sec, p2 = 4 sec (reject), p3 = 6 sec → Promise.all() 4 sec par reject ho jayega. Ye 6 sec tak wait nahi karega.
- Important: Promise.all() baaki promises ko cancel nahi karta. Wo background mein complete ho sakte hain.

Simple rule:

All resolve → maximum time tak wait karega.
Any one rejects → first rejection par immediately reject ho jayega.

===============================================================================================================================================================================

->Promise.allsettled() it accept iterable or array of promise
it gives reponse as a array of reponse and if there is any error in any promise then it gives eroor in that response but all promises will execute 



-> Promise.allSettled()

Promise.allSettled() bhi Promise API ka ek method hai.

- Ye ek iterable accept karta hai, jaise array of promises.
- Ye ek array of results return karta hai.
- Isme agar koi promise resolve hota hai, to uska result milta hai.
- Agar koi promise reject hota hai, to uska error/reason bhi result mein milta hai.
- Sabhi promises execute hote hain aur Promise.allSettled() kisi ek promise ke reject hone par rukta nahi hai.
- Ye tab result deta hai jab saare promises settle ho jaate hain, chahe wo resolve ho ya reject.

Example:

Promise.allSettled([p1, p2, p3])

Output:

[
  { status: "fulfilled", value: "P1" },
  { status: "rejected", reason: "Error" },
  { status: "fulfilled", value: "P3" }
]

===============================================================================================================================================

Simple Difference:

Promise.all()
→ Ek bhi promise reject hua → Promise.all() reject ho jayega.
→ Saare resolve hue → result ka array milega.
→ First rejection par reject ho jata hai.

Promise.allSettled()
→ Koi promise reject ho → phir bhi sabhi promises ka result milega.
→ Resolve aur reject dono ka result return karta hai.
→ Sabhi promises settle hone ka wait karta hai.

Easy way to remember:

Promise.all()
→ "Mujhe sabhi promises successful chahiye."

Promise.allSettled()
→ "Mujhe sabhi promises ka result chahiye, chahe successful ho ya failed."



Promise.all()
→ Use when ALL promises are required to succeed.

Example:
Fetching user data + orders + payment details

If any one request fails, you may not be able to use the complete data.
So Promise.all() is useful.

--------------------------------------------

Promise.allSettled()
→ Use when you want the result of EVERY promise,
  even if some promises fail.

Example:
Sending notifications to 10 users

If 2 notifications fail, you still want to know
which 8 succeeded and which 2 failed.

--------------------------------------------

Simple rule:

Need ALL promises to succeed?
→ Promise.all()

Need result/status of EVERY promise?
→ Promise.allSettled()

Important:
"Better" depends on the use case, not performance.

========================================================================================================================================================

->promise.race():- [p1,p2,p3] =[3,4,2]time iseme jo bhi sabse pahale execute hota hai vahi result mil jata hai  it dont give any array of respone it give particular value hence which ever first execute either give reponse or not then it takes min time
if any 2 promise have same time then what 


-> Promise.race()

Promise.race() bhi Promise API ka ek method hai.

- Ye promises ka iterable/array accept karta hai.
- Ye us promise ka result deta hai jo sabse pehle settle hota hai.
- Ye response ka array nahi deta, balki directly ek particular value/reason deta hai.
- Agar sabse pehle promise resolve hota hai → Promise.race() resolve hoga.
- Agar sabse pehle promise reject hota hai → Promise.race() reject hoga.

Example:

p1 → 3 sec
p2 → 4 sec
p3 → 2 sec

Promise.race([p1, p2, p3])

→ p3 sabse pehle settle hoga (2 sec)
→ Isliye p3 ka result milega.


Important:

"First execute" nahi, "first settle" matter karta hai.

Settle = resolve OR reject


Agar 2 promises ka same time ho:

p1 → 2 sec → resolve
p2 → 2 sec → resolve

To jo promise event loop/microtask scheduling ke according
pehle settle hota hai, Promise.race() usi ka result lega.

Agar dono same timer se start hue hain aur same delay hai,
to generally array mein jo pehle hai uska callback pehle
schedule/execute ho sakta hai, but exact timing par depend
karna avoid karna chahiye.

Simple rule:

Promise.race()
→ Jo promise FIRST SETTLE hoga
→ Uska result/reason milega
→ Result array nahi hota
→ Resolve ya Reject, dono race jeet sakte hain


======================================================================================================================================================

->promise.any():-[p1,p2,p3] = [2,1,4] it gives single output but gives first succesfully setteled or excution not give any error and also if 
all promises gives error then it gives a aggregated error as a output 

-> Promise.any()

Promise.any() bhi Promise API ka ek method hai.

- Ye promises ka iterable/array accept karta hai.
- Ye sirf FIRST SUCCESSFULLY RESOLVED (fulfilled) promise ka result deta hai.
- Ye response ka array nahi deta, balki ek single value return karta hai.
- Agar koi promise reject ho jaye, to Promise.any() us error ko ignore karta hai aur baaki promises ka wait karta hai.
- Jaise hi koi ek promise successfully resolve hota hai, Promise.any() uska result de deta hai.

Example:

p1 → 2 sec → rejected
p2 → 1 sec → rejected
p3 → 4 sec → fulfilled

Promise.any([p1, p2, p3])

→ p1 aur p2 reject hue, lekin Promise.any() ne wait kiya.
→ p3 4 sec mein successfully resolve hua.
→ Isliye p3 ka result milega.


Agar SAARE promises reject ho jaayein:

p1 → rejected
p2 → rejected
p3 → rejected

Promise.any([p1, p2, p3])

→ Promise.any() reject hoga.
→ Isme AggregateError milta hai.
→ AggregateError mein sabhi rejected promises ke errors available hote hain.


Simple rule:

Promise.all()
→ ALL successful chahiye
→ Ek reject → immediately reject

Promise.allSettled()
→ ALL ka result chahiye
→ Resolve + Reject dono ka result

Promise.race()
→ FIRST SETTLED chahiye
→ Resolve OR Reject, jo pehle ho

Promise.any()
→ FIRST SUCCESS chahiye
→ Reject ko ignore karta hai
→ Sab reject → AggregateError

==================================================================================================================================================
