class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf 
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirsaldo(){
        console.log(this.saldo)
    }
}
// uma classe vai herdar de outra
class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca 
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("André", "andre@gmail.com", "393489723493", 100, 200)

andre.depositar(50)
andre.depositarPoupanca(50)


console.log(andre)
