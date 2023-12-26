<template>
  <div>
    <input ref="muInput" @keydown.enter="onKeydown" @input="changeInputValue" />
    <div>count: {{ count }}</div>
    <div>result: {{ getResult }}</div>
    <div>result: {{ getResult }}</div>
    <div>result: {{ getResult }}</div>

    <a :href="href" @click.prevent="onClickLink">Ссылка на гугл</a>

    <div class="container" @click="onClickContainer($event, '3')"></div>

    <button class="btn" :class="{ hide: !isActiveBtn }">Отправить</button>

    <ul>
      <li v-for="(userItem, index) in users" :key="userItem.id">
        {{ index + 1}}: {{ userItem.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const ARR_DATA = [
  {
    id: 1,
    name: 'Ayaz'
  },
  {
    id: 2,
    name: 'Ilya'
  },
  {
    id: 3,
    name: 'Nasty'
  }
]

export default {
  name: 'TestComponent',
  data () { // работа с динамикой
    return {
      count: 0,
      href: 'https://google.com',
      isActiveBtn: false,
      users: ARR_DATA
    }
  },
  mounted () { // вызывается один раз
    // setInterval(()=>{
    //   this.count++;
    // }, 1000)

    console.log(this.$refs.myInput)
    console.log(this.$refs.myInput)
  },
  methods: {
    onClickContainer (event, str) {
      this.count++
      console.log(event, str)
    },
    onClickLink () {
      console.log('click')
    },
    onKeydown (event) {
      console.log(event.key)
    },
    changeInputValue (event) {
      const value = event.target.value

      this.isActiveBtn = !!value
      // this.isActiveBtn = Boolean(value);
    }
  },
  computed: {
    getResult () {
      return this.count + 10
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
  background-color: #fff;
}

.btn {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.btn.hide {
  opacity: 0;
}
</style>
