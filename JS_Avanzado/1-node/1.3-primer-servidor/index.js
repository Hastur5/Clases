const http = require('http')

const server = http.createServer((request, response) => {
    const status = 200 // ok
    const mymeType = { 'Content-type': 'text/html' }
    response.writeHead(status, mymeType)
    response.write('<html><body> Hola desde mi primer servidor. </body></html>')
    response.end()
})

server.listen(8080)
console.log('servidor ejecutandose')