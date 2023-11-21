<script setup lang="ts">
import { ref } from 'vue';
import useSlider from './useSlider';
const elSlider = ref<HTMLElement>()
const {currentCoord, startSlideInit} = useSlider(elSlider)

</script>
<template>
    <div 
      ref="elSlider"
      class="slider"
      :style="{
        transform: `translateX(${currentCoord.x}px)`,
        top: currentCoord.y + 'px',
      }"
      @mousedown="startSlideInit"
      @touchstart="startSlideInit">
        <slot></slot>
    </div>
</template>
<style scoped lang="scss">
.slider {
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 100%;
  display: flex;
  gap: 40px;
  &--transition {
    transition: 0.2s linear all;
  }
}
</style>