module.exports = {
    port: process.env.PORT || 3000,
    database: 'santander',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'santander.sqlite',
        define: {
            underscored: true
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
}