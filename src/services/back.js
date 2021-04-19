import axios from 'axios'

const root_url = 'http://localhost:8080/'

export default {
  async getArticle (id) {
    const { data } = await axios.get(`${root_url}api/articles/${id}`)
    return data
  },
  async getArticles() {
    const { data } = await axios.get(`${root_url}api/articles`)
    return data
  }
}
