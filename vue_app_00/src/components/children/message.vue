<template>
    <div class="app-message">
        <!--网页顶部-->
        <mt-header fixed title="网站模板-手机数码"></mt-header>
        <div class="message">
            <!--留言板-->
            <div class="content">
            <span>留言板</span>
            </div>
            <div class="box">
                <div class="mui-card">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <div class="user">
                                    <span class="mui-icon mui-icon-person"></span>
                                    <input type="text" placeholder="姓名(必填)" required></input>
                                </div>
                            </div>
                        </div>
                </div> 
                <div class="mui-card">
                    <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <div class="phone">
                                    <span class="mui-icon mui-icon-email"></span>
                                    <input type="email" placeholder="邮箱"></input>
                                </div>
                            </div>
                    </div>
                </div> 
                <div class="mui-card">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <div class="email">
                                    <span class="mui-icon mui-icon-phone"></span>
                                    <input type="number" placeholder="电话"></input>
                                </div>
                            </div>
                        </div>
                </div> 
                <div class="mui-card">
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                                <div class="words">
                                    <span class="mui-icon mui-icon-chatboxes"></span>
                                    <textarea placeholder="留言" required cols="3" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                </div> 
            </div>
            <mt-button type="primary">提交</mt-button>
        </div>
        <!--引入版权子组件-->
        <copy-box></copy-box>
    </div>
</template>
<script>
    //引入版权子组件
    import copy from "../subchildren/copy.vue"
    export default {
        data(){
            return {}
        },
        //注册版权子组件
        components:{
            "copy-box":copy
        }
    } 
</script>
<style scope>
    .app-message .message{
        margin:57px 7px 7px 7px;
        padding:10px;
        background:#F3F7FF;
    }
     .app-message .content span{
         color:#3285FF;
         font-size:14px;
     }   
     .app-message .box{
         margin:20px 10px;
     }
    .app-message .box .mui-card{
         margin:1px;
    }
     .app-message .box .mui-card .mui-card-content-inner{
         padding:0;
     }
     .app-message .box span{
         margin-left:5px;
     }
     .app-message .box .words{
         position:relative;
     }
     .app-message .box .words span{
         position:absolute;
         left:0;
         top:10px;
     }
     .app-message .box textarea{
         margin-left:34px;
     }
     .app-message .box input,.box textarea{
        width:250px;       
        margin-left:5px;
        font-size:14px;
        margin-bottom: 0px;
        border:none;
     }
     .app-message .mint-button{
         margin:0 0 35px 11px;
         padding:0 130px;
         border-radius:30px;
     }
    
</style>