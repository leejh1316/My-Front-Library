<script setup lang="ts">
import { MaybeRef, VueElement, inject, onMounted, ref, watch } from "vue";
import ButtonVue from "../component/Button.vue";
import { createPopup, Popup } from "@/lib/popup";
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
</script>

<template>
  <div class="page-layout">
    <div
      @click="
        () => {
          popupShow = true;
        }
      "
      class="box"
      ref="refEl"
    >
      <span v-if="popupShow" ref="popEl" class="test">
        <ButtonVue
          @click="
            () => {
              popup.setOptions({
                gap:40,
                placement:'left-top'
              })
            }
          "
        >
            <!-- <div class="test2" v-if="popupShow2" ref="popEl2" @click="()=>{
              popupShow2 = false
            }"></div> -->
      </ButtonVue>
        <!-- <div ref="popEl2" class="box"></div> -->
      </span>
    </div>
    <!-- <div class="test"></div> -->
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5000px;
  height: 5000px;
  background-color: #777;
  padding: 50px;
}
.box { //부모
  position: relative;
  width: 200px;
  height: 400px;
  background-color: blue;
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
