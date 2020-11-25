import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express() //cria um servidor chamando o Express

app.use(express.json())//converte a resposta em json
app.use(cors())

//o Endpoint precisa de um método  e dois parâmetros(o caminho, e a função)
//app.metodo(caminho,função)
// a função tem dois parametros (primeira: requisição, segunda: resposta) 

app.get('/countries/all' , (req: Request, res: Response) =>{
    const result = countries.map((newCountry)=>({
        id: newCountry.id,
        name: newCountry.name
    }))
    res.status(200).send(result)
})

app.get('/countries/search', (req: Request, res: Response) =>{
    let result: country[] = countries

    if (req.query.name) {
        result = result.filter(
           country => country.name.includes(req.query.name as string)
        )
    }
     
     if (req.query.capital) {
        result = result.filter(
           country => country.capital.includes(req.query.capital as string)
        )
     }
    
     
     if (req.query.continent) {
        result = result.filter(
           country => country.continent.includes(req.query.continent as string)
        )
     }
    
     if (!req.query.name && !req.query.capital && !req.query.continent) {
        
        res.status(404).send("Not Found")
        
    } else {
       
        res.status(200).send(result)
    }

})


app.put('/countries/edit/:id' , (req: Request, res: Response)=>{
    const id = req.params.id;
    res.status(200).send({
        id: id
    });

})


app.get('/countries/:id' , (req: Request, res:Response) =>{
    const resultId: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
        )

    if (resultId) {

        res.status(200).send(resultId)
    } else {
        res.status(404).send("Not Found")
    }

    
})

app.delete('/countries/:id' , (req: Request, res: Response) => {
    let errorCode : number = 401
    try{
        if(!req.headers.authorization){
            throw new Error()
        }
        const countryIndex: number = countries.findIndex(
            (country) => country.id === Number(req.params.id)
        )

        if (countryIndex === -1){
            errorCode = 404
            throw new Error()
        }

        countries.splice(countryIndex, 1)

        res.status(200).end()

    } catch (error){
        res.status(errorCode).end

    }
})





app.listen(3003, ()=>{//para o servidor escutar a porta 3003
    console.log("Servidor pronto!")
}) 