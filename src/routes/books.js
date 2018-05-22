const BooksController = require('../controllers/books/books')()

const books = (server) => {

    server.get(`/books`, BooksController.getAllBooks.bind(BooksController))
    server.post(`/books/book`, BooksController.postBook.bind(BooksController))
    server.get(`/books/by-title/:name`, BooksController.getBookByTitle.bind(BooksController))
}

module.exports = books