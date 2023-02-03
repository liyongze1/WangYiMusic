<template>
  <div>
    <!-- 标识 -->
    <div class="mark" style="position: absolute; top: 0; font-size: 13px">
      id:{{ id }}
    </div>
    <div class="head">
      <div class="music_img">
        <div class="song_sheet">歌单</div>
        <img
          src="https://p1.music.126.net/rd0iSV6zxXOytgehfIaZ8g==/109951163693273653.jpg?imageView=1&type=webp&thumbnail=252x0"
          alt=""
        />
        <div class="music_num">
          <span><i class="icon"></i>3552.3万</span>
        </div>
      </div>
      <div class="user">
        <h2>最陈奕迅·精选</h2>
        <div class="user_info">
          <img
            src="https://p1.music.126.net/Onh7GEyiYnbzKK-JgUKuLg==/5750445813356026.jpg?imageView=1&type=webp&thumbnail=60x0"
            alt=""
            class="user_logo"
          />
          <span class="user_name">倦鸟归林</span>
        </div>
      </div>
    </div>
    <div class="music_list">
      <h4
        style="
          color: #000;
          font-size: 12px;
          font-weight: 400;
          margin-left: 0.2rem;
        "
      >
        歌曲列表
      </h4>
      <!-- 公共组件音乐列表 -->
      <Music_list :list="music_data">
        <template v-slot:code="obj">
          <div class="number" :class="{code_red:obj.index<3}">{{ index>8?index+1:"0"+(obj.index+1) }}</div>
        </template>
      </Music_list>
    </div>
  </div>
</template>

<script>
import Music_list from "../../../Music_list.vue"
export default {
  components:{
    Music_list
  },
  //歌曲列表id
  props: ["id"],
  data() {
    return {
      music_data: [],
      item_id:this.id
    };
  },
  //网络请求
  created() {
    this.music_list();
  },
  methods: {
    async music_list() {
      let music = await this.$api.musicList();
      this.music_data = music.data.playlist.tracks;
      console.log(this.music_data);
    },
  },
};
</script>

<style lang="less">
.head {
  font-size: 12px;
  display: flex;
  padding: 0.6rem 0.2rem 0.6rem 0.3rem;
  background-color: #eee;
}
.music_img {
  width: 2.52rem;
  height: 2.52rem;
  position: relative;
  .song_sheet {
    width: 0.8rem;
    height: 0.34rem;
    color: #ffffff;
    position: absolute;
    top: 0.2rem;
    text-align: center;
    border-radius: 0.34rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #d93030cc;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .music_num {
    position: absolute;
    top: 0;
    right: 2px;
    font: 14px/1.5 Helvetica, sans-serif, STHeiTi;
    font-size: 12px;
    color: #ffffff;
    padding-left: 0.25rem;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjIgMTYuNzc3YzAgMS4yMzMtMS4xMjEgMi4yMzMtMi41MDYgMi4yMzMtMS4zODQgMC0yLjUwNi0xLTIuNTA2LTIuMjMzdi0yLjU1M2MwLTEuMjM0IDEuMTIyLTIuMjMzIDIuNTA2LTIuMjMzLjE3NCAwIC4zNDMuMDE3LjUwNi4wNDZ2LTEuMzdoLS4wMzNjLjAxNy0uMjIuMDMzLS40NDEuMDMzLS42NjZhOCA4IDAgMCAwLTE2IDBjMCAuMjI1LjAxNi40NDYuMDM0LjY2Nkg0djEuMzdjLjE2My0uMDI5LjMzMy0uMDQ2LjUwNS0uMDQ2IDEuMzg0IDAgMi41MDYuOTk5IDIuNTA2IDIuMjMzdjIuNTUzYzAgMS4yMzMtMS4xMjIgMi4yMzMtMi41MDYgMi4yMzNTMiAxOC4wMTEgMiAxNi43Nzd2LTIuNTUzYzAtLjI1OC4wNTktLjUwMS4xNDgtLjczQS45ODIuOTgyIDAgMCAxIDIgMTMuMDAxdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMHMxMCA0LjQ3NyAxMCAxMGMwIC4wOS0uMDA5LjE3OC0uMDE0LjI2Ni4wMDIuMDI0LjAxNC4wNDQuMDE0LjA2N3YyYS45ODguOTg4IDAgMCAxLS4zNi43NTNjLjIyNC4zMzQuMzYuNzIuMzYgMS4xMzh2Mi41NTIiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTIwIDE2Ljc3N2MwIDEuMjMzLTEuMTIxIDIuMjMzLTIuNTA2IDIuMjMzLTEuMzg0IDAtMi41MDYtMS0yLjUwNi0yLjIzM3YtMi41NTNjMC0xLjIzNCAxLjEyMi0yLjIzMyAyLjUwNi0yLjIzMy4xNzQgMCAuMzQzLjAxNy41MDYuMDQ2di0xLjM3aC0uMDMzYy4wMTctLjIyLjAzMy0uNDQxLjAzMy0uNjY2YTggOCAwIDAgMC0xNiAwYzAgLjIyNS4wMTYuNDQ2LjAzNC42NjZIMnYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzUzAgMTguMDExIDAgMTYuNzc3di0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43M0EuOTgyLjk4MiAwIDAgMSAwIDEzLjAwMXYtMi42NjdjMC0uMDIzLjAxMi0uMDQzLjAxMy0uMDY3LS4wMDQtLjA4OC0uMDEzLS4xNzYtLjAxMy0uMjY2IDAtNS41MjMgNC40NzctMTAgMTAtMTBzMTAgNC40NzcgMTAgMTBjMCAuMDktLjAwOS4xNzgtLjAxNC4yNjYuMDAyLjAyNC4wMTQuMDQ0LjAxNC4wNjd2MmEuOTg4Ljk4OCAwIDAgMS0uMzYuNzUzYy4yMjQuMzM0LjM2LjcyLjM2IDEuMTM4djIuNTUyIi8+PC9zdmc+");
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 11px 10px;
  }
}
.user {
  flex-grow: 1;
  margin-left: 0.32rem;
  padding-top: 3px;
  h2 {
    padding-top: 1px;
    font-size: 17px;
    line-height: 1.3;
    color: #fefefe;
    height: 44px;
    display: -webkit-box;
  }
  img {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 5px;
  }
  .user_name {
    color: #888;
    font-size: 15px;
  }
}
.music_item {
  display: flex;
  font-size: 17px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .number {
    width: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
  .music_info {
    width: 0;
    padding: 6px 0;
    flex-grow: 1;
    .music_name {
      font-size: 12px;
      color: #999;
    }
  }
  .play_icon {
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    display: inline-block;
    width: 0.44rem;
    height: 0.44rem;
    background: url("https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880=")
      no-repeat;
    background-size: 166px 97px;
    background-position: -24px 0;
  }
  .music_title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
  }
}
</style>