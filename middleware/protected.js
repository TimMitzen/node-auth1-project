const users = require('../users/usersModel')
const sessions ={

}
function protected(req,res,next){
   if(req.session && req.session.userId){
      next()
   }else{
      res.status(401).json({
         errorMessage:'You shall not pass!!'
      })
   }
}

module.exports = {protected, sessions};