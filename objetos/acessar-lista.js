const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf","email"]

chaves.forEach(info => console.log(cliente[info]))

// console.log(cliente[chaves[0]])

// console.log(cliente["nome"])