const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const config = require('../config')

let database = null

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, `../models`)
    const models = []
    fs.readdirSync(dir).map(file => {
        const modelDir = path.join(dir, file)
        const model = sequelize.import(modelDir)
        models[model.name] = model
    })

    return models
}

module.exports = () => {

    if (!datase) {
        sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        database = {
            sequelize,
            Sequelize,
            models: {}
        };

        database.models = loadModels(sequelize)

        sequelize.sync().done(() => {
            return database;
        });
    }

    return database
}