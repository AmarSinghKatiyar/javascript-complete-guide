// fetch("https://randomuser.me/api/").then(function(rawdata){
//     return rawdata.json();
// }).then(function(data){
//     let original = data.results[0]
//     console.log(original.email);
// }).catch(function(err){
//     console.log(err);
// })

//fetch("https://randomuser.me/api/",{method:"POST"})

async function getdata() {
    let rawdata = await fetch("https://randomuser.me/api/");
    let data = await rawdata.json();
    let original = data.results[0];
    console.log(original.email);
}

getdata();