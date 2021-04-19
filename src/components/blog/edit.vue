<template lang="html">
  <div id="add-blog" >
    <div class="">
      <b-button  v-bind:to="'/blog/'+ id" variant=" btn btn-outline-dark" exact>Back</b-button>
    </div>
    <blog-form> </blog-form>
    <div v-if="submitted">
      <h1>Thanks for editing your post</h1>
    </div>
  </div>
</template>

<script>
  import formDataMixin from '../../mixins/formDataMixin'
  import back from '../../mixins/back'
  import blogForm from './form.vue'

  export default {
    components:{
      'blog-form': blogForm
    },
    methods:{
    },
    mixins:[formDataMixin,back]
  }
</script>

<style lang="css" scoped>
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
