<template>
<div class="goods">
  <div class="menu-wrapper">
    <ul>
      <li v-for="(item, index) in goods" :key="index" class="menu-item">
        <span class="text">
          <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
          <span v-text="item.name"></span>
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper"></div>
</div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'Goods',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  components: {
    axios
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    axios({
      method: 'get',
      url: './static/json/data.json',
      responseType: 'stream'
    }).then((response) => {
      this.goods = response.data.goods
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
    .item-menu
      display table
      width 56px
      height 54px
      line-height 14px
      font-size 0
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
        display tabel-ceil
        wdith 56px
        vertical-align middle
        font-size 12px
        border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex 1
</style>
