<template>
  <div>详情页</div>
  <van-button type="primary" @click="refreshPage">刷新</van-button>
  <s_button></s_button>
</template>

<script setup lang="ts">
import testJS from "@/utils/test"
import { s_button } from 'selleri-ui'

//测试
testJS()
const refreshPage = () => {
  console.log('详情页');
  location.reload();
}
</script>

<style lang="scss" scoped>

</style>