const cliente = {
    nome: "André",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com",
    fones: ["1215654789", "32164598465"]
}
// objeto dentro e outro objeto
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)
// alterar
cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
