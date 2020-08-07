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

//=====================Lista de Exercicios===============================

//==================Exercicios de interpretação de código=========

//1. 
// function conversorDeMoeda(valorEmDolar){//função com parametro valorEmDolar
//     const cotacao = Number(prompt("Informe o valor da cotação do Dolar"));//Pede que o usuario digite o valor da 
//                                                                           //cotação do dolar, transforma em Number  
//     return "R$" + (valorEmDolar * cotacao);// retorna "R$" o parametro da cotação multiplicado pelo valor digitado pelo usuario
// }

// const meuDinheiro = conversorDeMoeda(100);//Chama a função definindo o parametro como 100
// console.log(meuDinheiro);//imprime "R$"(100*valor digitado)
//                         // Ex.: Se o valor digitado pelo usuario for 10 vai imprimir : R$1000


//2.
function investeDinheiro(tipoDeInvestimento,valor){
    let valorAposInvestimento;

    switch(tipoDeInvestimento){//se o tipo de investimento for Poupanca multiplique o valor por 1.03
        case "Poupança":
            valorAposInvestimento = valor * 1.03;
            break;
        case "Renda Fixa"://se o tipo de investimento for Renda Fixa multiplique o valor por 1.05
            valorAposInvestimento = valor * 1.05;
            break;
        case "CDB"://se o tipo de investimento for CDB multiplique o valor por 1.06
            valorAposInvestimento = valor * 1.06;
            break;    
        case "Ações"://se o tipo de investimento for Ações multiplique o valor por 1.05
            valorAposInvestimento = valor * 1.1;
            break;
        default://se não for nenhum dos citados acima retorna a mensagem
            alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")
            break;

    }

    return valorAposInvestimento;
}

const novoMontante = investeDinheiro("Ações", 150);
const segundoMontante = investeDinheiro("Tesouro Direto",200);

console.log(novoMontante);
console.log(segundoMontante);