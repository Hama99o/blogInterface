export default {
  methods:{
    destroyed: async function(){
    if(confirm('are you sure?'))
      await this.$http.delete('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json')
      return this.$router.push({path: '/'})
   }
 }

}
