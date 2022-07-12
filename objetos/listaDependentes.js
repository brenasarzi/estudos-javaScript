const clientes = [
    {
      nome: "André",
      cpf: "12312312312",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    },
    {
      nome: "Juliana",
      cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

// ele espelha a primeira e a segunda array dentro do objeto em uma variavel 
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
// mostra no console a variavel em forma de tabela
console.table(listaDependentes)