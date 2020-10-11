
require('./bootstrap');


window.Vue = require('vue');

//v Form
import { Form, HasError, AlertError } from 'vform'

window.Form=Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)




//V routes
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from "./routes/routes";

const router=new VueRouter({
    routes,
    mode:'history',
})
//sweet alert
import Swal from 'sweetalert2'
window.Swal=Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast=Toast;

Vue.component('home', require('./components/backend/home.vue').default);



const app = new Vue({
    el: '#content',
    router
});
