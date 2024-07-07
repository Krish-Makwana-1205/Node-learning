const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const udata = require("./MOCK_DATA.json");
const fs = require("fs");
const {logReqRes} = require("./middleware/index");
//const { default: mongoose } = require("mongoose");

let app = express();

const{connectMongodb} = require("./connection");

connectMongodb();

const userRouter = require('./routes/user');

app.use(logReqRes('sample.txt'))

app.use(express.urlencoded({extended : false}));

app.use('/user',userRouter);


app.listen(8000, (req, res)=> {
    console.log("Server is up and running");
})

