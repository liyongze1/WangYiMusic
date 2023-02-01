<template>
  <div class="hotMusic">
    <div class="hotopct">
      <div class="hot_icon"></div>
      <div class="hot_time">更新日期：01月31日</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.hotMusic {
  position: relative;
  padding-top: 38.9%;
  overflow: hidden;
  background: url(https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=)
    no-repeat;
  background-size: contain;
  .hotopct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    .hot_icon {
      width: 142px;
      height: 67px;
      background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=)
        no-repeat -24px -30px;
      background-size: 166px 97px;
    }
    .hot_time{
        margin-top: 10px;
    }
  }
}
</style>