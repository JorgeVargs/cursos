import express from 'express';

const app = express()

app.get('/',(req,res) => {
    res.send('<h1>Bienvenido</h1>')
})


app.get('/about',(req,res) => {
    res.send('<h1>About</h1>')
})

app.listen(process.env.PORT || 3000);


console.log("server on port ", process.env.PORT || 3000);