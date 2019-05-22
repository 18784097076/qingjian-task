import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TaskIndex from './views/TaskIndex'
import MyTask from './views/MyTask'
import UserCenter from './views/UserCenter'
import Login from './views/Login'
import Register from './views/Register'
import ForgetPwd from './views/ForgetPwd'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        { path: '/forgetPwd', component: ForgetPwd },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '/', redirect: '/taskIndex' },
                { path: '/taskIndex', component: TaskIndex },
                { path: '/myTask', component: MyTask },
                { path: '/userCenter', component: UserCenter }
            ]
        }
    ]
})