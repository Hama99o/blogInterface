
module.exports = {
  '@tags': ['new'],
  'New page:' (browser) {
    const page = browser.page.newPageObject()
    const articleSave = '.article-save'
    page
      .navigate()
      .setTitle('@title', 'Testing the title.')
      .setContent('@content', 'Testing the content.')
    page
      .submitButton('@submitButton')
  }
}
