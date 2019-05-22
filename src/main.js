import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios

import 'mint-ui/lib/style.css'
import '../public/css/mui.css'

import { Header, Field, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Field.name, Field)
Vue.component(Button.name, Button)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')