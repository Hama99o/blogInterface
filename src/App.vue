<template>
  <div>
  <form-helper>
    <div slot="form-header">
      <h3>This is the title of the form</h3>
      <p>Information about the form </p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button v-on:click='handleSubmit' >Submit </button>
    </div>
    <div slot="useful-liks">
      <h3></h3>
    </div>

   </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue';

export default {
  components: {
    'form-helper': formHelper
  },
  data () {
    return{
    title: 'hello i am tile from data app.vue'
    }
  },
  methods:{
    handleSubmit:function(){

    }

  }
}
</script>
<style>

</style>
