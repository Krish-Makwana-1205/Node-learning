const express = require("express");
const udata = require("../MOCK_DATA.json");
const router = express.Router();
const User = require("../models/user")
router.get('/', async (req, res) => {
    const x = await User.find({});
    return res.json(x);
});
router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if(!user) return res.status(404).json({error : "User not found"});
    return res.json(user);
});
router.post('/',async (req, res) => {
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
router.patch("/api/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {last_name : "changed"});
    return res.json({status : 'success'});
})
router.delete("/:id", async(req,res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"});
})

module.exports = router;