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

      td.when(Books.findAll()).thenResolve(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.getAllBooks()
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should return a list of books ERROR', () => {
      const Books = {
        findAll: td.function(),
      };

      td.when(Books.findAll()).thenReject(undefined);
      const booksServices = new BooksServices(Books);

      booksServices.getAllBooks()
        .catch(err => expect(err).to.be.undefined)
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

      td.when(Books.create(requestedResponse)).thenResolve(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.postBook(requestedResponse)
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should save a book ERROR', () => {
      const Books = {
        create: td.function(),
      };

      const requestedResponse = {
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      };

      td.when(Books.create(requestedResponse)).thenReject(undefined);
      const booksServices = new BooksServices(Books);

      booksServices.postBook(requestedResponse)
        .catch(err => expect(err).to.be.undefined)
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

      td.when(Books.findAll({where : {title :{$like : `%Book%`}}})).thenResolve(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.getBookByTitle(`Book`)
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should return a book searched by Title ERROR', () => {
      const Books = {
        findAll: td.function(),
      };

      td.when(Books.findAll({where : {title :{$like : `%Book%`}}})).thenReject(undefined);
      const booksServices = new BooksServices(Books);

      booksServices.getBookByTitle(`Book`)
        .catch(err => expect(err).to.be.undefined)
    });
  });

  describe('Get book by title: getBookByAuthor()', () => {
    it('should return a book searched by Author', () => {
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

      td.when(Books.findAll({where : {author :{$like : `%Book%`}}})).thenResolve(expectedResponse);
      const booksServices = new BooksServices(Books);

      booksServices.getBookByAuthor(`Book`)
        .then(response => expect(response.data).to.be.eql(expectedResponse))
    });
    it('should return a book searched by Author ERROR', () => {
      const Books = {
        findAll: td.function(),
      };

      td.when(Books.findAll({where : {author :{$like : `%Book%`}}})).thenReject(undefined);
      const booksServices = new BooksServices(Books);

      booksServices.getBookByAuthor(`Book`)
        .catch(err => expect(err).to.be.undefined)
    });
  });
});