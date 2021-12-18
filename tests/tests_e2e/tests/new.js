
module.exports = {
  '@tags': ['new'],
  'New page:' (browser) {
    const page = browser.page.newPageObject()
    const articleSave = '.article-save'
    const article = '#single-article'
    page
      .navigate()
      .setTitle('@title', 'Testing the title.')
      .setContent('@content', 'Testing the content.')
      .submitButton('@submitButton')
    browser
      .assert.containsText(article, 'ihsan')
  }
}
