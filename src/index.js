const server = require('./server')
const config = require('./config')

server.listen(config.port, () => {

    require(`./routes/index`)(server)
    console.log(`App running on port --> ${config.port}`)
})