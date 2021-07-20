<template lang="html">
  <div class="wrapper clearfix container">
    <nav class="h4">
      <ul class="list-group">
        <li class="responsive-text "><a type="button"  href="#">About</a></li>
        <li class="responsive-text "><a href="#">Log In</a></li>
        <li class="responsive-text "><a href="#">Sign Up</a></li>
        <li class="responsive-text "><a href="#">Contact</a></li>
      </ul>
    </nav>
    <section class="text-center">
      <h1>Welcome to our site</h1>
      <p>Here you will learn how to create websites...</p>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
nav, section {
  float: left;
  padding-top: 20px;
  box-sizing: border-box;
}
section {
  width: 80%;
}
nav {
  width: 20%;
}
nav ul {
  list-style: none;
}
nav ul li {
  line-height: 20px;
  padding: 15px;
}
nav ul li a {
  color: #333;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
nav ul li a:hover {
  color: #323ebe;
  text-decoration: none;
}
nav ul li:hover {
  background: #d2d6db;
  border-radius: 8px;
}

@media only screen and (max-width: 600px) {
  .responsive-text {
   font-size: 13px;
  }
}

@media only screen and (max-width: 900px) {
  .responsive-text {
   font-size: 15px;
  }
}


@media only screen and (max-width: 390px) {
  .responsive-text {
   font-size: 10px;
  }
}

</style>
