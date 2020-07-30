//1.
// 


//-----------------EXERCICIO 1 -----------------
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)//10

//-----------------EXERCICIO 2 -----------------
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a.) 19, 21, 23, 25, 27, 30
//b.)

//----------------Desafio 1----------------------
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }//0000

//-----------------EXERCICIO 3 -----------------
//a) Imprima cada um dos valores do array original.
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numeroAtual = 0

// for (let numero of array) { 
//     console.log(numero)
// }

//b) Imprima cada um dos valores do array original divididos por 10
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numeroAtual = 0

// for (let numero of array) { 
//     console.log(numero/10)
// }

//c) Crie um novo array contendo, somente, os números pares do array original.
//     Imprima esse novo array

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numeroAtual = 0

// for (let numero  of array) {
//     if (numero % 2 === 0){
//         console.log(numero)

//     }
// }

//d)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
//     const novoArray = []
//     let index = 0
//     for(let i of array){
//         novoArray.push(index)
//         console.log(`O elemento do index ${index++} é ${i}`)
//     }


//e)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let valorMaximo = array [0]

// for (let num of array) { 
//     if(num > valorMaximo){
//         valorMaximo = num
//         console.log(`O maior numero é ${num}`)
//     }
// }

// for (let num of array) { 
//     if(num < valorMinimo){
//         valorMinimo = num
//         console.log(`O menor numero é ${num}`)
//     }
// }


//