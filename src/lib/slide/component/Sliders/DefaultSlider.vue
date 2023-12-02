<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import useSlider from './useSlider';
import { SlideOption } from '../../type';
const props = defineProps<{
  option : SlideOption
}>()
const sliderElement = ref<HTMLElement>()
const {currentCoord, initializeSlideStart} = useSlider(sliderElement, props.option)
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
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  min-width: 100%;
  flex-wrap: nowrap;
  min-height: 100%;
  &--transition {
    transition: 0.25s linear all;
  }
}
</style>