const ClientsController = require('../controllers/clients/clients')()

const clients = (server) => {

    server.get(`/clients`, ClientsController.getAllClients.bind(ClientsController))
    server.post(`/clients`, ClientsController.postClient.bind(ClientsController))
    server.get(`/clients/:name`, ClientsController.getClientByName.bind(ClientsController))
}

module.exports = clients