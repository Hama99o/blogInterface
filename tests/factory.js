module.exports = {
  articlesUnique (id) {
    const newArticles = JSON.parse(JSON.stringify(this.article))
    newArticles.id = id
    return newArticles
  },
  articles () {
    const result = []
    for (let id = 1; id < 50; id++) {
      result.push(this.articlesUnique(id))
    }
    return result
  },

  article: {
    id: 20,
    title: 'ihsan',
    content: 'ihsan'
  }
}
