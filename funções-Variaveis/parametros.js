// Parâmetros de função

function soma(num1, num2){
    return num1 + num2
}

// console.log(soma(2, 2))
// console.log(soma(234, 287))
// console.log(soma(-555, 233))

// pârametros x argumentos

// ordem dos pârametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

// console.log(nomeIdade(17, "Brena"))

function multiplica(num1 = 1, num2 = 2){
    return num1 * num2
}

// console.log(
//     multiplica(
//         soma(4, 5), soma(3, 3)
//     )
// )

console.log(
    multiplica(
        soma(4, 5)
    )
)

