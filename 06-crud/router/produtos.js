const express = require('express')
const router = express.Router()

let ListaProdutos = [

    {
        id: 1,
        nome: "Arroz",
        preco: 10.99


    }


]


// READ -buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(ListaProdutos)
    ListaProdutos.find(produto => produto.id == id)
    if (produto) {
        res.json(produto)
        res.status(200).json(produto)
    } else {

        res.status(404).json({ mensagem: "Produto não encontrado!" })

    }


    res.json(produto)


})


// Create -> Cadastro de um Produto
router.post('/produtos', (req, res) => {
    const dados = req.body


    if (!dados.nome || !dados.preco) {
        res.status(400).json({ Mensagem: "Nome e preço são obrigatórios" })
    } else {
        const produto = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            preco: dados.preco
        }
        ListaProdutos.push(produto)
        res.status(201).json(
            {
                produto,
                Mensagem: "Produto Cadastrado com sucesso!"
            })
    }
})

// Update - Atualizar o produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.preco) {
        res.status(400).json({ Mensagem: "Nome e preço são obrigatórios" })
    } else {
        const index = ListaProdutos.findIndex(produto => produto.id == id)

        if (index == -1) {
            res.status(404).json({ Mensagem: "Produto não encontrado!" })
        } else {
            const produto = {
                id: Number(id),
                nome: novosDados.nome,
                preco: novosDados.preco
            }

            ListaProdutos[index] = produto
            res.status(200).json
                (

                    {
                        mensagem: "Produto alterado com sucesso!",
                        produto
                    }
                )
        }

    }


})





// Delete - excluir Produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = ListaProdutos.findIndex(produto => produto.id == id)
if(index == -1) {
    res.status(404).json({Mensagem: "Produto não encontrado"})
} else { 
    ListaProdutos.splice(index, 1)
    res.status(200).json({Mensagem: "Produto excluido com sucesso!"})
}



})









module.exports = router