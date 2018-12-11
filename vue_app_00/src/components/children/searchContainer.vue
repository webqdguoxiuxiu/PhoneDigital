<template>
    <div class="app-search">
        <div class="content">
            <div class="jump">
                <router-link to="/home">
                    <span class="mui-icon mui-icon-arrowleft">
                   </span>
                </router-link>
            </div>
            <div class="box">
                <div class="d1"></div>
                <div class="d2"><input type="text" placeholder="请输入关键字..."></div>
                <div class="d3"><img src="../../img/search.png"></div>
            </div>
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
     /*搜索关键字*/
     .app-container{
         padding-top:0;
     }
     .app-search{
         background:#fff;
         height:610px;
     }
     .app-search .content{
         border-bottom:1px solid #ccc;
         padding:10px;
     }
     .app-search .content>div{
         float:left;
     }
     .app-search .content:after{
         display:block;
         content:"";
         clear:both;
     }
     
     .app-search .content .jump a{
         color:#A9ABAD;
         width:23px;     
         margin-top:2px;
         display:block;   
     }
     .app-search .content .jump a span{
         font-size:37px;
     }
     .app-search .content .box{
         width:85%;
         height:40px;
         position:relative;
         margin-left:20px;
     }
     .app-search .content .box .d1{
         width:40px;
         height:40px;
         border:1px solid #ccc;
         position:absolute;
         left:0;
         top:0;
         border-top-left-radius:50%;
         border-bottom-left-radius:50%;
         border-right:none;
     }
     .app-search .content .box .d2{
          border:1px solid #ccc;
         width:88%;
         height:40px;
         line-height:40px;
         position:absolute;
         left:20px;
         top:0;
         font-size:15px;
         color:#919191;
         padding-left:20px;
         border-left:none;
         border-right:none;
     }
     .app-search .content .box .d2 input{
         border:none;
         background:transparent;
         font-size:13px;
     }
     .app-search .content .box .d3{
          border:1px solid #ccc;
         position:absolute;
         right:0;
         top:0;
         padding:5px 0;
         width:40px;
         height:40px;
         border-top-right-radius:50%;
         border-bottom-right-radius:50%;
         border-left:none;
     }
    .app-search .box .d3 img{
         width:30px;
         height:30px;
     }
</style>