<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="top-user">
          <a href="javascript:;" v-if="username" >{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="$router.push('/login')">登录</a>
          <a href="javascript:;" v-else @click="logout">退出</a>
          <a href="/#/order/list" v-if="username" >我的订单</a>
          <a href="javascript:;" class="my-cart" @click="$router.push('/cart')"><span class="icon-cart"></span>购物车 ({{ cartCount }})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo"><a href="/#/index"></a></div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="'/#/product/'+item.id"  target="_blank">
                    <div class="pro-img"><img v-lazy="item.mainImage" :alt="item.subtitle"></div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu"><span>RedMi红米</span></div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'/imgs/nav-img/nav-3-4.jpg'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'../imgs/nav-img/nav-3-5.jpg'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
                <li class="product">
                  <a href="javascript:;"  target="_blank">
                    <div class="pro-img"><img v-lazy="'../imgs/nav-img/nav-3-6.png'" alt=""></div>
                    <div class="pro-name">123</div>
                    <div class="pro-price">1234</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      phoneList: []
    }
  },
  created () {
    this.getProductList()
  },
  filters: {
    currency (val) {
      if (!val) return '0.00'
      return '￥' + val.toFixed(2) + '元'
    }
  },
  methods: {
    async getProductList () {
      const res = await this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 6
        }
      })
      this.phoneList = res.list
      // console.log(this.phoneList)
    },
    logout () {
    }
  },
  computed: {
    // username () {
    //   return this.$store.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // }
    ...mapState(['username', 'cartCount'])
  }
}
</script>

<style lang="less" scoped>
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color:#B0B0B0;
    .container {
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        color: #B0B0B0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart{
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url('../../public/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;
          margin-right: 8px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 112px;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('../../public/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
            transition: margin .3s;
          }
          &:after {
            content: ' ';
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url('../../public/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin .3s;
          }
        }
      }
      .header-menu {
        width:643px;
        padding-left:209px;
        .item-menu {
          display: inline-block;
          color:#333333;
          font-weight:bold;
          font-size:16px;
          line-height:112px;
          margin-right:20px;
          span {
            cursor: pointer
          }
          &:hover {
            color: #FF6600;
            .children{
              height:220px;
              opacity:1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #E5E5E5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition:all .5s;
            background-color: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                  height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333333;
              }
              .pro-price{
                color:#FF6600;
              }
               &:before{
                content:' ';
                position:absolute;
                top:28px;
                right:0;
                border-left:1px solid #d7d7d7;
                height:100px;
                width:1px;
              }
              &:last-child:before{
                display:none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            width: 264px;
            height: 48px;
            padding-left: 14px;
            border: none;
            border-right: 1px solid #e0e0e0;
          }
          a {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url('../../public/imgs/icon-search.png') no-repeat center;
            background-size: contain;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
</style>
