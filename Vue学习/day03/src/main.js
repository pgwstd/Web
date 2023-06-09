import Vue from 'vue'
import App from './App.vue'
import {Pop} from "@/mixin";

Vue.config.productionTip = false
Vue.mixin(Pop)

new Vue({
  render: h => h(App),
}).$mount('#app')
