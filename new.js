const http = require("http");

const firstserver = http.createServer((req, res) => {
    console.log(req);
    res.end("Server on lets go");
});

firstserver.listen(8000, ()=> console.log("We are online"));