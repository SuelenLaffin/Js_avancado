//código fonte básico para o node.js funcionar


const express = require('express');
const server = express(); //para subir o servidor de aplicação,server é servidor
const cors = require('cors'); // serve para desabilitar uma barreira de segurança do computador,assim subindo o servidor
//protocolo de seguraça que impede que acessem o hardware do seu computador
server.use(express.json());
server.use(cors()); // o server vai usar essa rota 'cors'



var lista = [ // variável de lista
    'morango',
    'uva',
    'laranja'
];
lista.push("mais 1");

server.use((req,res, next)=> {
    next();
    
}

)

server.get('/basico', (req, res) => {  //outra forma de fazer uma function
    return res.status(201).json({ message: 'Hello world Suelen' });
}) // com esse método o navegador utiliza um código criado, e vai retornar um json

server.get('/teste', (req, res) => { // req, é o que o front-end mandou para o servidor. Res é a resposta
    return res.status(200).json(lista);
})

server.post('/add_pessoa',(req,res)=>{//json é o método do res
    let nome = req.body.nome;
    lista.push(nome);
    return res.status(201).json({resposta:"pessoa criada"});
}
)











server.listen(4000);
