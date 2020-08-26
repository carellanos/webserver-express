const http = require('http');

/* http.createServer() Recibe un callback y ese callback va recibir los request (solicitudes) junto con 
 *las respuestas que nuestro servidor va enviar.
 */
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Carlos',
            edad: 27,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        //res.write('Hola mundo');
        res.end();
    })
    .listen(8081);


console.log('Escuchando el puerto 8080');