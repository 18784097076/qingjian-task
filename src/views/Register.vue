<template>
  <div class="register">
    <div class="mui-card">
    <!--页眉，放置标题-->
      <div class="mui-card-header">
        <h3>注册</h3>
      </div>
      <!--内容区-->
      <div class="mui-card-content">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>邀请码</label>
            <input type="text">
          </div>
          <div class="mui-input-row">
            <label>昵称</label>
            <input type="text">
          </div>
          <div class="mui-input-row">
            <label>手机号</label>
            <input type="text">
          </div>
          <div class="mui-input-row">
            <label>输入密码</label>
            <input type="password">
          </div>
          <div class="mui-input-row">
            <label>确认密码</label>
            <input type="password">
          </div>
        </form>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <mt-button size="large" type="primary">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.register{
  .mui-card{
    .mui-card-header{
      >h3{
        margin:0 auto;
      }
    }
  }
}
</style>
