<template>
  <div class="header">
     <div class="left">
      <img src="https://s1.music.126.net/style/favicon.ico?v20180307" alt="">
      <span>网易云音乐</span>
     </div>
     <div class="right">
      <van-button round type="info" color="#ffffff">下载APP</van-button>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.header{
  width: 100%;
  height: 1.68rem;
  background-color: #d43c33;
  color: #fff;
  display: flex;
  font-weight: 400;
  justify-content:Space-between;
  .left{
    span{
    font-size: 20px;
    font-weight: 400;
  }
  }
  .right{
    height: 1.68rem;
    line-height: 1.4rem;
  }
  .van-button{
    width: 2rem;
    height: 0.72rem;
    .van-button__text{
    color:#d43c33 ;
  }
  }
 
}
</style>