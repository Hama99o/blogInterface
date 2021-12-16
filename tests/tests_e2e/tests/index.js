module.exports = {
  '@tags': ['index'],
  'blog index ' (browser) {
    const page = browser.page.indexPageObjects()
    const articles = '#show-articles'
    const article = '#single-article'
    const newArticle = '.new-article'
    const hama = 'blog/'
    page
      .navigate()
    browser
      .waitForElementVisible(articles)
      .assert.containsText(articles, 'All Articles')
    page
      .singleBlog('.single-article')
      .assert.containsText(article, 'ihsan')
    page.backToIndex('@back')
    page
      .singleBlog(newArticle)
      .assert.containsText('#new-article', 'New Article')
  }
}
