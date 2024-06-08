const fs = require("fs");

setTimeout(function(){
    console.log(90);
}, 1000);
fs.readFile("./sample.txt","utf-8", function(err, result){
    if(!err){
        console.log(result);
    }
})
console.log("Hello");
console.log(67);
