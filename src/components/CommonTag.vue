<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">导航页名</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "CommonTag",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item {
  height: 35px;
  line-height: 40px;
}
</style>>
