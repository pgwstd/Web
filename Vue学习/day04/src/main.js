import Vue from 'vue'
import App from './App.vue'
import Plugins from "@/plugins";

Vue.config.productionTip = false

Vue.use(Plugins)
new Vue({
  render: h => h(App),
}).$mount('#app')
