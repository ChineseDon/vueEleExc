<template>
  <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name" v-text="seller.name"></span>
          </div>
          <div class="description" v-text="seller.description + '/' + seller.deliveryTime"></div>
          <div class="support" v-if="seller.supports">
            <span class="icon" :class="classMap[seller.supports[0].type]"></span>
            <span class="text" v-text="seller.supports[0].description"></span>
          </div>
        </div>
        <div class="support-count" v-if="seller.supports">
          <span class="count" v-text="seller.supports.length + '个'"></span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper">
        <span class="bulletin-title">
        </span><span class="bulletin-text" v-text="seller.bulletin"></span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
@import url('../../common/stylus/iconsell.css');
.header
  position relative
  color #ffffff
  background rgba(7,17,27,.5)
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px
    .content
      display inline-block
      margin-left 16px
      font-size 14px
      .title
        margin 2px 0 8px 0
        .brand
          display inline-block
          width 30px
          height 18px
          bg-img('image/brand')
          vertical-align top
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight 800
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        font-size 0
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-img('image/decrease_1')
          &.discount
            bg-img('image/discount_1')
          &.guarantee
            bg-img('image/guarantee_1')
          &.invoice
            bg-img('image/invoice_1')
          &.special
            bg-img('image/special_1')
        .text
          line-height 12px
          font-size 12px
    .support-count
      position absolute
      right 12px
      bottom 14px
      height 24px
      line-height 24px
      padding 0 8px
      border-radius 14px
      background-color rgba(0,0,0,.2)
      text-align center
      .count
        font-size 10px
        vertical-align top
      .icon-keyboard_arrow_right
        line-height 24px
        margin-left 2px
        font-size 10px
  .bulletin-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 22px 0 12px
    background-color rgba(7,17,27,.2)
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    .bulletin-title
      display inline-block
      width 22px
      height 12px
      vertical-align top
      margin-top 8px
      bg-img('image/bulletin')
      background-size 22px 12px
      background-repeat no-repeat
    .bulletin-text
      margin 0 4px
      font-size 10px
      font-weight 200
      vertical-align top
    .icon-keyboard_arrow_right
        position absolute
        right 12px
        top 8px
        font-size 10px
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)
    img
      width 100%
      height 100%
</style>
