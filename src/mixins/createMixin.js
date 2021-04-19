export default {
  async created() {
    const all_data = await this.$http.get('http://localhost:8080/api/articles')
    const data = await all_data.json()
    var blogsArray = []
    for(let key in data){
      data[key].id = key
      blogsArray.push(data[key])
    }
    this.blogs = blogsArray
  }
}
