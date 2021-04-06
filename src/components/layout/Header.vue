<template>
  <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav >
      <b-navbar-brand><router-link to='/' exact class="text-decoration-none text-success">Articles</router-link></b-navbar-brand>
      <b-nav-item><li><router-link to='/add' exact class="text-decoration-none text-success">Add New Article</router-link></li></b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>

  </div>
</template>

<script>
  export default {

    components: {


    },
    data () {
      return{

      }
    },
    methods: {

    }

  }
</script>

<style scoped>

</style>
