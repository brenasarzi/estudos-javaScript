
function soma(x, y){
    if (!y || !x){
        console.log("faltou no pârametro")
        return 0
    } else {
        return x + y 
    }
}

const resposta = soma(5)
console.log("resposta: ", resposta)