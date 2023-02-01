<template>
  <div class="newMusic">
    <h2>最新音乐</h2>
    <ul>
      <li class="list_box" v-for="item in dt" :key="item.id">
        <div class="sgchfl">
          <p class="subject">
            {{ item.name
            }}<span v-for="(it, index) in item.song.alias" :key="index">{{
              it
            }}</span>
          </p>
          <p class="author">
            <span v-for="(userName,index) in item.song.artists" :key="userName.id">{{
              userName.name
            }}
            <!--判断是否添加标签 -->
            <i v-if="index!=item.song.artists.length-1"> / </i></span
            > - <span>{{ item.name }}</span>
          </p>
        </div>
        <div class="play_icon">
          <span class="i"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //网络请求
  created() {
    this.postMusic();
  },
  data() {
    return {
      dt: [],
    };
  },
  methods: {
    // name(a){
    //     let b=[]
    //     // b.push(...a)
    //     // console.log(a)
    //     a.map((item)=>{
    //         let c=[]
    //         c.push(item.name)
    //         console.log(c);
    //     })
    //     // a.map((item,index)=>{
    //     //     console.log(item)
    //     // })
    //     // console.log(a);
    // },
    //将异步操作以同步的方式处理
    async postMusic() {
      let Music = await this.$api.postMusic();
      if (Music.data.code == 200) {
        this.dt = Music.data.result;
        console.log(this.dt);
      } else {
      }
    },
  },
};
</script>

<style lang="less">
.newMusic {
  h2 {
    height: 0.4rem;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
    border-left: 2px solid #dd001b;
  }
  .list_box {
    width: 100%;
    box-sizing: border-box;
    padding-left: 0.2rem;
    display: flex;
    justify-content: space-between;
    .sgchfl {
      padding: 6px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      justify-content: Space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      flex-grow: 1;
      .subject {
        font-size: 17px;
        color: #333333;
      }
      
    }
  }
  .author {
        font-size: 13px;
        color: #888888; 
      }
  .play_icon {
    align-items: flex-end;
    padding: 0 0.2rem;
    line-height: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .i {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(https://s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28c3767992ca4bb6d4887c74880)
        no-repeat -24px 0;
      background-size: 166px 97px;
    }
  }
}
</style>