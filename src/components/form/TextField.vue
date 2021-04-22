<template>
  <div class="mb-2">
    <label :for="id"
            class="w-100 font-weight-bold m-0 ml-1">
      {{name}} <span class="subtitle" v-if="subtitle">{{subtitle}}</span>
    </label>

    <div class="position-relative">
      <input  class="px-2 py-1 w-100"
              :style="paddedStyleForMaxLength"
              :id="id"
              :value="value"
              @input="onUpdate"
              :required="required"
              :maxlength="maxLength"/>

      <div  class="char-length px-2 py-1 text-secondary"
            ref="maxLengthDiv"
            v-if="maxLength">
        {{value ? value.length : 0}}/{{maxLength}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'text-field',
  props: ['name', 'fieldKey', 'value', 'required', 'subtitle', 'maxLength', 'formId'],
  data () {
    return {
      maxLengthDivWidth: null
    }
  },
  computed: {
    id () {
      return `${this.formId}_${this.fieldKey}`
    },
    paddedStyleForMaxLength () {
      if (this.maxLength) {
        return { 'padding-right': `${this.maxLengthDivWidth}px !important` }
      } else {
        return null
      }
    }
  },
  methods: {
    onUpdate (event) {
      this.$emit('onUpdate', event.target.value)
    },
    updateMaxLengthDivWidth () {
      if (this.maxLength) {
        this.$nextTick(() => {
          if (this.$refs.maxLengthDiv) {
            this.maxLengthDivWidth = this.$refs.maxLengthDiv.clientWidth
          } else {
            this.maxLengthDivWidth = 0
          }
        })
      }
    }
  },
  mounted () {
    this.updateMaxLengthDivWidth()
  },
  watch: {
    value () {
      this.updateMaxLengthDivWidth()
    }
  }
}
</script>

<style lang="scss" scoped>

.subtitle {
  font-size: .75rem;
  color: gray;
  font-weight: normal;
}

.char-length {
  position: absolute;
  top: 0;
  right: 0;
  font-size: .75rem;

  display: flex;
  align-items: center;
  height: 100%;
}
input {
  border: none;
  font-size: 1.2em;
}
</style>
