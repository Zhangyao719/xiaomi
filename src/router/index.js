import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Index from '../pages/Index.vue'
import Product from '../pages/Product.vue'
import Detail from '../pages/Detail.vue'
import Order from '../pages/Order.vue'
import OrderList from '../pages/OrderList.vue'
import OrderPay from '../pages/OrderPay.vue'
import OrderConfirm from '../pages/OrderConfirm.vue'
import AliPay from '../pages/AliPay.vue'
import Login from '../pages/Login.vue'
import Cart from '../pages/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index
      },
      {
        path: 'product/:id',
        name: 'product',
        component: Product
      },
      {
        path: 'detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: 'pay',
        name: 'pay',
        component: OrderPay
      },
      {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm
      },
      {
        path: 'alipay',
        name: 'alipay',
        component: AliPay
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }

]

const router = new VueRouter({
  routes
})

export default router
