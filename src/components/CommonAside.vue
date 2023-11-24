<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#1378e6"
  >
    <h3>A2</h3>
    <!-- 三级菜单显示部分 -->
    <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-submenu
        v-for="subItem in item.childrenList"
        :key="subItem.name"
        :index="subItem.name"
      >
        <span slot="title">{{ subItem.label }}</span>
        <el-menu-item
          v-for="menuItem in subItem.children"
          :key="menuItem.key"
          :index="menuItem.name"
          >{{ menuItem.label }}</el-menu-item
        >
      </el-submenu>
    </el-submenu>

    <!-- 二级菜单显示部分 -->
    <el-submenu
      v-for="item in hasChildrenList"
      :key="item.name"
      :index="item.name"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="menuItem in item.childrenList"
          :key="menuItem.name"
          :index="menuItem.name"
        >
          <!-- 判断是否是pageManage，如果是，则触发方法 -->
          <template v-if="menuItem.name == 'pageManage'">
            <template>
              <div>
                {{ menuItem.label }}
              </div>
            </template>
          </template>
          <template v-else>
            {{ menuItem.label }}
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          name: "home",
          label: "首页",
          icon: "s-home",
          childrenList: [
            {
              name: "null",
              label: "  ",
              children: [{ name: "testEveryDay", label: "每日质检" }],
            },
          ],
        },
        {
          name: "smartStream",
          label: "智能直播",
          icon: "video-play",
          childrenList: [
            {
              name: "page1",
              label: "页面1",
            },
            {
              name: "page2",
              label: "页面2",
            },
          ],
        },
        {
          name: "user",
          label: "系统设置",
          icon: "user",
          childrenList: [
            {
              name: "userManage",
              label: "员工管理",
            },
            {
              name: "roleManage",
              label: "角色管理",
            },
            {
              name: "pageManage",
              label: "落地页设置",
              url: "PageOne.vue",
            },
          ],
        },
        {
          name: "college",
          label: "后端学院",
          icon: "user",
          childrenList: [
            { name: "backDetail", label: "回放详情" },
            { name: "board", label: "后端看板" },
          ],
        },
        {
          name: "business",
          label: "前端业务",
          icon: "user",
          childrenList: [{ name: "stage", label: "单日阶段" }],
        },
        {
          name: "clientManage",
          label: "客户管理",
          icon: "user",
          childrenList: [
            { name: "contract", label: "定金/合同" },
            { name: "sign", label: "签署记录" },
            { name: "refund", label: "退款" },
          ],
        },
        {
          name: "epibolyPublish",
          label: "外包发布",
          icon: "user",
          childrenList: [{ name: "epibolyMessage", label: "外包信息" }],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    // 没有子菜单
    // noChildrenList() {
    //   console.log(this.menu);
    //   return this.menu.filter((item) => !item.childrenList);
    // },
    // 有子菜单且只有二级菜单
    hasChildrenList() {
      return this.menu.filter(
        (item) => item.childrenList && !item.childrenList[0].children
      );
    },
    // 有子菜单且有二级和三级菜单
    hasChildren() {
      return this.menu.filter(
        (item) => item.childrenList && item.childrenList[0].children
      );
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  min-height: 400px;
}
h3 {
  color: #fff;
}
</style>