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
      </div>
      <div class="bulletin-wrapper">

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
.header
  color #ffffff
  background-color #000000
  .content-wrapper
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
</style>
