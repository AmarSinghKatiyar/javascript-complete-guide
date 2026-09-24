// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("promise resolved")
//     }, 5000);
// })

// promise.then(function(rawdata){
//     console.log(rawdata);
    
// })

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
        const fetchdata = fetch(api);

        const wait = await fetchdata;
        const data = await wait.json();

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