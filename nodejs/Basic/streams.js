//función que permite enviar archivos grandes 
const { writeFile } = require('fs/promises');
const { createReadStream } = require('fs')

const createBigFile = async ()=>{
    await writeFile('./data/bigfile.txt','hello world'.repeat(100000));
}

createBigFile()

// const stream = createReadStream('./data/bigfile2.txt',{
//     encoding:'utf-8'
// })

// stream.on('data', (chunk)=>{
//     console.log(chunk)
// })

// stream.on('end',()=> {
//     console.log('Ya terminé de leer el archivo')
// })

// stream.on('error',(error) => {
//     console.log(error)
// })