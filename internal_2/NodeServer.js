const http = require('http');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the port number: ', (port) => {
  rl.close();
  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  });
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});