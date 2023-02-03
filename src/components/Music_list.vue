<template>
  <div>
    <!-- 音乐列表 -->
    <ul>
        <li
          class="music_item"
          v-for="(item, index) in list"
          :key="item.id" @click="playMusic(item.id,item.name)"
        >
        <!-- 插槽渲染标识 -->
          <slot name="code" :index="index"></slot>
          <!-- 热歌榜标识 -->
          <!-- <div class="number" v-if="isShow">{{ index + 1 }}</div> -->
          <!-- <div class="number" :class="{code_red:index<3}">{{ index>8?index+1:"0"+(index+1) }}</div> -->
          <div class="music_info">
            <div class="music_title">
             {{ item.name }}
            </div>
            <span class="music_name">
              <span
                class="music_name"
                v-for="user in list[index].ar"
                :key="user.id"
                >{{ user.name }}</span
              >
              {{ item.al.name }}</span
            >
          </div>
          <div class="play_icon">
            <span class="icon"></span>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
   data(){
    return {
      name:""
    }
   },
    props:{
       list:{
            type:Array,
            default:function(){
            }
        },
        isShow:{
            type:Boolean,
            default:true
        }

    },
    //深层传递
    // inject:["uploadID"],
    methods:{
       //跳转进入音乐播放的界面
       playMusic(id,name){
          this.$router.push({
            // path:"/Song/${id}",
            name:'Song',
            params:{
              id,
              name
            }
          })
        console.log(this.$router)
        }

        },
    }
</script>

<style lang="less">
.music_item {
  display: flex;
  font-size: 17px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .code_red{
    color: red !important;
  }
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