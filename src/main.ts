import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
import AppHeader from './components/common/AppHeader.vue'

Vue.config.productionTip = false
Vue.component('AppHeader', AppHeader)

new Vue({
  render: h => h(App)
}).$mount('#app')
