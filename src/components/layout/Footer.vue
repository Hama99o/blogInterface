<template lang="html">
  <div class="footer footer-basic bg-dark " type="dark" variant="dark">
    <footer>
      <div class="social">
        <a href="https://www.instagram.com/hama99o/" class="btn-light btn-outline-info" target="_blank">
          <i class="icon ion-social-instagram"></i>
        </a>
        <a href="https://github.com/Hama99o" class="btn-light btn-outline-info" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/hama99o1" class="btn-light btn-outline-info" target="_blank">
          <i class="icon ion-social-twitter"></i>
        </a>
        <a href="https://www.facebook.com/Hmmshl/" class="btn-light btn-outline-info" target="_blank">
          <i class="icon ion-social-facebook"></i>
        </a>
      </div>
      <ul class="list-inline">
        <li class="list-inline-item text-light">
          <router-link :to="{ name: 'Home' }">
            </i>HOME
          </router-link>
        </li>
        <li class="list-inline-item text-light"><a href="#">Services</a></li>
        <li class="list-inline-item text-light"><a href="#">About</a></li>
        <li class="list-inline-item text-light"><a href="#">Terms</a></li>
        <li class="list-inline-item text-light"><a href="#">Privacy Policy</a></li>
      </ul>
      <p class="copyright text-light">Hama99o © 2021</p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>

.footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}

.footer-basic {
  padding:20px 0;
  color:#4b4c4d;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .social {
  text-align:center;
  padding-bottom:25px;
}

.footer-basic .social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin:0 8px;
  color:inherit;
  opacity:0.75;
}

.footer-basic .social > a:hover {
  opacity:0.9;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}


</style>
