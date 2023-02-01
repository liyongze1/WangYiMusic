<template>
  <div class="rem">
    <div class="title">
      <h2>编辑推荐</h2>
    </div>
    <div class="content">
      <van-row gutter="2">
        <van-col span="8" v-for="item in dt" :key="item.id">
          <div class="item">
            <img
              :src="item.picUrl" alt=""
            />
            <span class="hot">{{ item.playCount|num }}</span>
          </div>
          <p class="txt">{{ item.name }}</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dt: [],
      ht:[]
    };
  },
  //组件渲染完毕进行网络请求
  created() {
    //网络请求的接口 http://iwenwiki.com:3000/personalized?limit=1
    this.getMusic();
  },
  //过滤器
  filters:{
    num:function(val){
      //没有数据直接返回
      if(!val)return;
      return val>9999?(val/10000).toFixed(1)+"万":val;
    }
  },
  methods: {
       //es6语法async  await
    async getMusic() {
      let res=await this.$api.getMusic()
        console.log(res.data.result);
        this.dt=res.data.result;
        //处理热度位数
      //   for(let i=0;i<this.dt.length;i++ ){
      //   this.dt[i].playCount=(String(this.dt[i].playCount).slice(0,5))
      // }
      },
    },
};
</script>

<style lang="less">
.rem{
  padding-top: 0.8rem;
  padding-bottom: 0.4rem;
.title {
  padding-top: 0.4rem;
  h2 {
    height: 0.4rem;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
    border-left: 2px solid #dd001b;
  }
}
.van-col{
  margin-bottom: 0.2rem;
}
.item {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .hot {
    position: absolute;
    font-size: 12px;
    color: #fff;
    right: 0;
  }
}
.txt {
  width: 100%;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 6px 2px 0 6px;
  min-height: 30px;
  line-height: 1.2;
  box-sizing: border-box;
}
}
</style>