<template>
    <div class="app-copy">
        <!--回到顶部-->
        <div class="top">
           <div class="right">
                <a href="#">
                    <span>Top</span>
                    <div></div>
                </a>
           </div>
        </div>
        <!--版权-->
        <div class="copyRight">
            <p>&copy;2018&nbsp;版权所有</p>
            <p>本站使用&nbsp;凡科建站&nbsp;搭建&nbsp;&nbsp;|&nbsp;&nbsp;手机版</p>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style scope>
    /*置顶*/
    .app-copy{
        background:#F3F7FF;
    }
    .app-copy .top{
        height:36px;
        background:#3285FF;
        margin-bottom:25px;
    }
    .app-copy .top .right{
        margin-left:310px;
    }
    .app-copy .top .right span{
        display:inline-block;
        color:#fff;
        margin-top:5px;
    }
    .app-copy .top .right div{
        width:0;
        height:0;
        display:inline-block;
        margin-left:10px;
        border:5px solid transparent;
        border-bottom:5px solid #fff;
    }
    /*版权*/
    .app-copy .copyRight{
        text-align:center;
    }
    .app-copy .copyRight p{
        margin-bottom:0;
    }
    .app-copy .copyRight p+p{
        padding-bottom:35px;
    }
</style>