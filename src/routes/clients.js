const ClientsController = require('../controllers/clients/clients')()

const clients = (server) => {

    server.get(`/users`, ClientsController.getAllClients.bind(ClientsController))
    server.post(`/users/user`, ClientsController.postClient.bind(ClientsController))
    server.get(`/users/by-name/:name`, ClientsController.getClientByName.bind(ClientsController))
}

module.exports = clients