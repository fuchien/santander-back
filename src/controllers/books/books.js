const booksService = require('../../services/books/books.service')()

function BooksController () {

    this.getAllBooks = async (req, res, next) => {
        try {
            let books = await booksService.getAllBooks()
            res.status(200).json(books)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    this.postBook = async (req, res, next) => {
        try {
            let book = await booksService.postBook(req.body)
            res.status(200).json(book)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    this.getBookByTitle = async (req, res, next) => {
        try {
            let books = await booksService.getBookByTitle(req.params.title)
            res.status(200).json(books)
        } catch (err) {
            res.status(400).json(err)
        } 
    }

    this.getBookByAuthor = async (req, res, next) => {
        try {
            let books = await booksService.getBookByAuthor(req.params.author)
            res.status(200).json(books)
        } catch (err) {
            res.status(400).json(err)
        } 
    }
}

module.exports = () => new BooksController()