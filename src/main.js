import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ServiveBar from './components/ServiceBar.vue'
import './styles/reset.less'
import './styles/base.less'
import './styles/config.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.component('service-bar', ServiveBar)

// 将axios挂载到vue实例上
Vue.use(VueAxios, axios)

// 配置基准地址(根据请求方式的不同)
axios.defaults.baseURL = '/api'

// 配置超时时间
axios.defaults.timeout = 8000

// 配置响应拦截器
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    // console.log(res)
    return res.data
  } else if (res.status === 10) { // 登录失败 返回登录页
    window.location.href('/#/login') // 此处没有this.$router.push
  } else {
    alert(res.msg)
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
