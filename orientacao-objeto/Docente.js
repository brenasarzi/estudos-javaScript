import User from "./User.js"

// User é uma super classe de Docente, e Docente é uma sub clase de User
class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}`
    }
}

const novoDocente = new Docente('Brena', 'sarzibrena@gmail.com', '16-09-2004')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Brena', 'JS'))