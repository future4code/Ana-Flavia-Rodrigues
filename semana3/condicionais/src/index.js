//----------EXERCÍCIO 1 --------------------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//Explique o que o código faz. 
//Qual o teste que ele realiza?
//R: O código pede para que o usuário digite um número e verifica se o resto da divisão desse numero seja igual
//    a zero, ou seja , verifica se o numero é par. Se for ele imprime no console "Passou no teste.", se não
//    ele imprime "Não passou no teste."  
//Para que tipos de números ele imprime no console "Passou no teste"?
//R: Numeros pares 
//Para que tipos de números a mensagem é "Não passou no teste"?
//R:  Numeros impares


//----------EXERCÍCIO 2 --------------------


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. Para que serve o código acima?
//R: O código pede para o usuário digitar uma fruta, então ele retorna o preço da fruta escolhida

//b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//R: "O preço da fruta maçã é R$ 2.25

//c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se r
//retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//R: O preço da fruta  Pêra  é  R$  5 -- ele iria realizar o tudo que está abaixo do case "Pêra", e neste caso ele iria 
//para o default


//----------EXERCÍCIO 3 --------------------
//Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


// //a. O que a primeira linha está fazendo?
// //R: Declarando a constante numero , transformando-a em Number e atribuindo o valor digitado pelo usuário

// //b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// //R: Se for digitado 10 (numero >0), imprime :"Esse número passou no teste", se for -10 (numero<0) não vai
// //imprimir nenhuma mensagem, porque o código não prevê isso.

// //c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// //R: O erro acontece porque a variável mensagem está declarada dentro do escopo filho e o console.log
// //chamando a variável está no escopo global, que não consegue ler o escopo filho. Retornando o erro como
// //se a variavel não existisse.

//----------EXERCÍCIO 4 --------------------

// let idade = Number(prompt("Digite a sua idade"))
// if (idade >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }



//----------EXERCÍCIO 5 --------------------

//const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno) ")


//if (turno === "M"){
    //     console.log("Bom Dia!")
    // } else if (turno === "V"){
    //     console.log("Bom Tarde!")
    // } else if (turno === "N"){
    //     console.log("Bom Noite!")
    // } else {
    //     console.log("Não entendi sua resposta, tente novamente")
    // }

//----------EXERCÍCIO 6 --------------------

 //   const turno = prompt("Qual turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno) ")

    // switch (turno){
    //     case "M":
    //         console.log("Bom Dia!")
    //         break
    //     case "V":
    //         console.log("Bom Tarde!")
    //         break
    //     case "N":
    //         console.log("Fica em casa que o mundo vai acabar")
    //         break
    //     case "ameno":
    //         console.log("Bom Noite!")
    //         break
    //     default:
    //         console.log("Não entendi sua resposta, tente novamente")
    //         break
    // }

    //----------EXERCÍCIO 7 --------------------

//  const generoFantasia = prompt("Qual o genero do filme?")
//  const valorIngresso = Number(prompt("Qual o valor da entrada"))


//  if (generoFantasia === "Fantasia" && valorIngresso < 15 ){
//      console.log("Bom filme")
//  } else {
//      console.log( "Escolha outro filme :(")
//  }
  

//----------DESAFIO 1 --------------------

//  const generoFantasia = prompt("Qual o genero do filme?")
//  const valorIngresso = Number(prompt("Qual o valor da entrada"))


//   if (generoFantasia === "Fantasia" && valorIngresso < 15 ){
//   const snack = prompt("O que vai querer para acompanhar o filme? Pipoca ou chocolate?")
//       console.log("Bom filme, e saboreie " + snack)
//   } else {
//       console.log( "Escolha outro filme :(")
//   }

//----------DESAFIO 2 --------------------

let nome = prompt("Digite seu nome completo:").toUpperCase()
let tipoJogo = prompt("Qual jogo pretende assistir? Internacional(IN) ou Domestico(DO)?").toUpperCase()
let etapaJogo = prompt("Informe a etapa:Semi-final (SF), decisão de terceiro lugar (DT) ou Final(FI)").toUpperCase()
let categoriaJogo =  Number(prompt("Iforme a categoria: 1,2,3 ou 4"))
let quantidade = prompt("informe a quantidade de ingressos que deseja")
const cotacaoDolar = (4)

if (tipoJogo === "DO"){
    
    if (etapaJogo === "SF" && categoriaJogo === 1){
        const valor1 = (1320)
        let total = (quantidade * valor1)
        console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
         " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
         " valor total: R$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 1){
        const valor1 = (660)
        let total = (quantidade * valor1)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
             " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
            " valor total: R$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 1){
        const valor1 = (1980)
        let total = (quantidade * valor1)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
             " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
             " valor total: R$ " +total )
        }
    if ( etapaJogo === "SF" && categoriaJogo === 2){
        const valor1 = (880)
        let total = (quantidade * valor1)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
            " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
            " valor total: R$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 2){
            const valor1 = (440)
            let total = (quantidade * valor1)
                console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                    " valor total: R$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 2){
            const valor1 = (1320)
            let total = (quantidade * valor1)
                console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                     " valor total: R$ " +total )
        }      
    if (etapaJogo === "SF" && categoriaJogo === 3){
            const valor1 = (550)
            let total = (quantidade * valor1)
                console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                 " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                 " valor total: R$ " +total )
        } 
    if ( etapaJogo === "DT" && categoriaJogo === 3){
            const valor1 = (330)
            let total = (quantidade * valor1)
                console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                    " valor total: R$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 3){
            const valor1 = (880)
            let total = (quantidade * valor1)
                console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                     " valor total: R$ " +total )
        } 
    if (etapaJogo === "SF" && categoriaJogo === 4){
                    const valor1 = (220)
                    let total = (quantidade * valor1)
                        console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                         " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                         " valor total: R$ " +total )
        } 
    if ( etapaJogo === "DT" && categoriaJogo === 4){
                    const valor1 = (170)
                    let total = (quantidade * valor1)
                        console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                             " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                            " valor total: R$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 4){
                    const valor1 = (330)
                    let total = (quantidade * valor1)
                        console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                             " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                             " valor total: R$ " +total )
        }
    }

    else{

if (tipoJogo === "IN"){
    
    if (etapaJogo === "SF" && categoriaJogo === 1){
        const valor1 = (1320)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                 " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                 " valor total: US$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 1){
        const valor1 = (660)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 1){
        const valor1 = (1980)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                     " valor total: US$ " +total )
        }
    if (etapaJogo === "SF" && categoriaJogo === 2){
        const valor1 = (880)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                     " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                     " valor total: US$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 2){
        const valor1 = (440)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 2){
        const valor1 = (1320)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        }      
    if (etapaJogo === "SF" && categoriaJogo === 3){
        const valor1 = (550)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 3){
        const valor1 = (330)
        let total = ((quantidade * valor1)* cotacaoDolar)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 3){
        const valor1 = (880)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        }
    if (etapaJogo === "SF" && categoriaJogo === 4){
        const valor1 = (220)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "DT" && categoriaJogo === 4){
        const valor1 = (170)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        } 
    if (etapaJogo === "FI" && categoriaJogo === 4){
        const valor1 = (330)
            console.log("Nome do Cliente: " + nome +" Tipo de Jogo: " + tipoJogo+ " Etapa do jogo: "+ etapaJogo+
                                    " categoria: "+categoriaJogo+ " quantidade de ingressos: " +quantidade+ " Valor do ingresso: " +valor1+
                                    " valor total: US$ " +total )
        }                     
                                        
    }                                        
     else {
         console.log("Informações incorretas, tente novamente")
 }
}