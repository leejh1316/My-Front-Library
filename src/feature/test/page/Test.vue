<script setup lang="ts">
import { MaybeRef, VueElement, inject, onMounted, ref, watch } from "vue";
import ButtonVue from "../component/Button.vue";
import { createPopup, Popup } from "@/lib/popup";
import { SlideOption } from "@/lib/slide/type";
const popupShow = ref(false);
const popupShow2 = ref(false);
const refEl = ref<HTMLElement>();
const popEl = ref<HTMLElement>();
const popEl2 = ref<HTMLElement>();
onMounted(() => {
  console.dir(refEl.value);
});
const popup = ref<Popup>()
watch(popEl, () => {
  popup.value = createPopup(refEl.value, popEl.value, {
    placement: "top-left",
    mode:{
      auto:true
    }
  });
});

// watch(popEl2, ()=>{
//   const popup2 = createPopup(popEl.value, popEl2.value, {
//     placement: "right-top",
//   });
// })
const items = ref(['a','b','c','d','e'])
const slideOption :SlideOption ={
  sliderType:'left',
  gap:50
}
const add = () => {
  items.value.push('c')
}
</script>

<template>
  <div class="page-layout">
    <!-- <div class="box a" ref="refEl">

    </div>
    <div class="box-small" ref="popEl"></div> -->
  <button @click="add">slide add</button>
    <div class="wrap">
      <Slide :slide-option="slideOption">
        <SlideItem v-for="item,index of items" class="hum" :class="`${item}`">
          <div class="content-container">
            <div class="row">
              <div class="card"></div>
              <div class="content">
                <div class="title">심심할때 듣는 음악1</div>
                <div class="author">심심이</div>
              </div>
            </div>
            <div class="row">
              <div class="card"></div>
              <div class="content">
                <div class="title">30분 플레무리스트</div>
                <div class="author">로봇</div>
              </div>
            </div>
            <div class="row">
              <div class="card">대충 썸네일</div>
              <div class="content">
                <div class="title"></div>
                <div class="author"></div>
              </div>
            </div>
            <div class="row">
              <div class="card"></div>
              <div class="content">
                <div class="title"></div>
                <div class="author"></div>
              </div>
            </div>
          </div>
        </SlideItem>
      </Slide>
      <Slide :slide-option="slideOption">
        <SlideItem class="box a">
          <div>hello</div>
        </SlideItem>
      </Slide>
    </div>

    <div class="wrap">
      <Slide :slide-option="{sliderType:'free', gap:12}">
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
        <SlideItem class="big-card"></SlideItem>
      </Slide>
    </div>
    <div class="wrap">
      <Slide :slide-option="{sliderType:'free', gap:12}">
        <SlideItem class="box a"></SlideItem>
        <SlideItem class="box b"></SlideItem>
        <SlideItem class="box c"></SlideItem>
        <SlideItem class="box d"></SlideItem>
        <SlideItem class="box e"></SlideItem>
        <SlideItem class="box a"></SlideItem>
        <SlideItem class="box b"></SlideItem>
        <SlideItem class="box c"></SlideItem>
        <SlideItem class="box d"></SlideItem>
        <SlideItem class="box e"></SlideItem>
      </Slide>
    </div>
    <div class="wrap">
      <Slide :slide-option="{sliderType:'left', gap:10}">
        <SlideItem class="full a">1</SlideItem>
        <SlideItem class="full d">2</SlideItem>
        <SlideItem class="full e">3</SlideItem>
        <SlideItem class="full b">4</SlideItem>
        <SlideItem class="full c">5</SlideItem>
        <SlideItem class="full e">6</SlideItem>
      </Slide>
    </div>
  </div>
</template>

<style scoped lang="scss">
.big-card{
  width: 150px;
  height: 150px;
  border-radius: 8px;
  background-color: #fff;
}
.content-container{
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
}
.row{
  display: flex;
  gap: 8px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height:100%;
}
.title{
  font-size: 16px;
  color:white;
}
.author{
  font-size:14px;
  color:#d0d0d0
}
.hum{
  width:350px;
}
.card{
  width: 80px;
  height: 80px;
  background-color: cornflowerblue;
  border-radius: 8px;
}
.page-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1500px;
  width: 100%;
  height: 1500px;
  background-color: #777;
  padding: 50px;
}
.wrap{
  width: 600px;
  height: 400px;
}
.box-small{
  width: 150px;
  height: 80px;
  background-color: cornflowerblue;
  transition: 0.3s ease all;
}
.full{
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 200px;
  background-color: blue;
  &.a{
    background-color: yellow;
  }
  &.b{
    background-color: aqua;
  }
  &.c{
    background-color: chocolate;
  }
  &.d{
    background-color: steelblue;
  }
  &.e{
    background-color: darkgreen;
  }
}
.box { //부모
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  // height: 200px;
  background-color: blue;
  &.a{
    background-color: yellow;
  }
  &.b{
    background-color: aqua;
  }
  &.c{
    background-color: chocolate;
  }
  &.d{
    background-color: steelblue;
  }
  &.e{
    background-color: darkgreen;
  }
}
.test {//자식
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: black;
  transition: left 0.3s ease, top 0.3s ease;
}
.test2 {
  position: absolute;
  width: 150px;
  height: 250px;
  background-color: aquamarine;
  transition: all 0.3s ease;
}
</style>
