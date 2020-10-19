// const countries = require("./countries")
// const name = process.argv[2];

// const searchCountryByName = (name)=>{
    
//     const filteredCountries = countries.filter((country)=>{

//         return country.name.includes(name);

//     });

//     return filteredCountries;


// }


// console.table(searchCountryByName(name));


// Exercicio 1:
// a) Acessamos argumentos passados aos nossos scripts
// através de process.argv


// b)
// const nome = process.argv[2];
// const idade = process.argv[3];

// console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c)
// const nome = process.argv[2];
// const idade =Number(process.argv[3]) ;
// const novaIdade = Number(process.argv[3])+7


// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

// Execício 2

// const operation = process.argv[2];
// const number1 = process.argv[3];
// const number2 = process.argv[4];
// const calculaValor = (operation,number1,number2) =>  {
//         let result;

//     switch(operation){
//         case "soma":
//            result = (Number(number1) +Number(number2))
//                 console.log(result)
//             break;
//         case "subt":
//             result =(number1 - number2)
//                 console.log(result)
//             break;
//         case "mult":
//             result =(number1 * number2)
//                 console.log(result)
//             break;
//         case "div":
//             result =(number1 / number2)
//                 console.log(result)     
//             break;
//     }
// };
//     calculaValor (operation,number1,number2);







// Exercício 3

// const tarefa = process.argv[2];
// const listaTarefa = ["estudar", "preparar o lanche", "lavar os cabelos"]

// const adicionarTarefa = (tarefa) => {
//     listaTarefa.push(tarefa);
//     console.log("Tarefa adicionada com sucesso! tarefas:",listaTarefa)

// }
// adicionarTarefa(tarefa)



