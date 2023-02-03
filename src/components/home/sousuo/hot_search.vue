<template>
  <div class="hot_search">
    <!-- 搜索框 -->
    <div class="search">
      <div class="m-input">
        <div class="sear">
          <input
            v-focus
            type="text"
            v-model="inpVal"
            placeholder="搜索歌曲、歌手"
            class="inp"
            name=""
            id=""
          />
          <div class="del" @click="del">
            <i class="del_icon"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 热门搜索 -->
    <div class="search_a" v-if="isShow">
      <h3 class="title">热门搜索</h3>
      <ul class="list">
        <li class="item" v-for="(item, index) in hot_Search" :key="index">
          <a href="javascript:;">{{ item.first }}</a>
        </li>
      </ul>
    </div>
    <!-- 搜索的数据列表展示 -->
    <div class="search_list" v-if="i">
      <h3>搜索"{{ inpVal }}"</h3>
      <div class="search_null" v-if="search_null">暂无查询到此数据</div>
      <ul v-show="item">
        <li
          class="search_item"
          v-for="(item, index) in search_data"
          :key="index"
        >
          <i class="icon_search"></i>
          <span class="search_text">{{ item.keyword }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hot_Search: [],
      search_null: false,
      isShow: true,
      item: true,
      i: false,
      inpVal: "",
      //搜索的数据
      search_data: [],
    };
  },
  //自定义指令自动获取焦点
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
  //网络请求
  created() {
    //普通方式
    // this.$api.hotSearch().then(res=>{
    //     console.log(res);
    // })
    this.hotSearch();
  },
  methods: {
    //利用async await处理网络请求
    async hotSearch() {
      let hot = await this.$api.hotSearch().then((res) => {
        return res.data.result.hots;
      });
      this.hot_Search = hot;
      console.log(hot);
    },
    //搜索数据
    async searchMusic(val) {
      let search = await this.$api
        .searchMusic({
          keywords: val,
          type: "mobile",
        })
        .then((res) => {
          return res.data;
        });
      console.log(search);
      //判断是否查询到数据
      if ("allMatch" in search.result) {
        //查询到赋值
        this.search_data = search.result.allMatch;
      } else {
        // 控制元素显示和隐藏
        this.search_null = true;
        this.item = false;
      }
    },
    del(){
        this.inpVal=null
    }
  },
  //监听器
  //   请求方式	get
  //         参数	是	keywords 	string	关键字
  //         参数	是	type 	    string	'mobile' 移动端 不加就是pc端
  watch: {
    inpVal(val) {
      console.log("输入的值改变了", val);
      if (val) {
        //控制热门搜索的显示和隐藏
        this.isShow = false;
        this.i = true;
        //搜索数据查询
        this.searchMusic(val);
      } else {
        this.isShow = true;
        this.i = false;
      }
    },
  },
};
</script>

<style lang="less">
.hot_search {
  padding-top: 42px;
  .search {
    font-size: 12px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .m-input {
      padding: 15px 10px;
      box-sizing: border-box;
      .van-search {
        width: 100%;
        padding: 0 12px;
      }
      .van-search__content {
        background-color: #ebecec;
      }
    }
    .sear {
      position: relative;
      .inp {
        border: 0;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        background: #eee;
        height: 0.6rem;
        line-height: 0.6rem;
        border-radius: 0.6rem;
        padding-left: 0.2rem;
      }
      .del{
        position: absolute;
        right: 0;
        top: 0;
        width: 0.6rem;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center; 
        align-items: center;
      }
      .del_icon {
        display: inline-block;
        width: 0.28rem;
        height: 0.28rem;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48cGF0aCBkPSJNMTkgOUw5IDE5TTkgOWwxMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWJlY2ViIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9nPjwvc3ZnPg==") no-repeat;
      }
    }
  }
  .search_a {
    padding: 15px 10px 0;
    .title {
      font-size: 12px;
      color: #666;
    }
    .list {
      margin: 10px 0 7px;
      font-size: 0;
      .item {
        display: inline-block;
        height: 0.64rem;
        padding: 0 14px;
        margin-right: 8px;
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 0.64rem;
        color: #333;
        border: 1px solid #d3d4da;
        border-radius: 32px;
        box-sizing: border-box;
      }
    }
  }
}
.search_list {
  h3 {
    margin-left: 0.2rem;
    height: 1rem;
    line-height: 1rem;
    color: #507adf;
    font-size: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .search_null {
    text-align: center;
    font-size: 14px;
    color: #888;
    padding-top: 0.4rem;
  }
  ul {
    padding: 0 10px;
    .search_item {
      padding-left: 10px;
      display: flex;
      -webkit-box-align: center;
      height: 0.9rem;
      align-items: center;
      .icon_search {
        display: inline-block;
        margin-right: 7px;
        width: 15px;
        height: 15px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=);
      }
      .search_text {
        font-size: 15px;
        flex-grow: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        height: 0.9rem;
        line-height: 0.9rem;
      }
    }
  }
}
</style>