const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha = "senhaSuperSegura456";
const StringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Brena";
// console.log(citacao)

// concatenação (+)

console.log(citacao + meuNome)

// template string ou template literal 

// Código Unicode 


const cruz = '\u2020'; 
const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log(cruz)

// Verdadeiro ou Falso

const cidade = "belo horizonte";
const input = "Belo Horizonte";

// falso pois as caracteres são diferentes
console.log(cidade === input); 


// converte todos os caracteres para letra minúscula 
const inputMinusculo = input.toLowerCase(); 

// Verdadeiro
console.log(cidade === inputMinusculo); 

const minhaSenha = "minhaSenha123"

// Quantas caracteres tenho na constante senha
console.log(minhaSenha.length) // 13 Caracteres