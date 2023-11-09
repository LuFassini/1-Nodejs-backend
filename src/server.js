import express from 'express'; //serve para escutar as requisiçoes
import {config} from 'dotenv'; //serve para ler os arquivos dotenv


config(); //le o arquivo .env

const port = process.env.PORT || 5000; //pega a porta do arquivo .env ou usa a porta 3000/define a porta que sera usada

const app = express(); //cria o servidor, recebe todo conteudo do express/ cria nosso servidor
app.use(express.json()); //faz com que o express entenda o formato json//permite que o servidor entenda  requisiçoes no formato json

app.get ("/", (req,res) =>{
    //rota inicial
    response.status(200).json({mensage: "Hello World"});
});

app.listen(port, () => {
    //inicia o servidor
    console.log(`Servidor iniciado em http://localhost: ${port}`);
});
