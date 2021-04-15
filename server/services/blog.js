const axios = require('axios')
 const apiUrl = 'https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app'


const blogUrls = {
  articles: `${apiUrl}/post.json`,
  article(id) {
    return `${apiUrl}/post/${id}.json`
  }
}
 module.exports = {
  async getArticles() {
    console.log('before http index ')
    const res = await axios.get(blogUrls.articles)
    return res.data
  },
  async getArticle(articleId) {
    const { data } = await axios.get(blogUrls.article(articleId))
    console.log('after show axios method' + data)
    const all_data = await data
    return all_data
  }
}
