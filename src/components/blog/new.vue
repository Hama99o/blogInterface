<template>
  <div id="add-blog" >
    <b-button  v-bind:to="'/'" class="mb-5 " variant=" btn btn-outline-dark" exact>Back</b-button>

    <h2>Add a New Blog Post </h2>
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

      <b-button variant="btn btn-primary" v-on:click.prevent="post">Add Blog </b-button>
    </form>

    <div v-if="submitted">
      <h1>Thanks for adding your post</h1>
    </div>

    <div id="preview">
      <h3>Preview Blog </h3>
      <p> Blog title:{{blog.title}} </p>
      <p> Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li  v-for="category in blog.categories" v-bind:key="category">{{category}} </li>
      </ul>
      <p>Author:{{blog.author}}</p>

    </div>

  </div>
</template>

<script>
import formDataMixin from '../../mixins/formDataMixin'
export default {
  data () {
    return {
    }
 },
 methods: {
   post: function(){
     this.$http.post('https://myrailblog-default-rtdb.europe-west1.firebasedatabase.app/post.json', this.blog).then(function(data){
       console.log(data);
       this.submitted = true;
     });
   }
 },
 mixins:[formDataMixin]
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input{
  display:inline-block;
  margin-right:10px;

}
#checkboxes label{
  display:inline-block;
}

</style>
