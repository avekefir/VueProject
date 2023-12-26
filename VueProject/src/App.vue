<template>
  <!-- <CounterAndWatch /> -->
  <LayoutHeader/>
  <router-view />
  <!-- <footer>footer</footer> -->
</template>

<script>
import TestComponent from '@/components/TestComponent.vue'
import Slider from '@/components/Slider.vue'
import UsersList from './components/UsersList.vue'
import CounterAndWatch from './components/watch/CounterAndWatch.vue'
import Form from './components/form.vue'
import LayoutHeader from  '@/layout/layout-header/LayoutHeader.vue'
export default {
  name: 'App',
  components: {
    Slider,
    TestComponent,
    UsersList,
    CounterAndWatch,
    Form,
    LayoutHeader
  }
}
</script>

<style></style>
