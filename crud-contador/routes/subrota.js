// importa o modulo do express
const express = require('express')
// criando um router
const router = express.Router()

router.get('/subrota', (req, res) =>{
    res.send("subrota iniciado")
})

router.post('/subrota', (req, res) =>{
    res.send("subrota post")
})

router.put('/subrota', (req, res) =>{
    res.send("subrota put")
})

router.delete('/subrota', (req, res) =>{
    res.send("subrota delete")
})

// exporto o router
// Este router também é um  middleware
module.exports = router

