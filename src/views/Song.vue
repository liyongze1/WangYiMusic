<template>
  <div>
    {{ id }}
    <!-- <audio :src="url" controls></audio> -->
    <aplayer :music="{ ...audio }" :showlrc="true" v-if="audio.url"></aplayer>
    <div class="box_a" @click="bf">
      <div class="box_b">
        <!-- 外部转 -->
        <div class="box_wai">
          <div class="rte"></div>
        </div>
        <!-- 内部转 -->
        <div class="box_img">
          <div class="user_a">
            <img
              src="https://p2.music.126.net/Z43fgXqqNtWUr9HRENxQvw==/109951168240072280.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
              alt=""
             ref="rotate" :style="{'animation-play-state':zanting}"/>
          </div>
        </div>
      </div>
      <span class="bofang" v-if="bofang"></span>
    </div>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
export default {
  components: {
    aplayer,
  },
  //接受路由的参数
  props: ["id","name"],
  data() {
    return {
      bofang: true,
      zanting:"paused",
      audio: {
        title:"", //歌曲名称
        artist: "演唱者", //演唱者
        url: "", //音频地址
        //  pic: "封面图片URL",//封面图片URL
        lrc: "歌词或歌词文件的URL", //歌词或歌词文件的URL
      },
    };
  },
  created() {
    //获取url地址
    this.song();
    //获取歌词
    this.songLyric();
    //歌曲名称
    this.audio.title=this.$route.params.name
  },
  methods: {
    bf(){
        this.bofang=!this.bofang;
        this.zanting=this.bofang?"paused":"running";
        console.log(this.$route)
        // if(this.bofang){
        //     this.bofang=false
        //     this.$refs.rotate.style="animation: matrix 10s infinite linear;"
        // }else{
        //     this.bofang=true
        //     this.$refs.rotate.style.animation="matrix paused"
        // }
    },
    //获取url地址
    async song() {
      let Song = await this.$api.songUrl({ id: this.id });
      console.log(Song);
      this.audio.url = Song.data.data[0].url;
    },
    //获取歌词
    async songLyric() {
      let lyric = await this.$api.songLyric({ id: this.id });
      console.log(lyric);
      this.audio.lrc = lyric.data.lrc.lyric;
    },
  },
};
</script>

<style>
.box_a {
  position: relative;
}
.box_b {
  width: 247px;
  height: 247px;
  margin: 0 auto;
  position: relative;
}
.box_wai {
  width: 100%;
  height: 100%;
  background: url(//s3.music.126.net/mobile-new/img/disc.png?d3bdd10…=)
    no-repeat;
  background-size: contain;
}
.box_img {
  position: absolute;
  top: 32px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 184px;
  height: 184px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: matrix(0.99834, -0.0575893, 0.0575893, 0.99834, 0, 0) matrix(-0.990728, 0.135847, -0.135847, -0.990728, 0, 0); */
}
.user_a > img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  animation: matrix 10s infinite linear;
}
@keyframes matrix {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.bofang {
  position: absolute;
  width: 56px;
  height: 56px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==)
    no-repeat 0 0;
  background-size: contain;
}
.aplayer-music{
    font-size: 0 !important;
}
</style>