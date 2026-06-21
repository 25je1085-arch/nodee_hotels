const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem');

router.post('/',async (req,res)=>{
  try{
  const data = req.body // Assuming the request body contains the person data

  // create a new menu document using Mongoose model
  const newPerson = new MenuItem(data);

  //Save the new person to the database
  const response = await newPerson.save();
  console.log('data saved successfully');
  res.status(200).json(response);
  }
  catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
  }
})

router.get('/',async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched successfully');
    res.status(200).json(data);


  }catch(err){
    console.log(err);
      res.status(500).json({error: 'Internal server error'});

  }

})

router.get('/:Taste',async (req,res)=>{
  try{
    const Taste = req.params.Taste;
    if(Taste == 'spicy' || Taste== 'sweet' || Taste == 'sour'){

    const response = await MenuItem.find({taste: Taste});
    console.log('data fetched successfully');
    res.status(200).json(response);
    }
    else{
      res.status(404).json({error: 'Invalid work type'});
    }


  }catch(err){
    console.log(err);
      res.status(500).json({error: 'Internal server error'});

  }

})

module.exports = router;
