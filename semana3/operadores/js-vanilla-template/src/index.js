//1. Exercícios de interpretação de código
// //a) 
const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
let resultado = true && false
console.log("a. ", resultado)//a. false

resultado = bool1 && bool2 && bool3
resultado = true && false && true 
resultado = false && true
resultado = false
console.log("b. ", resultado)//b. false

resultado = !resultado && (bool1 || bool1)
resultado = true && (true || true)
resultado = true && (true)
resultado = true
console.log("c. ", resultado)//c. true

console.log("e. ", typeof resultado)//e. boolean

//2.
let array
console.log('a. ', array)// a. undefined

array = null
console.log('b. ', array)//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//c. 11

let i = 0
console.log('d. ', array[i])//d. 3

array[i+1] = 19
console.log('e. ', array)//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)//f. 9

//Exercícios de escrita de código
//1.
//a. 
let idade = prompt("Digite a sua idade")
//b. 
let idadeAmigo = prompt("Digite a idade do seu melhor amigo ou amiga")
//c. 
let resultado = idade > idadeAmigo
   console.log("A sua idade é maior que a do seu amigo ?" + resultado)
//c. 
console.log(idade - idadeAmigo)

//2.
//a)
let numPar = prompt("Digite um numero par:")
//b.
console.log(numPar%2)
//c. Qualquer número par dividido por 2 vai ter o resto da divisão = 0
//d. O resto da divisão vai ser diferente de 0

//3.
//a.
let listaDeTarefas = []
// //b.
let tarefa1 = prompt("Digite sua primeira tarefa do dia:")
listaDeTarefas.push(tarefa1)
console.log(listaDeTarefas)
let tarefa2 = prompt("Digite sua segunda tarefa do dia:")
listaDeTarefas.push(tarefa2)
console.log(listaDeTarefas)
let tarefa3 = prompt("Digite sua terceira tarefa do dia:")
listaDeTarefas.push(tarefa3)
// //c.
// console.log(listaDeTarefas)
// //d.
let tarefaRealizada = prompt("Digite qual tarefa você ja realizou: 0,1 ou 2")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)


//4.
let nomeUsuario = prompt("Olá! Digite seu nome por favor ") 
let emailDoUsuario = prompt("Agora digite o seu e-mail")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario )


//Desafio extra
//1.
//a.
let grausF = 77
let grausK = (grausF - 32)*5/9 + 273.15
console.log(grausK)//298.15

//b.
let grausC = 80
let grausF = (grausC)*9/5 + 32
console.log(grausF)//176

//c.
let grausC = 30
let grausF = (grausC)*9/5 + 32
let grausK = (grausF - 32)*5/9 + 273.15
console.log(grausF, grausK)//86 303.15

//d.
let grausC = prompt("Digite o valor em graus C que deseja converter")
let grausF = (grausC)*9/5 + 32
let grausK = (grausF - 32)*5/9 + 273.15
console.log(grausF, grausK)//86 303.15

//2.
 const valorQh = 0.05
// //a.
let consumo = 280
let valorTotal = valorQh * consumo
console.log(valorTotal)

// //b.
let desc = 0.15
console.log(valorTotal * desc)

//3.
//a.
let kg = 1
let lb = kg * 0.45
let conversao1 = 20 * lb
console.log( "20lb equivalem a " + conversao1 + "kg")
//b.
let kg1 = 1
let oz = kg1 * 35.274
let conversao2 = 10.5 * oz
console.log( "10.5 oz equivalem a " + conversao2 + "kg")
//c.
let mi = 1
let mt = mi * 1609.34
let conversao3 = 100 * mt
console.log( "100 mi equivalem a " + conversao3 + "mt")
//d.
let pe = 1
let mts = pe * 0.3048
let conversao4 = 50 * mts
console.log( "50 ft equivalem a " + conversao4 + "mts")
//e.
let litro = 1
let galao = litro * 3.78541
let conversao5 = 103.56 * galao
console.log( "103.56 ft equivalem a " + conversao5 + "l")
//f.
let l = 1
let xicara = l/4
let conversao6 = 450 * xicara
console.log( "450 xc equivalem a " + conversao6 + "l")
//g.
let kgs = prompt("digite o valor a ser convertido")
let ozs = kgs * 35.274
let conversao7 = 10.5 * ozs
console.log( kgs + "oz equivalem a " + conversao7 + "kg")



