const chai = require('chai')
const chaiHttp = require('chai-http')
const localTestServer = 'http://localhost:8083'
const factory = require('../factory.js')
const caseStyles = require('../../server/services/caseStyles.js')

//Assertion style
chai.should()
chai.use(chaiHttp)
const articleId = 20
const article = caseStyles.convertKeysToCamel(factory.article)

describe('articles API', () =>{
  describe('GET api/articles', () =>{
    it('should Get all the articles', (done) => {
      chai.request(localTestServer)
        .get('/api/v1/articles')
        .end((err, res) => {
        if (err) {
          throw (err)
        } else {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.articles.length.should.eq(49)
          res.body.articles.should.be.a('array')
          done()
        }
      })
    })
  })

  describe('GET api/v1/articles/:id', () => {
    it('should get a article', (done) => {
      chai.request(localTestServer)
        .get(`/api/v1/articles/${articleId}`)
        .end((err, res) => {
          if (err) {
            throw (err)
          } else {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('title')
            res.body.should.have.property('language').eq('ruby')
            res.body.id.should.eq(articleId)
            done()
          }
        })
    })
  })

  describe('POST api/v1/articles', () => {
    it('should post a new article', (done) => {
      chai.request(localTestServer)
        .post('/api/v1/articles')
        .send(article)
        .end((err, res) => {
          if (err) {
            throw (err)
          } else {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.deep.eq(article)
            done()
          }
        })
    })
  })

  describe('PUT api/v1/articles', () => {
  it('should put a article', (done) => {
    chai.request(localTestServer)
      .put(`/api/v1/articles/${articleId}`)
      .send(article)
      .end((err, res) => {
        if (err) {
          throw (err)
        } else {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.deep.eq(article)
          done()
        }
      })
  })
})

describe('DELETE api/v1/articles/:id', () => {
  it('should delete the article', (done) => {
    chai.request(localTestServer)
      .delete(`/api/v1/articles/${articleId}`)
      .end((err, res) => {
        if (err) {
          throw (err)
        } else {
          res.should.have.status(200)
          done()
        }
      })
  })
})
})
