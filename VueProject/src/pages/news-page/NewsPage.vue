<template>
  <!-- <h1>NewsPage</h1> -->

  <h2 v-if="$route.params.id === '1'">Новость 1</h2>
  <h2 v-else-if="$route.params.id === '2'">Новость 2</h2>

  <router-link to="/">Главная</router-link>

  <button @click="toMainPage">Главная</button>
</template>

<script>
export default {
  name: "NewsPage",
  created() {
    console.log(this.$router.params);
  },
  methods: {
    toMainPage() {
      this.$router.push("/");
      // // переход по имени
      // this.$router.push({
      //   name: 'main'
      // })

      // // на сколько страниц назад отка
      // this.$router.go(-1)

      // // то же что и push но без сохранения пути
      // this.$router.replace('/')
    },
  },
};
</script>
