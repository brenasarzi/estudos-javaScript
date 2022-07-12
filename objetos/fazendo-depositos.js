const cliente = {

    nome: "André",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com",
    fones: ["1215654789", "32164598465"],

    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome:"Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    },

    sacar: function(valor){
        this.saldo -= valor
    }
    
}

console.log(cliente.saldo)
// cliente.depositar(30)
cliente.sacar(20)
console.log(`Seu saldo é de ${cliente.saldo} reias`)



