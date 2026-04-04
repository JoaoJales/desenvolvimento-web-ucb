const express = require('express');
const estoque = require('./estoque');

const app = express();
const PORT = 8080;

//Adicionar produtos
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    let { id, nome, qtd } = req.params;

    let produto = estoque.adicionar(id, nome, parseInt(qtd));

    res.send(`Produto adicionado: ${JSON.stringify(produto)}`);
});

//Listar produtos
app.get('/listar', (req, res) => {
    const produtos = estoque.listar();
    let resposta = "";

    produtos.forEach(p => {
        resposta += `<p>${p.id} - ${p.nome} - Qtd: ${p.qtd}</p>`;
    });
    
    res.send(resposta);
});

//Remover produto
app.get('/remover/:id', (req, res) => {
    let produto = estoque.remover(req.params.id);

    if (!produto) {
        return res.send('Produto não encontrado');
    }

    res.send(`Removido: ${JSON.stringify(produto)}`);
});

//Editar produto
app.get('/editar/:id/:qtd', (req, res) => {
    let { id, qtd } = req.params;

    let produto = estoque.editar(id, parseInt(qtd));

    if (!produto) {
        return res.send('Produto não encontrado');
    }

    res.send(`Atualizado: ${JSON.stringify(produto)}`);
});

app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});