<template>
  <div class="login-container">
    <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
      <div class="title">
        <el-dropdown  trigger="click"  class="language_change">
      <span>
      <svg-icon :icon-class="'language'"   />
      </span>
          <el-dropdown-menu slot="dropdown">
          <span @click="changeLanguage('cn')">
            <el-dropdown-item>{{$t('global.language.chinese')}}</el-dropdown-item>
          </span>
            <span @click="changeLanguage('en')">
            <el-dropdown-item>{{$t('global.language.english')}}</el-dropdown-item>
          </span>
          </el-dropdown-menu>
        </el-dropdown>
        <h3>{{$t('login.title')}}
        </h3>
      </div>


      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="people_fill" />
        </span>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" v-bind:placeholder="$t('login.username_placeholder')" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="lock1"></svg-icon>
        </span>
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
                  v-bind:placeholder="$t('login.password_placeholder')"></el-input>
          <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          {{$t('login.loginBtn')}}
        </el-button>
      </el-form-item>
      <div class="tips">
<!--        <span @click="changeLanguage">{{$t('login.tips')}}</span>-->
        <p class="link">Copyright © 2015-2016<a href="https://www.ss-soft.com/" > ss-soft</a>. All rights reserved</p>
      </div>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length==0) {
        callback(new Error(this.$t('login.username_invaild')))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error(this.$t('login.password_invaild')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    changeLanguage(){
      if(this.$i18n.locale==='cn'){
        this.$i18n.locale='en'
      }else{
        this.$i18n.locale='cn'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#1a65ba;
$dark_gray:#eee;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 375px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .language_change{
    /*position: absolute;*/
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      float: right;
      &:first-of-type {
        margin-right: 16px;
      }
      cursor: pointer;
    }
    .link{
      font-size: 12px;
      text-align: center;
      color: #9fa3ab;
      a{
        color: $light_gray;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 30px auto;
    position: relative;
    /*text-align: center;*/
    font-weight: bold;
    .language_change{
      position: absolute;
      right: 0;
      color: white;
      font-size: 16px;
    }
    h3{
      text-align: center;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
