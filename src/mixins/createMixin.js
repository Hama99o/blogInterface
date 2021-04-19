import back from '../services/back.js'

export default {
  async created() {
    const articles = await back.getArticles()
    var blogsArray = []
    for(let key in articles){
      articles[key].id = key
      blogsArray.push(articles[key])
    }
    this.blogs = blogsArray
  }
}
