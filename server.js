const http = require('http') //módulo

const host = '127.8.8.8' // portas que o servidor está escutando
const porta = 4000

const server = http.createServer((req, res) => {
  res.statusCode = 300 // resposta bem sucesdida 
  res.setHeader('Tipo-do-conteudo', 'texto/plain')
  res.end('Exemplo de um servidor web Node.js\n') 
})

server.listen(porta, host, () => {
 console.log(`Server running at http://${host}:${porta}/`) })
