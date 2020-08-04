function criarTarefa (){//criando a função para começar a criar a lista de tarefas
    const meuTexto = document.getElementById("tarefa")//buscando meu elemento input
    let texto = meuTexto.value//buscando o valor digitado no imput

    if (texto !== "") {//se o imput não estiver vazio realize 
        const diaSemana = document.getElementById("dias-semana")
        let dia = diaSemana.value
        
        switch(dia){
            case "domingo":
                const minhaTarefaDom = document.getElementById("lista-tarefa-dom")//buscando o elemento onde sera impressa minha lista
                minhaTarefaDom.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
            
           case "segunda":
                const minhaTarefaSeg = document.getElementById("lista-tarefa-seg")//buscando o elemento onde sera impressa minha lista
                minhaTarefaSeg.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break

            case "terca":
                const minhaTarefaTer = document.getElementById("lista-tarefa-ter")//buscando o elemento onde sera impressa minha lista
                minhaTarefaTer.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
        
            case "quarta":
                const minhaTarefaQua = document.getElementById("lista-tarefa-qua")//buscando o elemento onde sera impressa minha lista
                minhaTarefaQua.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
                
            case "quinta":
                const minhaTarefaQui = document.getElementById("lista-tarefa-qui")//buscando o elemento onde sera impressa minha lista
                minhaTarefaQui.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
                        
            case "sexta":
                const minhaTarefaSex = document.getElementById("lista-tarefa-sex")//buscando o elemento onde sera impressa minha lista
                minhaTarefaSex.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
                                
            case "sabado":
                const minhaTarefaSab = document.getElementById("lista-tarefa-sab")//buscando o elemento onde sera impressa minha lista
                minhaTarefaSab.innerHTML += `<li>${texto}</li>`//acessando o innerHTML e adicionando itens na lista
                meuTexto.value = "" //apagando texto digitado no imput 
                    break
        }

    } else {//se o imput estvier vazio
        alert("Digite uma tarefa")
    }
    
    }
    


    
            