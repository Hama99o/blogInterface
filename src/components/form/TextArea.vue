<template>
  <div>
    <label :for="id"
            class="w-100 font-weight-bold m-0 ml-1">
      {{name}}
    </label>

    <textarea  class="px-2 py-1 mb-2 w-100 autoExpand"
            :id="id"
            :value="value"
            @input="onUpdate"
            :required="required"/>
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: ['name', 'fieldKey', 'value', 'required', 'formId'],
  computed: {
    id () {
      return `${this.formId}_${this.fieldKey}`
    }
  },
  methods: {
    onUpdate (event) {
      this.$emit('onUpdate', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  height: 140px;
  border-radius: 7px;
  font-size: 1.6em;
  &:focus {
    border: 3px solid black;
    border-bottom: 1px solid dark;
    background-color: light;
  }
}

</style>
