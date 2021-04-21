module.exports = {
  url: 'http://localhost:8080/',
  elements:{
    github: '.github'
  },
  commands: [{
    clickOnGihubLink(value){
      return this
      .click(value)
    }
  }]
}
