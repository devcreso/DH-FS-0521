import express from 'express'

const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Oi')
})

app.get('/cumprimentar/:nome', (req, res) => {
    const name = req.params.nome
    res.send(`Olá ${name}`)
})

app.get('/calcular/:number1/:number2', (req, res) => {
    const number1 = parseInt(req.params.number1)
    const number2 = parseInt(req.params.number2)
    const soma = number1 + number2
    if(number2){
        res.send(`${soma}`)
    } else {
        res.send(`${number1}`)
    }
})

app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`)
})