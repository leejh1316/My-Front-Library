<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import { SlideOption } from "../type";
import FreeSlider from "./Sliders/FreeSlider.vue";
import LeftSlider from "./Sliders/LeftSlider.vue";
const props = defineProps<{ slideOption: SlideOption }>();
const sliderComponent = computed(()=>{
  if(props.slideOption.sliderType === 'free') return FreeSlider
  else if(props.slideOption.sliderType === 'left') return LeftSlider
})
</script>
<template>
  <div class="slide-container">
    <component :is="sliderComponent" :option="props.slideOption">
      <slot></slot>
    </component>
  </div>
</template>
<style scoped lang="scss">
.slide-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
