import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2000-02-02')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2000-02-02')
console.log(novoAdmin.nome)
novoAdmin.nome = 'André'
console.log(novoAdmin.nome)