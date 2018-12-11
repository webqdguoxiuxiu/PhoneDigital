<template>
    <div class="app-newsinfo">
        <div class="header">
           <div class="left"><router-link to="/home"><span class="mui-icon mui-icon-arrowleft"></span></router-link></div>
           <div class="right"><a><span class="mui-icon mui-icon-redo"></span></a></div>
        </div>
        <div class="box">
            <div class="title">
                <span>{{list.title}}</span>
            </div>
            <div class="time">
                <span>{{list.time}}</span>
            </div>
            <div class="details">
                <span>{{list.content}}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[],
                lid:this.$route.query.lid
            }
        },
        created(){
                this.axios.get("http://127.0.0.1:3000/newslist").then(res=>{
                    //console.log(res);
                    this.list=res.data[this.lid-1];
                    console.log(this.list);
                });
        }
    }
</script>
<style scope>
    .app-newsinfo{
        background:#fff;
    }
    .app-newsinfo .header{
        height:50px;
        background:#3285FF;
        position:relative;
    }
    .app-newsinfo .header .left{
        width:30px;
        height:30px;
        background:#C2DBFF;
        border-radius:50%;
        position:absolute;
        left:10px;
        top:10px;
        padding:3px;
    }
    
    .app-newsinfo .header .right{
        width:30px;
        height:30px;
        background:#C2DBFF;
        border-radius:50%;
        position:absolute;
        right:10px;
        top:10px;
        padding:3px;
    }
    .app-newsinfo .header .left a,.right a{
        color:#000;
    }
    .app-newsinfo .box{
        padding:10px;
        color:#666666;
        font-size:16px;
        text-align:justify;
    }
    .app-newsinfo .box .time,.details{
        margin-top:7px;
    }
    .app-newsinfo .box .time{
        font-size:13px;
    }
</style>