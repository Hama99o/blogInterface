<template>
  <div>
  <h1> {{title}} </h1>
  <p> {{greeting()}} </p>

  </div>
</template>

<script>
export default {
  data() {
  return{
  title: 'this is my first Vue file, woow!'
  }

  },
  methods:{
    greeting: function(){
    return 'hello whold how are you ?'
    }
  }
}
</script>
<style scoped>

</style>
