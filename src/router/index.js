import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '主页'}
        },
        {
          //商品详情
          path: '/c/:id',
          component: resolve => require(['../components/page/Detail.vue'], resolve),
          meta: {title:'商品详情'}
        },
        {
          //购物车
          path: '/cart',
          component: resolve => require(['../components/page/Cart.vue'], resolve),
          meta: {title:'购物车'}
        },
        {
          //登陆
          path: '/login',
          component: resolve => require(['../components/page/Login.vue'], resolve),
          meta: {title:'登陆'}
        },
        {
          //搜索
          path: '/search',
          component: resolve => require(['../components/page/Search.vue'], resolve),
          meta: {title:'搜索'}
        },
      ]
    },
  ]
})
