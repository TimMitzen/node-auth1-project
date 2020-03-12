const express = require('express')
const Users = require('../users/usersModel')
const bcrypt = require('bcryptjs');

const router = express.Router()

router.post('/register', async (req,res, next)=>{
   try{
      const {username} = req.body
      const user = await Users.findBy({ username }).first()

      if(user){
         return res.status(409).json({errorMessage: 'Username is taken'})
      }
      res.status(201).json(await Users.add(req.body))
   }
   catch(error){
      next(error)
}
})

router.post('/login', async(req,res,next)=>{
   
   try{
      const {username, password} = req.body 
      //same as const req.username.body
      const user = await Users.findBy({ username }).first()
      const passwordValid = await bcrypt.compare(password, user.password)
      if(!user || !passwordValid){
         return res.status(401).json({errorMessage:'You shall not pass!'})

      }
      res.json({message: `Logged in, ${user.username}`})

   }
   catch(error){
      next(error)

   }
})

module.exports = router;