<template>
  <div class="error-messages">
    <div v-for="(item) in erorrMessages">
      <div class="error-msg">
        <i class="fa fa-times-circle"></i>
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessages',
  props: ['errors'],
  data () {
    return {
    }
  },
  computed: {
    erorrMessages () {
      if (this.errors && this.errors.response && this.errors.response.data && this.errors.response.data.message) {
        if (this.errors.response.data.errorData && typeof this.errors.response.data.errorData === 'object' && !Array.isArray(this.errors.response.data.errorData)) {
          return Object.entries(this.errors.response.data.errorData).map(function (elem) {
            return elem.join(' ')
          })
        } else {
          return [this.errors.response.data.message]
        }
      }
    }
  }
}
</script>

<style scoped>
.info-msg,
.success-msg,
.warning-msg,
.error-msg {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
}

.info-msg {
  color: #059;
  background-color: #BEF;
}

.success-msg {
  color: #270;
  background-color: #DFF2BF;
}

.warning-msg {
  color: #9F6000;
  background-color: #FEEFB3;
}

.error-msg {
  color: #D8000C;
  background-color: #FFBABA;
}
</style>
