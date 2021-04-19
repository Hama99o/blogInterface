import back from '../services/back.js'

export default {
  methods:{
    destroyed: async function(){
    if(confirm('are you sure?'))
      await  back.destroyArticle(this.id)
      return this.$router.push({path: '/'})
   }
 }
}
