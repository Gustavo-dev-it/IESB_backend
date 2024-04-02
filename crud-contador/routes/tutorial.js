// importa o modulo do express
const express = require('express')
// criando um router
const router = express.Router()

router.get('/tutorial', (req, res) =>{
    res.send("tutorial iniciado")
})

router.post('/tutorial', (req, res) =>{
    res.send("tutorial post")
})

router.put('/tutorial', (req, res) =>{
    res.send("tutorial put")
})

router.delete('/tutorial', (req, res) =>{
    res.send("tutorial delete")
})

// exporto o router
// Este router também é um  middleware
module.exports = router

