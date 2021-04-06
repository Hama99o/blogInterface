export default {
  created() {
    this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post.json').then(function(data){
      return data.json()
    }).then(function(data){
      var blogsArray = []
      for(let key in data){
        data[key].id = key
        blogsArray.push(data[key])
      }
      this.blogs = blogsArray
    })
  }
}
