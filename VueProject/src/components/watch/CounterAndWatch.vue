<template>
  <div>{{ currentNumber }}</div>

  <div>
    <button @click="minus">-</button>
    <button @click="plus">+</button>
  </div>
  <CounterChild :currentNumber = "currentNumber"/>
</template>

<script>
import CounterChild from './CounterChild.vue'
export default {
  name: 'CounterAndWatch',
  data () {
    return {
      currentNumber: 0
    }
  },
  methods: {
    plus () {
      this.currentNumber++
    },
    minus () {
      this.currentNumber--
    }
  },
  components: { CounterChild }
}
</script>
