<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import { SlideOption } from "../type";
import FreeSlider from "./Sliders/FreeSlider.vue";
const props = defineProps<{ slideOptions: SlideOption }>();
// const elSliderWrap = ref<HTMLElement>();

// const sliderBounds = computed(() => {
//   const offsetWidth = elSliderWrap.value?.offsetWidth || 0;
//   const parentOffsetWidth = elSliderWrap.value?.parentElement?.offsetWidth || 0;
//   return {
//     width: offsetWidth,
//     height: elSliderWrap.value?.offsetHeight,
//     maxLeft: 0,
//     maxRight: offsetWidth < parentOffsetWidth ? offsetWidth - elSliderWrap.value?.children[elSliderWrap.value.children.length-1].offsetWidth : parentOffsetWidth - offsetWidth,
//   };
// });

// const startTime = ref(0);
// const endTime = ref(0);
// const startCoord = ref({ x: 0, y: 0 });
// const currentCoord = ref({ x: 0, y: 0 });
// const endCoord = ref({ x: 0, y: 0 });
// const velocity = ref(0);
// const animationFrameId = ref(0);
// const isSlideTransition = ref<boolean>(false);
// const deltaTime = computed(() => endTime.value - startTime.value);
// const deltaMove = computed(() => {
//   return {
//     x: endCoord.value.x - startCoord.value.x,
//     y: endCoord.value.y - startCoord.value.y,
//   };
// });
// const handleMove = (moveX: number) => {
//   console.log(sliderBounds.value.maxRight)
//   currentCoord.value.x = endCoord.value.x + moveX;
//   clampSlideCoord();
// };

// const updateMouseMove = (event: MouseEvent) => {
//   event.preventDefault();
//   handleMove(event.pageX - startCoord.value.x);
// };

// const updateTouchMove = (event: TouchEvent) => {
//   event.preventDefault();
//   handleMove(event.touches[0].pageX - startCoord.value.x);
// };

// const manageEventListeners = (add: boolean) => {
//   const method = add ? "addEventListener" : "removeEventListener";
//   window[method]("mousemove", updateMouseMove, { passive: false });
//   window[method]("touchmove", updateTouchMove, { passive: false });
//   window[method]("mouseup", endSlideInit)
//   window[method]("touchend", endSlideInit)
// };

// const startSlideInit = (event: MouseEvent | TouchEvent) => {
//   manageEventListeners(true);
//   cancelAnimationFrame(animationFrameId.value);
//   isSlideTransition.value = false;
//   startCoord.value = { x: event.pageX, y: event.pageY };
//   startTime.value = Date.now();
// };

// const endSlideInit = (event: MouseEvent | TouchEvent) => {
//   const slideDirection = endCoord.value.x > currentCoord.value.x ? "left" : "right";
//   endTime.value = Date.now();
//   endCoord.value = { x: currentCoord.value.x, y: currentCoord.value.y };
//   velocity.value = deltaMove.value.x / deltaTime.value;
//   if (slideDirection === "right") velocity.value = -velocity.value;
//   requestAnimationFrame(animateSlideDeceleration);
//   manageEventListeners(false);
// };

// const animateSlideDeceleration = () => {
//   const friction = 0.95; // 감속계수
//   let displacement = velocity.value;

//   if (Math.abs(displacement) > 0.5) {
//     currentCoord.value.x += displacement;
//     endCoord.value.x = currentCoord.value.x;
//     velocity.value *= friction;
//     clampSlideCoord();
//     animationFrameId.value = requestAnimationFrame(animateSlideDeceleration);
//   }
//   resetSlideCoordOfBoundary();
// };

// const resetSlideCoordOfBoundary = () => {
//   let isLimit = false;
//   const { maxLeft, maxRight } = sliderBounds.value;

//   if (endCoord.value.x > maxLeft) {
//     endCoord.value.x = maxLeft;
//     isLimit = true;
//   } else if (endCoord.value.x < maxRight) {
//     endCoord.value.x = maxRight;
//     isLimit = true;
//   }

//   if (isLimit) {
//     currentCoord.value.x = endCoord.value.x;
//     triggerSlideTransition();
//   }
// };

// const triggerSlideTransition = () => {
//   isSlideTransition.value = true;
//   setTimeout(() => (isSlideTransition.value = false), 210);
// };
// const clampSlideCoord = () => {
//   const maxRightLimit = sliderBounds.value.maxRight - 60;
//   currentCoord.value.x = Math.min(
//     60,
//     Math.max(currentCoord.value.x, maxRightLimit)
//   );
// };
const sliderComponent = ref(FreeSlider)
</script>
<template>
  <div class="slide-container">
    <FreeSlider>
      <slot></slot>
    </FreeSlider>
    <!-- <component :is="sliderComponent"></component> -->
    <!-- <div
      ref="elSliderWrap"
      class="slider"
      :class="{ 'slider--transition': isSlideTransition }"
      :style="{
        transform: `translateX(${currentCoord.x}px)`,
        top: currentCoord.y + 'px',
      }"
      @mousedown="startSlideInit"
      @touchstart="startSlideInit"
    >
      <slot></slot>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.slide-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
// .slider {
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   min-height: 100%;
//   display: flex;
//   gap: 40px;
//   &--transition {
//     transition: 0.2s linear all;
//   }
// }
</style>
