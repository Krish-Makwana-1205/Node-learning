const http = require("http");
const fs = require("fs");

const firstserver = http.createServer((req, res) => {
    const x = 'New user\n';
    fs.appendFile('sample.txt', x, (err, data)=>{
        res.end("Server on lets go");
    });
});

firstserver.listen(8000, ()=> console.log("We are online"));