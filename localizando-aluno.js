const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

// includes retorna um booleano = verdadeiro ou falso
// indexOf retorna um indice(número) = o indice sempre se inicia com 0

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]


const exibeNomeNota = (nomeDoAluno) => {
    
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){

            let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)

            return listaDeNotasEAlunos[0][indice] + ',sua média é ' +
            listaDeNotasEAlunos[1][indice]

    } else {

        return "Aluno não está cadastrado"

    }
}
// ele procura o elemento "Ana" em específico 
console.log(exibeNomeNota("Ana"))
