import Vue from 'vue'
import App from './App.vue'
// 引入ele
import {
  Button, Radio, Container, Main, Header, Aside, Menu,
  Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownItem,
  DropdownMenu, Row, Card, Col, Table, TableColumn, Breadcrumb, BreadcrumbItem,
  Tag,Input,Select,Switch,DatePicker,Option,Dialog,FormItem,Form,Pagination,MessageBox,Message
} from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'

//引入router
import router from '../src/router'

// 引入样式
import './assets/less/index.less'

// 引入vuex
import store from './store'

// 引入axios
import http from 'axios'

// 引入mock
import './api/mock'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Aside)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Pagination)

router.beforeEach((to,from,next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login') {
      alert('你已经登录,将自动返回首页')
      next({name: 'home'})
  }else{
    next()
  }
  
})

Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message


Vue.prototype.$http = http




new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
