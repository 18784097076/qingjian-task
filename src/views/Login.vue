<template>
  <div class="login">
    <div class="mui-card">
    <!--页眉，放置标题-->
      <div class="mui-card-header">
        <h3>登录</h3>
      </div>
      <!--内容区-->
      <div class="mui-card-content">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" placeholder="请输入用户名" v-model="account">
          </div>
          <div class="mui-input-row">
              <label>密码</label>
              <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="mui-input-row sub-btn">
            <router-link to="/register">新用户注册</router-link>
            <router-link to="/forgetPwd">忘记密码</router-link>
          </div>
        </form>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <mt-button size="large" type="primary" @click="login">登录</mt-button>
      </div>
    </div>  
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      account:'',
      password:'',
      pwd:''
    }
  },
  methods:{
    login(){
      this.setSha()
      this.axios.post('http://www.smctask.cn:8080/user/login',{account:this.account,password:this.pwd,role:3}).then((res)=>{
        console.log(res.data)
        if(res.data.code == 200){
          Toast({
            message: '登录成功',
            position: 'center',
            duration: 2000
          });
          this.$store.commit('setToken',res.data.data.user.token)
          this.$router.push('/home')
        }
      })
    },
    setSha(){
      let sha256 = require("js-sha256").sha256
      this.pwd = sha256(this.password)
    }
  }
}
</script>

<style lang="scss" scoped>
.login .mui-card{
  margin-top:150px;
}
.login .mui-card .mui-card-header h3{
  margin:0 auto;
}
.login .mui-card .mui-card-content .sub-btn{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

