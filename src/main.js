import Vue from 'vue'
import App from './App'
import store from './store'  // Same as './store/index.js'
import router from './routes' // Same as './routes/index.js'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})