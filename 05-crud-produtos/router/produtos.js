const express = require('express')
const router = express.Router()




let listaProdutos = [
    {
     id: 1,
     nome: "coca-cola",
     preco: 4.99
     },
 
     {
         id: 2,
         nome: 'batata frita',
         preco: 9.99
     },
 
     {
        id: 3,
        nome: 'arroz',
        preco: 29.99
     }
 ]

 // Read -  buscar todos os produtos
 router.get('/produtos', (req, res) => { 
    res.json(listaProdutos)
    })

    // Read - buscar o produto pelo ID 
    router.get('/produtos/:id', (req, res) => { 
        const id = req.params.id
       const index = listaProdutos.findIndex(produto => produto.id == id)
       const produto = listaProdutos[index]
       res.json(produto)

   
        })



// Create --> Criar Produto

router.post('/produtos',(req, res)=> {
    const novoProduto = req.body
   
    listaProdutos.length
const produto = {
id: listaProdutos.length + 1,
nome: novoProduto.nome,
preco: novoProduto.preco
}

console.log(produto)
listaProdutos.push(produto)
    res.json('OK')
})

// DELETE ->> Deletar um produto
router.delete('/produtos/:id',(req, res) =>{
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.json({mensagem: "Produto excluido com sucesso!!!"})
})

// UPTADE ->>
router.put('/produtos/:id',(req, res) =>{
const id = req.params.id
const index = listaProdutos.findIndex(produto => produto.id == id) 

const novosDados = req.body
  
const produtoAlterado = {
    id: id,
    nome: novosDados.nome,
    preco: novosDados.preco
}

listaProdutos[index] = produtoAlterado
res.json({mensagem: "Produto alterado com sucesso!!!"})
})


 
    







module.exports = router
