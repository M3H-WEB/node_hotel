const express = require('express')
const router = express.Router()
const menuItem = require('./../model/Menu')


router.post('/', async(req , res)=>{
    try {
      
      const data = req.body;
      const newMenuItem = new menuItem(data);
      const saveMenuItem = await newMenuItem.save();
      res.status(200).json(saveMenuItem);
      console.log('New Item Included')
    


    } catch (error) {
      console.log(error)
      res.status(500).json({error : 'Internal server error'})
    }
})

// get
router.get('/', async(req,res)=>{
  try {
    const data = await menuItem.find();
    res.status(200).json(data);
    console.log('Item List')

  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }
})


// get request with perameter/params
router.get('/:taste', async(req, res)=> {

  try {
    const tasteType = req.params.taste;
    if (tasteType == 'spicy' || tasteType == 'sour' || tasteType == 'sweet') {
      const response = await menuItem.find({taste : tasteType})
      console.log('data are fatched')
      res.status(200).json(response);

    }else{
      res.status(404).json('Invalied taste type')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }

})

// Update data
router.put('/:id', async (req, res)=>{
  try {
    const itemId = req.params.id;
    const updateItemData = req.body;
    const response = await menuItem.findByIdAndUpdate(itemId, updateItemData,{
      new : true,
      runValidators : true
    })
    if (!response) {
      return res.status(404).json({error : 'Item not found'})
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
    const itemId = req.params.id;
    const response = await menuItem.findByIdAndDelete(itemId)
    if (!response) {
      return res.status(404).json({error : 'Item not found'})
    }
    console.log('data deleted')
    res.status(200).json({msg : 'Deleted'})
  } catch (error) {
    console.log(error)
    res.status(500).json({error : 'Internal server error'})

  }
})





module.exports = router;