const express = require('express');
const router = express.Router();
const Person = require('./../module/person');


router.post('/', async (req,res) =>{
    try{
      const data=req.body;

    const newPerson= new Person(data);
    

     const response=await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
    }

    catch(err){
      console.log(err);
      res.status(502).json({error:'Internal Server Eroor'});
    }
  })
  router.post('/menu', async (req,res) =>{
    try{
      const data=req.body;

    const newMenu= new Menu(data);
    

     const responseMenu=await newMenu.save();
     console.log('data saved');
     res.status(200).json(responseMenu);
    }

    catch(err){
      console.log(err);
      res.status(502).json({error:'Internal Server Eroor'});
    }
  })
  


 router.get('/', async (req, res) =>{
    try{
      const data= await Person.find();
      console.log('data fetched');
    res.status(200).json(data);
    }
  
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Eroor'});
    }
  })


  router.get('/menu', async (req, res) =>{
    try{
      const data= await Menu.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
  
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Eroor'});
    }
  })

  router.get('/:worktype', async (req,res)=>{
    try{
      const worktype=req.params.worktype; // Extract the work type from the url
    if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){

      const response= await Person.find({Work:worktype});
      console.log('response fetched');
      res.status(207).json(response);

    }
    else{
     res.status(404).json({error:'invalid work  type'});
    }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Eroor'});
    }

  })

  router.put('/:id', async(req, res) => {
    try{
        const personId =req.params.id;//Extraxting the person id from URL
    const updatePersonData = req.body; //update data for person
     const UpdatedPerson = await Person.findByIdAndUpdate(personId, updatePersonData,{
        new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
     });

     if(!UpdatedPerson){
         res.status(404).json({error: 'person  not  found'});
     }

     res.json(UpdatedPerson);

    }

     

     catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Eroor'});
      }

  })

  router.delete('/:id', async(req, res) => {
    try{
        const personId =req.params.id;//Extraxting the person id from URL
     
     const DeletePerson= await Person.findByIdAndDelete(personId);

     if(!DeletePerson){
         res.status(404).json({error: 'person  not  found'});
     }

     res.json({ message: 'Person deleted successfully' });

    }

     

     catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Eroor'});
      }

  })



  module.exports = router;