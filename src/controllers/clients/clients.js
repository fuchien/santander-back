const clientsService = require('../../services/clients/clients.service')()

function ClientsController () {

    this.getData = async (req, res, next) => {

        try {
            let clients = await clientsService.getAllData()
            res.status(200).json(clients)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    this.postData = async (req, res, next) => {
        const data = req.body
        console.log(data)
        try {
            let client = await clientsService.postData(data)
            res.status(200).json(client.data)
        } catch (err) {
            res.status(400).json(err)
        }        
    }
}

module.exports = () => new ClientsController()