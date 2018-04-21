import Vue from 'vue'
import Router from 'vue-router'
// import axios from 'axios'
import Resource from 'vue-resource'
import Goods from 'components/goods/Goods'
import Seller from 'components/seller/Seller'
import Ratings from 'components/ratings/Ratings'

Vue.use(Router)
Vue.use(Resource)
// Vue.use(axios)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
