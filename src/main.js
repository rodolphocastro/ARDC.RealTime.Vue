import Vue from 'vue'
import App from './App.vue'
import VueSignalR from "./plugins/vue-signalR";
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'mini.css/dist/mini-nord.min.css';

Vue.config.productionTip = false
Vue.use(VueSignalR);

new Vue({
  render: h => h(App),
}).$mount('#app')
