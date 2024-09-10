const express = require('express')
const axios = require('axios')

const router = express.Router();

router.get("/",(req,res)=>{
    let isActive = true;

    const users = [
        {
            id: 1,
            name: "John Doe",
            lastname:"Tower"
        },
        {
            id: 2,
            name:"Joe",
            lastname:"Doe"
        }
    ]

    res.render('index',{
        title:"Home Page",
        isActive:isActive,
        users:users
    })
})

router.get('/note.txt', (req, res) => {
    res.send('este no es un archivo')
})

router.all('/about', (req, res) => {
    res.render('about')
})

router.get("/posts", async (req,res) =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response)

    res.render('post',{
        post: response.data
    })
})


// router.use(function (req, res, next) {
//     if (req.query.login === 'luisvardez@gmail.com') {
//         next()
//     } else {
//         res.send('No autorizado')
//     }
// })

router.get('/dashboard', (req, res) => {
   res.render('dashboard')
})

module.exports =  router;