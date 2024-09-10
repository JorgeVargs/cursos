const express = require('express')
const app = express()

// app.get('/productos',(req,res) =>{
//     //validando datos
//     //query database
//     res.send('lista de productos')
// })

// app.post('/productos',(req,res) =>{
//     res.send('creando prodductos')
// })

// app.put('/productos',(req,res) =>{
//     res.send('actualizando prodductos')
// })

// app.delete('/productos',(req,res) =>{
//     res.send('eliminando prodductos')
// })

// app.patch('/productos',(req,res) =>{
//     res.send('actualizando una parte de prodductos')
// })

app.get("/",(req,res) =>{
    res.send("Hola mundo");
})

app.get("/miarchivo",(req,res) =>{
    res.sendFile('./images.png',{
        root: __dirname
    })
})


app.get("/user", (req,res) => {
    res.json({
        "name":"luis",
        "lastname":"vargas",
        age:33,
        points:[1,2,3],
        address:{
            "city":"CDMX",
            "street":"Cda Tecamac"
        }
    })
})

app.get("/isAlive",(req,res) =>{
    res.sendStatus(204)//204 no hay contenido que mostrar
})

app.listen(3000)
console.log(`Server on port ${3000}`)
