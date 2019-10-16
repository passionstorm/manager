import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

import Card from './components/widgets/Card'
import Editor from './components/widgets/Editor'

Vue.component('Card', Card)
Vue.component('Editor', Editor)
export const bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
