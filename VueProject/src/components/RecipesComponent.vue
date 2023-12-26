<template>
<div class="container">
  <div class="row mb-3">
    <input type="text" v-model="query" class="form-control" @keypress="fetchRecipes">
  </div>
</div>
</template>

<script>
  export default {
    name:'RecipesComponent.vue',
    data(){
      return{
        query:'',
      }
    },
    methods:{
      fetchRecipes(event){
        if(event.key == 'Enter'){
          
        }
      }
    }
  }
</script>