const BooksController = require('../../../src/controllers/books/books')()
const BooksServices = require('../../../src/services/books/books.service')

describe('Controllers: Books', () => {
  describe('Get all books: getAllBooks()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      td.when(Books.findAll({})).thenReturn(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.getAllBooks()
        .then(response => {
          expect(response.data).to.be.eql(expectedResponse)
        })
    });
  });

  describe('POST book: postBook()', () => {
    it('should save a book', () => {
      const Books = {
        create: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      const requestedResponse = {
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      };

      td.when(Books.create(requestedResponse)).thenReturn(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.postBook(requestedResponse)
        .then(response => {
          expect(response.data).to.be.eql(expectedResponse)
        })
    });
  });

  describe('Get book by title: getBookByTitle()', () => {
    it('should return a book searched by Title', () => {
      const Books = {
        findAll: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      td.when(Books.findAll({where : {$like : `%Book%`}})).thenReturn(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.getBookByTitle(`Book`)
        .then(response => {
          expect(response.data).to.be.eql(expectedResponse)
        })
    });
  });
});