import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import AboutJeanette from './views/AboutJeanette.vue';
import Priorities from './views/Priorities.vue';
import Media from './views/Media.vue';
import UserStories from './views/UserStories.vue';

import Vote from './views/Vote.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/jeanette', name: 'jeanette', component: AboutJeanette},
    {path: '/priorities', name: 'priorities', component: Priorities},
    {path: '/media', name: 'media', component: Media},
    {path: '/constituents', name: 'user-stories', component: UserStories},
    {path: '/vote', name: 'vote', component: Vote},

  ]
});
