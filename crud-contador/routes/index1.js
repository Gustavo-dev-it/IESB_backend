//configuração
const express = require('express')
const app = express()

//importando router
const tutorial = require('./routes/tutorial')


//middlewares
//middleware que transforma o corpo da requisição em objeto json dentro da nossa aplicação
app.use(express.json())

app.use(tutorial)



//Lógica e contratos


app.get('/', (req, res)=>{

res.send('Olá mundo')

})








//start da nossa aplicação pela porta 3000
app.listen(3000, ()=>{

console.log('A aplicação está rodando http://localhost:3000')

})