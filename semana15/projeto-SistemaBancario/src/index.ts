import express, {Express, Request, Response} from 'express';//importando o express e o tipo express
import cors from 'cors';//importando o cors
import {accounts} from './accounts';

const app: Express = express()//chamar a função express 

app.use(express.json())
app.use(cors());

app.get("/users/:123123",(req: Request, res: Response)=>{

    try {
        
        const balanceByCpf = accounts.filter((account)=>account.CPF===req.params.CPF)
        console.log(balanceByCpf)
        res.status(200).send(balanceByCpf);
    }catch(error){
        res.status(400).send({
            message: "Error searching for CPF"
        });
    }
})

app.post("/users/create",(req: Request, res: Response)=>{
    try{
        const {name, CPF, dateOfBirthAsString}=req.body//tudo isso vem do body. Aqui esta uma desestruturação

        const [day, month, year]= dateOfBirthAsString.split("/")//quebrando a data nas barras para que fique um array [01,01,2020]

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        // validar as emntradas da requisição
        const ageInMilisseconds:number = new Date().getTime() - dateOfBirth.getTime()//ou Date.now() forma reduzida

        const ageInYears:number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365 //transforma milisegundos em segundos/minutos/hora/dias/anos

        if (ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
            }

        // consultar ou alterar a base de dados
        accounts.push({ 
            name, //nome valor são iguais, então pode escrever uma vez só
            CPF, 
            dateOfBirth,
            balance: 0,
            statement: []
        })

        //validar os resultados da consulta
        //enviar respostas
        res.status(201).send("Conta criada com sucesso!")//
    }catch(error){
        console.log(error)//da mais informação do erro
        res.send(error.mensage)//responde a requisição e envia a mensagem
    }
})

app.get("/users/all", (req: Request, res: Response)=> {
    try {
        //validar entradas da requisição 
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    }catch(error){
        res.send(error.message)
    }
})
app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")//fazer o servidor escutar a porta 3003
})