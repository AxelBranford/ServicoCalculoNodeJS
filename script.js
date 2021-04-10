//SERVIÇO SAUDAÇÃO
const http = require('http');
const url = require('url');

const Meth = require('./script2')

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); //monta o cabeçalho da página web
    const {numA, option, numB} = url.parse(req.url, true).query; //recebe um objeto url para consulta
    console.log(numA, option, numB)
    const value = Meth.meth(Number(numA), option, Number(numB))
    const txt =`O resultado é:${value}`; //consultando um atributo da url, no caso chamado nome
    res.end(txt); //imprime o texto na tela
}).listen(4000); //porta de conexão 
