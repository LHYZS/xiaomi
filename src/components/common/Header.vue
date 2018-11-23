<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>

          <b-nav-item >
            <router-link to="/index">首页</router-link>
          </b-nav-item>

          <b-nav-item >
            <b-link href="">华为官网</b-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/">荣耀官网</router-link>
          </b-nav-item>

          <b-nav-item v-if="user===null">
            <router-link to="/">花粉俱乐部</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/">帮助中心</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/">V码(优购码)</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link to="/">企业购</router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/">Select Region</router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/">下载APP</router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/">更多精彩</router-link>
          </b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="user===null">
            <router-link to="/login">请登陆</router-link>
          </b-nav-item>
          <b-nav-item-dropdown right v-if="user!=null">
            <b-dropdown-item>
              <router-link to="/user">
                个人中心
              </router-link>
            </b-dropdown-item>
            <template slot="button-content">
              <b-img rounded="circle" width="35" height="35" src="/static/img/101.jpg"/>
            </template>
            <b-dropdown-item>
              <router-link to="/set">
                设置
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item @click="logout">
              退出
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item>
            <router-link to="/">我的订单</router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/cart">购物车</router-link>
          </b-nav-item>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <router-link to="/">
        <b-navbar-brand>
          <b-img style="height: 60px; width: 150px" src="../static/img/logo1.png"/>
          <b-img style="height: 60px; width: 150px" src="../static/img/logo2.png"/>
        </b-navbar-brand>
      </router-link>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav >

          <b-nav-item>
            <router-link to="/index"><p>手机</p></router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/download"><p>笔记本电脑</p></router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/index"><p>平板&穿戴</p></router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/download"><p>智能家居</p></router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/index"><p>配件</p></router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/download"><p>荣耀专区</p></router-link>
          </b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <div class="btn">
          <router-link to="/search"><button style="width: 150px; height: 30px;background: cornflowerblue">搜索</button></router-link>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {
    data() {
      return {
        user: JSON.parse(localStorage.getItem('loginUser'))
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  .box {
    border-bottom: 1px solid #eef1f6;
    height: 55px;
  }

  a {
    color: #b0b0b0;
  }

  .btn{
    margin-left: 800px;
  }

  p{
    color: black;
    font-size: 17px;
  }
</style>
