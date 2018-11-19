<template>
  <b-tabs>
    <b-tab title="登陆">
      <b-form ref = "AccountForm" :model = "AccountForm"   rules = "rules" >
        <br><br>
        <div style="width: 500px;height: 50px">
          <b-form-item  prop = "user" >
            <b-form-input type="text" placeholder="账号"></b-form-input>
          </b-form-item>
          <b-form-item  prop = "password">
            <b-form-input type="text" placeholder="密码"></b-form-input>
          </b-form-item>
        </div><br><br>
        <b-radio>记住我</b-radio>                   登陆遇到问题？<br><br>
        <button @click = "login"  style="height: 50px;width: 500px;background: cornflowerblue">登录</button><br>
      </b-form>
    </b-tab>
  </b-tabs>
</template>

<script>
  export default {
    data() {
      return {
        AccountForm : {
          username:'admin',
          password:'123456',
        },
        rules: {
          username :[
            {required: true, message: '请输入账号',trigger: 'blur'},
            // { validator: validaePass }
          ],
          password: [
            {required: true,message: '请输入密码', trigger: 'blur'},
            // { validator: validaePass2 }
          ]
        },
        checked: false
      };
    },
    methods: {
      login() {
        this.$router.replace('/index')
      }
    }
  }

</script>

<style scoped>

</style>
