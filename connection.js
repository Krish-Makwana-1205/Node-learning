const mongoose = require('mongoose');

async function connectMongodb(){
    return mongoose.connect("mongodb://localhost:27017/Hi");
}

module.exports = {
    connectMongodb,
};