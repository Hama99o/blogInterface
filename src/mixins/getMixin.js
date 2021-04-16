export default {
  async created() {
    if(this.$route.path != "/add" ) {
      const all_data = await this.$http.get('http://localhost:8080/ressources/' + this.id )
      const data = await all_data.json()
      this.blog =  data
    }
  }
}
