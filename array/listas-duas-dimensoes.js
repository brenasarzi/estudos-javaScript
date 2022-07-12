const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

// Array de duas dimensões
                        //0 [alunos]   1[10, 7, 9, 6]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// chamou a o item 0 da array listaDeNotasEAlunos e 
// dentro da array alunos pegou o item 0 também

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é: 
${listaDeNotasEAlunos[1][0]}`)