import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios



/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
Vue.prototype.axios.interceptors.request.use(config => {
    // iView.LoadingBar.start();
    // iView.Spin.show();
    const token = localStorage.getItem('token');
    token && (config.headers.token = token);
    return config;
}, error => Promise.error(error));

import 'mint-ui/lib/style.css'
import '../public/css/mui.css'
import 'vant/lib/index.css';

import { Header, Button, Loadmore } from 'mint-ui'
Vue.component(Header.name, Header)

Vue.component(Button.name, Button)
Vue.component(Loadmore.name, Loadmore);


import { Tab, Tabs, Dialog, Cell, CellGroup, Field, DatetimePicker, Popup } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Popup);







Vue.filter('dateTime', (val) => {
    var date = new Date(val);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var f = date.getMinutes();
    var s = date.getSeconds();
    h < 10 && (h = '0' + h);
    f < 10 && (f = '0' + f);
    s < 10 && (s = '0' + s);
    return `${y}-${m}-${d} ${h}:${f}:${s}`
})

Vue.filter('status', (val) => {
    if (val == 3) {
        return '失败'
    } else if (val == 2) {
        return '成功'
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')