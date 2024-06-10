const http = require("http");
const express = require("express");
const udata = require("./MOCK_DATA.json");
let app = express();

app.get('/users', (req, res) => {
    return res.json(udata);
});
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = udata.find((user) => user.id === id) 
    return res.json(user);
});
app.listen(8000, (req, res)=> {
    console.log("Server is up and running");
})