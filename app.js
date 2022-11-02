const express = require ('express')
const app = express()
const path = require ('path')

app.listen(3002, console.log("servidor activo en 3002"))

let PORT = process.env.PORT || 3002 

app.listen (PORT, ()=>{
    console.log('server corriendo en el puerto' + PORT)
}) 

app.use(express.static('public'))


app.get("/", (req,res) => {
    res.sendFile(path.resolve('./views/home.html'))
})

app.get("/register", (req,res) => {
    res.sendFile(path.resolve('./views/register.html'))
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve('./views/login.html'))
})

