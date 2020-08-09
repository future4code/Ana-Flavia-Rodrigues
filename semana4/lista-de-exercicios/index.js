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


//==================Exercicios de Lógica de Programação=========
//1)
 /* Podemos iterar uma lista com funções de call back:
    forEach;
    map;
    filter*/

//     const funcionarios = [
//         {nome:"Maria", funcao:"tesoureira", genero:"F", abr:""},
//         {nome:"João" ,funcao:"motorista", genero:"M", abr:""},
//         {nome:"Daniela", funcao:"gerente", genero:"F", abr:""},
//         {nome:"Mariana", funcao:"analista", genero:"F", abr:""},
//         {nome:"Pedro", funcao:"dev front end", genero:"M", abr:""}
//     ]
//     funcionarios.forEach((item)=>{
//        item.abr = item.nome
//     });
//     console.log(funcionarios);
    
    
       
//     const numeros = [5,4,8,6,3,7]

//     const novoNumero = numeros.map((elem, ind) => {
//     return `O numero na posição ${ind} do array numeros é ${elem}`
// })

// console.log(novoNumero)

// const num = [5,4,8,6,3,7]
// const numPares = numeros.filter((elemento, indPar) => {
//         return elemento % 2 === 0
   
// })

// console.log(numPares)

//2)
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2
// const booleano4 = !booleano3 
// a) true && false && false = false
// b) (true && false) || false => false || false = false
// c) (false || true) && (false || true) ==> true && true ==> true
// d) !(false && true) || !(true && true) ==> !(false) || !(true) ==> true || false ==> true
// e) !(true) && !(true) || (true && true && true) ==> false && false || true ==> false && true ==> false

//3)
// const quantidadeDeNumerosPares = 7
// let i = 0
// function numPar(){

//     while(i <= quantidadeDeNumerosPares) {
//         console.log(i+=2) //o erro estava no incremento de i. Se multiplicar por 2, sempre será 0 entao dá loop infinito
//       }
// }

//4)
let triangulo = [{a:1},{b:2},{c:3}] 

const nomeTriangulo = triangulo.filter((elemento) => {

    

        if (elemento.a === elemento.b === elemento.c ) {
            console.log(`Isoceles`)
        }
        if (elemento.a !== elemento.b !== elemento.c ){
            console.log(`Escaleno`)
        }
     

            console.log(`Equilatero`)
        }
        
    )


