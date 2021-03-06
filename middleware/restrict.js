const users = require('../users/usersModel')
const bcrypt = require('bcryptjs')
const sessions = {

}

 function restrict(){
   const authError={
      message: 'invalid credentials'
   }
   return async(req,res,next)=>{
      try{
         // const {username, password} = req.headers
         // if(!username || !password){
         //    return res.status(401).json(authError)
         // }
         // const user = await users.findBy({username}).first()
         // if(!user){
         //    return res.status(401).json(authError)
         // }
         // const passValid = await bcrypt.compare(password, user.password)
         // if(!passValid){
         //    return res.status(401).json(authError)
         // }
         if(!req.session|| !req.session.user){
         return res.status(401).json(authError)
         }
         
         next()
      }
      catch(error){
         next(error)
      }
   }
}
module.exports = {restrict,
sessions}
