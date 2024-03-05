// comentário de uma linha
/*
comentário em bloco
consigo passar varias linhas de informação
*/

// Impressão de informação no terminal
 /*console.log('Testando impressão de informação')
// CTRL ''L'' limpa o terminal
console.error("informação errada")
console.warn("Atenção")

// criando variaveis com o var
var nome;

nome = "Gustavo Bandera"

console.log(nome)

//let e const

// const {constante}
// criar uma variavel que não vai poder ser alterada
const primeiroNome = "Gustavo";

console.log(primeiroNome)

// Let 
// Criar Variaveis que podem ser alteraveis
//let idade
//idade = 32

console.log("Imprimindo o valor da variavel idade(com let)")

console.log(idade)

// Tipos de dados
// string
let nomeCompleto = "Gustavo Bandera"
nomeCompleto = 'Gustavo do "carmo" Bandeira'
nomeCompleto = `Gustavo Bandeira`


let textoOla = "Olá " + nomeCompleto + ", tudo bem com você?"

console.log(textoOla) /*
















// Verificar o tipo de uma variavel
// console.log(typeof "nome da variavel ")


// Tipo Number

// let numeroInteiro = 2000
// let numeroFlutuante = 250
// let numeroNegativo = 25.90

// tipo array
// let lista = []
 // let listaCheia = ["Wolverine", "ARROZ", "30"]

 // let lista = []
 
 // console.log(lista)

 // lista.push("Primeiro Nome")

 // console.log(lista)

 // lista.pop()

 // console.log(lista)
 */

 // Tipo object (tipo objeto)

 let pessoa = {
    nome:"Gustavo",
    idade: 23, 
    curso: "ADS",
    semestre: "1/2024"
 }

 console.log("imprindo objeto pessoa")
 console.log(pessoa)
 console.log(typeof pessoa)
 console.log(`Olá ${pessoa.nome}`)

//boolean
// true / false


// template string é feito com crase, e tbm possui essa função ${...}

// Tratamento de Dados sting
let texto = "Gustavo Bandeira"
// .length // conta a quantidade de caracteres
console.log(texto.length)
// texto em caixa alta
console.log(texto.toUpperCase())
// texto em caixa baixa
console.log(texto.toLowerCase())
// replace é substituição
let valor = "10,50"
console.log(valor)

valor = valor.replace(",", ".")
console.log(valor)

// Tratamento de dados (Number)

let numero = 10.7777
//fixar o numero de casas
console.log(numero.toFixed(3))

// Transformando de Float para inteiro

console.log(Number.parseInt(numero))
let numeroInteiro = 10

// Transformando de Inteiro para Float
console.log(Number.parseFloat(numeroInteiro).toFixed(4))








