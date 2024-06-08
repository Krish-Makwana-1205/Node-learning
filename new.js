const http = require("http");
const fs = require("fs");
const url = require("url");

const firstserver = http.createServer((req, res) => {
    const myurl = url.parse(req.url, true);
    if(myurl.pathname == '/favicon.ico'){
        return res.end();
    }
    if(myurl.query.name){
        let username = myurl.query.name
        res.end("Hi " + username);
    }
    else{
        res.end("Hola");
    }
    console.log(myurl);
});

firstserver.listen(8000, ()=> console.log("We are online"));