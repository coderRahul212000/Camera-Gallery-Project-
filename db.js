// open a database
// create objectstore
// Make transactions

let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e)=>{

     console.log("DB Success");
     db = openRequest.result;

})

openRequest.addEventListener("error", (e)=>{

   console.log("DB error");
})

openRequest.addEventListener("upgradeneeded", (e)=>{

    console.log("DB upgraded and also for initial DB creation");
    db = openRequest.result;

    //object store can only be created in upgradeneeded

    db.createObjectStore("video", {keyPath: "id"});
    db.createObjectStore("image", {keyPath: "id"});

})