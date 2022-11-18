<template>
  <div>详情页</div>
  <div class="detail ">
    <!-- <van-button class="detail_btn1" type="primary" @click="refreshPage">刷新</van-button> -->
    <!-- <s_button class="detail_btn2" @click="zzz()"></s_button> -->
    <g-button class="detail_myBtn" type="warn" round disabled size="large" @click="clickMyBtn">myButton</g-button>
    <g-input style="margin-top: 20px;" type="number" :disabled="true"></g-input>
    <el-button type="primary">Primary</el-button>

    <!-- unplugin-icons -->
    <div class="unplugin-icons" style="display: flex;justify-content: space-between;margin-top: 100px;">
      <IconEpFold />
      <icon-ep-fold />
      <icon-uiw-menu-fold></icon-uiw-menu-fold>
      <icon-openmoji:folded-hands/>
      <icon-fa-beer style="color: orange"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import { isBoolean, testJs } from '../../utils'
import { s_button } from 'selleri-ui'

//测试
console.log(isBoolean(true));

console.log('testJs', testJs(false));

const refreshPage = () => {
  console.log('详情页');
  // location.reload();
  zzz()
}
const zzz = () => {
  console.log(111111);
}
const clickMyBtn = () => {
  console.log(123);
}
</script>

<style lang="scss" scoped>
.detail {

  &_btn1 {}

  &_btn2 {
    display: block;

  }

  &_myBtn {
    background: red;
    width: 100px;
  }
}

:deep(.btn__primary) {}
</style>