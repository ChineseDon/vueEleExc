<template>
<div class="carControl">
  <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0"></div>
  <div class="cart-count"  v-show="food.count > 0" v-text="food.count"></div>
  <div class="cart-add icon-add_circle"></div>
</div>
</template>

<script>
export default {
  name: 'CarControl',
  props: {
    food: {
      type: Object
    }
  },
  created () {
    console.log(this.food)
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.carControl
  font-size 0
  .cart-decrease, .cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0,160,220)
  .cart-count
    display inline-block
  .cart-add
    display inline-block
</style>
