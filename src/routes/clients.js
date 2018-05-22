const ClientsController = require('../controllers/clients/clients')()

const clients = (server) => {

    server.get(`/clients`, ClientsController.getData.bind(ClientsController))
    server.post(`/clients`, ClientsController.postData.bind(ClientsController))
    server.get(`/clients/:name`, ClientsController.getDataByName.bind(ClientsController))
}

module.exports = clients