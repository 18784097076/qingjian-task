<template>
  <div class="home">
    <mt-header fixed title="任务平台"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/taskIndex">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">任务首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/myTask">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">我的任务</span>
			</router-link>
			<router-link class="mui-tab-item" to="/team">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">队员管理</span>
			</router-link>
			<router-link class="mui-tab-item" to="/userCenter">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return {
      activeTab:''
    }
  }
}
</script>
