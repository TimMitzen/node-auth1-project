const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/authRouter')
const userRouter = require('./users/usersRouter')

const server = express()

const port = process.env.Port || 7000

server.use(cors())
server.use(helmet())
server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/auth', authRouter)

server.use((error, req, res, next)=>{
   console.log(error)
   res.status(500).json({
      message: 'Something went wrong',
   })
})

server.listen(port, ()=>{
   console.log(`Listening at port ${port}`)
})