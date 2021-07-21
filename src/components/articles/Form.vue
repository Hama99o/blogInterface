<template>
  <div id="add-article" class="my-5" >

    <form class="my-4 form-container article-form" >
      <form-fields  :formFields="artcileFields"
                    formId="article"
                    :formObject="article"
                    fieldsClass="w-100 mb-3"
                    @onUpdate="onFieldUpdate"/>

      <div class="d-flex my-3">
        <button type="button" :data-checked="checked" class="check-button btn btn-success mb-2 mr-2 submitButton" @click="createOrUpdateArticle()" >
          <i class="fas fa-exclamation-triangle" v-if="checked === 'error'"></i>
          <i class="fas fa-check-circle" v-if="checked === 'saved'"></i>
          <i class="fas fa-spinner fa-spin" v-if="checked === 'loading'"></i>
          <i class="fas fa-save" v-if="checked === 'save'"></i>
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import FormFields from '@/components/form/FormFields'
import editArticle from '@/mixins/articles/EditArticle.js'
import newArticle from '@/mixins/articles/NewArticle.js'

export default {
  components: { FormFields },
  props: ['initArticle'],
  mixins: [editArticle, newArticle],
  data () {
    return {
      id: this.$route.params.id,
      article: {},
      checked: 'Save',
      hasBeenModified: false,
      artcileFields: {
        title: { type: 'text', name: 'Title', required: true },
        content: { type: 'textarea', name: 'Content', required: true },
        language: { type: 'select', name: 'Select language', options: { null: '-', Ruby: 'Ruby', php: 'PHP', JavaScript: 'JavaScript', Python: 'Python' } },
        categories: { type: 'select', name: 'Categories', options: { null: '-', easy: 'Easy', normal: 'Normal', hard: 'hard' } }
      }
    }
  },
  methods: {
    createOrUpdateArticle () {
      if (!this.article.id) {
        this.newArticle()
      } else {
        this.updateArticle()
      }
    },
    onFieldUpdate () {
      this.hasBeenModified = true
    },
    initializeArticle () {
      this.article = this.initArticle
    },
    timeout (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
  },
  watch: {
    initArticle () {
      this.initializeArticle()
    }
  },
  computed: {
    disabledButton () {
      return this.article.title
    }
  }
}
</script>

<style>

label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
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
