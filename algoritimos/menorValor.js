// importar nosso código
const livros = require('./listaLivros')

function menorValor (arrProdutos, posicaoInicial){

    let maisBarato = posicaoInicial
    // aqui ele está percorrendo pelo array
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        // se o valor for menor aos outros valores
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            // mostre o valor 
            maisBarato = atual
        }
    }
    return maisBarato
}

module.exports = menorValor