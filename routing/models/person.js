const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["chef","waiter",'manager'],
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:String,
        required:true
    }
})

//create Person model

const jj = mongoose.model('Person',personSchema); //collection,schema
module.exports  = jj;