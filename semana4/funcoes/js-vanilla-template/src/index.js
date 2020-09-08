//========================FUNCOES=========================

//=====================Exercício1========================
// function minhaFuncao(variavel){
//     return variavel * 5
// }
// console.log(minhaFuncao(2))//10
// console.log(minhaFuncao(10))//50

//a) Será impresso 10 e 50
//b) Não iria aparecer nada, porque é o console log que dá o comando para imprimir

//=====================Exercício2========================

// let arrayDeNomes = ["Darvas", "Goli" ,"Joao", "Paulinha", "Soter"];

// const outraFuncao = function(array){
//     for(let i = 0; i < 2; i++){
//         console.log(array[i])
//     }
// }

// outraFuncao(arrayDeNomes)
//a) Darvas e Goli
//b) Anada e Caio

//=====================Exercício3========================
// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
// }

// const resultado = [1,2,3,4,5,6,7];
// const resultado1 = metodo(resultado)
// console.log(resultado1)

//Ela percorre cada elemento do array e verifica se é par, se sim 
//acrescenta o numero multiplicado por ele mesmo no final da array
//um nome melhor seria verificaNumeroPar


//=====================Exercício4========================

//a) 

// function dizQuemSou() {
//          console.log("Eu sou Ana Flavia, tenho 51 anos, moro em Sorocaba e sou estudante da Labenu.")
//      }
    
//      dizQuemSou()
//b)
// const nome = ("Ana Flavia")
// const idade = (51)
// const cidade = ("Sorocaba")
// const est = true
// function dizSobreMim(nome, idade, cidade, estudante){

//         return mensagemFinal ()

// }
// console.log("Eu sou  " + nome + ",  tenho " + idade + " anos, moro em " +cidade+ " e sou " + est)

//=====================Exercício5========================
//a)

// function somaDoisNumeros(numero1,numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// const resultado = somaDoisNumeros(25, 456)

// console.log(resultado)

//b)
//  function doisNumeros(num1, num2){
//      const n1 = 8
//      const n2 = 8
    
//     if (n1>=n2){
//             resposta = true      
//         } else{
//             resposta = false
//         }
//         return resposta
//  }
//  doisNumeros()
//  console.log(resposta)   

//c)
// function imprimeDez(string) {
//     for (i=0; i < 10; i++) {
//         console.log(i,string)
//     }
// }
// let frase = "Eu gosto de estudar"
// const fraseFinal = imprimeDez(frase)

//=====================Exercício6========================

//const array = [10,23,45,78,90,52,35,67,84]

//a) 
// function arrayNum([]){
//     console.log(array.length)
// }
// arrayNum(array)

//b)
// function arrayPar([]){
//     for (let elem of array){
//         if (elem % 2 === 0){
//             console.log(elem,"é número par")
//         }else{
//             console.log(elem,"não é número par")
//         }
//     }
// }
// arrayPar([array])
    
//c)
// function mostraQuantPar(arrayNovo){
//     let par = 0
//     for (i=0; i<arrayNovo.length; i++){
//         if(arrayNovo[i]%2===0){
//             par += 1
//         }
//     }
//        console.log(par)
// }
// mostraQuantPar(array)

//===============================DESAFIOS===========================
//EXERCICIO 1
//1)

// let exerc = (a) =>{
//     console.log(a)
// }
// exerc(5)

// //2)
// let somaDoisNumeros = (a, b) => {
//     const total = a+b
//     exerc(total)
// }
// somaDoisNumeros(8,5)

//EXERCICIO 2
//a)
// const desafio = (array) => {
//         let arrayResposta = [];
      
//         for (let elem of array) {
//               if (elem % 2 === 0) {
//               arrayResposta.push(elem * 2)
//               }
//         }
      
//         return arrayResposta;
//     }
    
//     const numeros = [0,8,23,16,10,15,41,12,13];
//     const resultado = desafio(numeros)
//     console.log(resultado)

//b)

//  const numeros = [0,8,23,16,10,15,41,12,13];
// let maiorNumeroAtual = 0
// const maiorNumero = (array) => {
//    for (let i = 0; i < numeros.length; i++) {
//     const x = numeros[i]
//      if (x > maiorNumeroAtual) {
//          maiorNumeroAtual = x
//      }
//  }

//  console.log(maiorNumeroAtual)
// }
// maiorNumero(numeros)

//c)
const numeros = [0,8,23,16,10,15,41,12,13];
let maior = 0
const indiceMaior = (array) => {
    for(let i = 0; i <= array.length; i++){
        if(i > maior){
            maior = i -1
        }
    }
return maior
}
console.log(indiceMaior(numeros))

//indiceMaior(numeros)


//DESAFIO
//1)
// const exerc = (item) =>{
//     console.log(item)
// }
