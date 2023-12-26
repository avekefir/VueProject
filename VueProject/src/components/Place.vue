<template>
  <div class="container">
    <div class="photo">
      <img class="imgMgn" src="../assets/mgn.jpg" alt="">
    </div>
    <div class="info">
      <div class="city">
        <h1>Магнитогорск <span>▲</span></h1>
        <button @click="toggleInfo" class="btn">?</button>
        <div v-if="isBtnClicked">Герб города</div>
      </div>
      <h2>Челябинская область</h2>
      <h3 @click="showExName"><div v-if="!isUralClicked" class="region">Урал</div><div v-else class="region">ex. Яик</div></h3>
    </div>
    <div class="info second">
      Население на 2023 год 410.000 человек <br>
      На фотографии моя школа <br>
      <div @click="showAdress">Справа мой дом </div> <p v-if="isAdressClicked">Калмыкова 6, 78. Кто проездом будет заходите</p>
    </div>
    <div class="photo">
      <img class="imgMgn" src="../assets/mgnkalmikova.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default{
  name: "Place",
  data(){
    return{
      isBtnClicked: false,
      isUralClicked: false,
      isAdressClicked: false,
    }
  },
  methods:{
    toggleInfo(){
      this.isBtnClicked = !this.isBtnClicked;
    },
    showExName(){
      this.isUralClicked = !this.isUralClicked;
    },
    showAdress(){
      this.isAdressClicked = !this.isAdressClicked;
    },
  }
}
</script>

<style>
.photo > img{
  box-shadow: 0px 0px 20px rgb(255, 52, 221);
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.imgMgn{
  width: 450px;
  margin: 12px;
}
h3{
  text-decoration:underline;
  transition: 1s;
}
h3:hover{
  font-size: 19px;
}
.region{
  color:rgb(184, 253, 228)
}
h1{
  color:white;
}
span{
  color: black;
  background-color: white;
}
.city{
  display: flex;
  align-items: center;
}
.info{
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 40px;
}
.second{
  font-size: 20px;
  color:#fff;
}
.btn{
  text-decoration: underline;
  margin-left: 12px;
  font-size: 24px;
  color: gray;
  background-color: transparent;
  border: 0;
  transition: 1s;
}
.btn:hover{
  color: #fff;
  transform: scale(1.1);
}
</style>