<template>
  <div class="box">
    <hotMusic></hotMusic>
    <!-- 公共组件 -->
    <music_list :list="hotMc" :is-show="false">
        <template v-slot:code="obj">
          <div class="number">{{ obj.index + 1 }}</div>
        </template>
      </music_list>
    <div class="download">
      <router-link to="/downlad" class="dw"> 查看完整榜单 ></router-link>
    </div>
  </div>
</template>

<script>
import music_list from '@/components/Music_list.vue';
import hotMusic from './hotMusic.vue';
export default {
  components: { hotMusic,music_list},
  data() {
    return {
      hotMc: [],
    };
  },
  created() {
    this.hotMusic();
  },
  methods: {
    async hotMusic() {
      let hot = await this.$api.hotMusic().then((res) => {
        return res.data;
      });
      this.hotMc = hot.playlist.tracks;
      console.log(this.hotMc);
    },

  },
};
</script>

<style lang="less">
.box{
  padding-top: 0.8rem;
}
.list_box {
  font-size: 13px;
  width: 100%;
  padding-left: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  color: #888;
  .cl{
    color: #df3436;
  }
  .serial {
    margin-right: 0.2rem;
    font-size: 17px;
    text-align: center;
    height: 1.11rem;
    line-height: 1.11rem;
  }
  .sgchfl {
    padding: 6px 0;
    flex-grow: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .subject {
      font-size: 17px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: #333;
    }
  }
  .author {
    font-size: 13px;
    color: #888;
  }
  .play_icon {
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .i {
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880)
        no-repeat -24px 0;
      background-size: 166px 97px;
    }
  }
}
.download{
  text-align: center;
  .dw{
    display: block;
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
    color: #888;
    font-size: 13px;
  }
}
</style>