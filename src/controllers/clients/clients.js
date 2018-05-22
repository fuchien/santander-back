
function Clients () {

    this.getData = (req, res, next) => {
        console.log(`CLIENTS`)
    }
}

module.exports = () => new Clients()