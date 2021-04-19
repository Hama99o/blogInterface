import axios from 'axios'

const root_url = process.env.VUE_APP_BACKEND_URL

export default {
  async getArticle (id) {
    const { data } = await axios.get(`${root_url}api/articles/${id}`)
    return data
  }
}
