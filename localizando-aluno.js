const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]
// includes -> booleano
// indexOf -> 3

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]


const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
            // ele busca o nome do aluno dentro do array e a nota de acordo com a order dos elementos
            let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)

            // ele retorna o array de médias e dentro desse array
            // ele retorna o valor das médias que se encontra em um outro array.
            // Ou seja um array dentro de  outro array.
            return listaDeNotasEAlunos[0][indice] + ',sua média é ' +
            listaDeNotasEAlunos[1][indice]

    } else {
        // caso o elemento não seja encontrado dentro do array
        return "Aluno não está cadastrado"

    }
}
// ele procura o elemento "Ana" em específico 
console.log(exibeNomeNota("Ana"))
