const produtos = [];

function adicionar(id, nome, qtd) {
    const produto = { id, nome, qtd };
    produtos.push(produto);
    return produto;
}

function listar() {
    return produtos;
}

function remover(id) {
    let index = -1;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            index = i;
            break;
        }
    }

    if (index == -1) {
        return null;
    }

    let removido = produtos.splice(index, 1);

    return removido[0];
}

function editar(id, qtd) {
    let produto = null; 

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            produto = produtos[i];
            break;
        }
    }

    if (!produto) {
        return null;
    }

    produto.qtd = qtd;
    return produto;
}

// Exportando funções
module.exports = {
    adicionar,
    listar,
    remover,
    editar
};