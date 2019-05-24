<template>
  <div class="team">
     <van-field label="搜索队员" placeholder="请输入用户名" autofocus/>
    <table>
      <tr>
        <td>账号</td>
        <td>总数</td>
        <td>进行中</td>
        <td>已完成</td>
        <td>成功率</td>
        <td>状态</td>
      </tr>
      <tr v-for="(item,i) of list" :key="i">
        <td>{{item.account}}</td>
        <td>{{item.total}}</td>
        <td>{{item.running}}</td>
        <td>{{item.success}}</td>
        <td>{{((isNaN(item.success/item.total)?'--':(item.success/item.total))*100).toFixed(2)+'%'}}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {account: "testly022",failure: 2, success: 5, total: 10, running: 3}  
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.team{
  margin-top:40px;
  table{
    border-collapse:collapse;
    font-size: 14px;
    width:100%;
    text-align:center;
     th, td{
      border: 1px solid #e8e8e8;
      padding:5px;
    }
  }
}
</style>
