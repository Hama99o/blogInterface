<template>
  <div class="">
    <text-field v-if="type === 'text'" :name="field.name" :fieldKey="fieldKey" :value="value" @onUpdate="onUpdate(fieldKey, $event)" :required="field.required" :subtitle="field.subtitle" :maxLength="field.maxLength" :formId="formId" />
    <text-area v-else-if="type === 'textarea'" :name="field.name"  :fieldKey="fieldKey" :value="value" @onUpdate="onUpdate(fieldKey, $event)" :required="field.required" :formId="formId" />
    <select-field v-else-if="type === 'select'" :name="field.name"  :options="field.options" :fieldKey="fieldKey" :value="value" @onUpdate="onUpdate(fieldKey, $event)" :required="field.required" :formId="formId" />

    <div v-else>
      {{field}}
    </div>
  </div>
</template>

<script>
import TextField from './TextField'
import TextArea from './TextArea'
import SelectField from './SelectField'

export default {
  name: 'form-field',
  components: { TextField, TextArea, SelectField },
  props: ['field', 'fieldKey', 'formObject', 'formId'],
  computed: {
    type () {
      return this.field.type
    },
    value () {
      return this.formObject[this.fieldKey]
    }
  },
  methods: {
    onUpdate (fieldKey, value) {
      this.$set(this.formObject, fieldKey, value)
      this.$emit('onUpdate', value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
