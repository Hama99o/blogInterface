const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const blog = require('../server/services/blog.js')
const factory = require('./facotry.js')

const blogUrls = blog.apiUrl

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

mock.onGet(blogUrls.articles).reply(200,{blog: [facotry.blog ] })

axios.get(blogUrls.articles).then(function (response) {
  console.log(response.data);
});
console.log('hi')
