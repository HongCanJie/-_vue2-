<template>
  <div class="header_container">
    <!-- 左边容器 -->
    <div class="left_container">
      <i class="el-icon-s-fold"></i>
      <h4>欢迎进入管理系统</h4>
      <a href="javaScript:;" class="book">内部系统使用手册></a>
    </div>
    <!-- 右边容器 -->
    <div class="right_container">
      <a href="javaScript:;" class="day"
        ><i class="el-icon-date"></i> 授课日程</a
      >
      <a href="javaScript:;" class="task"
        ><i class="el-icon-document-copy"></i> 导入/导出任务</a
      >
      <img src="../assets/flower.png" />
      <a href="javaScript:;">泡泡侠</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHead",
};
</script>

<style>
a {
  text-decoration: none;
}
/* 顶部 */
.header_container {
  height: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
}

/* 顶部左侧 */
.left_container .el-icon-s-fold {
  cursor: pointer;
  font-size: 25px;
  padding: 0;
  line-height: 50px;
  margin-left: 20px;
}

.left_container h4,
a {
  display: inline-block;
  vertical-align: middle;
  font-size: 15px;
  font-weight: 350px;
  margin-left: 10px;
  height: 50px;
  line-height: 40px;
}

.book {
  color: #2991fb;
}

/* 顶部右侧 */
.right_container a {
  display: inline-block;
  color: #101010;
  line-height: 50px;
  margin-right: 10px;
}

.right_container img {
  height: 20px;
  width: 13px;
  vertical-align: middle;
}

.right_container .day {
  font-size: 13px;
  color: #ff730e;
}

.right_container .task {
  font-size: 13px;
  color: #9a9a9a;
}
</style>