const http = require('http');

http.createServer((req,res)=>{
    res.write('<h1>Hola Mundo<h1>');
    res.end();
}).listen(4005);

console.log("Escuchando por el puerto: 4005");