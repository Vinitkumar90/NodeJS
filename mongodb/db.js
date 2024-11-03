const mongoose = require("mongoose")

const mongoURL = 'mongodb+srv:/lolxdj.mongodb.net/hotels'  

mongoose.connect(mongoURL)

//mongoose will maintain a default connection object representing the monogoDB connection.
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB server');
})


module.exports = db;