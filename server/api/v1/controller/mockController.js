var env = process.env.NODE_ENV
var shouldMock = env === 'test' || env === 'development'
const requestsMocks = shouldMock ? require('../../../testing.js') : {}


module.exports = {
  shouldMock,
  init () {
    if (shouldMock) {
      requestsMocks.init()
      requestsMocks.mockBlogApi()
    }
  }
}
