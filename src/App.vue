<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <!--todo active-class属性直接在这里加-->
      <router-link to="goods" class="tab-item" active-class="active">商品</router-link>
      <router-link to="ratings" class="tab-item" active-class="active">评论</router-link>
      <router-link to="seller" class="tab-item" active-class="active">商家</router-link>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px
      color: rgb(77, 85, 93)
    .active
      color: rgb(240, 20, 20)
</style>
