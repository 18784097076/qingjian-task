<template>
    <div class="my-task">
        <div class="date-content">
            <div>
                <mt-button icon="" class="start-date" @click="startDate">
                {{new Date(start).toLocaleDateString()}}
                </mt-button>
                <van-popup v-model="showDatePicker1"  style="width:100%" >
                    <van-datetime-picker @cancel="dateCancel1" @confirm="dateStartConfirm" type="date" v-show="showDatePicker1" :min-date="minDate" :max-date="maxDate"/>
                </van-popup>
            </div> 
            <span style="margin:0 10px;line-height:40px;"> - </span>
            <div>
                <mt-button icon="" class="end-date" @click="endDate">
                {{new Date(end).toLocaleDateString()}}
                </mt-button>
                <van-popup v-model="showDatePicker2"  style="width:100%" >
                    <van-datetime-picker @cancel="dateCancel2" @confirm="dateEndConfirm" type="date" v-show="showDatePicker2" :min-date="minDate" :max-date="maxDate"/>
                </van-popup>
            </div>
            <mt-button size="small" @click="rangeTask">确认</mt-button>                      
        </div>
        <table>
            <tr>
                <td>类别</td>
                <td>总数</td>
                <td>进行中</td>
                <td>成功</td>
                <td>失败</td>
                <td>超时</td>
                <td>成功率</td>
            </tr>
            <tr>
                <td>个人</td>
                <td>{{individual.total}}</td>
                <td>{{individual.running}}</td>
                <td>{{individual.success}}</td>
                <td>{{individual.failure}}</td>
                <td>{{individual.timeout}}</td>
                <td>{{((isNaN(individual.success/individual.total)?'--':(individual.success/individual.total))*100).toFixed(2)+'%'}}</td>
            </tr>
        </table>
        <van-tabs v-model="active" @click="handleClick">
            <van-tab title="全部">
                <div class="task-list">
                    <div @click="taskDetail(item.qrUrl,item.status)" class="task-item" v-for="(item,i) of list" :key="i">
                        <div class="task-status" :style="{color:statusColor(item.status)}">
                            {{item.status | status}}
                        </div>
                        <div class="task-time">
                            {{item.createTime | dateTime}}
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-dialog v-model="show" style="text-align:center">
                <div class="mui-card">
                    <div class="mui-card-header">
                        <span>任务详情</span>
                        <span :style="{color:getColor(taskStatus)}">{{taskStatus | status}}</span>
                    </div>
                    <div class="mui-card-content">
                        <img :src="qrcodeData">
                    </div>
                    <div class="mui-card-footer">
                        {{qrcodeUrl}}
                    </div>
                </div>
            </van-dialog>
            <van-tab title="进行中">内容 2</van-tab>
            <van-tab title="成功">内容 3</van-tab>
            <van-tab title="失败">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>

export default {
    data(){
        return {
            show:false,
            qrcodeData:'',
            qrcodeUrl:'',
            taskStatus:'',
            active:0,
            showDatePicker1:false,
            showDatePicker2:false,
            minDate:new Date(2019,0,1),
            maxDate:new Date(),
            start:new Date().getTime(),
            end:new Date().getTime()+86400000,
            list:[
                {id: 585835,phone: "17728296946",status: 3,qrUrl: "https://weixin110.qq.com/s/a94db623641",updateTime: 1557655277784,createTime: 1557654969178,publisher: "W007",receiver: null},
                {id: 585835,phone: "17728296946",status: 3,qrUrl: "https://weixin110.qq.com/s/a94db623642",updateTime: 1557655277784,createTime: 1557654969178,publisher: "W007",receiver: null},
                {id: 585835,phone: "17728296946",status: 2,qrUrl: "https://weixin110.qq.com/s/a94db623643",updateTime: 1557655277784,createTime: 1557654969178,publisher: "W007",receiver: null},
                {id: 585835,phone: "17728296946",status: 2,qrUrl: "https://weixin110.qq.com/s/a94db623644",updateTime: 1557655277784,createTime: 1557654969178,publisher: "W007",receiver: null}
            ],
            individual:{failure: 1,running: 0,success: 0,timeout: 0,total: 1,unclaimed: 0}
        }
    },
    mounted(){
       
    },
    methods:{
        rangeTask(){
            let url = `http://www.smctask.cn:8080/task/statistic?start=${this.start}&end=${this.end}`
                this.axios.get(url).then((res)=>{
                console.log(res)
            })
        },
        dateStartConfirm(value){
             this.showDatePicker1  = false
             console.log("起始时间"+value)
             this.start = new Date(value).getTime()
             console.log(this.start)
        },
        dateEndConfirm(value){
             this.showDatePicker2  = false
              console.log("截至时间"+value)
             this.end = new Date(value).getTime()
             console.log(this.end)
        },
        dateCancel1(value){
             this.showDatePicker1  = false
        },
        dateCancel2(value){
             this.showDatePicker2  = false
        },
        startDate(){
           this.showDatePicker1  = true 
        },
        endDate(){
           this.showDatePicker2  = true            
        },
        getColor(status){
            if(status == 3 ){
                return 'red'
            }else if(status == 2){
                return 'green'
            }
        },
        statusColor(status){
            if(status == 3){
                return 'red'
            }else if(status ==2){
                return 'green'
            }
        },
        taskDetail(qrurl,status){
            this.show = true
            this.qrcodeUrl = qrurl
            this.taskStatus = status
            var qrcode = require('qrcode')
            console.log(qrcode)
            qrcode.toDataURL(qrurl,{
                errorCorrectionLevel:'H'
            },(err,url)=>{
                this.qrcodeData = url
                console.log(url)
            })
        },
        handleClick(index,title){
            if(index==0){
                console.log('请求全部')
            }else if(index==1){
                console.log('请求进行中')
            }else if(index==2){
                console.log('请求成功')
            }else if(index==3){
                console.log('请求失败')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.my-task{
    margin-top:40px;
    .date-content{
        display: flex;
        align-items: center;
    }
    .task-list{
        .task-item{
            display: flex;
            justify-content: space-between;
            padding:10px 15px;
        }
    }
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
