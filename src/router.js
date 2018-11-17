import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


// bootstrap-vue.js stuff
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},

  ]
});
