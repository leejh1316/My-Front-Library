import { MaybeRef, computed, ref, unref, watch } from "vue";
import {SlideOption} from '../../type/SlideOption'
const useSlider = (element: MaybeRef<HTMLElement>, option:SlideOption) => {
  const elSlider = computed(() => unref(element));
  const startTime = ref(0);
  const endTime = ref(0);
  const startCoord = ref({ x: 0, y: 0 });
  const currentCoord = ref({ x: 0, y: 0 });
  const endCoord = ref({ x: 0, y: 0 });
  const moveCoord = ref({x:0,y:0})
  const sliderBounds = ref<{
    width: number;
    height: number;
    maxLeft: number;
    maxRight: number;
  }>(calculateSliderBounds());
  const countSlideItem = ref(elSlider.value?.childElementCount ?? 0);
  const isSlideTransition = ref<boolean>(false);
  const directionOfSlide = ref<"left" | "right" | "up" | "down">();
  const isMoved = ref(false);
  const onSlideEnd = ref<() => any>(() => {});
  const onSlideMove = ref<() => any>(() => {});
  const onSlideStart = ref<() => any>(() => {});
  const slideVelocity = ref(0);
  const deltaTime = computed(() => endTime.value - startTime.value);
  const deltaMove = computed(() => {
    return {
      x: endCoord.value.x - startCoord.value.x,
      y: endCoord.value.y - startCoord.value.y,
    };
  });
  function handleMove(moveX: number) {
    isMoved.value = true;
    moveCoord.value.x = moveX
    currentCoord.value.x = endCoord.value.x + moveX;
    clampSlideCoord();
    onSlideMove.value();
  }

  function handleMouseMove(event: MouseEvent) {
    event.preventDefault();
    handleMove(event.pageX - startCoord.value.x);
  }

  function handleTouchMove(event: TouchEvent) {
    event.preventDefault();
    handleMove(event.touches[0].pageX - startCoord.value.x);
  }

  function toggleEventListeners(add: boolean) {
    const method = add ? "addEventListener" : "removeEventListener";
    window[method]("mousemove", handleMouseMove, { passive: false });
    window[method]("touchmove", handleTouchMove, { passive: false });
    window[method]("mouseup", finalizeSlideEnd);
    window[method]("touchend", finalizeSlideEnd);
  }

  function initializeSlideStart(event: MouseEvent | TouchEvent) {
    toggleEventListeners(true);
    isSlideTransition.value = false;
    startCoord.value = { x: event.pageX, y: event.pageY };
    startTime.value = Date.now();
    countSlideItem.value = elSlider.value.childElementCount;
    onSlideStart.value();
  }

  function finalizeSlideEnd(event: MouseEvent | TouchEvent) {
    endTime.value = Date.now();
    directionOfSlide.value =
    endCoord.value.x > currentCoord.value.x ? "left" : "right";
    endCoord.value = { x: currentCoord.value.x, y: currentCoord.value.y };
    slideVelocity.value = calculateVelocity();
    onSlideEnd.value();
    isMoved.value = false;
    moveCoord.value.x = 0
    resetSlideCoordOfBoundary();
    toggleEventListeners(false);
  }

  function startSlideTransition() {
    isSlideTransition.value = true;
    elSlider.value?.classList.add("slider--transition");
    setTimeout(() => {
      elSlider.value?.classList.remove("slider--transition");
      isSlideTransition.value = false;
    }, 200);
  }

  function calculateVelocity() {
    const speed = !!moveCoord.value.x ? moveCoord.value.x / (deltaTime.value * 0.1) : 0
    return speed
  }
  function calculateSliderBounds() {
    const offsetWidth = Array.from(elSlider.value?.children ?? []).reduce(
      (width, child) => width + (child?.offsetWidth ?? 0) + (option?.gap ?? 0),
      (-option?.gap ?? 0)
    );
    const parentOffsetWidth = elSlider.value?.parentElement?.offsetWidth || 0;
    return {
      width: offsetWidth,
      height: elSlider.value?.offsetHeight,
      maxLeft: 0,
      maxRight:
        offsetWidth < parentOffsetWidth
          ? offsetWidth -
            elSlider.value?.children[elSlider.value.children.length - 1]
              .offsetWidth
          : parentOffsetWidth - offsetWidth,
    };
  }

  function clampSlideCoord() {
    const maxRightLimit = sliderBounds.value.maxRight - 60;
    currentCoord.value.x = Math.min(
      60,
      Math.max(currentCoord.value.x, maxRightLimit)
    );
  }

  function resetSlideCoordOfBoundary() {
    let isLimit = false;
    const { maxLeft, maxRight } = sliderBounds.value;

    if (endCoord.value.x > maxLeft) {
      endCoord.value.x = maxLeft;
      isLimit = true;
    } else if (endCoord.value.x < maxRight) {
      endCoord.value.x = maxRight;
      isLimit = true;
    }

    if (isLimit) {
      currentCoord.value.x = endCoord.value.x;
      startSlideTransition();
    }
  }

  watch(countSlideItem, () => {
    sliderBounds.value = calculateSliderBounds();
  });

  return {
    elSlider,
    countSlideItem,
    startCoord,
    currentCoord,
    sliderBounds,
    endCoord,
    moveCoord,
    isSlideTransition,
    isMoved,
    directionOfSlide,
    deltaMove,
    deltaTime,
    initializeSlideStart,
    resetSlideCoordOfBoundary,
    slideVelocity,
    handleMove,
    startSlideTransition,
    onSlideMove,
    onSlideEnd,
    onSlideStart,
    clampSlideCoord,
    calculateSliderBounds,
  };
};

export default useSlider;
