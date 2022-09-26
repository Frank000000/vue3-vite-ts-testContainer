<template>
  <div class="container">
    <img class="exception-img" src="https://yun.21cn.com/static/jtjk/errorPage/notFound.png" alt="资源未找到">
    <p class="tip">
      抱歉，您访问的页面地址有误，或者该页面不存在。
    </p>
  </div>
</template>
<style scoped>
  .container {
    padding-top: 34px;
    background-color: #fff;
  }

  .back {
    margin-left: 20px;
    font-size: 24px;
  }

  .exception-img {
    display: block;
    margin: 100px auto 20px;
    width: 180px;
  }

  .tip {
    color: #999999;
    font-size: 14px;
    text-align: center;
  }
</style>