module.exports = {
  '@tags': ['index'],
  'blog index ' (browser) {
    const page = browser.page.indexPageObjects()
    const articles = '.articles'
    const hama = 'blog/'
    page
      .navigate()
      .singleBlog('@singleBlog')
    browser
      .waitForElementVisible(articles)
      .assert.containsText(articles, 'Articles')
      // page.clickOnGihubLink('@github')
    browser.assert.urlContains(hama, 'URL: it has "blog/" Text')
    page.backToIndex('@back')
  }
}
