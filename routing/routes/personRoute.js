const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const jj = require('../models/person');


router.post('/', async (req, res) => {
    try {
        const data = req.body;

        // create a new person document using the mongoose model
        const newPerson = new jj(data);

        // save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const data = await jj.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//query parameter
router.get("/:workType", async (req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType === "chef" || workType === "waiter" || workType === "manager"){
            const data = await jj.find({work:workType});
            console.log('response fetched');
            res.status(200).json(data);
        }else{
            res.status(404).json({"error": "Internal Server Error"})
        }
    }catch(err){
            console.log(err);
            res.status(500).json({"error": "Internal Server Error"})
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //extract the id from the url parameter
        const updatedPersonData = req.body; // updated data for the persoon

        const response = await jj.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,  //Return the updated document
            runValidators: true, //Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log("data updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;

        const response = await jj.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({"error": "Person not found"});
        }
        console.log('data delete');
        res.status(200).json({'message':'Internal Server Error'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'})
    }
})


module.exports = router;