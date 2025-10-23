const express = require("express");
const app = express();
const PORT = 8081;
const fs = require("fs");


app.get("/usuarios", (req, res) => {

    try {
        const data = fs.readFileSync("./usuarios.json", "utf-8");
        
        let usuarios = JSON.parse(data);
        const {nome} = req.query;


        if (nome) {
    
        usuarios = usuarios.filter(usuario=> usuario.nome.toLowerCase().includes(nome.toLowerCase()));

        }

         //Produtos = produtos.filter(produto=>produto.preco <= menorPreco);


        res.status(200).json(usuarios);

    } catch (error) {
        console.error("erro ao ler arquivo Json",error);
        res.status(500).json({error:"erro interno no servidor"});  
    }

})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})