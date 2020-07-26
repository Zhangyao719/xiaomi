<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <!-- 列表的嵌套 -->
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="'/#/product/'+sub.id">
                      <img :src="sub?sub.img:'/imgs/item-box-1.png'">
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插件版</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="/#/+item.id"><img :src="item.img"></a>
          </swiper-slide>
          <!-- 分页器 小圆点 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product'+item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35" >
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="{ 'new-pro' : j % 2 === 0 }">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart()">{{ item.price }}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      :btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="$router.push('/cart')"
      @cancel="showModal = false">
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './../components/Modal'
export default {
  name: 'index',
  components: { Modal },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        loop: true, // 无限循环
        effect: 'cube', // 特效类型
        cubeEffect: { // 特效参数
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 开启点击切换
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        }
      ],
      // 2维数组 显示侧边栏的每一栏具体内容（4*6）
      menuList: [
        [
          {
            id: 30,
            img: 'imgs/item-box-1.png',
            name: '小米cc9'
          },
          {
            id: 31,
            img: 'imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: 'imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: 'imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
      showModal: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      const res = await this.axios.get('/products', {
        params: {
          actegoryId: 100012,
          pageSize: 14
        }
      })
      // console.log(res)
      res.list = res.list.slice(6, 14)
      this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
    },
    addCart () {
      this.showModal = true
      // try {
      //   this.axios.post('/carts', {
      //     prodyctId: id,
      //     selected: true
      //   })
      // } catch {}
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/mixin.less';
  @import '../styles/config.less';
  .index {
    .swiper-box {
      position: relative;
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        // background-color: #55585a7a;
        background: rgba(67,68,71, .7);
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            > a {
              position: relative;
              display: block;
              font-size: 16px;
              color: #fff;
              padding-left: 30px;
              &:after {
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: '';
                .mixin_bgImg(10px,15px,'/imgs/icon-arrow.png');
              }
              &:hover {
                background-color: #FF6600;
                + .children {
                  display: block;
                }
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              background-color: #fff;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid #e5e5e5;
              &:hover {
                display: block;
              }
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                padding-left: 30px;

                li {
                  flex: 1;
                  height: 75px;
                  line-height: 75px;
                  a {
                    font-size: 14px;
                    color: #333;
                    &:hover {
                      color: #FF6600;
                    }
                  }
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        flex: 1;
        img {
          width: 296px;
          height: 167px;
        }
      }
    }
    .banner {
      margin-top: 50px;
      img {
      width: 100%;
      }
    }
    .product-box {
      background-color: #f5f5f5;
      padding: 30px 0 50px;
      margin-top: 30px;
      h2 {
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            display: flex;
            width: 986px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              width: 236px;
              height: 302px;
              background-color: #fff;
              text-align: center;
              span {
                display: block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                font-size: 14px;
                color: #fff;
                // 给当前标签添加类名
                &.new-pro {
                  background-color: #7ecf68;
                }
                &.kill-pro{
                  background-color: #e82626;
                }
              }
              .item-img {
                img {
                  width: 160px;
                  height: 160px;
                  object-fit: cover;
                }
              }
              .item-info {
                h3 {
                  font-size: 14px;
                  color: #333;
                  line-height: 14px;
                  font-weight: 700;
                }
                p {
                  color: #999999;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  color: #f20a0a;
                  font-size: 14px;
                  font-weight: 700;
                  cursor: pointer;
                  &:after {
                    content: '';
                    .mixin_bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
