const app = require('../../server')
const Books = app.datasource.models.Books

function BooksService () {

    this.postBook = (data) => {

        return new Promise((resolve, reject) => {

            Books.create(data)
                .then(book => {
                    console.log(book)
                    resolve({
                        datas: book.dataValues,
                        msg: 'Success to save!'
                    })
                }).catch(err => {
                    reject(err)
                })
        })
    }

    this.getAllBooks = () => {

        return new Promise((resolve, reject) => {

            Books.findAll()
                .then(books => {
                    resolve(books)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    this.getBookByTitle = (title) => {

        return new Promise((resolve, reject) => {

            Books.findAll({
                where: {
                    title: {
                        $like : `%${title}%`
                    }
                }
            })
            .then(books => {
                resolve(books)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = () => new BooksService()