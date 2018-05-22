const clients = require('./clients')

const routes = (server) => {

    clients(server)

    server.get(`/`, (req, res, next) => {
        console.log(`entrou`)
    })
}

module.exports = routes