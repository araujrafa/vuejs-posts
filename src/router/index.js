import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Editor from '../containers/Editor.vue';
import Posts from '../containers/Posts.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor 
    }
  ]
});
