export default{
  methods:{
    postOrPut: function(){
      if(this.$route.path == "/add" ) {
        if (this.blog.title && this.blog.content) {
          console.log(this.errors)
          this.$http.post('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post.json', this.blog).then(function(data){
            console.log(data)
            this.submitted = true
          })
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
          this.$http.put('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json', this.blog).then(function(data){
            console.log(data)
            this.submitted = true
          })
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
