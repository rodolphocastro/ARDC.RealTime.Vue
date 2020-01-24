import Vue from 'vue'
import App from './App.vue'
import VueSignalR from "./plugins/vue-signalR";

Vue.config.productionTip = false
Vue.use(VueSignalR);

new Vue({
  render: h => h(App),
}).$mount('#app')
