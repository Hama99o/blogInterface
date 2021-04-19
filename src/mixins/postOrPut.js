export default{
  methods:{
    postOrPut: async function(){
      if(this.$route.path == "/add" ) {
        if (this.blog.title && this.blog.content) {
          await this.$http.post('http://localhost:8080/api/ressources', this.blog)
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
          await this.$http.put('http://localhost:8080/api/ressources/' + this.id, this.blog)
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
