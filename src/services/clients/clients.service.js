
class ClientsService {

    constructor (
        Clients
    ) {
        this.Clients = Clients
    }

    postClient (data) {

        return new Promise((resolve, reject) => {

            this.Clients.create(data)
                .then(client => {
                    resolve({
                        datas: client.dataValues,
                        msg: 'Success to save!'
                    })
                }).catch(err => {
                    reject(err)
                })
        })
    }

    getAllClients () {

        return new Promise((resolve, reject) => {

            this.Clients.findAll()
                .then(clients => {
                    resolve(clients)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    getClientByName (name) {

        return new Promise((resolve, reject) => {

            this.Clients.findAll({
                where: {
                    fullName: {
                        $like : `%${name}%`
                    }
                }
            })
            .then(clients => {
                resolve(clients)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = ClientsService