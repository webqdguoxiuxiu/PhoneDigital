<template>
   <div class="app-home">
        <!--网页顶部-->
        <mt-header fixed title="网站模板-手机数码"></mt-header>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item of list1" :key="item.id"><img :src="item.img_url"></mt-swipe-item>
        </mt-swipe>
        <!--搜索关键字-->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="search">
                      <router-link to="/home/search">
                        <div class="d1"></div>
                        <div class="d2">请输入关键字...</div>
                        <div class="d3"><img src="../../img/search.png"></div>
                      </router-link>
                    </div>
				</div>
			</div>
		</div>
        <!--新闻资讯-->
        <div class="mui-card title">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <span>新闻资讯</span>
				</div>
			</div>
		</div>
        <div class="mui-card show">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="box">
                        <div class="d1"><img src="../../img/news2.jpg"></div>
                        <div class="d4">
                            <div class="d2"><img src="../../img/news1.jpg"></div>
                            <div class="d3"><img src="../../img/news3.jpg"></div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
        <div class="mui-card details">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <ul>
                       <li v-for="item of list2" :key="item.id">
                          <router-link :to="'/home/newsinfo?lid='+item.lid">
                            <span class="p1">{{item.title}}</span><span>&gt;</span>
                            <span class="p2">{{item.time}}</span>
                          </router-link>
                       </li>                       
                    </ul>
				</div>
			</div>
		</div>
        <!--数码资讯-->
        <div class="mui-card digital">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <span>数码资讯</span>
                    <div class="d1"><a href="#"><img src="../../img/digital.png"></a></div>
                    <div class="d2" v-for="item of list2" :key="item.id">
                        <router-link :to="'/home/newsinfo?lid='+item.lid">{{item.title}}<p>{{item.time}}</p></router-link>
                    </div>
				</div>
			</div>
		</div>
        <!--手机测评-->
        <div class="mui-card exam">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <span>手机测评</span>
                    <div class="box" v-for="item of list3" :key="item.id">
                        <router-link to="'/home/newsinfo?lid='+item.lid">
                            <div class="d1">
                                <p class="p1">{{item.time}}</p>
                                <p class="p2">{{item.title}}</p>
                            </div>
                            <div class="d2"></div>
                            <div class="d3"><img :src="item.src"></div>         
                        </router-link>
                    </div>
                    <div class="line"></div>
				</div>
			</div>
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
            return {
                list1:[],
                list2:[],
                list3:[]
            }
        },
        created(){
            this.axios.get("http://127.0.0.1:3000/banner").then(res=>{
                 //console.log(res);
                 this.list1=res.data;
            });
            this.axios.get("http://127.0.0.1:3000/newslist").then(res=>{
                 //console.log(res);
                 this.list2=res.data;
            });
             this.axios.get("http://127.0.0.1:3000/phone").then(res=>{
                 //console.log(res);
                 this.list3=res.data;
            });
        },
         //注册版权子组件
        components:{
            "copy-box":copy
        }
    }
</script>
<style scope>
    /*轮播图*/
    .app-home{
        padding-top:40px;
        background:#E5EFFF;
    }
    .app-home .mint-swipe{
        height:180px;
    } 
    .app-home .mint-swipe img{
         width:100%;
         height:180px;
    }
    /*搜索关键字*/
    .app-home .mui-card{
        background:#F0F6FF;
    }
    .app-home .mui-card .mui-card-content-inner .search{
         height:40px;
         width:100%;
         cursor:pointer;
         position:relative;
    }
    .app-home .mui-card .mui-card-content-inner .search .d1{
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
    .app-home .mui-card .mui-card-content-inner .search .d2{
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
    .app-home .mui-card .mui-card-content-inner .search .d3{
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
    .app-home .mui-card .mui-card-content-inner .search img{
        width:30px;
        height:30px;
    }
    /*新闻资讯*/
    .app-home .title{
        color:#26A2FF;
    }
    .app-home .title,.app-home .show{
        margin-bottom:-8px;
    }
    .app-home .mui-card .mui-card-content-inner .box::after{
        display:block;
        content:"";
        clear:both;
    }
     .app-home .mui-card .mui-card-content-inner .box>div{
        float:left;
     }
     .app-home .mui-card .mui-card-content-inner .box .d1{
        width:55%;
        height:150px;
        margin-right:3px;
     }
     .app-home .mui-card .mui-card-content-inner .box .d1 img{
        width:100%;
        height:150px;
     }
      .app-home .mui-card .mui-card-content-inner .box .d4{
        width:44%;
        height:150px;
     }
     .app-home .mui-card .mui-card-content-inner .box .d2 img,.d3 img{
        width:100%;
        height:72px;
     }
     .app-home .details ul li{
         margin:20px;
     }
     .app-home .details ul li a{
          color:black;
     }
     .app-home .details ul li .p1{
         width:95%;
         margin-bottom:10px;
         display:inline-block;
     }
    .app-home .details ul li .p2{
         display:block;
         
    }
    /*数码资讯*/
    .app-home .digital span,.app-home .exam span{
        display:block;
        margin-bottom:20px;
        color:#26A2FF;
    }
    .app-home .digital .mui-card-content-inner:after{
        display:block;
        content:"";
        clear:both;
    } 
    .app-home .digital .d1{
        background:black;
        margin-bottom:10px;
    }
    .app-home .digital .d1 img{
        width:100%;
    }
    .app-home .digital .d2{
        padding-top:15px;
        display:inline-block;
        width:50%;
        height:90px;
        float:left;
        border-bottom:1px solid #ccc;
        padding-left:10px;
    }
    .app-home .digital .d2:nth-child(odd){
        border-right:1px solid #ccc;
    }
    .app-home .digital .d2 a{
        color:black;
    }
    /*手机测评*/
    .app-home .exam .box{
        height:90px;
        position:relative;
    }
    .app-home .exam .box+.box{
        margin-top:20px;
    }
    .app-home .exam .mui-card-content-inner .box .d1{
        width:40%;
        height:90px;
        position:absolute;
        left:0;
        top:0;
    }
    .app-home .exam .box .p1{
        margin-bottom:0;
        color:#000;
    }
    .app-home .exam .box .p2{
        font-size:12px;
    }
    .app-home .exam .mui-card-content-inner .box .d2{
        width:10px;
        height:10px;
        background:#c5c5c5;
        border-radius:50%;
        margin:auto 20px;
        position:absolute;
        left:135px;
        top:40px;
    }
  .app-home .exam .mui-card-content-inner .box .d3{
        display:inline-block;
        width:40%;
        height:85px;
        position:absolute;
        right:0;
        top:0;
  }
  .app-home .exam .mui-card-content-inner .box .d3 img{
     width:100%;
     height:90px;
  }
  .app-home .exam .mui-card-content-inner .line{
      position:absolute;
      width:1px;
      height:90%;
      background:#ccc;
      left:175px;
      bottom:0;
  }
  
</style>