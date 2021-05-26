module.exports.command = function (selector) {
  const scrollTo = function (selector) {
    const element = document.querySelector(selector)
    element.scrollIntoView(true)
  }
  this.execute(scrollTo, [selector])
}
