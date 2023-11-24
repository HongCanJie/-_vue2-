import Vue from 'vue'
import App from './App.vue'
// 引入elementUI组件库
import ElementUI from 'element-ui'
// 引入elementUI样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器rooter配置
import Router from './rooter/index'
// 关闭生产提示            
Vue.config.productionTip = false;
// 使用脚本
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
