<template>
  <div id="app">
    <v-Header :seller="seller"></v-Header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{name: 'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{name: 'seller'}">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from 'components/header/Header'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      seller: {},
      count: 0
    }
  },
  created () {
    // this.$http.get('./static/json/data.json').then((data) => {
    //   this.saller = data.body.saller
    //   console.log(this.seller)
    // })
    // GET request for remote image
    axios({
      method: 'get',
      url: './static/json/data.json',
      responseType: 'stream'
    }).then((response) => {
      this.seller = response.data.seller
    })
  },
  components: {
    'v-Header': header
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import 'common/stylus/mixin'
.tab
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,0.1))
.tab-item
  flex: 1
  text-align center
& > a
  display block
  font-size 14px
  color rgb(77,85,93)
&.active
  color rgb(240,20,20)
</style>
