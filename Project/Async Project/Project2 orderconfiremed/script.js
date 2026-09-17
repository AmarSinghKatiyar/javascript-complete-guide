function orderebooked(callback){
    setTimeout(() => {
        console.log("ordere booked");
        callback();
    }, 2000);
}

function vieworder(callback){
    setTimeout(() => {
        console.log("view order");
        callback();
    }, 2000);
}

function inventaroyanalysis(callback){
    setTimeout(() => {
        console.log("Inventaroy analysis");
        callback();
    }, 2000);
}

function orderconfirmed(){
    setTimeout(() => {
        console.log("order confirmed");
    }, 2000);
}

orderebooked(()=>{
    vieworder(()=>{
        inventaroyanalysis(()=>{
            orderconfirmed();
        });
    });
});