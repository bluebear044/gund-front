import { createRouter, createWebHistory } from 'vue-router'
import GundList from './views/GundList.vue'
import Sample from './views/Sample.vue'

export default () => createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GundList',
      component: GundList,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample,
    },
  ]
})