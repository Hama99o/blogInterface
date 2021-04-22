
module.exports = {
  "@tags": ["new"],
  "New page:"(browser){
    const page = browser.page.newPageObject()
    const articleSave = '.article-save'
    page
      .navigate()
      .setTitle('@title', "Testing the title." )
      .setContent('@content', "Testing the content.")
    browser
      .scrollTo('.select-language')
    page
      .selectLang('@selectLanguage', '@language')
      .valueEasy('@valueEasy')
      .submitButton('@submitButton')
    browser
      .waitForElementVisible(articleSave)
      .assert.containsText(articleSave,"Article saved")
      .saveScreenshot('tests_output/new.png')
  }
}
