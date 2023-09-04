import express from 'express'

const app = express();
const port = 4000

app.use(express.json()) // irá fazer o parse de arquivos JSON


//Rotas de conteudo publico
app.use('/', express.static('public'))

//confi
app.use('/favicon.ico', express.static('public/images/asura.jpeg'))

//Rotas da api

app.get('/api', (req,res) => {
    res.status(200).json({
     message: 'API fatec 100% funcional ✌',
     version: '1.0.0'
    })
})
// rotas de exceção devem ser as ultimas!😒
app.use(function(req,res){
       res.status(404).json({
        errors: [{
            value: `${req.originalUrl}`,
            msg: `A rota ${req.originalUrl} não existe nesta API!`,
            param: `invalid route`
        }]
       })
})
app.listen(port, function(){
    console.log( `🎞servidor rodando na porta ${port}`)
})

