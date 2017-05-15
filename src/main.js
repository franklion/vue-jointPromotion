import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './Index.vue'
import Page2 from './Page2.vue'

Vue.use( VueRouter );

const locationPath = '/iprefer/labs/frank/d/';
const routes       = [
    {
        path :  locationPath + '/index',
        component : Index
    },
    {
        path : locationPath + '/p2',
        component : Page2
    },
    {
        path : '*',
        redirect : locationPath +'/index'
    }

];

const router = new VueRouter( {
    mode : 'history',
    routes
} );

const app = new Vue( {
    router
} ).$mount( '#app' );