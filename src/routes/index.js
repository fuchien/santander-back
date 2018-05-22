const clients = require('./clients')
const books = require('./books')

const routes = (server) => {

    clients(server)
    books(server)

    server.get(`/`, (req, res, next) => {
        res.send(`Hello World!`)
    })
}

module.exports = routes