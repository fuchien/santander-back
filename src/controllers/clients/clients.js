const app = require('../../server')
const Clients = app.datasource.models.Clients

function ClientsController () {

    this.getData = (req, res, next) => {
        Clients.findAll()
        .then(clients => {
            console.log(clients)
            res.status(200).json(clients)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    this.postData = (req, res, next) => {
        const data = req.body
        console.log(data)
        Clients.create(data)
        .then(client => {
            console.log(client)
            console.log(client.dataValues)
            res.status(200).json({
                client: client.dataValues,
                msg: 'Salvo com sucesso!'
            })
        }).catch(err => {
            res.status(400).json(err)
        })
    }
}

module.exports = () => new ClientsController()