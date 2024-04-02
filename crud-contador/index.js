// configuração
const express = require('express')
const app = express()

const cors = require('cors')
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')


// middlewares
// middlewares que transforma o corpo da requisição em objeto json dentro de uma aplicação
app.use(express.json())

//Configuração cors

app.use(cors({origin:'*'}))

// tutorial
app.use(tutorial)

// trazendo as rotas do modulo contatos

app.use(contatos)



//trazendo as rotas do modulo subrota

app.use(subrota)

app.get("/", (req, res) => {
    res.send("Aplicação rodando!!!")
})


// start da nossa aplicação na porta 3000
app.listen(3000, () => {
console.log("Api rodando em http://localhost:3000")
})

// app.listen (3000,() =>{})

    