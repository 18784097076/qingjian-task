<template>
    <div class="task-index">
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    mounted(){
        this.axios.get('http://www.smctask.cn:8080/task/claimable').then((res)=>{
            console.log(res.data)
            if(res.code == 200){
                this.list = res.data.list
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
