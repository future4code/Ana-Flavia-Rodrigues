

//Exercicio  de interpretação de código:
//1)
  a = 10
  b = 10

  console.log(b)//valor impresso no comnsole 10

  b = 5
  console.log(a, b)//valores impressos no comnsole 10 5


//__________________________________________________________
//2)
 a = 10
 b = 20
 c = a // c=10
 b = c // b=10
 a = b // a=10

console.log(a, b, c)//vai imprimir: 10, 10, 10
//__________________________________________________________

//Exercicio de escrita de código:

//a)
 let Nome

//b)
 let Idade

//c)
console.log(typeof Nome)//undefined
console.log(typeof Idade)//undefined

//d)
//o console imprime valor undefined porque não foi atribuido nenhum valor as variaveis declaradas
let NomeUsuario = prompt("Qual é o seu nome?")
let IdadeUsuario = prompt("Qual é a sua idade")



//e)

console.log(typeof Nome)//string
console.log(typeof Idade)//string

//o console imprime valor Object, ou seja a variavel foi declarada. Foi definido um tipo para a variável.

//f)
 
console.log("Ola "+NomeUsuario+",você tem  "+IdadeUsuario+"anos")
//--------------------------------------------------------------

//Exercicio 2: 
 

 let End = prompt('Qual é o seu endereço?')
 console.log("Resposta: " +End)
 let Cor = prompt('Qual é a sua cor preferida?')
 console.log("Resposta: " +Cor)
 let Cid = prompt('Qual é a sua Cidade?')
 console.log("Resposta:  " +Cid)
 let Filme = prompt('Qual é a seu filme preferido?')
 console.log("Resposta: " +Filme)
 let Musica = prompt('Qual é a musica que você mais gosta?')
 console.log("Resposta: " +Musica)
//-------------------------------------------------------------------

//Exercico 3:

let Comidas = ['brocolis','macarrao','feijoada','lasanha','peixe']
//a)
console.log(Comidas)

//b)
console.log("Essas minhas comidas preferidas: " )
console.log(Comidas[0])
console.log(Comidas[1])
console.log(Comidas[2])
console.log(Comidas[3])
console.log(Comidas[4]) 
 

//c)
let ComidaUsuario = prompt("Qual é a sua comida preferida?")
Comidas[1] = ComidaUsuario
console.log(Comidas)
//-------------------------------------------------------------------

//Exercico 4:

let Pergunta = ['Você é mulher?', 'Esta chovendo hoje?','Sua camisa é rosa?']
let Resposta = [true, false]
console.log(Pergunta[0],Resposta[0])
console.log(Pergunta[1],Resposta[1])
console.log(Pergunta[2],Resposta[0])