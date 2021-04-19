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
  },
  async destroyArticle(id){
    const { data } = await axios.delete(`${root_url}api/articles/${id}`)
    return data
  },
  async post (blog){
    const { data } = await axios.post(`${root_url}api/articles`, blog)
    return data
  },
  async put(id, article){
    const { data } = await axios.put(`${root_url}api/articles/${id}`, article)
    return data
  }


}
