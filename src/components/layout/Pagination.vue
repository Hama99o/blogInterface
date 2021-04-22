<template>
  <div class="d-flex flex-wrap align-items-center" v-if="nbPages > 1">
    <button class="my-2 btn btn-light py-2 px-3 mr-1"
            :disabled="page === 0"
            @click="goToPage(page - 1)">
      <i class="fas fa-caret-left"></i>
    </button>

    <div v-if="nbPages > 9 && page > 5" class="d-flex">
      <button class="my-2 btn py-2 px-3 mr-1 btn-light"
            @click="goToPage(0)">
        1
      </button>
      <div class="my-2 py-2 px-2 mr-1">
        ...
      </div>
    </div>

    <button v-for="pageIndex in pageIndexes"
          :key="pageIndex"
          class="my-2 btn py-2 px-3 mr-1"
          :class="{ 'btn-outline-success': pageIndex === page, 'btn-light': pageIndex !== page }"
          :disabled="pageIndex === page"
          @click="goToPage(pageIndex)">
      {{pageIndex + 1}}
    </button>

    <div v-if="nbPages > 9 && page < nbPages - 5" class="d-flex">
      <div class="my-2 py-2 px-2 mr-1">
        ...
      </div>
      <button class="my-2 btn py-2 px-3 mr-1 btn-light"
            @click="goToPage(nbPages - 1)">
        {{nbPages}}
      </button>
    </div>

    <button class="my-2 btn btn-light py-2 px-3 mr-1"
            :disabled="page === nbPages - 1"
            @click="goToPage(page + 1)">
      <i class="fas fa-caret-right"></i>
    </button>
  </div>

  <div v-else>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['nbPages', 'page', 'per'],
  computed: {
    pageIndexes () {
      var allPages = []
      var index = null
      var max = null
      if (this.nbPages > 9) {
        if (this.page >= 5) {
          if (this.page >= this.nbPages - 5) {
            index = this.nbPages - 9
            max = this.nbPages
          } else {
            index = this.page - 4
            max = this.page + 5
          }
        } else {
          index = 0
          max = 9
        }
      } else {
        index = 0
        max = this.nbPages
      }

      for (index; index < max; index++) {
        allPages.push(index)
      }
      return allPages
    }
  },
  methods: {
    goToPage (pageIndex) {
      this.$emit('goToPage', pageIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
