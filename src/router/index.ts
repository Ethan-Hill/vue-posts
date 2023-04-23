import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'

import Post from '@/views/Post.vue'
import Posts from '@/views/Posts.vue'

import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts',
      component: Posts,
      name: 'Posts'
    },
    {
      path: '/posts/:id',
      component: Post
    },
    { path: '/:pathMatch(.*)', component: NotFound }
  ]
})

export default router
