const user = {
    nome: "Brena",
    email: "sarzibrena@gmail.com",
    nascimento: "16/09/2004",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Manuela",
    email: "manuzinha@gmail.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado com sucesso!")
    }
}
// Objeto está usando um protótipo
Object.setPrototypeOf(admin, user)

admin.criarCurso()
// Procura dentro do protótipo
admin.exibirInfos()


// herança de protótipo
// user.exibirInfos()

// // retornará undefined pois não encontrou a quem se refere
// const exibir = function(){
//     console.log(this.nome, this.email)
// }
// exibir() 

// // liga uma função a um objeto, dando contexto a função
// const exibirNome = exibir.bind(user)
// exibirNome()