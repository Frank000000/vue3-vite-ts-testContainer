<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import {
    useRouter
  } from "vue-router";
  import {
    nextTick,
    onMounted
  } from 'vue'
  const router = useRouter();

  nextTick(() => {
    // console.log('1==============');

  })
  onMounted(() => {
    //环境打印
    // console.log('p============',import.meta.env);
    // add()
  })
  const add = () => {
    const [a, b] = [1, 2]
    // console.log('c=============', a + b);
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>