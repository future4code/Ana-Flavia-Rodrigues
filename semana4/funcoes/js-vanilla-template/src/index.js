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


// function somaDoisNumeros(numero1,numero2){
//     const soma = numero1 + numero2
//     return soma
// }
// const resultado = somaDoisNumeros(25, 456)

// console.log(resultado)


//=====================Exercício6========================

const array = [10,23,45,78,90,52,35,67,84]
