// https://api.frankfurter.dev/v2/rate/${from}/${to}
let amountip = document.querySelector("#amount");
let from = document.querySelector("#fromCurrency");
let to = document.querySelector("#toCurrency");
let cbtn = document.querySelector("#convertBtn");
let res = document.querySelector("#result");

cbtn.addEventListener("click",function(){
    let amount = Number(amountip.value);
    if(amountip.value===""){
        res.textContent = "Please enter some amount";
        return;
    }
    let fromv=from.value;
    let tov=to.value;
    if(fromv===tov){
        res.textContent = `${amount}${fromv}==${amount}${tov}`;
    }
    fetch(`https://api.frankfurter.dev/v2/rate/${fromv}/${tov}`).then(function(rawdata){
        return rawdata.json();
    }).then(function(data){
        let ratev=data.rate;
        let convertamount = amount*ratev;
        res.textContent = `${amount}${fromv}==${convertamount}${tov}`;
    }).catch(function(err){
        res.textContent = `${err}`;
    })

})
