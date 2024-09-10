const express = require('express')
const app = express()


app.use(express.text())//envío de texto
app.use(express.json())//envío de json
app.use(express.urlencoded())//envio de formulario

app.post('/user', (req,res) => {
    console.log(req.body);
    res.send("nuevo usuario creado")
})


app.listen(3000)
console.log(`Server on port ${3000}`)
