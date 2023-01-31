<template>
  <div class="nav">
    <van-tabs v-model="active" title-active-color="#DD001B" title-inactive-color="#000000">
      <van-tab title="推荐音乐">
        <rem></rem>
      </van-tab>
      <van-tab title="热歌榜">热歌榜</van-tab>
      <van-tab title="搜索">搜索</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import rem from './rem.vue';
export default {
  components: { rem },
    data(){
        return{
            active:2,
        }
    }
};
</script>

<style>
.van-tabs__wrap{
    border-bottom: 1px solid #eee;
}
</style>