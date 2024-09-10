const eventEmitter = require('events')

const customEmmitter = new eventEmitter()

customEmmitter.on('response',(data,secondData) =>{
    console.log("recibido")
    console.log(data)
    console.log(secondData)
})

customEmmitter.emit("response",'hello world',123);

//