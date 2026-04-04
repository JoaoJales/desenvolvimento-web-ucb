const express = require('express');

const calculadora = require('./calculadora')

const app = express();

const PORT = 8080;

const LOG = [];

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1> <p>Estou na web...</p>');
});

app.get('/bem-vindo', (req, res) => {
    res.send('<h1>Bem-vindo ao desenvolvimento WEB!</h1>');
});

//URL fixa
app.get('/ola/joao', (req, res) => {
    res.send('<p>Olá João!</p>');
});

//URL com parâmetro
app.get('/ola/:nome', (req, res) => {
    res.send(`Olá, ${req.params.nome}`);
});


app.get('/calculadora/somar/:a/:b', (req, res) => {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let resultado = calculadora.somar(a, b);
    let mensagem = `<h1>${a} + ${b} = ${resultado}</h1>`
    LOG.push(mensagem);
    res.send(mensagem);
});

app.get('/calculadora/log', (req, res) => {
    resultado = "";
    LOG.forEach(log => {
        resultado += log;
    });
    res.send(resultado);
});

app.listen(PORT, ()=> {
    console.log('app rodando na porta ' + PORT)
})
