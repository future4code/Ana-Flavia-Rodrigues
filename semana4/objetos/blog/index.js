
//criando a array com as informações digitadas pelo usuário
function criaArray(){
    //capturar os valores digitados em cada campo do formulario
    const tit = document.getElementById("titulo-post").value
    const aut = document.getElementById("autor-post").value
    const cont= document.getElementById("conteudo-post").value
    const imag = document.getElementById("imagem-post").value
    //criando o objeto com as informações coletadas
    const blogInfo = {
        titulo:tit,
        autor:aut,
        conteudo:cont
    }
    
    //imprimindo valores numa div do html
    const arrayFinal = []
    arrayFinal.push(blogInfo)
   
    const container = document.getElementById("container-de-posts")
    if (imag.includes('.png') || imag.includes('.jpg')){
        //direciona para outra página
     // window.location.href="informacao.html"
      container.innerHTML += `<div><h2>${tit}</h2><p>${aut}</p><p>${cont}</p><p><img src=${imag}></p></div>` 
    } else {
        alert('Link incorreto! Insira imagem válida')
    }
    //limpando os campos 
    tit.value=""
    aut.value=""
    cont.value=""
    
}
