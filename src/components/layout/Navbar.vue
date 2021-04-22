<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" type="dark" variant="dark">
      <div class="container home-button">
        <router-link :to="{ name: 'Home' }" class="navbar-brand" :class="currentRouteName === 'Home' ? 'active' : 'text-white'">
          <i class="fa fa-home fa-lg mr-2"></i>HOME
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nvbCollapse" aria-controls="nvbCollapse">
          <span class="navbar-toggler-icon"><i class="fas fa-cogs"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="nvbCollapse">
          <ul class="navbar-nav ml-auto">
            <li :class="currentRouteName === 'Articles' ? 'active' : 'text-white'" class=" nav-item pl-1">
              <router-link :to="{ name: 'Articles' }" class="nav-link">
                <i class="fas fa-newspaper fa-fw mr-1"></i> Articles
              </router-link>
            </li>
            <li class="nav-item pl-1">
              <router-link :to="{ name: 'Articles' }" class="nav-link">
                <i class="fa fa-info-circle fa-fw mr-1"></i> About
              </router-link>
            </li>
            <!-- <li class="nav-item pl-1">
              <a class="nav-link" href="#"><i class="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>Help</a>
            </li> -->
            <li class="nav-item pl-1">
              <a class="nav-link" href="#"><i class="fa fa-user-plus fa-fw mr-1"></i>Follow</a>
            </li>
            <li class="nav-item pl-1">
              <a class="nav-link" href="#"><i class="fa fa-sign-in fa-fw mr-1"></i>Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.navbar .navbar-nav .nav-link { color: #fff; }
.navbar .navbar-nav .nav-link:hover { color: #fbc531; }
.navbar .navbar-nav .active > .nav-link { color: #fbc531; }
.navbar .home-button .active { color: #fbc531; }
.navbar { padding:12px 0; }

</style>
