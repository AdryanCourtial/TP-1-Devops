import http from 'http';
import { stringify } from 'querystring';

const hostname = '0.0.0.0';
const port = 3000;
const serverUrl = `http://${hostname}:${port}`

const server = http.createServer((req, res) => {
  
  if (req.url === "/ping" && req.method === "GET") {
    const header = req.headers
    return res.end(stringify(header))
  }

  res.writeHead(404).end()

});

server.listen(port, hostname, () => {
  console.log(`Server running at ${serverUrl}`);
});