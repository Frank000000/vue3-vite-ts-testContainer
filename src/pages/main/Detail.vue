<template>
  <div>detail</div>
  <div class="detail ">
    <!-- <van-button class="detail_btn1" type="primary" @click="refreshPage">刷新</van-button> -->
    <!-- <s_button class="detail_btn2" @click="zzz()"></s_button> -->
    <g-button class="detail_myBtn" type="warn" round disabled size="large" @click="clickMyBtn">myButton</g-button>
    <g-input style="margin-top: 20px;" type="number" :disabled="true"></g-input>
    <el-button style="margin-top: 20px;" type="primary">Primary</el-button>

    <!-- unplugin-icons -->
    <div class="unplugin-icons" style="display: flex;justify-content: space-between;margin-top: 40px;">
      <IconEpFold />
      <icon-ep-fold />
      <icon-uiw-menu-fold></icon-uiw-menu-fold>
      <icon-openmoji:folded-hands />
      <icon-fa-beer style="color: orange" />
    </div>
    <g-dropdown style="margin-top: 30px;" :options="animalOptions"></g-dropdown>
  </div>

</template>

<script setup lang="ts">
import { isBoolean, testJs } from '../../utils'
import { s_button } from 'selleri-ui'
import { toArray } from 'rafi-utils'
import {ref} from 'vue'

const animalOptions = ref()
animalOptions.value = [
  {
    title: 'mouse',
    pkid: '1'
  },
  {
    title: 'dog',
    pkid: '2'
  },
  {
    title: 'cat',
    pkid: '3'
  }
]

// test 'rafi-utils'
const obj = {
  name: 'rafi',
  weight: '75kg'
}
console.log('toArray::', toArray(obj));


// test
console.log(isBoolean(true));
console.log('testJs', testJs(false));
const refreshPage = () => {
  console.log('detail page');
  // location.reload();
  loadNum()
}
const loadNum = () => {
  console.log('loadNum');
}
const clickMyBtn = () => {
  console.log('clickMyBtn');
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