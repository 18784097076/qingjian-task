<template>
    <div class="user-center">
        <div class="balance">
            <div class="header">欢迎 testly02</div>
            <div class="content">余额 <span>0.00</span></div>
        </div>
        <van-cell title="账单" is-link to="/billDetail" />
        <div>
            <van-cell title="修改密码" is-link @click="updatePwd"/>
            <van-dialog @confirm="confirmUpdatePwd" v-model="showUpdatePwd" title="修改密码" show-cancel-button>
                <van-cell-group>
                    <van-field label-width="60px" v-model="oldPwd" label="原密码" placeholder="请输入旧密码" />
                    <van-field label-width="60px" v-model="newPwd" label="新密码" placeholder="请输入新密码" />
                    <van-field label-width="60px" v-model="conNewPwd" label="确认密码" placeholder="确认新密码" />
                </van-cell-group>
            </van-dialog>
        </div>
        <div>
            <van-cell title="退出登录" is-link @click="signOut"/>
            <van-dialog @confirm="confirmSignOut" v-model="showSignOut" title="退出登录" show-cancel-button>      
            </van-dialog>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return {
            showUpdatePwd:false,
            showSignOut:false,
            oldPwd:'',
            newPwd:'',
            conNewPwd:''
        }
    },
    methods:{
        updatePwd(){
            console.log('修改密码')
            this.showUpdatePwd = true
        },
        signOut(){
            console.log('退出登录')
            this.showSignOut = true
        },
        confirmUpdatePwd(){
            console.log('确认修改密码')
            //这里可以发送请求，修改原密码
        },
        confirmSignOut(){
            console.log('确认退出登录')
            //这里发送请求，退出登录
        }
    }
  
}
</script>

<style lang="scss" scoped>
.user-center{
    margin-top:40px;
    .balance{
        background: #26a2ff;
        color:#fff;
        .header{
            padding:5px 10px;
        }
        .content{
            padding:5px 10px;
            span{
                font-size:50px;
            }
        }
    }
}
</style>
