<template>
  <div class="forget-pwd">
    <form class="mui-input-group">
      <div class="mui-input-row">
          <label>手机号</label>
          <input type="text">
      </div>
      <div class="mui-input-row">
          <label>验证码</label>
          <input type="password">
      </div>
      <div class="mui-button-row">
          <mt-button size="large" type="primary">确认</mt-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.forget-pwd .mui-input-group{
  margin-top:150px;
}
</style>
