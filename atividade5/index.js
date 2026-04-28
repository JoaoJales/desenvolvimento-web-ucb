const express = require('express');
const mustacheExpress = require('mustache-express');
const PORT = 8080;

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/agendamento', (req, res) => {
    dados_agendamento = req.body;
    console.log(dados_agendamento);
    if (!dados_agendamento.nome || !dados_agendamento.sobrenome || !dados_agendamento.cpf || !dados_agendamento.data_nascimento 
        || !dados_agendamento.telefone || !dados_agendamento.cep || !dados_agendamento.endereco) {
        return res.status(400).send('Todos os campos de dados do paciente são obrigatórios');
    }
    
    if (!dados_agendamento.clinica || !dados_agendamento.especialidade || !dados_agendamento.data_agendamento || !dados_agendamento.hora_agendamento) {
        return res.status(400).send('Todos os campos de dados da consulta são obrigatórios. Execeto o campo de observações.');
    }

    res.render('agendamento.html', { dados_agendamento });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});