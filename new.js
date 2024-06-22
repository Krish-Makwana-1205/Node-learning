const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const udata = require("./MOCK_DATA.json");
const fs = require("fs");
//const { default: mongoose } = require("mongoose");
let app = express();

app.use(express.urlencoded({extended : false}));

mongoose.connect("mongodb://localhost:27017/Hi")
.then( () => console.log("Mongo DB connected"))
.catch( err => console.log("Error"));

const userschema = new mongoose.Schema({
    first_name: {
        type : String,
        required : true
    },
    last_name : {
        type : String
    },
    email : {
        type : String,
        required : true,
    },
    gender : {
        type : String
    }

})

const User = mongoose.model("user", userschema)

app.get('/api/users', (req, res) => {
    return res.json(udata);
});
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = udata.find((user) => user.id === id) 
    return res.json(user);
});
app.get('/users', async (req, res) => {
    const data = await User.find({});
    const html = `
    <ul>
       ${data.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html);
})
app.post('/api/users',async (req, res) => {
    const body = req.body;
    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email,
        gender : body.gender
    })
    console.log(result);
    return res.status(201).json({msg : "success"})
})
app.patch("/api/user/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {last_name : "changed"});
    return res.json({status : 'success'});
})
app.delete("/api/user/:id", async(req,res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"});
})
app.listen(8000, (req, res)=> {
    console.log("Server is up and running");
})

