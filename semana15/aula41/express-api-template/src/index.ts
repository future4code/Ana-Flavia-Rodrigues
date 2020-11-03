import express, {Express, Request, Response } from 'express'
import cors from "cors"
import {countries , country} from './countries'


const app: Express =express() //cria um servidor chamando o Express

app.use(express.json()) //converte a resposta em json
app.use(cors()) //converte a resposta em json
//o Endpoint precisa de um método  e dois parâmetros(o caminho, e a função)
//app.metodo(caminho,função)
// a função tem dois parametros (primeira: requisição, segunda: resposta) 
app.get("/countries/all", (req:Request, res:Response)=>{
    res.status(200).send(countries)
})
//colocar as requisições que tem path params para o final pq o servidor tede a dar um match
// no primeiro path que encontrar, com isso, ele quebra a resposta
app.get('/test/hello', (req: Request, res: Response) => {
    res.send(`Olá, mundo!`)
})


// app.get('/test/:number/:name', (req: Request, res: Response) => {
//     res.send(
//         `Oi ${req.params.name}Seu número da sorte é ${Number(req.params.number) + 3}!
//         `)
//     })


//busca paises pelo nome usando query (/search tem que vir antes do :id)
app.get("/countries/search", (req: Request, res: Response) => {
    const result : country[] = countries.filter(
        country => country.name.toLocaleLowerCase().includes(String(req.query.name)
        .toLowerCase())
    )

    res.status(200).send(result)
})

//busca paises pelo nome usando id
app.get("/countries/:id", (req: Request, res: Response) => {
    const result : country | undefined = countries.find(
        country => country.id === Number(req.params.id)
        )
        res.status(200).send(result)
})

//retorno de erros = confere a requisição e devolve uma mensagem
app.delete("/countries/:id", (req: Request, res: Response) => {
    let errorCode: number = 401
    //coloca a função dentro de um bloco try/catch
    try{
        if(!req.headers.authorization){
            //validação
            throw new Error()
        }
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number (req.params.id)
        )

        if(countryIndex === -1){
            errorCode = 404
            throw new Error()
        }

        countries.splice(countryIndex, 1)


        res.status(200).end()

    }catch(error){
        res.status(errorCode).end()
    }
})


//faz o servidor escutar uma porta, usamos 3003 pq o react usa o 3000 e manda a mensagem que o servidor está pronto
app.listen(3003, ()=>{
            console.log("Servidor pronto!")
        })  
 