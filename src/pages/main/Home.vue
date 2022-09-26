<template>
  <div>首页</div>
  <span></span>
  <van-button color="darkcyan" @click="add">父传子</van-button>
  <h3>子传父{{childCount}}</h3>
  <HelloWorld :parentNum='parentNum' @childClickP='child' />
</template>

<script setup lang="ts">
  import {
    onMounted,
    ref
  } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import {
    useStore
  } from 'vuex'
  import marginAll from "../../assets/js/utils/newLog";

  // var expect = require('expect.js');

  const store = useStore();
  const parentNum = ref(10)
  const childCount = ref(0)

  const add = () => {
    parentNum.value++
    //测试新的vuex@next
    store.state.parentNum = parentNum.value
    console.log('123123==', store.state.parentNum);

    // console.log('123123==', store.commit('parentNum', parentNum.value));
    // console.log('store.state.parentNum=====', store.state.parentNum);
  }
  const child = (_porps: any) => {
    console.log('_porps==', _porps);
    childCount.value = _porps
  }

  onMounted(() => {
    function add(a: any, b: any) {
      return a + b;
    };
    let count = add(1, 2)
    // console.log('count==', count);
    marginAll

    // let obj = {
    //   name: "宋",
    //   age: 18
    // }
    // Object.prototype.faa = "3333"

    // for (let k in obj) {
    //   // 查找当前对象下以及原型上的属性
    //   console.log("k", k)
    //   // k name
    //   // k age
    //   // k faa
    // }

    // for (let k in obj) {
    //   if (obj.hasOwnProperty(k)) {
    //     //只查找当前对象下的属性，不查找原型上的属性
    //     console.log("k1", k)
    //     // k1 name
    //     // k1 age
    //   }
    // }

    // Object.keys(obj).forEach(ele => {
    //   console.log(ele)
    //   //name
    //   //age
    // })

    // let str = "122222wdwwd11"
    // let srtlist = Object.keys(str)
    // srtlist.forEach(ele => {
    //   console.log('==', ele);
    // })
    // console.log(srtlist)

    // let list = [{
    //   name: '1111',
    //   old: 19
    // }, {
    //   name: '222',
    //   height: '180cm'
    // }]
    // let result = Object.keys(list)
    // console.log("list", result)
    // //list [ '0', '1' ]

    // let result2 = Object.values(list)
    // console.log('list2', result2);

    // let result3 = Object.entries(list)
    // console.log("66", result3[0][1])

    // let list = [123, 321, 456, 654]
    // console.log('list1==', list);
    // list.fill(777)
    // console.log('list2==', list);
    // list.fill(888, 1, 2)
    // console.log('list3==', list);
  })
</script>

<style lang="scss" scoped>

</style>