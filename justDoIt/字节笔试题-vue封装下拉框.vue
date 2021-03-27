<!-- 封装下拉选择+模糊搜索 -->
<template>
  <div>
    <div class="select-type">
      <input type="text" v-model="msg" @focus="showList" @input="iptChange" placeholder="请输入查询内容" />
      <span class="search-btn">搜索</span>
      <ul class="search-option" v-show="isSearch">
        <li v-for="(item,i) in optionsList" :key="i" @click="selectItem(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      optionsList: ["Jack", "Lucy", "Tom"],
      isSearch: false
    };
  },

  components: {},

  computed: {},

  methods: {
    //选项的显隐
    showList() {
      this.isSearch = true;
    },
    //选中选项赋值
    selectItem(item) {
      this.msg = item;
      this.isSearch = false;
    },
    //手动输入，模糊搜索
    iptChange() {
      if (this.msg != "") {
        this.optionsList = this.optionsList.filter(item => {
          return item.indexOf(this.msg) != -1;
        });
      } else {
        this.isSearch = true;
        this.optionsList = ["Jack", "Lucy", "Tom"];
      }
    }
  },

  mounted() {}
};
</script>
<style lang='scss' scoped>
.select-type {
  width: 250px;
  height: 200px;
  position: relative;
  input {
    display: inline-block;
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    padding-left: 10px;
  }
}
.search-btn {
  position: absolute;
  top: 14px;
  right: 10px;
  cursor: pointer;
}
.search-option {
  margin-top: 5px;
  li {
    list-style: none;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    border: 1px solid #eee;
  }
  li:hover {
    background-color: cadetblue;
  }
}
</style>

