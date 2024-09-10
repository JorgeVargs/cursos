const express = require('express')
const app = express()

app.all("/info",(req,res) => {
    res.send('server info')
})

app.get("/search",(req,res) => {
    console.log(req.query)
    if(req.query.q === 'javascript books'){
        res.send('lista de libros de javascript')
    }else{
        res.send('página normal')
    }
})

//parametros - 
app.get("/hello/:username",(req,res) => {
    res.send(`Hello ${req.params.username.toUpperCase() }`)
})

app.get('/add/:x/:y',(req,res) => {
    const {x, y} = req.params

    const result = parseInt(x) + parseInt(y);

    res.send(`Result: ${result }`)
})

app.get('/users/:username/photo',(req,res) => {
    //res.send(req.params.username)

    if(req.params.username === 'luis'){
        return res.sendFile('./images.png',{
            root: __dirname
        })
    }

    res.send('el usuario no tiene acceso')
})


app.get('/nombre/:nombre/age/:age',(req,res) =>{
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)
