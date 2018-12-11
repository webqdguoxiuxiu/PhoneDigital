<template>
 <div class="app-container">
    <router-view></router-view>
    <!--网页尾部-->
    <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item mui-active">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>		
            <a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-location"></span>
				<span class="mui-tab-label">在线地图</span>
			</a>
            <router-link to="/home/message" class="mui-tab-item">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">在线留言</span>
			</router-link>	
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-qq"></span>
				<span class="mui-tab-label">QQ客服</span>
			</a>
		</nav>
 </div>
</template>
<style scope>    
     /*网页尾部*/
     .app-container .mint-header{
         height:50px;
         font-size:16px;
     }
     .app-container .mui-bar-tab{
        background:#26A2FF;
        height:55px;
     }
     .app-container .mui-bar-tab span{
         color:#fff;
     }
     .app-container .mui-bar-tab span+span{
         margin-top:5px;
     }
    .app-container{
        padding-top:40px;
        padding-bottom:50px;
        overflow-x:hidden;
    }
    .mui-bar-tab .mui-tab-item-tao.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-tao {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
        font-size:11px;
        display:block;
        overflow:hidden;
        text-overflow:ellipsis;

    }
</style>
