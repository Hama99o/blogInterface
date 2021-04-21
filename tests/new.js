module.exports = {
  "@tags": ["new"],
  "New page:"(browser){
    const page = browser.page.newPageObject()
    const articleSave = '.article-save'
    page
    .navigate()
    .setTitle('@title', "Tesing the title." )
    .setContent('@content', "Testing the content.")
    .selectLang('@selectLanguage', '@language')
    .valueEasy('@valueEasy')
    .submitButton('@submitButton')
    browser
      .waitForElementVisible(articleSave)
      .assert.containsText(articleSave,"Article saved")
      .saveScreenshot('tests_output/new.png')

  }//,
  // "submit test"(browser){
  //   browser
  //     .url('http://localhost:8080/add')
  //     .click(".button")
  // }
}
