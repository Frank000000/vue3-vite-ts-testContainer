<template>
  <div>详情页</div>
  <div class="detail ">
    <!-- <van-button class="detail_btn1" type="primary" @click="refreshPage">刷新</van-button> -->
    <!-- <s_button class="detail_btn2" @click="zzz()"></s_button> -->
    <g-button class="detail_myBtn" type="warn" round disabled size="large" @click="clickMyBtn">myButton</g-button>
    <g-input style="margin-top: 20px;"></g-input>
  </div>

</template>

<script setup lang="ts">
import testJS from "@/utils/test"
import { s_button } from 'selleri-ui'

//测试
testJS()
const refreshPage = () => {
  console.log('详情页');
  // location.reload();
  zzz()
}
const zzz = () => {
  console.log(111111);
}
const clickMyBtn=()=>{
  console.log(123);
}
</script>

<style lang="scss" scoped>
.detail {

  &_btn1 {}

  &_btn2 {
    display: block;

  }
  &_myBtn{
    background: red;
    width: 100px;
  }
}

:deep(.btn__primary) {}
</style>