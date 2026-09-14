const express = require("express")
const router = express.Router()

const produtos = [
    {
        id: 1,
        nome: "Celular",
        preco: 840.50
    }, 
    {
        id: 2,
        nome: "estojo",
        preco: 23.80
    }
]

router.get("/", (req, res) => {
    res.render("produtos/index",{
        produtos: produtos
    })
})

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro", {
        erro: null
    })
})

router.post("/", (req, res) => {
    const { nome, preco } = req.body

    if (nome === "" || String(preco) === "") {
        return res.render("produtos/form-cadastro", {
            erro: "Preencha todos os campos"
        })
    }
    else if(Number(isNaN(preco))){
        return res.render("produtos/form-cadastro", {
            erro: "O preço só deve conter números!"
        })
    }

    let novoProduto = {
        id: produtos.length + 1,
        nome,
        preco: Number(preco).toFixed(2)
    }

    produtos.push(novoProduto)

    res.redirect("/produtos")
})

module.exports = router;