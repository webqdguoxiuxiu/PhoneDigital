import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import homeContainer from "./components/tabbar/homeContainer.vue"
import searchContainer from "./components/children/searchContainer.vue"
import newsinfo from "./components/children/newsinfo.vue"
import message from "./components/children/message.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/home/search',component:searchContainer},
    {path:'/home/newsinfo',component:newsinfo},
    {path:'/home/message',component:message}
  ]
})
