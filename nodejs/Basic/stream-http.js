const http = require('http');
const { createReadStream } = require('fs');


const server = http.createServer((req,res) => {
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding:'utf-8'
    })

    fileStream.on('data',(chunk) =>{
        fileStream.pipe(res)
    })

    fileStream.on('error', error =>{
        console.error(error);
    })
})


server.listen(3000)
console.log(`server on port ${3000}`)