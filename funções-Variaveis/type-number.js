// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number (não é um número)

const alura = "Alura";

console.log(alura + primeiroNumero)

// zero divido por zero será NaN

const primeiroZero = 0;
const segundoZero = 0;

const dividirZero = primeiroZero / segundoZero;

console.log(dividirZero)

// Qualquer número divido por Zero é Infinity

const newOperacao = primeiroNumero / primeiroZero

console.log(newOperacao)
