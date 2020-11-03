// a) 

// const minhaString: string = 25;
// ocorre um erro, "tipo numer não pode ser atribuido ao tipo string"

// b)
// const meuNumero: number | string = 25;

//c)
enum COR_FAVORITA {
   VERMELHO = "Vermelho" ,
   LARANJA = "Laranja",
   AMARELO = "Amarelo",
   VERDE = "Verde",
   AZUL = "Azul",
   INDIGO = "Indigo",
   VIOLETA = "Violeta"
}
type pessoa = {nome: string, idade: number, corFavorita: COR_FAVORITA}
const ana:pessoa = {
    nome: "Ana",
    idade: 25,
    corFavorita: COR_FAVORITA.VIOLETA
}
    
//d)

const thiago : pessoa = {
    nome: "Thiago",
    idade: 27,
    corFavorita: COR_FAVORITA.VERDE
}

const thulio : pessoa = {
    nome: "Thulio",
    idade:23,
    corFavorita: COR_FAVORITA.VERMELHO
}
 const paulinho : pessoa = {
     nome: "Paulo",
     idade:3,
     corFavorita: COR_FAVORITA.AZUL
 }


    