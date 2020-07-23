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
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
export default {
  name: 'index',
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../styles/mixin.less';
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
  }
</style>
