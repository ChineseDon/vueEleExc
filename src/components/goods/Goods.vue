<template>
<div class="goods">
  <div class="menu-wrapper" ref="menuWrapper">
    <ul>
      <li v-for="(item, index) in goods" :key="index" class="menu-item" :class="{'current': currentIndex === index}" @click="selectMenu(index, $event)">
        <span class="text">
          <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
          <span v-text="item.name"></span>
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper" ref="foodsWrapper">
    <ul>
      <li v-for="(item,indexs) in goods" :key="indexs" class="food-list food-list-hook">
        <h1 class="title" v-text="item.name"></h1>
        <ul>
          <li v-for="(food, index) in item.foods" :key="index" class="food-item">
            <div class="icon">
              <img :src="food.icon" alt="">
            </div>
            <div class="content">
              <h2 class="name" v-text="food.name"></h2>
              <p class="desc" v-text="food.description"></p>
              <div class="extra">
                <span class="count" v-text="'月售' + food.sellCount + '份'"></span><!--
             --><span v-text="'好评率' + food.rating + '%'"></span>
              </div>
              <div class="price">
                <span class="now" v-text="'￥' + food.price"></span><!--
             --><span class="old" v-show="food.oldPrice" v-text="'￥' + food.oldPrice"></span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <shopcar :delevery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcar>
</div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import BScroll from 'better-scroll'
import shopcar from 'components/shopcar/ShopCar'
export default {
  name: 'Goods',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      listHeigth: [],
      scrollY: 0
    }
  },
  components: {
    axios,
    shopcar,
    BScroll
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeigth.length; i++) {
        let height1 = this.listHeigth[i]
        let height2 = this.listHeigth[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      console.log(foodList[index])
      this.foodScroll.scrollToElement(el, 300)
    },
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })

      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeigth.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeigth.push(height)
      }
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    axios({
      method: 'get',
      url: './static/json/data.json',
      responseType: 'stream'
    }).then((response) => {
      this.goods = response.data.goods
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin"
.goods
  position absolute
  top 174px
  bottom 46px
  display flex
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      width 56px
      height 54px
      line-height 14px
      font-size 0
      padding 0 12px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        width 16px
        height 16px
        vertical-align top
        margin-right 2px
        background-size 16px 16px
        background-repeat no-repeat
        &.decrease
          bg-img('image/decrease_3')
        &.discount
          bg-img('image/discount_3')
        &.guarantee
          bg-img('image/guarantee_3')
        &.invoice
          bg-img('image/invoice_3')
        &.special
          bg-img('image/special_3')
      .text
        display table-cell
        width 56px
        vertical-align middle
        font-size 12px
        border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147,153,159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7,17,27,0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
        img
          width 57px
          height 57px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7,17,27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147,153,159)
        .desc
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240,20,20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147,153,159)
</style>
