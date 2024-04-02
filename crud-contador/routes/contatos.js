const express = require('express')
//crio um router
const router = express.Router()

// dados mockados
//Criar uma lista
let listacontatos = ["Maria", "joão"]


// CRUD
// READ - BUSCAR TODOS OS CONTATOS





router.get('/contatos', (req, res) => {
    res.json(listacontatos)
})

// READ - BUSCA DO CONTATO PELO IDENTIFICADOR
router.get('/contatos/:id', (req, res) => {
    const id = req.params.id
    const contato = listacontatos[id]
    res.json(contato)

})



// CREATE - CADASTRAR UM CONTATO

router.post('/contatos', (req, res) =>{
    const contato =  (req.body)
    listacontatos.push(contato.nome)
    res.status(201).json({ mensagem: "Contato Criado com Sucesso!" })
})

// DELETE - EXCLUIR CONTATO
router.delete("/contatos/:id", (req, res) =>{
    const id = req.params.id
    listacontatos.splice(id, 1)
    res.json({ mensagem: "Contato Excluido com sucesso!!!"})
})

// UPDATE - ATUALIZAR CONTATO 

router.put("/contatos/:id", (req, res) =>{
const id = req.params.id
const contato = req.body
listacontatos[id] = contato.nome
res.json({ mensagem: "Contato Atualizado com sucesso!!!"})

})
  


module.exports = router