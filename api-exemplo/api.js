const server = require('http')

let contador = 0 


server.createServer((req, res)=> {

        contador++
        console.log("Contador de requisiçoes: " + contador)

    res.write("Bem vindo ao meu backend! Contador de requsiçoes: " + contador)
    res.end()

}).listen(3000)

