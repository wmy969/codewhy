<template>
  
     
 <div id="app">
 
  <!-- <children :num1='num1'></children> -->
   <!-- <children></children> -->
   <!-- <about></about>
   <home></home> -->
      <router-link to="/about">关于</router-link>


        <!-- <router-link to="/home">主页</router-link> -->
     <router-link :to="{path:'/home'}">主页</router-link>
  


  <router-view></router-view>
  
 </div>
</template>

<script>
import children from './components/children'
import About from './components/about'
import Home from './components/home'
export default {

  components: {
  children,
  About,
  Home
  },
 
  data(){
    return{
     num1:45,
      num2:54
    }
  },
    
  
  methods:{
toggleuser(index){
// console.log(index);
this.student=this.studentlist[index]
}
  }
  
}
</script>

<style scoped>
   
   #app{
     display: flex;
   }
   .room{
     width: 50%;
     height: 780px;
     background-color: red;
   }
</style>
