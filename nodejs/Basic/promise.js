const { readFile } = require('fs');
//sincrona = código bloqueante

const { promisify } = require('util');


const readFilePromise = promisify(readFile);

// function getText(pathFile){
//     return new Promise(function(resolve,reject){
//         readFile(pathFile,'utf-8',(err,data)=>{
//             if(err){
//                reject(err)
//             }
    
//             resolve(data)
//         })
//     })
// }


// getText('./data/first.txt')
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch(error=> console.log(error))

//async especifica que hay código asyncrono ejecutandose
//await que va a tomar tiempo
//es una promesa con un sintaxis más simple de una promesa


//para usar el await debe de estar dentro de una función más grande con la palabran async
async function read(){
    try{
        // throw new Error('Este es un error que no se esperaba') // obliga a lanzar un error
        const result = await readFilePromise('./data/first.txt','utf-8');
        const result2 = await readFilePromise('./data/second.txt','utf-8');
        console.log(result)
        console.log(result2)
    }catch(error){
        console.log(error)
    }
}

read();



