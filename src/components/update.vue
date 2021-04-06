<template lang="html">
  <div id="single-blog" class="mt-3">
    <div class="">
      <b-button  v-bind:to="'/update/'+ id" class="mb-5 ml-2" variant="success" exact>Edit article</b-button>
    </div>

    <form v-if="!submitted">
      <label>Blog Title </label>
      <input type="text" v-model.lazy="blog.title" required class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Write a title" />
      <label>Blog Content </label>
      <textarea v-model.lazy="blog.content" type="text" class="form-control" accesskey="" rows="8" id="textarea-rows" aria-label="Large" placeholder="Write a statement" aria-describedby="inputGroup-sizing-sm"> </textarea>
      <div id="checkboxes">
        <b-form-group label="Using options array:" v-slot="{ ariaDescribedby }" class="mt-5">
        <b-form-checkbox-group  id="checkbox-group-1"  v-model="blog.categories"  :options="ninjas" :aria-describedby="ariaDescribedby"  name="flavour-1" ></b-form-checkbox-group>
        </b-form-group>
      </div>
      <div>
        <label>Language:</label>
        <b-form-select v-model="blog.author" :options="options" size="sm" class="mt-3 mb-5"></b-form-select>
      </div>
      <b-button variant="success" v-on:click.prevent="save()">Add Blog </b-button>
    </form>

    <div v-if="submitted">
      <h1>Thanks for editing your post</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        id: this.$route.params.id,
        options: [
          { value: 'JavaScript', text: 'JavaScript' },
          { value: 'Ruby', text: 'Ruby' },
          { value: 'PHP', text: 'PHP' },
          { value: 'C++', text: 'C++' },
          { value: 'Python', text: 'Python', disabled: true }
        ],
        ninjas: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
        submitted: false,
        blog: {
          title: '',
          content: '',
          categories: [],
          author: 'JavaScript'
        }
      }
    },
    created() {
     this.$http.get('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json').then(function(data){
       return data.json();
     }).then(function(data){
       this.blog = data;
     });
    },
    methods:{
     destroyed: function(){
      if(confirm('are you sure?'))
      this.$http.delete('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json').then(function(){
       return this.$router.push({path: '/'});
      })
    },
    save: function(){
      this.$http.put('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json', this.blog).then(function(data){
          console.log(data);
          this.submitted = true;
        });
      }
    }
  }
</script>

<style lang="css" scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    border: 1px dotted #aaa;
    background: #F5F5F5;
}
</style>
