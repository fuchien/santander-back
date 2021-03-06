
describe(`Routes Books`, () => {

    const Books = app.datasource.models.Books

    const defaultBook = {
        title: `A teoria de tudo`,
        subtitle: `História do Stephen Hawking`,
        author: `J. K. Rowling`,
        photo: `teste`
    }

    beforeEach(done => {
        Books
            .destroy({where: {}})
            .then(() => Books.create(defaultBook))
            .then(() => done())
    })

    describe(`Route GET /books`, () => {

        it(`should return list of books`, done => {

            request
                .get(`/books`)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    done(err)
                })
        })
    })
})