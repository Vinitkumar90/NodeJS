const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jj = require('./models/person');
const MenuItem = require('./models/MenuItem')
const db = require('./db')



const app = express();
app.use(bodyParser.json()); // specific to json->object

app.get('/', function(req, res) {
    res.send('Welcome to my hotel...How i cna help you ?');
});

// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body;

//         // create a new person document using the mongoose model
//         const newPerson = new jj(data);

//         // save the new person to the database
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.get('/person', async (req, res) => {
//     try {
//         const data = await jj.find();
//         console.log('data fetched');
//         res.status(200).json(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

//POST Method to add a Menu Item
app.post('/menu', async (req,res)=>{
    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({"error":"Internal Server Error"})
    }
})

//GET Method to get the Menu Items
app.get("/menu",async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.send(500).json({"error":"Internal Server Error"})
    }
})


const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});