

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
                    // console.log('BOOKS ---> ', res)
                    // expect(res.body[0].id).to.be.eql(defaultBook.id)
                    // expect(res.body[0].title).to.be.eql(defaultBook.title)
                    // expect(res.body[0].subtitle).to.be.eql(defaultBook.subtitle)
                    // expect(res.body[0].author).to.be.eql(defaultBook.author)
                    // expect(res.body[0].photo).to.be.eql(defaultBook.photo)
                    done(err)
                })
        })
    })
})