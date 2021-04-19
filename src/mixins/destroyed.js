export default {
  methods:{
    destroyed: async function(){
    if(confirm('are you sure?'))
      await this.$http.delete('http://localhost:8080/api/articles/' + this.id )
      return this.$router.push({path: '/'})
   }
 }

}
