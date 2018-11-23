<template>
  <div class="bg">
    <div class="main">
      <b-form-group id="exampleInputGroup1"
                    label="邮箱"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="请输入邮箱">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2"
                    label="密码"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="password"
                      required
                      placeholder="请输入密码">
        </b-form-input>
      </b-form-group>
      <b-button type="button" variant="primary" class="sign-in-btn" @click="onClick">登陆</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      onClick() {
        var that = this;
        this.$http
          .post('http://localhost:8080/user/sign_in', {"email": this.email, "password": this.password})
          .then(function (response) {
            localStorage.setItem("loginUser", JSON.stringify(response.data.data))
            that.$router.push("/")
          })
      }
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #EEE;
    width: 100%;
    height: 800px;
  }
  .main {
    width: 600px;
    margin: 100px auto 0 420px;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    vertical-align: middle;
    display: inline-block;
    margin-left: 550px;
  }
  .sign-in-btn {
    width: 300px;
    height: 40px;
    border-radius: 50px;
    margin-left: 100px;
    margin-top: 30px;
  }
</style>
