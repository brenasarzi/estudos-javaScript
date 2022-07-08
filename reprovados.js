const nomes = ['Brena', 'Mel', 'Rafa']
const notas = [7, 4.5, 8]

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5 )
console.log(`reprovados ${reprovados}`)