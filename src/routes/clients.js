const ClientsController = require('../controllers/clients/clients')()

const clients = (server) => {

    server.get(`/clients`, ClientsController.getData.bind(ClientsController))
}

module.exports = clients