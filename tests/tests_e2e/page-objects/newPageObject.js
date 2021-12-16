module.exports = {

  url: 'http://localhost:8080/articles/new',
  elements: {
    title: '#article_title',
    content: '#article_content',
    submitButton: '.submit-button'
  },
  commands: [{
    setTitle (selector, value) {
      return this
        .setValue(selector, value)
    },
    setContent (selector, value) {
      return this
        .setValue(selector, value)
    },
    submitButton (value) {
      return this
        .click(value)
    }
  }]
}
