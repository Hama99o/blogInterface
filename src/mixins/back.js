import axios from 'axios'

const root_url = process.env.VUE_APP_BACKEND_URL

export default {
  created: function(){
    this.getArticle()
    this.getArticles()
  },
  methods:{
    async getArticles() {
      const { data } = await axios.get(`${root_url}api/v1/articles`)
      var blogsArray = []
      for(let key in data){
        data[key].id = key
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray
    },
    async getArticle() {
      if(this.$route.path != "/add" ) {
        const { data } = await axios.get(`${root_url}api/v1/articles/${this.id}`)
        this.blog =  data
      }
    },
    destroyed: async function(){
      if(confirm('are you sure?'))
      await axios.delete(`${root_url}api/v1/articles/${this.id}`)
      return this.$router.push({path: '/'})
    },
   postOrPut: async function(){
      if(this.$route.path == "/add" ) {
        if (this.blog.title && this.blog.content) {
          this.loading = true
          await axios.post(`${root_url}api/v1/articles`, this.blog)
          this.loading = false
          this.submitted = true
        }
        this.errors =[]
        if (!this.blog.title){
          this.errors.push("title is empty")
        }
        if (!this.blog.content){
          this.errors.push("content is empty")
        }
      }else {
        if (this.blog.title && this.blog.content) {
          await axios.put(`${root_url}api/v1/articles/${this.id}`, this.blog)
          this.submitted = true
        }
        this.errors =[]
        if (!this.blog.title){
         this.errors.push("title is empty")
        }
        if (!this.blog.content){
          this.errors.push("content is empty")
        }
      }
    }
  }
}
