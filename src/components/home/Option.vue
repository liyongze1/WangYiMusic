<template>
  <div class="nav">
    <van-tabs
      v-model="active"
      title-active-color="#DD001B"
      title-inactive-color="#000000"
      @click="indicate_md"
    >
      <van-tab title="推荐音乐">
        <rem></rem>
        <newMusic></newMusic>
      </van-tab>
      <van-tab title="热歌榜">
        <music :indicate="indicate"></music>
      </van-tab>
      <van-tab title="搜索">
        <hot_search></hot_search>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import music from "./hot/music.vue";
import hot_search from './sousuo/hot_search.vue';
import newMusic from "./tuijian/newMusic.vue";
import rem from "./tuijian/rem.vue";
export default {
  components: { rem, newMusic, music, hot_search },
  data() {
    return {
      active: 2,
      //热歌榜标识
      indicate:0,
    };
  },
  provide(){
    return {
      //option祖先组件的this
      uploadID:this
    }
  },
  methods:{
    indicate_md(e){
      this.indicate=e
      console.log(e)
    }
  }
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