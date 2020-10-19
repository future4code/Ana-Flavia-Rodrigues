const tarefa = process.argv[2];
const listaTarefa = ["estudar", "preparar o lanche", "lavar os cabelos"]

const adicionarTarefa = (tarefa) => {
    listaTarefa.push(tarefa);
    console.log("Tarefa adicionada com sucesso! tarefas:",listaTarefa)

}
adicionarTarefa(tarefa)



