<template>
  <IAM/>
  <!-- <h2>
    Первый пост: 
    {{ postsStore.getFirstPost }}
  </h2>
  <button @click="fetchPost">Fetch</button>
  <button @click="onClear">Clear</button>
  
  <h2 v-custom-color="'red'">Red</h2>
  <h2 v-custom-color="'yellow'">Red</h2>
  <h2 v-custom-color="'#fff'">Red</h2>
  <h2 v-custom-color="'red'">Red</h2> -->
  
</template>

<script>
// import BtnMenu from "../../ui-components/btn-menu/BtnMenu.vue";
// import { PostsStore } from "../../stores/posts.store";
import IAM from "../../components/IAM.vue"
export default {
  name: "MainPage",
  // setup(){
  //   const postsStore = PostsStore();
  //   return { postsStore};
  // },
  components:{
    IAM,
  },
  data(){
    return{
    }
  },
  methods:{
    
  },
};
</script>

<style>
  
</style>
