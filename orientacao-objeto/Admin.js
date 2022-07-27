import User from "./User.js"

// User é uma super classe de Admin, e Admin é uma sub clase de User
export default class Admin extends User {
    
    constructor(nome, email, nascimento, role = "admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos(){
        return `${this.nome}, ${this.role}, ${this.ativo}`
    }
    
    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }

}