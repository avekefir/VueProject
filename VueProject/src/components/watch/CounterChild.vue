<template>
  Number{{ currentNumber }}!!!
</template>

<script>
export default {
  name: 'CounterChild',
  props: {
    currentNumber: Number
  },
  watch: {
    currentNumber (curVal) {
      this.onChange(curVal)
    }
  },
  methods: {
    onChange (val) {
      console.log('Change!', val)
    }
  }
}
</script>
