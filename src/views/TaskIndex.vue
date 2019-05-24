<template>
    <div class="task-index">
        <mt-loadmore :top-method="loadTop" ref="loadmore">
            <div class="task-list">
                <div class="mui-card" v-for="(item,i) of list" :key="i">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        {{item.createTime | dateTime}}
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <p>{{item.updateTime}}</p> <mt-button type="primary" size="small" @click="receiveTask(item.id)">领取任务</mt-button>
                    </div>
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import { Indicator,Toast } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            list:[
                {id: 651968, phone: "15006501560", qrUrl: null, createTime: 1558573084073, updateTime: 1558573084073},
                {id: 651970, phone: "15508818884", qrUrl: null, createTime: 1558573086390, updateTime: 1558573086390},
                {id: 651973, phone: "15603140015", qrUrl: null, createTime: 1558573103625, updateTime: 1558573103625},
                {id: 651974, phone: "15505874129", qrUrl: null, createTime: 1558573116897, updateTime: 1558573116897},
                {id: 651975, phone: "15904813282", qrUrl: null, createTime: 1558573122462, updateTime: 1558573122462},
                {id: 651975, phone: "15904813282", qrUrl: null, createTime: 1558573122462, updateTime: 1558573122462},
                {id: 651975, phone: "15904813282", qrUrl: null, createTime: 1558573122462, updateTime: 1558573122462},
                {id: 651975, phone: "15904813282", qrUrl: null, createTime: 1558573122462, updateTime: 1558573122462}
            ]
        }
    },
    mounted(){
        //{"msg":"success","code":200,"data":{"list":{"pn":1,"ps":10,"total":2,"list":[{"id":666572,"phone":"18006760123","qrUrl":null,"createTime":1558659559027,"updateTime":1558659559027,"status":0,"publisher":null,"receiver":null},{"id":666574,"phone":"13907451739",
        //"qrUrl":null,"createTime":1558659567581,"updateTime":1558659567581,"status":0,"publisher":null,"receiver":null}]}}}
        this.axios.get('http://www.smctask.cn:8080/task/claimable').then((res)=>{
            console.log(res.data)
            // if(res.code == 200){
            //     this.list = res.data.list
            // }
        })
    },
    methods:{
        loadTop(){
            Indicator.open('下拉刷新...');
            //这里发送请求，请求最新的任务列表
            this.$refs.loadmore.onTopLoaded();
            setTimeout(()=>{
                Indicator.close()
            },1000)
        },
        receiveTask(id){
            //领取任务
            //{"msg":"success","code":200,"data":{"info":{"qrUrl":"https://weixin110.qq.com/s/20e7dbe36a7",
            //"update":1558659508534,"create":1558659485635,"publisher":"112233","phone":"13108485597"}}}
            //{"msg":"任务不存在","code":500}
            var url = 'http://www.smctask.cn:8080/task/claim?tid='+id;
            this.axios.put(url,{tid:id}).then((res)=>{
                if(res.code == 200){

                }else{
                  Toast({
                    message: '领取失败',
                    duration: 1000
                    });  
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.task-index{
    .task-list{
        margin-top:40px;
        .mui-card{ 
            .mui-card-content{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:10px 15px;
            }
        }
    }
}
</style>
