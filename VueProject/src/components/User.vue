<template>
  <div>
    <h2>Имя: {{ userName }}</h2>
    <p>Возраст: {{ age }}</p>

    <button @click="removeItem">X</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  emits: ['remove'], // в родителя
  // 1 way
  // props: ["userName", "age"],

  // 2 way
  // props:{
  //   userName: String,
  //   age: [String, Number], // или строка или число
  // },

  // 3 way
  props: {
    userName: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 20
      }
    },
    edu: {
      type: Boolean,
      default: true
    }
  },
  created () {
    console.log(this.userName)
  },
  methods: {
    removeItem () {
      this.$emit('remove')
    }
  }
}
</script>
