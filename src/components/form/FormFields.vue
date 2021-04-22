<template>
  <div>
    <div  v-for="(field, fieldKey) in formFields"
          :key="fieldKey"
          :class="fieldsClass">
      <form-field :formObject="formObject"
                  :field="field"
                  :fieldKey="fieldKey"
                  :formId="formId"
                  @onUpdate="onUpdate(fieldKey, $event)">
      </form-field>
    </div>
  </div>
</template>

<script>
import FormField from '@/components/form/FormField'

export default {
  name: 'form-fields',
  components: { FormField },
  props: ['formFields', 'formObject', 'fieldsClass', 'formId'],
  methods: {
    onUpdate (fieldKey, value) {
      this.$emit('onUpdate', fieldKey, value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
