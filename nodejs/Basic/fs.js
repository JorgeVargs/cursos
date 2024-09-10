const fs = require('fs');

//leer archivo
// const first = fs.readFileSync('./data/first.txt','utf8');
// const second = fs.readFileSync('./data/second.txt');

// console.log(first);
// console.log(second.toString());


// const title = 'Este es el contenido del archivo';

// //crear archivo
// fs.writeFileSync('./data/third.txt','este es un tercer archivo');
// fs.writeFileSync('./data/fourth.txt',title,{
//     flag:'a' //para que se añada el texto a un archivo existente, y no reemplaze lo que ya existe
// });



fs.readFile('./data/first.txt','utf-8', (error,data) => {
    
    if(error){
        console.log(error);
    }
    console.log(data);
})