import axios from 'axios'
let url = process.env.VUE_APP_BACKEND_URL
url = process.env.VUE_APP_IS_E2E ? process.env.VUE_APP_E2E_BACKEND_URL : url

const apiPathFor = (path) => {
  return `${url}api/v1/${path}`
}

const paginatePath = (path, page, per) => {
  return `${path}?page=${page || 0}&per=${per || 30}`
}
const urls = {
  articles: apiPathFor('articles'),
  article (id) {
    return `${this.articles}/${id}`
  },
  articlesPaginated (search, page, per) {
    const path = paginatePath(this.articles, page, per)
    if (search) {
      return `${path}&search=${search}`
    } else {
      return path
    }
  }
}

export default {
  url,
  errorMethod: (error) => {
    console.error(error)
  },
  async dataResponseOf (method, url, data, config = {}) {
    try {
      const response = await axios[method](url, data, config)
      return response.data
    } catch (error) {
      this.errorMethod(error)
      return error
    }
  },
  getArticles (search, page, per) {
    return this.dataResponseOf('get', urls.articlesPaginated(search, page, per))
  },
  putArticle (article) {
    return this.dataResponseOf('put', urls.article(article.id), article)
  },
  getArticle (id) {
    return this.dataResponseOf('get', urls.article(id))
  },
  deleteArticle (id) {
    return this.dataResponseOf('delete', urls.article(id))
  },
  postArticle (body) {
    return this.dataResponseOf('post', urls.articles, body)
  }
}
