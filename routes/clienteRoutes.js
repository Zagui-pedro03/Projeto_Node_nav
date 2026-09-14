const express = require("express");
const router = express.Router();

let clientes = [
    {
        id: 1,
        nome: "Pedro",
        email: "zaguipedro03@gmail.com"
    },
    {
        id: 2,
        nome: "Lucas",
        email: "lucasacamargo2010@gmail.com"
    }
];

router.get("/", (req, res) => {
    res.render("clientes/index", {
        clientes: clientes
    })
});

router.get("/cadastro", (req, res) => {
    res.render("clientes/form-cadastro", {
        erro: null
    })
})

router.post("/", (req, res) => {
    const {nome, email} = req.body;

    if(nome === "" || email === ""){
        return res.render("clientes/form-cadastro", {
            erro: "Preencha todos os campos!"
        })
    }

    let novoCliente = {
        id: clientes.length+1,
        nome,
        email
    }

    clientes.push(novoCliente);
    res.redirect("/clientes")
})

module.exports = router;