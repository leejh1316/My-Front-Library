<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import useSlider from './useSlider';
import { SlideOption } from '../../type';
const props = defineProps<{
  option : SlideOption
}>()
const sliderElement = ref<HTMLElement>()
const {currentCoord, endCoord, initializeSlideStart, moveCoord, startSlideTransition,slideVelocity, onSlideEnd} = useSlider(sliderElement, props.option)
const currentSlide = ref(0)
onSlideEnd.value = () => {
  if(moveCoord.value.x <= -150 || slideVelocity.value <= -3){
    if(currentSlide.value+1 === sliderElement.value.childElementCount) return;
    startSlideTransition()
    currentCoord.value.x = -sliderElement.value.children[currentSlide.value+1].offsetLeft
    currentSlide.value +=1
    endCoord.value.x = currentCoord.value.x
  }else if(moveCoord.value.x >= 150 || slideVelocity.value >= 3){
    if(currentSlide.value === 0) return;
    startSlideTransition() 
    currentCoord.value.x = -sliderElement.value.children[currentSlide.value-1].offsetLeft;
    currentSlide.value -=1
    endCoord.value.x = currentCoord.value.x
  }else{
    startSlideTransition()
    currentCoord.value.x = -sliderElement.value.children[currentSlide.value].offsetLeft
    endCoord.value.x = currentCoord.value.x;
  }
}
//moveCoord가 item의 width의 1/3지점을 지나거나, slideVelocity가 5를 넘었을때 다음 슬라이드로 이동

</script>
<template>
  <div
    ref="sliderElement"
    class="slider"
    :style="{
      transform: `translateX(${currentCoord.x}px)`,
      gap: props.option.gap + 'px',
      top: currentCoord.y + 'px',
    }"
    @mousedown="initializeSlideStart"
    @touchstart="initializeSlideStart"
  >
    <slot></slot>
  </div>
</template>
<style scoped lang="scss">
.slider {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  min-width: 100%;
  flex-wrap: nowrap;
  min-height: 100%;
  &--transition {
    transition: 0.2s linear all;
  }
}
</style>