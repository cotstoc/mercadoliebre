const express = require ('express')
const app = express()
const mainRouter = require('./router/mainRouter')

// app.listen(3002, console.log("servidor activo en 3002"))

let PORT = process.env.PORT || 3002 

app.listen (PORT, ()=>{
    console.log('server corriendo en el puerto' + PORT)
}) 

app.use(express.static('public'))

app.use ('/' , mainRouter)
