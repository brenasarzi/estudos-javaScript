const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com"
}

console.log(cliente)
// adicionou o campo fone 
cliente.fone = "11997988995"

console.log(cliente)
// modificou o campo fone
cliente.fone = "545625698546"
//deletar algo do objeto
delete cliente.idade

console.log(cliente)
