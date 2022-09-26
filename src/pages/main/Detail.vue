<template>
  <div>详情页</div>
  <van-button type="primary" @click="refreshPage">刷新</van-button>
  <test-component></test-component>
</template>

<script setup lang="ts">
  import testJS from "@/utils/test"
  import {TestComponent} from 'selleri-ui'
  import 'selleri-ui/dist/style.css'
  //测试
  testJS()
  const refreshPage = () => {
    console.log('详情页');
    location.reload();
  }
</script>

<style lang="scss" scoped>

</style>