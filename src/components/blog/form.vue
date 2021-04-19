<template>
  <div id="add-blog" >
    <div class="bg-secondary" v-show="errors.length ">
    <b class="text-center">Please correct the following error(s):</b>
      <ul v-for="error,index in errors" v-bind:key="index">
        <li>{{error}}</li>
      </ul>
    </div>
    <form v-if="!submitted" >

      <h2 class="text-center"> {{label()}} Article </h2>
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
      <b-form-select v-model="blog.language" :options="options" size="sm" class="mt-3 mb-5"></b-form-select>
      </div>

      <b-button variant="btn btn-primary" v-on:click.prevent="postOrPut">Add Blog </b-button>
    </form>

    <div id="preview">
      <h3>Preview Blog </h3>
      <p> Blog title:{{blog.title}} </p>
      <p> Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li  v-for="category in blog.categories" v-bind:key="category">{{category}} </li>
      </ul>
      <p>language:{{blog.language}}</p>

    </div>

    <div v-if="submitted">
      <h1>Article saved</h1>
    </div>


  </div>
</template>

<script>
  import formDataMixin from '../../mixins/formDataMixin'
  import back from '../../mixins/back.js'

  export default {
    data () {
      return {
        errors:[]
      }
    },
    methods: {
      label: function(){
        if(this.$route.path == "/add" ){
          return  'Add a New Aticle '
        }else{
          return 'Edit '
        }
      }
    },
    mixins:[formDataMixin,back]
  }
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto 80px auto;
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
