<template>
  <div class="pageone_container">
    <el-row
      ><el-button type="primary" plain size="small" @click="showContent"
        >按订单汇总</el-button
      ><el-button type="primary" plain size="small" @click="blankContent"
        >按商品汇总</el-button
      ><el-button type="primary" plain size="small" @click="blankContent"
        >按客户汇总</el-button
      ><el-button type="primary" plain size="small" @click="blankContent"
        >按日汇总</el-button
      ></el-row
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PageOne",
  methods: {
    // 展示内容(catch解决同一路由重复点击的问题)
    showContent() {
      // console.log(this.$router);
      this.$router
        .push({
          name: "orderCollect",
        })
        .catch((err) => err);
    },
    // 空白页
    blankContent() {
      this.$router
        .push({
          name: "myblank",
        })
        .catch((err) => err);
    },
  },
};
</script>

<style scoped>
.pageone_container {
  height: 500px;
  padding: 10px;
  background-color: #fff;
}
.el-row {
  padding-top: 0px;
  padding-bottom: 10px;
  padding-right: 0;
  padding-left: 0;
}

/* tab按钮 */
.pageone_container .el-row .el-button {
  /* color: black; */
  /* background-color: #fff; */
  border-color: #dcdfe6;
}
</style>