const http = require('http')
const fs = require('fs')


const server = http.createServer(function (request, response) {
    console.log(request.url)
    
    fs.readFile('../cliente/index.html', function (error, content) {
        response.end(content)
    })
    
})

server.listen(8080)
console.log("servidor aberto na porta 8080")