

const routes = (server) => {

    server.get(`/`, (req, res, next) => {
        console.log(`entrou`)
    })
}

module.exports = routes