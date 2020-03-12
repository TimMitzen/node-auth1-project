const express = require('express')
const Users = require('./usersModel')
const restrict = require('../middleware/restrict')


const router = express.Router()

router.get('/', restrict(), async(req, res,next)=>{
   try{
      res.json(await Users.find())

   }
   catch(error){
      next(error)
   }
})

module.exports = router;