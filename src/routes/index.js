const clients = require('./clients')
const books = require('./books')

const routes = (server) => {

    clients(server)
    books(server)

    server.get(`/`, (req, res, next) => {
        res.send(`
        <h1>S2M</h1>
        <h4>FRONTEND --> <a href="https://fuchien.github.io/santander-front/" target="_blank">https://fuchien.github.io/santander-front/</a></h4>
        <h4>BACKEND --> <a href="https://santander-backend.herokuapp.com/" target="_blank">https://santander-backend.herokuapp.com/</a></h4>
        <h3>Endpoints da API</h3>
        <h3>USERS</h3>
        <h4> /GET -- /users --> <a href="https://santander-backend.herokuapp.com/users" target="_blank">https://santander-backend.herokuapp.com/users</a></h4>
        <h4> /GET:name -- /users/by-name/:name --> <a href="https://santander-backend.herokuapp.com/users/by-name/" target="_blank">https://santander-backend.herokuapp.com/users/by-name/</a></h4>
        <h4> /POST -- /users/user --> https://santander-backend.herokuapp.com/users/user</h4> { "clientName": "Santander tecnologia", "age": "100", "photo": "http://via.placeholder.com/150x120" }
        <h3>BOOKS</h3>
        <h4> /GET -- /books --> <a href="https://santander-backend.herokuapp.com/books" target="_blank">https://santander-backend.herokuapp.com/books</a></h4>
        <h4> /GET:name -- /books/by-title/:title --> <a href="https://santander-backend.herokuapp.com/books/by-title" target="_blank">https://santander-backend.herokuapp.com/books/by-title</a></h4>
        <h4> /GET:author -- /books/by-author/:author --> <a href="https://santander-backend.herokuapp.com/books/by-author" target="_blank">https://santander-backend.herokuapp.com/books/by-author</a></h4>
        <h4> /POST -- /books/book --> https://santander-backend.herokuapp.com/books/book</h4> { "author": "Claudiney", "title": "A teoria de tudo", "subtitle": "A história do Stephen Hawking", "photo": "http://via.placeholder.com/150x120" }
        `)
    })
}

module.exports = routes