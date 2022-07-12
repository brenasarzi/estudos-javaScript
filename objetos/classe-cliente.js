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

const andre = new Cliente("André", "andre@gmail.com", "329837298472", 100)

//andre.depositar(20)
andre.exibirsaldo()
console.log(andre)