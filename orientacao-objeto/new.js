function User(nome, email){
    this.nome = nome
    this.email = email
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

// recebendo um novo objeto
// const novoUser = new User('Brena', 'sarzibrena@gmail.com')
// // retorno do novo objeto (novoUser)
// console.log(novoUser.exibirInfos())


// function Admin(role){
//     User.call(this, 'Brena', 'sarzibrena@gmail.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Brena', 'sarzibrena@gmail.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Brena'))

// console.log(user.isPrototypeOf(novoUser))