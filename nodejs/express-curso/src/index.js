const express = require('express')
const app = express()
const morgan = require('morgan')
const path =  require('path')
require('ejs')
const { connectDb } = require('./db')

connectDb()

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')

//settings
app.set('appName','Express Course')//establece nombre de variable
app.set('port',3000)
app.set('case sensitive routing',true)

//template engine
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


//middleware

app.use(morgan('dev'))

//middleware
//función que antes de que llegue a la ruta se ejecuta está función

//cualquier ruta que llegue pasa por está función
// app.use(function(req,res,next){//muestra peticiones que van llegando  
//     console.log(`Route: ${req.url} Método: ${req.method}`)

//     next();
// })

app.use(HomeRoutes)
app.use(UserRoutes)


app.use("/public",express.static(path.join(__dirname,'public')))//carpeta que podrá ser visible

app.listen(app.get('port'))
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`)
