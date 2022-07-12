// foreach passa por cada elemento do array
// O PARAMETRO OBRIGATÓRIO PARA UM FOREACH uma função que recebe um elemento.
const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0
 
// callback
// pra cada nota execute
notas.forEach(nota => {
             //parametro da função         
    somaDasNotas += nota
})

// dividindo o valor das notas pela quantidade de elementos no array
let media = somaDasNotas/notas.length

console.log(media)