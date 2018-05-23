
class BooksService {

    constructor(
        Books
    ) {
        this.Books = Books
    }

    postBook (data) {

        return new Promise((resolve, reject) => {

            this.Books.create(data)
                .then(book => {
                    resolve({
                        datas: book.dataValues,
                        msg: 'Success to save!'
                    })
                }).catch(err => {
                    reject(err)
                })
        })
    }

    getAllBooks () {

        return new Promise((resolve, reject) => {

            this.Books.findAll()
                .then(books => {
                    resolve(books)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    getBookByTitle (title) {

        return new Promise((resolve, reject) => {

            this.Books.findAll({
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

    getBookByAuthor (author) {

        return new Promise((resolve, reject) => {

            this.Books.findAll({
                where: {
                    author: {
                        $like : `%${author}%`
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

module.exports = BooksService