import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/routes/Home'
import About from '~/routes/About'

Vue.use(VueRouter)

export default new VueRouter({
    // page
    routes: [
        {
            path: '/', // https://google.com/
            component: Home
        },
        {
            path: '/about', // https://google.com/about
            component: About
        }
    ]
})