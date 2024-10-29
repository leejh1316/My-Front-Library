<script setup lang="ts">
import PatientPage from "@feature/patient/page/PatientPage.vue";
import TestPage from "@feature/test/page/Test.vue";
import { usePlacement } from "./lib/popup/placement/usePlacement";
import SlideDemo from "@feature/Slide/SlideDemo.vue";
</script>

<template>
  <!-- <PatientPage></PatientPage> -->
  <!-- <TestPage></TestPage> -->
  <SlideDemo></SlideDemo>
</template>

<style>
@import url("./style.css");
#app {
  position:relative;
  width: 100vw;
  min-height: 130vh;
  background-color: black;
  color:#fff;
  overflow: hidden;
  font-family: 'SUITE-Regular';
}
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
</style>
