const http = require("http");
const express = require("express");

let app = express();

app.get('/', (req, res)=>{
    return  res.send("Hello home here");
});
app.get('/about', (req, res)=>{
    return res.send("Hello from about page, " + req.query.name + req.query.age);
});

app.listen(8000, (req, res)=> {
    console.log("Server is up and running");
})