<template>
  <div class="nav">
    <van-tabs
      v-model="active"
      title-active-color="#DD001B"
      title-inactive-color="#000000"
    >
      <van-tab title="推荐音乐">
        <rem></rem>
        <newMusic></newMusic>
      </van-tab>
      <van-tab title="热歌榜">
        <music></music>
      </van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import music from "./hot/music.vue";
import newMusic from "./tuijian/newMusic.vue";
import rem from "./tuijian/rem.vue";
export default {
  components: { rem, newMusic, music },
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style>
.van-tabs__wrap {
  border-bottom: 1px solid #eee;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 1.68rem;
  height: 0.8rem;
}
</style>