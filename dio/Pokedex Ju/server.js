const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('./Pokedex Ju/index.html', (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Erro ao ler o arquivo HTML');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(2000, 'localhost', () => {
  console.log('Servidor On em: http://localhost:2000');
  console.log('Para desligar o servidor: ctrl + c');
});
