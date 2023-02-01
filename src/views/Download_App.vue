<template>
  <div class="bkg" ref="bkg">
    <div class="bkg_img">
      <div class="tishi">
        <p>若您已安装了网易云音乐，</p>
        <p>↑ ↑ 请下拉并点击“打开”按钮 ↑ ↑</p>
      </div>
      <p id="s">(若无打开按钮，则 <a id="open">点此打开</a>)</p>
    </div>
    <div class="wrap">
      <div class="logo"></div>
      <a href="javascript:;" class="download">立即下载</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.bkg.style.height = document.documentElement.clientHeight + "px";
    // document.documentElement.clientHeight
  },
};
</script>

<style lang="less">
.bkg {
  position: relative;
  width: 100%;
  height: 100%;
}
.bkg_img {
  width: 100%;
  height: 100%;
  background: url(http://p3.music.126.net/3PJacreCq-eDuVDU4RFTQA==/18935789253812331.jpg)
    no-repeat 0 center;
  background-size: cover;
  text-align: center;
  .tishi {
    padding-top: 16px;
  }
  p {
    font-size: 13px;
    color: #fff;
  }
  #s {
    color: #888;
    padding-top: 16px;
    #open {
      font-size: 12px;
      color: #888;
      text-decoration: underline;
    }
  }
}
.wrap {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  .logo {
    width: 108px;
    height: 108px;
    margin: 0 auto;
    background: url(http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg)
      no-repeat;
    background-size: 100% auto;
  }
  .download{
    margin-top: 40px;
    display: block;
    width: 188px;
    height: 46px;
    line-height: 46px;
    background: #311412;
    border: 1px solid #7c6a69;
    border-radius: 4px;
    color: #fff;
    font-size: 24px;
  }
}
</style>