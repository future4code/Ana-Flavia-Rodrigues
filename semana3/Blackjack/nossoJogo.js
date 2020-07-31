/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")//imprime Bem vindo ao jogo
if (confirm("Quer iniciar uma nova rodada?")) {
   let sorteio = []
   const usuario = comprarCarta();
   const computador = comprarCarta();
   const u = usuario.valor
   const c = computador.valor
      for (let i = 0;i<1; i++) {
       const usuario1 = sorteio[i]
       console.log(`Computador - cartas: ${usuario.texto} - pontuação: ${usuario.valor}`)    
       console.log(`Usuário - cartas: ${computador.texto} - pontuação: ${computador.valor}`)
       if ( u > c) {
          console.log("O usuário ganhou!")
       }
       if (u < c ){
         console.log("O computador ganhou!")
       }
       if (u === c) {
         console.log("Empate!")
       }
  }
  
 } else
   console.log("O jogo acabou!")//usuario escolheu cancelar




