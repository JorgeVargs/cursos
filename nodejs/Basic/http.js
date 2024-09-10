const http = require('http');
//modelo cliente-servidor
//http -> protocolo
//request - response -> servidor que permite esto

http.createServer(function(request,response){

    console.log(request.url);//lo que el cliente esta visitando

    if(request.url === '/'){
        response.write('welcome to the server');
        return response.end();
    }

    if(request.url === '/about'){
        response.write('Acerca de');
        return response.end();
        //el return hace que sale de la función, es decir termina la ejecuciín hasta aca
    }

    response.write(`
        <h1>Not Found</h1>
        <p>está página no se encontró</p>    
        <a href="/">Volver a la página principal</a>
    `);
    response.end();
}).listen(3000)

console.log('servidor escuchando en el puerto 3000');