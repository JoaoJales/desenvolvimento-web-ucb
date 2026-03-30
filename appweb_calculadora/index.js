const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1> <p>Estou na web...</p>');
});

app.get('/bem-vindo', () => {
    res.send('<h1>Bem-vindo ao desenvolvimento WEB!</h1>');
});

app.listen(PORT, ()=> {
    console.log('app rodando na porta ' + PORT)
})
