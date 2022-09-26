<template>
  <div>我的</div>
  <van-button type="primary" @click="refreshPage">刷新</van-button>
</template>

<script setup lang="ts">
  import {
    useRouter
  } from "vue-router";
  import {
    onMounted
  } from 'vue'
  import {
    useRoute
  } from 'vue-router';
  import {
    useStore
  } from 'vuex'

  const route = useRoute();
  const store = useStore();
  let router = useRouter();

  const refreshPage = () => {
    router.push({
      path: '/Detail'
    })
  }

  console.log('mine===========', store.state.parentNum);

  onMounted(() => {
    console.log('121231====', route.query.checked);
  })
</script>

<style lang="scss" scoped>

</style>