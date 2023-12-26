<template>
  <h1>Список постов</h1>

  <div v-if="postsStore.isLoading">ЗАГРУЗКА..</div>
  <div v-if="postsStore.error">ОШИБКА {{ postsStore.error }} </div>

  <ul>
    <li v-for="(itemPost, index) in postsStore.posts" :key="index">
      {{ itemPost.title }}
    </li>
  </ul>
  <button @click="fetchPost">Получить посты</button>
  <button @click="onClear">Очистить посты</button>
</template>

<script>
import { PostsStore } from "@/stores/posts.store";
export default {
  name: "ListPage",
  setup() {
    const postsStore = PostsStore();

    return {
      postsStore,
    };
  },
  methods: {
    fetchPost() {
      this.postsStore
        .fetchPosts()
        .then(() => {
          alert("OK");
        })
        .catch(() => {
          alert("Ошибка");
        });
    },
    onClear() {
      this.postsStore.clearPosts();
    },
  },
};
</script>
