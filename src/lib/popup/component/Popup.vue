<script setup lang="ts">
import {
  Teleport,
  VueElement,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";

const props = withDefaults(
  defineProps<{
    open: boolean;
  }>(),
  {
    open: false,
  }
);

const emits = defineEmits<{ (e: "update:open", value: boolean): void }>();
const popup = ref<VueElement>();
const shadowPopup = ref<VueElement>();
const parent = ref<VueElement>();
const mounted = ref<boolean>(false);

onMounted(() => {
  parent.value = shadowPopup.value?.parentElement;
  mounted.value = true;
});
watch(popup, () => {
  if (!!!popup.value) {
    return;
  }
  getPopupLocation(parent.value, popup.value,'top');
});
watch(
  parent,
  () => {
    // console.log(parent.value);
  },
  {
    deep: true,
  }
);
function close() {
  emits("update:open", false);
}
</script>
<template>
  <div v-if="!mounted" ref="shadowPopup">p</div>
  <Teleport v-else to="#app">
    <div
      v-if="props.open"
      ref="popup"
      class="popup-container"
      @mouseleave="close"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>
<style scoped lang="scss">
.popup-container {
  position: absolute;
}
</style>
