export default {
  created() {
    if(this.$route.path != "/add" ) {
      this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json').then(function(data){
        return data.json();
      }).then(function(data){
        this.blog = data;
      });
    }
  }
}
