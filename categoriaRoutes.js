const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let categorias = [
  {
    id: 1,
    nome: "Informática",
    descricao: "Produtos e serviços de informática"
  },
  {
    id: 2,
    nome: "Eletrônicos",
    descricao: "Produtos eletrônicos"
  },
  {
    id: 3,
    nome: "Roupas",
    descricao: "Roupas e acessórios"
  }
];

router.get("/", (req, res) => {
    res.render("categorias/index", {
        categorias: categorias
    })
});

router.get("/cadastro", (req,res) => {
    res.render("categorias/form-cadastro", {
      erro: null
    })

})

router.post("/", (req,res) => {
    const {nome, descricao} = req.body

    if(nome === "" || descricao === ""){
      return res.render("categorias/form-cadastro", {
        erro: "Preencha todos os campos"
      })
    }


    let novaCategoria ={
        id: categorias.length + 1,
        nome,
        descricao
    }

    categorias.push(novaCategoria)
    res.redirect("/categorias")
})
module.exports = router;