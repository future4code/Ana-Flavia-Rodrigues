

function criaArray(){

    const tit = document.getElementById("titulo-post").value
    const aut = document.getElementById("autor-post").value
    const cont= document.getElementById("conteudo-post").value
    
    const blogInfo = {
        titulo:tit,
        autor:aut,
        conteudo:cont
    }
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<div><h2>${blogInfo},</h2><p></p></div>` 
    const arrayFinal = []
    arrayFinal.push(blogInfo)
    console.log(blogInfo)
    //console.log(arrayFinal)
     tit.value=""
     aut.value=""
     cont.value=""
    
}

function armazenaDados(){
    
    
}
function apertouEnter(evento) {
    if (evento.key === 'Enter'){
        identificarImagem()
    }
}

function apertouBotao(evento) {
    identificarImagem()
}