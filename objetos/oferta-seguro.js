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


// console.log(propsClientes)

function oferecerSeguro(obj){
    // pegar todas as chaves do objeto
    const propsClientes = Object.keys(obj)  
    // verificação da chave dependentes
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
// pegar todos os valores do objeto
console.log(Object.values(cliente))
// trás uma estrutura de array com todas as chaves e valores
console.log(Object.entries(cliente))

oferecerSeguro(cliente)


















