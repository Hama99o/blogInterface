<template lang="html">
  <div id="single-blog" class="mt-3">
    <div class="">
      <b-button  v-bind:to="'/blog/'+ id" class="mb-5 " variant=" btn btn-outline-dark" exact>Back</b-button>

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
      <b-button variant="btn btn-primary" v-on:click.prevent="save()">Add Blog </b-button>
    </form>

    <div v-if="submitted">
      <h1>Thanks for editing your post</h1>
    </div>
  </div>
</template>

<script>
  import formDataMixin from '../../mixins/formDataMixin'
  import getMixin from '../../mixins/getMixin'

  export default {
    data(){
      return{
      }
    },
    methods:{
      save: function(){
        this.$http.put('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post/' + this.id + '.json', this.blog).then(function(data){
          console.log(data);
          this.submitted = true;
        });
      }
    },
    mixins:[formDataMixin,getMixin]
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
