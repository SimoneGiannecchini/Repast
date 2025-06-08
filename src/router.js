import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList   from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import Cart          from './components/Cart.vue'

const routes = [
  { path: '/',               name: 'Home',          component: ProductList },
  { path: '/product/:nome',  name: 'ProductDetail', component: ProductDetail, props: true },
  { path: '/cart',           name: 'Cart',          component: Cart }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
