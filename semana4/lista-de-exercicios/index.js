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
// function investeDinheiro(tipoDeInvestimento,valor){
//     let valorAposInvestimento;

//     switch(tipoDeInvestimento){//se o tipo de investimento for Poupanca multiplique o valor por 1.03
//         case "Poupança":
//             valorAposInvestimento = valor * 1.03;
//             break;
//         case "Renda Fixa"://se o tipo de investimento for Renda Fixa multiplique o valor por 1.05
//             valorAposInvestimento = valor * 1.05;
//             break;
//         case "CDB"://se o tipo de investimento for CDB multiplique o valor por 1.06
//             valorAposInvestimento = valor * 1.06;
//             break;    
//         case "Ações"://se o tipo de investimento for Ações multiplique o valor por 1.05
//             valorAposInvestimento = valor * 1.1;
//             break;
//         default://se não for nenhum dos citados acima retorna a mensagem
//             alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")
//             break;

//     }

//     return valorAposInvestimento;
// }

// const novoMontante = investeDinheiro("Ações", 150);//vai buscar na case "Ações" e multiplicar por 1.1
// const segundoMontante = investeDinheiro("Tesouro Direto",200);//vai gerar um alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")

// console.log(novoMontante);//165
// console.log(segundoMontante);//undefined

//3)

// const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283];
// const array1 = [];
// const array2 = [];

// for(let numero of numeros){
    
//     if(numero % 2 === 0){
//         array1.push(numero);
//     }else{
//         array2.push(numero);
//     }
// }
// /*Cria uma variavel numero .Percorra toda a array numeros e verifique cada 
//     elemebto . Se for par adicione no final da array criada pela variavel array1. Se não for par 
//     adicione na array criada pela variavel array2*/

// console.log("Quantidade total de numeros", numeros.length)/*imprime a Mensagem e o comprimento da array numeros =
// Quantidade total de numeros 14*/ 
// console.log(array1)//Imprime o comprimento do array1 = 6 
// console.log(array2.length)//Imprime o comprimento do array2 = 8


//4)
// const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,-10,25,1590];

// let numero1 = Infinity;
// let numero2 = 0;

// for(let numero of numeros){
//     if(numero < numero1){/*variavel numero1 recebe valor  inicial. Se a variavel numero (elemento da array numeros)
//         for menor que o valor da variavel numero1, ela recebe o valor da variavel numero. */
//         numero1 = numero;
//     }
//     if(numero > numero2){/*variavel numero2 recebe valor 0 inicial. Se a variavel numero (elemento da array numeros)
//         for maior que o valor da variavel numero2, ela recebe o valor da variavel numero. */
//         numero2 = numero;
//     }
// }
// console.log(numero1);//-10
// console.log(numero2);//1590
