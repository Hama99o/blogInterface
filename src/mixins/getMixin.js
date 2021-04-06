export default {
  async created() {
    if(this.$route.path != "/add" ) {
      const all_data = await this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json')
      const data = await all_data.json()
      this.blog =  data
    }
  }
}
