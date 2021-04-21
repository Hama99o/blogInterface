module.exports = {
  "blog index "(browser){
    const page = browser.page.indexPageObjects()
    const articles = '.articles'
    const hama = '/Hama99o'
    page
      .navigate()

    browser
      .waitForElementVisible(articles)
      .assert.containsText(articles,"Articles")
      page.clickOnGihubLink('@github')
      browser.assert.urlContains(hama, 'URL: it has "/Hama99o" Text')


  }
}
