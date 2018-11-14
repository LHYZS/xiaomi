<template>
  <div>
  <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>

        <b-nav-item v-if="token===null">
          <router-link to="/cart">首页</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <b-link href="https://www.miui.com/">华为官网</b-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="https://www.miui.com">荣耀官网</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="https://iot.mi.com/new/index.html">花粉俱乐部</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="https://i.mi.com/#/">帮助中心</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/index">V码(优购码)</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">企业购</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">Select Region</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">下载APP</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">更多精彩</router-link>
        </b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="token===null">
          <router-link to="/login">请登陆</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/sign-up">注册</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/sign-up">我的订单</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/cart">购物车</router-link>
        </b-nav-item>

        <b-nav-item-dropdown right v-if="token!=null">
          <!-- Using button-content slot -->
          <b-dropdown-item>
            <router-link to="/user">
              个人中心
            </router-link>
          </b-dropdown-item>
          <template slot="button-content">
            <b-img rounded="circle" width="35" height="35" src="../static/img/101.jpg"/>

          </template>
          <b-dropdown-item>
            <router-link to="/set">
              设置
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item href="#">退出</b-dropdown-item>
        </b-nav-item-dropdown>
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
      <b-navbar-nav>

        <b-nav-item v-if="token===null">
          <router-link to="/index">手机</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">笔记本电脑</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/index">平板&穿戴</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">智能家居</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/index">配件</router-link>
        </b-nav-item>

        <b-nav-item v-if="token===null">
          <router-link to="/download">荣耀专区</router-link>
        </b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <div class="searchbox">
        <el-autocomplete
          v-model="accountSearch"
          :fetch-suggestions="accounQuerySearchAsync"
          @select="accountHandleSelect"
          :debounce=10
          placeholder="请输入商品名称"
        >
        </el-autocomplete>
        <el-button @click="accountFind">搜索</el-button>
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
        token: null
      }
    },
    computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods: {
      // 用户名下拉菜单选择事件
      handleCommand(command) {
        if (command == 'loginout') {
          localStorage.removeItem('ms_username')
          this.$router.push('/login');
        }
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
    color:#b0b0b0;
  }


</style>
