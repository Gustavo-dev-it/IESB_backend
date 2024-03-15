// Criando uma instância do modulo express
const express = require('express')
// Criando nossa explicão
const app = express()


app.get('/', (req, res) => {
res.send("OLÁ")
})

app.get('/hello',(req, res) => {
res.send("hello world")
})

app.get("/exercicio",(req, res) => {
const nota1 = 10
const nota2 = 5
const media = (nota1 + nota2) / 2
res.send("Media:" + media)



})



// executando a aplicação na porta definida
app.listen(3000, () => {
    console.log('Api iniciada! Rodando em http://localhost3000')

})


//npm start inicia o projeto




