import back from '../services/back.js'

export default {

  created: function(){
    this.getArticle()
    this.getArticles()
  },
  methods:{
   postOrPut: async function(){
     if(this.$route.path == "/add" ) {
       if (this.blog.title && this.blog.content) {
         await back.post(this.blog)
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
         // await this.$http.put('http://localhost:8080/api/articles/' + this.id, this.blog)
         await back.put(this.id, this.blog)
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
    },
    destroyed: async function(){
      if(confirm('are you sure?'))
      await  back.destroyArticle(this.id)
      return this.$router.push({path: '/'})
    },
    async getArticle() {
      if(this.$route.path != "/add" ) {
       const article = await back.getArticle(this.id)
       this.blog =  article
      }
    },
    async getArticles() {
      const articles = await back.getArticles()
      var blogsArray = []
      for(let key in articles){
        articles[key].id = key
        blogsArray.push(articles[key])
      }
      this.blogs = blogsArray
    }
  }
}
