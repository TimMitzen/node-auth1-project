const express = require('express')
const Users = require('./usersModel')
const {restrict} = require('../middleware/restrict')
const {protected} = require('../middleware/protected')


const router = express.Router()

router.get('/',restrict(), async(req, res,next)=>{
   try{
      res.json(await Users.find())

   }
   catch(error){
      next(error)
   }
})

router.get('/logout', restrict(),(req, res, next)=>{
   req.session.destroy((error) =>{
      if(error) {
         next(error)
      }
      else{
         res.json({
            message: "Logged out"
         })
      }
   })
})

module.exports = router;