const express = require('express')

const server = express()

server.get('/api/hello/:name', (req, res) => {
    const name = req.params.name
    res.send({
        message: "Hola " + name
    })
})

server.post('/api', (req, res) => {
    
})

server.listen(8080, () =>{
    console.log('Server is running')
})