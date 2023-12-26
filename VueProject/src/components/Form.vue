<template>
  <form @submit="onSubmit">
    <input type="text" v-model="form.film">

    <input type="radio" name="isCheck" value="YES" v-model="form.isCheck">
    <input type="radio" name="isCheck" value="NO" v-model="form.isCheck">

    <input type="checkbox" name="isCheck" value="1" v-model="form.typeFilm">
    <input type="checkbox" name="isCheck" value="2" v-model="form.typeFilm">
    <input type="checkbox" name="isCheck" value="3" v-model="form.typeFilm">

    <button type="submit">SEND</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        film: '',
        isCheck: 'NO',
        typeFilm: ['2', '3']
      }
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log('sended data: ', this.form)
    }
  }
}
</script>
