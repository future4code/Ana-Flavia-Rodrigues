// Exercicio 1:
// a) Acessamos argumentos passados aos nossos scripts
// através de process.argv


// b)
// const nome = process.argv[2];
// const idade = process.argv[3];

// console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c)
const nome = process.argv[2];
const idade =Number(process.argv[3]) ;
const novaIdade = Number(process.argv[3])+7


console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)
