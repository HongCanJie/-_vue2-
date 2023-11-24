<template>
  <el-container>
    <el-aside width="200px"><CommonAside /></el-aside>
    <el-container>
      <el-header><CommonHead /> <CommonTag /></el-header>
      <el-main>
        <PageOne />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "./components/CommonAside";
import CommonHead from "./components/CommonHead";
import CommonTag from "./components/CommonTag";
import PageOne from "./pages/PageOne";
export default {
  name: "App",
  components: { CommonAside, CommonHead, CommonTag, PageOne },
};
</script>

<style >
/* 清除样式 */
* {
  margin: 0;
  padding: 0;
}
.el-container .el-header {
  padding: 0;
}
/* 隐藏滚动条 */
.el-container .el-aside {
  overflow: hidden;
}

.el-container .el-main {
  padding: 10px;
  margin-top: 20px;
  background-color: #f0f2f5;
}
</style>