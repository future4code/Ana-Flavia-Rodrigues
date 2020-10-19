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

const operation = process.argv[2]
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);

const result = ()=>{

    switch(operation){
        case "soma":
           (number1 + number2) 
            break;
        case "subt":
            (number1 - number2)
            break;
        case "mult":
            (number1 * number2)
            break;
        case "subt":
            (number1 / number2)
            break;
    }

}





