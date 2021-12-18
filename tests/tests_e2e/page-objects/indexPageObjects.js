module.exports = {
  url: 'http://localhost:8080/articles',
  elements: {
    github: '.github',
    singleBlog: '.single-blog',
    back: '.back-to-index'
  },
  commands: [{
    clickOnGihubLink (value) {
      return this
        .click(value)
    },
    singleBlog (value) {
      return this
        .click(value)
    },
    backToIndex (value) {
      return this
        .click(value)
    }
  }]
}
