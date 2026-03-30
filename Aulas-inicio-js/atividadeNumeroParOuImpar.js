function verificarParidade(n) {
    if (n % 2 == 0) return true;
    return false;
}

function apresentarMensagemParidade(n) {
    if (verificarParidade(n)) {
        console.log(`${n} é um número par`)
    } else {
        console.log(`${n} é um número ímpar`)
    }
}

apresentarMensagemParidade(1);
apresentarMensagemParidade(11);
apresentarMensagemParidade(2);
apresentarMensagemParidade(355489);
apresentarMensagemParidade(11111110);