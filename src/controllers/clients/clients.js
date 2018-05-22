const clientsService = require('../../services/clients/clients.service')()

function ClientsController () {

    this.getAllClients = async (req, res, next) => {
        try {
            let clients = await clientsService.getAllData()
            res.status(200).json(clients)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    this.postClient = async (req, res, next) => {
        try {
            let client = await clientsService.postData(req.body)
            res.status(200).json(client.datas)
        } catch (err) {
            res.status(400).json(err)
        }        
    }

    this.getClientByName = async (req, res, next) => {
        try {
            let clients = await clientsService.getDataByName(req.params.name)
            res.status(200).json(clients)
        } catch (err) {
            res.status(400).json(err)
        } 
    }
}

module.exports = () => new ClientsController()