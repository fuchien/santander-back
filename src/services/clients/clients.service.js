const app = require('../../server')
const Clients = app.datasource.models.Clients

function ClientsService () {

    this.postData = (data) => {

        return new Promise((resolve, reject) => {

            Clients.create(data)
                .then(client => {
                    console.log(client)
                    resolve({
                        datas: client.dataValues,
                        msg: 'Success to save!'
                    })
                }).catch(err => {
                    reject(err)
                })
        })
    }

    this.getAllData = () => {

        return new Promise((resolve, reject) => {

            Clients.findAll()
                .then(clients => {
                    resolve(clients)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

module.exports = () => new ClientsService()