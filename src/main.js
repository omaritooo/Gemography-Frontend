import Vue from 'vue'
import App from './App.vue'
import './index.css'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, { /* options */ });
Vue.use(require('vue-moment'));


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
