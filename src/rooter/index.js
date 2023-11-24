import VueRouter from 'vue-router'
// 引入组件
import OrderCollect from '../pages/OrderCollect'
import MyBlank from '../pages/MyBlank'

export default new VueRouter({
    routes: [{
        name: 'orderCollect',
        path: '/orderCollect',
        component: OrderCollect
    },
    {
        name: 'myblank',
        path: '/myblank',
        component: MyBlank
    }]
})