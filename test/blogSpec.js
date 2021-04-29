let chai = require('chai')
let chaiHttp = require('chai-http')
let server = 'http://localhost:5000'

//Assertion style
chai.should()
chai.use(chaiHttp)

describe('blog API', () =>{
  describe('GET api/articles', () =>{
    it('should Get all the articles', (done) => {
      chai.request(server)
        .get("/api/articles")
        .end((error, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          done()
        })
    })
    it('should not Get all the articles', (done) => {
      chai.request(server)
        .get("/api/article")
        .end((error, response) => {
          response.should.have.status(404)
          done()
        })
    })
  })
})
