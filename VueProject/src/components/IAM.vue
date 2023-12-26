<template>
  <div class="container">
    
    <div class="info">
      <ul>
        <li>Имя: Илья</li>
        <li>Фамилия: Филатов</li>
        <li>Летаю</li>
        <li>19 лет</li>
        <li>Номер банковской карты</li>
        <li class="hide">4276 1584 604* ****</li>

        
      </ul>
      <div class="contact">
        <p>Буду оооооочень рад обратной связи, прошу всех оставлять отзывы <span v-if="isBtnHover">🥱</span></p>
        <button @mouseenter="btnMouseEnter" @mouseout="btnMouseExit" @click="btnClick" class="runningButton">СВЯЗАТЬСЯ СО МНОЙ</button>
        <p v-if="isBtnClicked">как...😑</p>
      </div>
    </div>
    <div class="photo">
      <img @click="imgClick" class="iam" src="../assets/iam.png" alt="">    
      <div v-if="isImgClicked" class="wizard">(колдун)</div>
    </div>
  </div>
</template>

<script>
  export default{
    name: "IAM",
    data(){
      return{
        isImgClicked: false,
        isBtnClicked: false,
        isBtnHover:false,
      }
    },
    methods:{
      imgClick(){
        this.isImgClicked = !this.isImgClicked;
      },
      btnClick(){
        this.isBtnClicked = true;
      },
      btnMouseEnter(){
        this.isBtnHover = true;
      },
      btnMouseExit(){
        this.isBtnHover = false;
      },
    }
  }
</script>

<style>
.wizard{
  color: chartreuse;
  font-style: italic;
  text-shadow: 1px 1px 3px white;
}
.contact{
  margin-top: 200px;
}
.runningButton{
  width: 200px;
  height: 50px;
  color: #fff;
  border-left: 5px solid red;
  border-top: 3px solid orange;
  border-right: 2px solid blue;
  border-bottom: 1px solid green;
  border-radius: 20px 10px 0px 10px;
  background-color: transparent;
}
.runningButton:hover{
  transform: translateX(300px);
}
.hide{
  font-size: 12px;
  -webkit-mask-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 10%);
}
.iam{
  width: 250px;
  transition: 0.3s;
  box-shadow: 5px 4px 10px #15881b;
}
.iam:hover{
  transform: scale(1.03);
}
.container{
  color: #fff;
  margin: 20px;
  display: flex;
  justify-content: space-between;  
}
.photo{
  text-align: end;
}
.info{
  font-size: 22px;
}
</style>