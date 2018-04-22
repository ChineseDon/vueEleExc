<template>
  <div class="shopcar">
      <div class="content">
          <div class="content-left">
            <div class="log-wrapper">
                <div class="logo" :class="{'hightlight': totalCount>0}">
                    <i class="icon-shopping_cart" :class="{'hightlight': totalCount>0}"></i>
                </div>
                <div class="num" v-show="totalCount>0" v-text="totalCount"></div>
            </div>
            <div class="price" v-text="'￥' + totalPrice + '元'" :class="{'hightlight': totalPrice>0}"></div>
            <div class="desc">
              另需配送费￥{{deliveryPrice}}元
            </div>
          </div>
          <div class="content-right">
            <div class="pay" :class="payClass" v-text="payDesc"></div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'shopCar',
  props: {
    selectFood: {
      type: Array,
      default () {
        return [{
          price: 10,
          count: 1
        }]
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice () {
      let total = 0
      this.selectFood.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount () {
      let count = 0
      this.selectFood.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc () {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice
        return `还差￥${diff}元起送`
      } else {
        return '去结算'
      }
    },
    payClass () {
      if (this.totalPrice < this.minPrice) {
        return 'not-enough'
      } else {
        return 'enough'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopcar
  position fixed
  left 0
  bottom 0
  z-index 50
  width 100%
  height 48px
  .content
    display flex
    background #141d27
    .content-left
      flex 1
      font-size 0
      .log-wrapper
        position relative
        top -10px
        display inline-block
        width 56px
        height 56px
        box-sizing border-box
        margin 0 12px
        padding 6px
        vertical-align top
        border-radius 50%
        background #141d27
        .logo
          width 100%
          height 100%
          border-radius 50%
          background #2b343c
          text-align center
          &.hightlight
            background-color rgb(0,160,220)
          .icon-shopping_cart
            line-height 44px
            font-size 24px
            color #80858a
            &.hightlight
              color #fff
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          text-align center
          border-radius 16px
          font-size 9px
          font-weight 700
          color #ffffff
          background-color rgb(240,20,20)
          box-shadow 0 4px 8px 0 rgba(0,0,0,.4)
      .price
        display inline-block
        line-height 24px
        vertical-align top
        margin-top 12px
        padding-right 12px
        font-size 16px
        font-weight 700
        color rgba(255,255,255,.4)
        box-sizing border-box
        border-right 1px solid rgba(255,255,255,.1)
        &.hightlight
          color #ffffff
      .desc
        display inline-block
        vertical-align top
        margin 12px 0 0 12px
        line-height 24px
        font-size 10px
        font-weight 700
        color rgba(255,255,255,.4)
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        height 48px
        line-height 48px
        text-align center
        font-size 12px
        font-weight 700
        color rgba(255,255,255,.4)
        &.not-enough
          background-color #2b333b
        &.enough
          background-color #00b43c
          color #ffffff
</style>
