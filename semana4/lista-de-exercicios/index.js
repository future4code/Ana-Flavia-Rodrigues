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
// let triangulo = [{a:1},{b:2},{c:3}] 

// const nomeTriangulo = triangulo.filter((elemento) => {

//         if ((elemento.a === elemento.b) && (elemento.b === elemento.c )) {
//             console.log(`Equilatero`)
//         }

//         else{

//             if ((elemento.a === elemento.b) || (elemento.a === elemento.c) || (elemento.b === elemento.c) ){
//                 console.log(`Isosceles`)
//             }
        

//         else{
//             if ((elemento.a !== elemento.b) && (elemento.b !== elemento.c) && (elemento.a !== elemento.c) ){
//                 console.log(`Isosceles`)
//             }
//         }
//         }  
// })

//5)
// a)
// const n1 = 15
// const n2 = 30
//  if (n1 > n2){
//      console.log(`O numero ${n1} é maior que ${n2}`)
//  } else {
//     console.log(`O numero ${n1} não é maior que ${n2}`)
//  }

//b)
// if (n1 % n2 === 0){
//     console.log(`${n1} é divisível por ${n2}`)
// } else {
//     console.log(`${n1} não é divisível por ${n2}`)
// }

//c)
// const nDif = n1 - n2
// console.log(nDif)



//==============================================Exercícios de Funções==================================================================

//1)
// let arrayDeNumeros = [90, 390, 100, 30, 340, 50, 690, 70, 910, 240]
// let novoArray = []
// let maiorNumero = 0
// let menorNumero = 0
// const defineMaiorNumero = (array, funcao) => {    
//     for(let numero of array) {
//         if (numero > maiorNumero){
//             maiorNumero = numero
//         }
//     }
//     console.log(`O array original é ${array}`)
//     console.log(`O maior numero é ${maiorNumero}`)
//     funcao(array, maiorNumero)
// }
// const criaArraySemMaiorNumero = (array, maiorNumero) => {
//     let segundoMaior = 0
//     for (let numero of array) {
//         if (numero !== maiorNumero) {
//             novoArray.push(numero)
//         }
//     }
//     console.log(`O novo array é ${novoArray}`)
//     for(let numero of novoArray) {
//         if (numero > segundoMaior){
//             segundoMaior = numero
//         }
//     }
//     console.log(`O segundo maior número do array original era ${segundoMaior}`)
//     return segundoMaior
// }
// defineMaiorNumero(arrayDeNumeros, criaArraySemMaiorNumero)

// const defineMenorNumero = (array1, funcao1) => {    
//     for(let numero1 of array1) {
//         if (numero1 > menorNumero){
//             menorNumero = numero
//         }
//     }
//     console.log(`O array original é ${array1}`)
//     console.log(`O menor numero é ${menorNumero}`)
//     funcao(array1, menorNumero)
// }
// const criaArraySemMenorNumero = (array1, menorNumero) => {
//     let segundoMenor = 0
//     for (let numero1 of array1) {
//         if (numero1 !== menorNumero) {
//             novoArray.push(numero1)
//         }
//     }
//     console.log(`O novo array é ${novoArray1}`)
//     for(let numero1 of novoArray1) {
//         if (numero1 > segundoMenor){
//             segundoMenor = numero1
//         }
//     }
//     console.log(`O segundo menor número do array original era ${segundoMenor}`)
//     return segundoMenor
// }
// defineMenorNumero(arrayDeNumeros, criaArraySemMenorNumero)

//2)
// const dizOi= (alert) => {
//     alert("Hello Labenu")
// }

// dizOi()

//==========================================================Exercícios de Objetos=======================================


//1) Objetos são frmas de representar dados mais abstratos de maneira mais intuitiva, se aproximando mais de modelos do mundo real
//tornando-os mais concretos.
//quando queremos guardar os objetos de forma ordenada utilizamos o array

//2)
// const lado1 = Number()
// const lado2 = Number()

// function criaRetangulo(lado1,lado2){
//     let perimetro = Number(2 * (lado1 + lado2))
//     let area = Number(lado1 * lado2)
//     console.log(`O perimetro do retangulo é ${perimetro} e a area é ${area}`)
// }
// criaRetangulo(10,20)


//3)
// const filme = {
//     título: "Antes de partir",
//     ano:2007,
//     diretor: "Rob Reiner",
//     ator1:"Jack Nicholson",
//     ator2:"Morgan Freeman",
//     ator3: "Sean Hayes"
// }
//     console.log(`Venha assistir ao filme ${filme.título}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.ator1}, ${filme.ator2}, ${filme.ator3}`)


//4)


// function anonimizarPessoa() {
//         console.log(pessoaAnonima)
//      }
    
//      const pessoa = {
//         nome: "Ana Flavia",
//         idade: 51,
//         email: "pessoa@gmail.com",
//         endereco: "Rua Sergio Lamarca,240 - Sorocaba -SP"
//     }
    
//     const pessoaAnonima = {
//         ... pessoa,
//         nome: "anonimo"
//     }
//     anonimizarPessoa()


//=============================EXERCICIOS DE FUNÇÕES DE ARRAY ===============================================================

//1)
// const arrayPessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// a)
// const adultos = arrayPessoas.filter((elementoDoArray, index, array) => {
//      return elementoDoArray.idade >= 20
//  })
//  console.log(adultos)
//b)
    // const menores = arrayPessoas.filter((elementoDoArray, index, array) => {
    //      return elementoDoArray.idade < 20
    //   })
    //   console.log(menores)

//2)
//const array = [1,2,3,4,5,6,]
//a)
//  const novoArray = array.map((elementoDoArray, indexDoArray, array) => {
//      return (elementoDoArray*2)
//  })

//  console.log(novoArray)

//b)
// const novoArray = array.map((elementoDoArray, indexDoArray, array) => {
//       return String(elementoDoArray*3)
//   })
// console.log(novoArray)

//c)
// const numeros= array.filter((elementoDoArray, index, array) => {
//          if (elementoDoArray % 2 === 0) {
//              return const verifica = "par"
//              String(elementoDoArray, verifica)
//         } 
//         const verifica = "impar"
//         String(elementoDoArray, verifica)
//      })
    
//      console.log(soPares)


//3)

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasAutorizadas = pessoas.filter((elemento) => {
//     return ((elemento.altura >= 1.5) && (elemento.idade >=14 && elemento.idade<=60))
//     })
// console.log(pessoasAutorizadas)

// const pessoasNaoAutorizadas = pessoas.filter((elemento) => {
//     return ((elemento.altura <= 1.5) || (elemento.idade <=14 || elemento.idade>=60))
//     })
// console.log(pessoasNaoAutorizadas)

//4)
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const consultaCancelada = consultas.filter((elemento) => {
//     return (elemento.cancelada === true) 
    
// })
// console.log(`Olá,  ${ consultaCancelada.nome }. Estamos enviando esta mensagem para
//      da sua consulta no dia ${ consultaCancelada.dataDaConsulta }. Por favor, acuse
//     o recebimento deste e-mail.`)

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

// contas.forEach((elementoDoArray, index, array) => {
//          (elementoDoArray.saldoTotal) -= (elementoDoArray.compras.reduce)
//      })
    
//      console.log(contas)

console.log(contas.map((total) => total.).reduce((total, compras) => total - compras));