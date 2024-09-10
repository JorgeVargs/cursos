const express = require('express')

const router = express.Router()

// router.get('/UserName',(req,res) =>{
//     res.send('Username Route')
// })


router.get('/users', (req,res) => {
   res.render('users')
})

module.exports = router;