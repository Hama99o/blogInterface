<template>
  <div>
    <label :for="id"
            class="w-100 font-weight-bold m-0 ml-1">
      {{name}}
    </label>

    <select class="form-control select"
            :id="id"
            :value="value ? value : 'null'"
            @input="onUpdate"
            :required="required">
      <option v-for="(name, key) in options"
              :key="key"
              :value="key"
              :selected="key === value || parseInt(key) === value || key === 'null' && !value">
        {{truncate(name, 150)}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'select-field',
  props: ['name', 'options', 'fieldKey', 'value', 'required', 'formId'],
  computed: {
    id () {
      return `${this.formId}_${this.fieldKey}`
    }
  },
  methods: {
    onUpdate (event) {
      this.$emit('onUpdate', event.target.value === 'null' ? null : event.target.value)
    },
    truncate (str, n) {
      return (str.length > n) ? str.substr(0, n - 1) + '…' : str
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  width: fit-content;
}

@media (max-width: 576px) {
  .select {
    width: 100%;
  }
}
</style>
