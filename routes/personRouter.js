const express = require('express')
const router = express.Router()
const person = require('./../model/Person')


router.post('/', async(req , res)=>{
    try {
      
      const data = req.body;
      const newPerson = new person(data);
      const savePersonData = await newPerson.save();
      res.status(200).json(savePersonData);
      console.log('Save Person Data')
    


    } catch (error) {
      console.log(error)
      res.status(500).json({error : 'Internal server error'})
    }
})

// get
router.get('/', async(req,res)=>{
  try {
    const data = await person.find();
    res.status(200).json(data);
    console.log('Save Person Data')

  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }
})

// get request with perameter/params
router.get('/:workType', async(req, res)=> {

  try {
    const workType = req.params.workType;
    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      const response = await person.find({work : workType})
      console.log('data are fatched')
      res.status(200).json(response);

    }else{
      res.status(404).json('Invalied work type')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }

})

// Update data
router.put('/:id', async (req, res)=>{
  try {
    const personId = req.params.id;
    const updatePersonData = req.body;
    const response = await person.findByIdAndUpdate(personId, updatePersonData,{
      new : true,
      runValidators : true
    })
    if (!response) {
      return res.status(404).json({error : 'Person not found'})
    }
    console.log('data updated')
    res.status(200).json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }
})

// delete record
router.delete('/:id', async (req, res)=>{
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId)
    if (!response) {
      return res.status(404).json({error : 'Person not found'})
    }
    console.log('data deleted')
    res.status(200).json({msg : 'Deleted'})
  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }
})




module.exports = router;
