import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

function CBR_XML_Daily_Ru(rates) {
  if (!rates) return false 
  vm.$emit('getrates', rates);
}
CBR_XML_Daily_Ru()
var url = "https://www.cbr-xml-daily.ru/daily_jsonp.js"; // Это адрес скрипта, который мы загружаем.

//А этим кодом мы динамически вставляем JavaSCript.
var script = document.createElement('script');
script.setAttribute('src', url);
//  import "@/components/jsonp.js"