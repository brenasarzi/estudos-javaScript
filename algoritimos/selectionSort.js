const livros = require ('./listaLivros')
const menorValor = require ('./menorValor')

for (let atual = 0; atual < livros.length; atual++){
    
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    console.log(livros[atual])
    livros[menor] = livroAtual
    console.log(livros[menor])

}

console.log(livros)