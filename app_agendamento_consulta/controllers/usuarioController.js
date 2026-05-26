const Usuario = require('../models/UsuarioModel');




function  getLoginView(req, res) {
    res.render('login.html');
}

function getCadastroView(req, res) {
    res.render('cadastro.html');
}

async function cadastrarUsuario(req, res) {
    const { nome, email, senha } = req.body;

    try {
        await Usuario.create({ nome, email, senha });
        res.redirect('/login');
    } catch (err) {
        res.render('cadastro.html', { error: 'Erro ao cadastrar usuário: ' + err.message });
    }
}

async function loginUsuario(req, res) {
    const { email, senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { email, senha } });
        if (usuario) {
            req.session.autorizado = true; // Marca o usuário como autorizado
            req.session.userId = usuario.id; // Armazena o ID do usuário na sessão
            req.session.nome = usuario.nome; // Armazena o nome do usuário na sessão
            res.redirect('/agendamento');
        } else {
            res.render('login.html', { error: 'Email ou senha inválidos' });
        }
    } catch (err) {
        res.render('login.html', { error: 'Erro ao fazer login: ' + err.message });
    }
}

function verificarAutenticacao(req, res, next) {
    if (req.session && req.session.autorizado) {
        console.log('Usuário autorizado: ' + req.session.nome);
        next(); // Usuário autorizado, continua para a próxima função
    } else {
        console.log('Usuário não autorizado. Redirecionando para login.');
        res.redirect('/login');
    }
}

module.exports = {
    getLoginView,
    getCadastroView,
    cadastrarUsuario,
    loginUsuario,
    verificarAutenticacao
}   
