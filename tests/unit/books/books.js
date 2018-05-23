const BooksController = require('../../../src/controllers/books/books')()

describe('Controllers: Books', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        getAllBooks: td.function(),
      };

      const expectedResponse = [{
        id: 1,
        author: 'Test Book',
        title: 'Test Book',
        subtitle: 'Test Book',
        created_at: '2016-08-06T23:55:36.692Z',
        updated_at: '2016-08-06T23:55:36.692Z',
      }];

      td.when(BooksController.getAllBooks()).thenReturn(expectedResponse);

      return BooksController.getAllBooks()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });
});