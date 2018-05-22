const server = require('./server')
const config = require('./config')
const datasource = require('./config/datasource')

server.config = config
server.datasource = datasource(server)

server.listen(config.port, () => {

    require(`./routes/index`)(server)
    console.log(`App running on port --> ${config.port}`)
})