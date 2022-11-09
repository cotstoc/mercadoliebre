const path = require ('path'); 

const mainController = {

    index:(req,res) => {
    
        res.sendFile(path.resolve('./views/home.html'))

    },
    register:(req,res) => {
        res.sendFile(path.resolve('./views/register.html'))
    },
    login:(req,res) => {
        res.sendFile(path.resolve('./views/login.html'))
    }


}

module.exports = mainController