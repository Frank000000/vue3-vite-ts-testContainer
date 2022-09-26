<template>
  <h1>{{ msg }}</h1>
  <h3>{{parentNum}}</h3>
  <van-button type="primary" @click="count++">count is: {{ count }}</van-button>
  <div class="container">
    <van-button type='primary' @click="childClick">子传父</van-button>
    <van-button type="primary" class="container_btn" @click="toMine">goMine</van-button>
    <van-radio-group class="container_rad" v-model="checked" @change="func">
      <van-radio name="1"> 1</van-radio>
      <van-radio name="2"> 2</van-radio>
    </van-radio-group>
    <span>{{ heheda }}</span>
    <van-button type="primary" @click="heheda++">add</van-button>
    <input type="text" v-model='num'>
    <van-button @click="add" type="primary">num:{{ num }}</van-button>
  </div>
</template>

<script setup lang="ts">
  //引入
  import {
    useRouter
  } from "vue-router";
  import {
    ref,
    onMounted
  } from 'vue'
  let router = useRouter();

  //初始化参数
  const {
    parentNum
  } = defineProps({
    // parentNum: Number
    parentNum: {
      type: Number
    }
  })
  const msg = ref('helloWorld')
  const checked = ref('1')
  let heheda = ref(0)
  // const num = ref(0)
  // const count = ref(0)
  const [num, count] = [ref(0), ref(0)]

  //定义方法
  const emit = defineEmits(['childClickP']); //子传父
  const childParents = ref(0)
  const childClick = () => {
    emit('childClickP', childParents.value = childParents.value + 88)
  }

  const add = () => {
    num.value = num.value + 2
  }
  const func = () => {
    console.log('checked==', checked.value);
  }
  const toMine = () => {
    console.log('%c Success','color:green;font-size:1.5em', )
    
    router.push({
      path: "/Mine",
      // name: 'mine',
      query: {
        checked: checked.value
      }
    });
  }

  //钩子函数、方法
  onMounted(() => {

  })

  defineExpose({

  });
</script>

<style scoped lang="scss">
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }

  .container {
    // background: red;
    margin-top: 100px;


    .container_btn {
      background: darkcyan;
      border: none;
    }

    .container_rad {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      font-size: 20px;
      margin-bottom: 50px;
    }
  }
</style>