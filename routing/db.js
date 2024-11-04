const mongoose = require("mongoose")

const mongoURL = 'mongodb+srv://admin:4AnUaovm5a0nj8L2@cluster0.bumbj.mongodb.net/hotels'  

mongoose.connect(mongoURL)

//mongoose will maintain a default connection object representing the monogoDB connection.
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB server');
})


module.exports = db;