<script setup lang="ts">
import { ref } from 'vue';

const ripple = (e:MouseEvent) => {
    console.log(e)
    const ripple = document.createElement('span')
    let x = e.offsetX
    let y = e.offsetY
    ripple.classList.add('ripple')
    ripple.style.left = x+'px'
    ripple.style.top = y+'px'
    e.target.append(ripple);
    setTimeout(()=>{
        ripple.remove()
    },1000)
    
}
const buttonElement = ref(null)
defineExpose({
    buttonElement
})
</script>
<template>
    <button ref="buttonElement" class="base-button" @mousedown="ripple">
        <slot></slot>
    </button>
</template>
<style>
.base-button{
    position: relative;
    display:inline-block;
    padding: 10px 15px;
    margin:0px;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
}
.base-button *{pointer-events: none;}
.ripple{
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    pointer-events: none;
    background-color: #fff;
    filter: brightness(0.5);
    animation: ripple 1s linear infinite;
}
@keyframes ripple {
    0%{width:0px; height: 0px; opacity: 0.3;}
    100%{width:500px; height: 500px; opacity: 0}
}
</style>