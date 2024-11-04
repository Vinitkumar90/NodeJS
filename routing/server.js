const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jj = require('./models/person');
const MenuItem = require('./models/MenuItem')
const db = require('./db')

const app = express();
app.use(bodyParser.json()); // specific to json->object


app.get('/', function(req, res) {
    res.send('Welcome to our hotel');
});



const personRoute = require('./routes/personRoute');
const menuItemRoute = require('./routes/menuRoute');

app.use('/person' , personRoute);
app.use('/menu', menuItemRoute)




const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});