const nomes = ['Ana', 'Ju', 'Leo', 'Paula']

            // forEach só funciona se passarmos como parametro uma função.
nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome)
}